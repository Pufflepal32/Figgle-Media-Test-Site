// Post-prerender: for every HTML under dist/, replace the external stylesheet
// <link> with an inline <style> containing the full CSS bundle. Also strip any
// <noscript> that holds a fallback stylesheet link.
//
// Why full-inline (not critical-only): beasties' critical extraction left the
// remaining CSS on an async-swap <link>. When that CSS arrived mid-load it
// repainted the hero H1 and bumped simulated LCP by several seconds. Paying
// ~20 KB gzipped in every HTML payload is cheaper than the LCP repaint on
// throttled networks.
//
// Cost: the "Reduce unused CSS" audit will flag ~15 KB of unused rules per
// page. That's a known trade — perf score penalty is small versus the LCP win.

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const ASSETS = join(DIST, 'assets');

const cssFile = readdirSync(ASSETS).find((f) => f.endsWith('.css'));
if (!cssFile) {
  console.error('[inline-css] no CSS file found in dist/assets');
  process.exit(1);
}
const css = readFileSync(join(ASSETS, cssFile), 'utf8');

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (st.isFile() && full.endsWith('.html')) out.push(full);
  }
  return out;
}

const htmlFiles = walk(DIST);
const linkRe = new RegExp(
  `<link[^>]*href="/assets/${cssFile.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`,
  'g',
);
const noscriptRe = new RegExp(
  `<noscript>\\s*<link[^>]*href="/assets/${cssFile.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>\\s*</noscript>`,
  'g',
);

// Puppeteer runs Partytown during prerender, which rewrites our GTM
// `<script type="text/partytown">` to `text/partytown-x` (Partytown's "already
// processed" marker) and injects data-ptid/data-pttab attrs. If we ship that,
// real visitors' Partytown runtime sees the -x marker and skips the script —
// and GTM never boots. So undo all of it here.
const partytownXRe = /type="text\/partytown-x"/g;
const partytownAttrRe = / data-pt(id|tab)="[^"]*"/g;

let replaced = 0;
for (const file of htmlFiles) {
  const src = readFileSync(file, 'utf8');
  const hasCss = linkRe.test(src);
  const hasPt = partytownXRe.test(src) || partytownAttrRe.test(src);
  if (!hasCss && !hasPt) continue;
  let out = src.replace(noscriptRe, '').replace(linkRe, `<style>${css}</style>`);
  out = out.replace(partytownXRe, 'type="text/partytown"').replace(partytownAttrRe, '');
  writeFileSync(file, out);
  replaced++;
}

console.log(
  `[inline-css] inlined ${cssFile} (${(css.length / 1024).toFixed(1)} KB) + reset partytown markers in ${replaced} pages`,
);
