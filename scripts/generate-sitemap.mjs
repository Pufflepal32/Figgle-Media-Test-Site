// Generates public/sitemap.xml + public/robots.txt from a single source of truth.
// Run automatically via the `prebuild` npm script.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC_DIR = join(ROOT, 'public');
const SITE = 'https://figglemedia.com';

import { staticRoutes } from './routes.mjs';

// Parse src/data/blogPosts.ts for completed posts (slug + modifiedDate)
// Walks each post object by tracking which `slug:` belongs to which `isComplete:`.
function readBlogPosts() {
  const src = readFileSync(join(ROOT, 'src/data/blogPosts.ts'), 'utf8');
  const slugRe = /slug:\s*['"]([^'"]+)['"]/g;
  const modRe = /modifiedDate:\s*['"]([^'"]+)['"]/g;
  const completeRe = /isComplete:\s*(true|false)/g;

  const slugs = [...src.matchAll(slugRe)].map((m) => ({ slug: m[1], idx: m.index }));
  const mods = [...src.matchAll(modRe)].map((m) => ({ mod: m[1], idx: m.index }));
  const completes = [...src.matchAll(completeRe)].map((m) => ({
    complete: m[1] === 'true',
    idx: m.index,
  }));

  // Pair them up by order of appearance — each post has exactly one of each
  return slugs
    .map((s, i) => ({
      slug: s.slug,
      modified: mods[i]?.mod,
      isComplete: completes[i]?.complete ?? false,
    }))
    .filter((p) => p.isComplete);
}

function urlEntry(loc, changefreq, priority, lastmod) {
  return [
    '  <url>',
    `    <loc>${SITE}${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod.slice(0, 10)}</lastmod>` : null,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n');
}

function buildSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const blog = readBlogPosts();
  const entries = [
    ...staticRoutes.map(([p, cf, pr]) => urlEntry(p, cf, pr, today)),
    ...blog.map((b) => urlEntry(`/blog/${b.slug}`, 'monthly', '0.7', b.modified)),
  ];
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');
}

function buildRobots() {
  return [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${SITE}/sitemap.xml`,
    '',
  ].join('\n');
}

mkdirSync(PUBLIC_DIR, { recursive: true });
writeFileSync(join(PUBLIC_DIR, 'sitemap.xml'), buildSitemap());
writeFileSync(join(PUBLIC_DIR, 'robots.txt'), buildRobots());

const blogCount = readBlogPosts().length;
console.log(
  `[sitemap] wrote ${staticRoutes.length} static + ${blogCount} blog URLs to public/sitemap.xml`,
);
console.log('[sitemap] wrote public/robots.txt');
