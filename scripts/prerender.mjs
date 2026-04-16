// Post-build prerendering: launches the built site, visits each route with
// Puppeteer, and saves the fully-rendered HTML so search engines get real content
// instead of an empty <div id="root"></div>.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import puppeteer from 'puppeteer';
import { staticRoutes } from './routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const PORT = 4173;
const ORIGIN = `http://localhost:${PORT}`;
const CONCURRENCY = 4;

// Also prerender blog routes by reading the built sitemap
function getBlogRoutes() {
  const sitemapPath = join(DIST, 'sitemap.xml');
  if (!existsSync(sitemapPath)) return [];
  const xml = readFileSync(sitemapPath, 'utf8');
  const matches = [...xml.matchAll(/<loc>https:\/\/figglemedia\.com(\/blog\/[^<]+)<\/loc>/g)];
  return matches.map((m) => m[1]);
}

async function startPreview() {
  const isWin = process.platform === 'win32';
  const cmd = isWin ? 'npx.cmd' : 'npx';
  const server = spawn(cmd, ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: ROOT,
    stdio: 'pipe',
  });

  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Preview server timed out')), 15000);
    server.stdout.on('data', (data) => {
      if (data.toString().includes('Local:')) {
        clearTimeout(timeout);
        resolve();
      }
    });
    server.stderr.on('data', (data) => {
      const msg = data.toString();
      if (msg.includes('Error')) console.error('[preview]', msg);
    });
    server.on('error', (err) => { clearTimeout(timeout); reject(err); });
  });

  return server;
}

async function renderRoute(browser, route) {
  const page = await browser.newPage();
  try {
    await page.goto(`${ORIGIN}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
    await page.waitForSelector('#root', { timeout: 5000 });
    const html = await page.content();

    // Write to dist/{route}/index.html
    const outDir = route === '/' ? DIST : join(DIST, ...route.split('/').filter(Boolean));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html);
    return true;
  } catch (err) {
    console.error(`  [FAIL] ${route}: ${err.message}`);
    return false;
  } finally {
    await page.close();
  }
}

async function main() {
  console.log('[prerender] Starting preview server...');
  const server = await startPreview();

  try {
    const allRoutes = [
      ...staticRoutes.map(([path]) => path),
      ...getBlogRoutes(),
    ];

    console.log(`[prerender] Rendering ${allRoutes.length} routes (concurrency: ${CONCURRENCY})...`);
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

    let done = 0;
    let failed = 0;
    for (let i = 0; i < allRoutes.length; i += CONCURRENCY) {
      const batch = allRoutes.slice(i, i + CONCURRENCY);
      const results = await Promise.all(batch.map((r) => renderRoute(browser, r)));
      done += results.filter(Boolean).length;
      failed += results.filter((r) => !r).length;
      process.stdout.write(`\r[prerender] ${done}/${allRoutes.length} done`);
    }

    await browser.close();
    console.log(`\n[prerender] Complete: ${done} rendered, ${failed} failed`);
  } finally {
    server.kill();
  }
}

main().catch((err) => {
  console.error('[prerender] Fatal:', err);
  process.exit(1);
});
