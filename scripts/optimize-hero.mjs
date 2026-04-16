// Fetches the Pexels hero source once, caches it locally, and generates
// self-hosted AVIF/WebP variants at 768w and 1280w for <picture> use in Hero.tsx.
// The image sits at opacity-30 under a navy gradient, so aggressive compression
// is invisible on-screen — we optimize for LCP, not fidelity.

import { existsSync, mkdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CACHE_DIR = join(__dirname, '.cache');
const OUT_DIR = join(ROOT, 'public', 'assets');
const SOURCE_CACHE = join(CACHE_DIR, 'hero-source.jpg');
const SOURCE_URL =
  'https://images.pexels.com/photos/4311990/pexels-photo-4311990.jpeg?auto=compress&cs=tinysrgb&w=2000';

const VARIANTS = [
  { width: 1280, format: 'avif', quality: 40, file: 'hero-bg-1280.avif' },
  { width: 1280, format: 'webp', quality: 62, file: 'hero-bg-1280.webp' },
  { width: 768, format: 'avif', quality: 40, file: 'hero-bg-768.avif' },
  { width: 768, format: 'webp', quality: 62, file: 'hero-bg-768.webp' },
];

async function ensureSource() {
  if (existsSync(SOURCE_CACHE)) return;
  mkdirSync(CACHE_DIR, { recursive: true });
  console.log(`[hero] downloading source from Pexels...`);
  const res = await fetch(SOURCE_URL);
  if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(SOURCE_CACHE, buf);
  console.log(`[hero] cached source: ${(buf.length / 1024).toFixed(0)} KB`);
}

async function build() {
  await ensureSource();
  mkdirSync(OUT_DIR, { recursive: true });

  for (const v of VARIANTS) {
    const outPath = join(OUT_DIR, v.file);
    let pipeline = sharp(SOURCE_CACHE).resize({ width: v.width, withoutEnlargement: true });
    if (v.format === 'avif') {
      pipeline = pipeline.avif({ quality: v.quality, effort: 6 });
    } else {
      pipeline = pipeline.webp({ quality: v.quality, effort: 6 });
    }
    const buf = await pipeline.toBuffer();
    writeFileSync(outPath, buf);
    console.log(`[hero] ${v.file}: ${(buf.length / 1024).toFixed(1)} KB`);
  }
}

build().catch((err) => {
  console.error('[hero] fatal:', err);
  process.exit(1);
});
