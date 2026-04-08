const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '..', 'public', 'assets');

const DIRS = [
  ROOT,
  path.join(ROOT, 'cities'),
  path.join(ROOT, 'blog'),
];

const LOGO_MAX_WIDTH = 96;
const DEFAULT_MAX_WIDTH = 1200;
const WEBP_QUALITY = 80;

function isLogo(filename) {
  const lower = filename.toLowerCase();
  return lower.startsWith('logo');
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.svg') return null;
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return null;

  const filename = path.basename(filePath);
  const dir = path.dirname(filePath);
  const nameNoExt = path.basename(filePath, ext);
  const outPath = path.join(dir, nameNoExt + '.webp');

  const maxWidth = isLogo(filename) ? LOGO_MAX_WIDTH : DEFAULT_MAX_WIDTH;

  const originalSize = fs.statSync(filePath).size;
  const metadata = await sharp(filePath).metadata();

  let pipeline = sharp(filePath);

  if (metadata.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  pipeline = pipeline.webp({ quality: WEBP_QUALITY });

  await pipeline.toFile(outPath);

  const newSize = fs.statSync(outPath).size;

  const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

  console.log(
    `${path.relative(ROOT, filePath)} -> ${path.relative(ROOT, outPath)}  ` +
    `${(originalSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB  ` +
    `(${savings}% saved, resized to max ${maxWidth}px)`
  );

  return { filePath, outPath, originalSize, newSize };
}

async function main() {
  console.log('Optimizing images in public/assets/...\n');

  const results = [];

  for (const dir of DIRS) {
    if (!fs.existsSync(dir)) {
      console.log(`Skipping ${dir} (does not exist)`);
      continue;
    }

    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (!fs.statSync(fullPath).isFile()) continue;

      const result = await optimizeFile(fullPath);
      if (result) results.push(result);
    }
  }

  console.log(`\nDone. Optimized ${results.length} images.`);

  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0);
  const totalNew = results.reduce((sum, r) => sum + r.newSize, 0);
  const totalSavings = (((totalOriginal - totalNew) / totalOriginal) * 100).toFixed(1);

  console.log(
    `Total: ${(totalOriginal / 1024).toFixed(1)} KB -> ${(totalNew / 1024).toFixed(1)} KB (${totalSavings}% saved)`
  );
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
