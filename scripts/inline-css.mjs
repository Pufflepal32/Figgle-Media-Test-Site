// Inlines the built CSS bundle into dist/index.html so it's no longer
// render-blocking. The CSS is small enough (~8 KB gzipped) that the
// HTML payload increase is worth eliminating the extra round-trip.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const ASSETS = join(DIST, 'assets');
const HTML_PATH = join(DIST, 'index.html');

const cssFile = readdirSync(ASSETS).find((f) => f.endsWith('.css'));
if (!cssFile) {
  console.error('[inline-css] no CSS file found in dist/assets');
  process.exit(1);
}

const css = readFileSync(join(ASSETS, cssFile), 'utf8');
let html = readFileSync(HTML_PATH, 'utf8');

const linkPattern = new RegExp(
  `<link rel="stylesheet"[^>]*href="/assets/${cssFile}"[^>]*>`,
);
if (!linkPattern.test(html)) {
  console.warn('[inline-css] CSS link tag not found in index.html — skipping');
  process.exit(0);
}

html = html.replace(linkPattern, `<style>${css}</style>`);
writeFileSync(HTML_PATH, html);

console.log(`[inline-css] inlined ${cssFile} (${(css.length / 1024).toFixed(1)} KB) into index.html`);
