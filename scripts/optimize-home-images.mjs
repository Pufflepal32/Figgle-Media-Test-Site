// Fetches the Pexels source images used on HomePage once, caches them locally,
// and emits self-hosted AVIF + WebP variants at 480w and 800w. HomePage.tsx
// references the output paths directly via <picture> with srcset.
//
// Mirrors the optimize-hero.mjs pattern — pexels images hit a CF-fronted CDN
// that sets _cfuvid cookies, which fails the Lighthouse best-practices audit.
// Self-hosting also saves ~411 KiB and removes 3rd-party connection overhead.

import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CACHE_DIR = join(__dirname, '.cache');
const OUT_DIR = join(ROOT, 'public', 'assets', 'home');

// Matches the IDs used by PX() in src/pages/HomePage.tsx. The slug is the
// filename root the component reads from — keep these in sync.
const IMAGES = [
  { id: 16129877, slug: 'service-web-design' },     // Laptop with web design work
  { id: 3861957,  slug: 'service-seo' },            // Analytics graph on laptop
  { id: 18530501, slug: 'service-google-ads' },     // Google on smartphone
  { id: 7109314,  slug: 'service-local-service-ads' }, // Laptop with documents
  { id: 4966809,  slug: 'industry-roofing' },       // Construction worker at site
  { id: 32497161, slug: 'industry-hvac' },          // HVAC technician
  { id: 257736,   slug: 'industry-electrician' },   // Electrician at switchboard
];

const WIDTHS = [480, 800];
const FORMATS = [
  { ext: 'avif', quality: 50, effort: 6 },
  { ext: 'webp', quality: 72, effort: 6 },
];

async function ensureSource({ id }) {
  mkdirSync(CACHE_DIR, { recursive: true });
  const cachePath = join(CACHE_DIR, `pexels-${id}.jpg`);
  if (existsSync(cachePath)) return cachePath;
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;
  console.log(`[home-img] downloading ${id}...`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`fetch ${id} failed: ${res.status}`);
  writeFileSync(cachePath, Buffer.from(await res.arrayBuffer()));
  return cachePath;
}

async function build() {
  mkdirSync(OUT_DIR, { recursive: true });
  for (const img of IMAGES) {
    const source = await ensureSource(img);
    for (const w of WIDTHS) {
      for (const f of FORMATS) {
        const outFile = join(OUT_DIR, `${img.slug}-${w}.${f.ext}`);
        let pipeline = sharp(source).resize({ width: w, withoutEnlargement: true });
        pipeline = f.ext === 'avif'
          ? pipeline.avif({ quality: f.quality, effort: f.effort })
          : pipeline.webp({ quality: f.quality, effort: f.effort });
        const buf = await pipeline.toBuffer();
        writeFileSync(outFile, buf);
        console.log(`[home-img] ${img.slug}-${w}.${f.ext}: ${(buf.length / 1024).toFixed(1)} KB`);
      }
    }
  }
  const files = readdirSync(OUT_DIR);
  console.log(`[home-img] ${files.length} files written to public/assets/home/`);
}

build().catch((err) => {
  console.error('[home-img] fatal:', err);
  process.exit(1);
});
