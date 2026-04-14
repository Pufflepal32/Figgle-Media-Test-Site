// Generates public/sitemap.xml + public/robots.txt from a single source of truth.
// Run automatically via the `prebuild` npm script.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC_DIR = join(ROOT, 'public');
const SITE = 'https://figglemedia.com';

// Static routes — keep in sync with src/App.tsx
// [path, changefreq, priority]
const staticRoutes = [
  ['/', 'weekly', '1.0'],
  ['/services', 'monthly', '0.9'],
  ['/services/contractor-web-design', 'monthly', '0.8'],
  ['/services/seo-for-contractors', 'monthly', '0.8'],
  ['/services/google-ads-management', 'monthly', '0.8'],
  ['/services/local-service-ads', 'monthly', '0.8'],
  ['/pricing', 'monthly', '0.9'],
  ['/our-process', 'monthly', '0.7'],
  ['/about', 'monthly', '0.6'],
  ['/blog', 'weekly', '0.8'],
  ['/free-website-plan', 'monthly', '0.9'],
  ['/raleigh-contractor-web-design', 'monthly', '0.8'],
  ['/charlotte-contractor-web-design', 'monthly', '0.8'],
  ['/durham-contractor-web-design', 'monthly', '0.8'],
  ['/greensboro-contractor-web-design', 'monthly', '0.8'],
  ['/winston-salem-contractor-web-design', 'monthly', '0.8'],
  ['/fayetteville-contractor-web-design', 'monthly', '0.8'],
  ['/wilmington-contractor-web-design', 'monthly', '0.8'],
  ['/asheville-contractor-web-design', 'monthly', '0.8'],

  // SEO Layer 1: Industry Authority Pages
  ['/contractor-marketing-agency', 'monthly', '0.9'],
  ['/roofing-web-design', 'monthly', '0.9'],
  ['/seo-for-roofers', 'monthly', '0.9'],
  ['/google-ads-for-roofers', 'monthly', '0.9'],
  ['/roofing-lead-generation', 'monthly', '0.9'],

  // SEO Layer 2: Location Hub Pages
  ['/raleigh-web-design', 'monthly', '0.9'],

  // SEO Layer 3: Service + Location Pages (Raleigh)
  ['/raleigh-roofing-web-design', 'monthly', '0.8'],
  ['/raleigh-seo-for-roofers', 'monthly', '0.8'],
  ['/raleigh-google-ads-roofers', 'monthly', '0.8'],
  ['/raleigh-roofing-lead-generation', 'monthly', '0.8'],
];

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
