// Post-build step that rewrites dist/index.html to include:
//   1. <link rel=preload as=font> for the 3 critical latin-subset woff2 files
//   2. Inline <style> with @font-face rules pointing at those same files, so
//      the browser can match the preloaded file to a font-family BEFORE the
//      external CSS bundle parses. Without this, the hero body text repaints
//      on font-swap and LCP updates to the swap moment (was ~6s).
//
// The preview server used by prerender.mjs serves the modified dist/index.html,
// so Puppeteer will capture these tags into every prerendered route.

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const ASSETS = join(DIST, 'assets');
const HTML_PATH = join(DIST, 'index.html');

// unicode-range for basic Latin, matches what @fontsource's latin subset covers.
const LATIN_RANGE = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD';

const CRITICAL_FONTS = [
  { family: 'Inter',   weight: 400, match: /^inter-latin-400-normal-[^.]+\.woff2$/ },
  { family: 'Manrope', weight: 700, match: /^manrope-latin-700-normal-[^.]+\.woff2$/ },
  { family: 'Manrope', weight: 800, match: /^manrope-latin-800-normal-[^.]+\.woff2$/ },
];

const files = readdirSync(ASSETS);
const picks = CRITICAL_FONTS.map((cf) => ({ ...cf, file: files.find((f) => cf.match.test(f)) }));

if (picks.some((p) => !p.file)) {
  console.warn(
    `[inject-head] expected ${CRITICAL_FONTS.length} critical font files, some missing; skipping`,
  );
  process.exit(0);
}

const preloadTags = picks
  .map(
    (p) =>
      `    <link rel="preload" href="/assets/${p.file}" as="font" type="font/woff2" crossorigin>`,
  )
  .join('\n');

const faceRules = picks
  .map(
    (p) =>
      `@font-face{font-family:'${p.family}';font-style:normal;font-weight:${p.weight};font-display:swap;src:url(/assets/${p.file}) format('woff2');unicode-range:${LATIN_RANGE}}`,
  )
  .join('');

let html = readFileSync(HTML_PATH, 'utf8');

// Remove any previous inject-head block so re-runs are idempotent.
html = html.replace(/\s*<!-- inject-head:fonts -->[\s\S]*?<!-- \/inject-head:fonts -->/g, '');

const block = `\n    <!-- inject-head:fonts -->\n${preloadTags}\n    <style>${faceRules}</style>\n    <!-- /inject-head:fonts -->`;

// Insert just before the stylesheet link so fonts load in parallel with CSS.
const styleRe = /<link rel="stylesheet"[^>]*>/;
if (!styleRe.test(html)) {
  console.warn('[inject-head] stylesheet <link> not found — skipping');
  process.exit(0);
}

html = html.replace(styleRe, (m) => `${block}\n    ${m}`);
writeFileSync(HTML_PATH, html);

console.log(`[inject-head] preloaded + inlined @font-face for ${picks.length} fonts`);
