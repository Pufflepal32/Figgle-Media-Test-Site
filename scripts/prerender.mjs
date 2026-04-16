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
const ORIGIN = `http://127.0.0.1:${PORT}`;
const CONCURRENCY = 2;

// Also prerender blog routes by reading the built sitemap
function getBlogRoutes() {
  const sitemapPath = join(DIST, 'sitemap.xml');
  if (!existsSync(sitemapPath)) return [];
  const xml = readFileSync(sitemapPath, 'utf8');
  const matches = [...xml.matchAll(/<loc>https:\/\/figglemedia\.com(\/blog\/[^<]+)<\/loc>/g)];
  return matches.map((m) => m[1]);
}

async function startPreview() {
  const viteBin = join(ROOT, 'node_modules', 'vite', 'bin', 'vite.js');
  const server = spawn(process.execPath, [viteBin, 'preview', '--port', String(PORT), '--strictPort', '--host', '127.0.0.1'], {
    cwd: ROOT,
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  server.stdout.on('data', (d) => process.stdout.write(`[preview] ${d}`));
  server.stderr.on('data', (d) => process.stderr.write(`[preview] ${d}`));

  let exited = false;
  let exitInfo = null;
  server.on('exit', (code, signal) => {
    exited = true;
    exitInfo = { code, signal };
  });

  const deadline = Date.now() + 60000;
  while (Date.now() < deadline) {
    if (exited) {
      throw new Error(`Preview server exited before becoming ready (code=${exitInfo?.code} signal=${exitInfo?.signal})`);
    }
    try {
      const res = await fetch(`${ORIGIN}/`, { method: 'GET' });
      if (res.ok || res.status === 404) return server;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  server.kill();
  throw new Error('Preview server timed out (60s) waiting for HTTP readiness');
}

async function renderRoute(browser, route) {
  const page = await browser.newPage();
  try {
    await page.goto(`${ORIGIN}${route}`, { waitUntil: 'networkidle0', timeout: 45000 });
    await page.waitForSelector('#root', { timeout: 15000 });
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
