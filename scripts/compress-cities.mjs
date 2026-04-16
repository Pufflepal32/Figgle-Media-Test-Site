// One-shot: resize/recompress city hero images to reduce payload.
// Lighthouse image-delivery flagged ~50KB waste on asheville.webp alone.
import sharp from 'sharp';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'public/assets/cities';
const MAX_WIDTH = 1000;
const QUALITY = 72;

const files = readdirSync(DIR).filter((f) => f.endsWith('.webp'));
for (const f of files) {
  const p = join(DIR, f);
  const before = statSync(p).size;
  const input = readFileSync(p);
  const buf = await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toBuffer();
  if (buf.length < before) {
    writeFileSync(p, buf);
    console.log(`${f}: ${(before / 1024).toFixed(0)}KB → ${(buf.length / 1024).toFixed(0)}KB`);
  } else {
    console.log(`${f}: skipped (would grow)`);
  }
}
