// One-shot: summarize unlighthouse output — per-page scores + top failing audits.
// Usage: node scripts/lh-summary.mjs <scanDir>
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const base = process.argv[2];
if (!base) { console.error('usage: node scripts/lh-summary.mjs <scanDir>'); process.exit(1); }

const reportsDir = join(base, 'reports');
const entries = readdirSync(reportsDir).filter((n) => {
  try { return statSync(join(reportsDir, n)).isDirectory() && n !== '__screenshot-thumbnails__'; }
  catch { return false; }
});

const failCounts = new Map();
const rows = [];

for (const name of entries) {
  const file = join(reportsDir, name, 'lighthouse.json');
  let data;
  try { data = JSON.parse(readFileSync(file, 'utf8')); } catch { continue; }
  const cats = data.categories || {};
  const s = (k) => Math.round(((cats[k]?.score ?? 0) * 100));
  rows.push({
    page: name,
    perf: s('performance'),
    a11y: s('accessibility'),
    bp: s('best-practices'),
    seo: s('seo'),
  });
  const audits = data.audits || {};
  for (const [id, a] of Object.entries(audits)) {
    if (a.score !== null && a.score !== undefined && a.score < 1 && a.scoreDisplayMode !== 'informative' && a.scoreDisplayMode !== 'manual' && a.scoreDisplayMode !== 'notApplicable') {
      failCounts.set(id, (failCounts.get(id) || 0) + 1);
    }
  }
}

rows.sort((a, b) => (a.perf + a.a11y + a.bp + a.seo) - (b.perf + b.a11y + b.bp + b.seo));
console.log('\n== Per-page scores (worst first) ==');
console.log('page'.padEnd(48), 'perf', 'a11y', 'bp', 'seo');
for (const r of rows) {
  console.log(r.page.padEnd(48), String(r.perf).padStart(4), String(r.a11y).padStart(4), String(r.bp).padStart(3), String(r.seo).padStart(3));
}

console.log('\n== Most-common failing audits (id × pages_failing) ==');
const top = [...failCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 25);
for (const [id, n] of top) console.log(String(n).padStart(3), id);
