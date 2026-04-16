// Pull specific details for key failing audits on one or more pages.
// Usage: node scripts/lh-detail.mjs <scanDir> <auditId> [pageName]
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const [base, auditId, onlyPage] = process.argv.slice(2);
if (!base || !auditId) { console.error('usage: node scripts/lh-detail.mjs <scanDir> <auditId> [pageName]'); process.exit(1); }

const reportsDir = join(base, 'reports');
const pages = readdirSync(reportsDir).filter((n) => {
  try { return statSync(join(reportsDir, n)).isDirectory() && n !== '__screenshot-thumbnails__'; }
  catch { return false; }
});

for (const p of pages) {
  if (onlyPage && p !== onlyPage) continue;
  let data;
  try { data = JSON.parse(readFileSync(join(reportsDir, p, 'lighthouse.json'), 'utf8')); } catch { continue; }
  const a = data.audits?.[auditId];
  if (!a) continue;
  if (a.score === 1) continue;
  console.log(`\n=== ${p} :: ${auditId} (score=${a.score}, display=${a.displayValue ?? ''}) ===`);
  const items = a.details?.items || [];
  for (const it of items.slice(0, 8)) {
    // print compact
    const line = Object.entries(it).filter(([k, v]) => typeof v !== 'object' || v === null).map(([k, v]) => `${k}=${String(v).slice(0, 120)}`).join(' | ');
    console.log(' -', line);
    if (it.node) console.log('   node:', (it.node.snippet || it.node.selector || '').slice(0, 200));
    if (it.url) console.log('   url:', it.url);
  }
}
