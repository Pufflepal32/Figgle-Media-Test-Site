// Single source of truth for all site routes.
// Used by generate-sitemap.mjs and prerender.mjs.

// [path, changefreq, priority]
export const staticRoutes = [
  ['/', 'weekly', '1.0'],
  ['/services', 'monthly', '0.9'],
  ['/services/contractor-web-design', 'monthly', '0.8'],
  ['/services/seo-for-contractors', 'monthly', '0.8'],
  ['/services/google-ads-management', 'monthly', '0.8'],
  ['/services/local-service-ads', 'monthly', '0.8'],
  ['/pricing', 'monthly', '0.9'],
  ['/our-process', 'monthly', '0.7'],
  ['/about', 'monthly', '0.6'],
  ['/team', 'monthly', '0.6'],
  ['/our-work', 'monthly', '0.8'],
  ['/blog', 'weekly', '0.8'],
  ['/free-website-plan', 'monthly', '0.9'],

  // City Location Hubs (L2)
  ['/raleigh-web-design', 'monthly', '0.9'],
  ['/charlotte-web-design', 'monthly', '0.9'],
  ['/durham-web-design', 'monthly', '0.9'],
  ['/greensboro-web-design', 'monthly', '0.9'],
  ['/winston-salem-web-design', 'monthly', '0.9'],
  ['/fayetteville-web-design', 'monthly', '0.9'],
  ['/wilmington-web-design', 'monthly', '0.9'],
  ['/asheville-web-design', 'monthly', '0.9'],

  // Industry Silos (L1)
  ['/roofing', 'monthly', '0.95'],
  ['/roofing/web-design', 'monthly', '0.9'],
  ['/roofing/seo', 'monthly', '0.9'],
  ['/roofing/google-ads', 'monthly', '0.9'],
  ['/roofing/lead-generation', 'monthly', '0.9'],
  ['/hvac', 'monthly', '0.95'],
  ['/hvac/web-design', 'monthly', '0.9'],
  ['/hvac/seo', 'monthly', '0.9'],
  ['/hvac/google-ads', 'monthly', '0.9'],
  ['/hvac/lead-generation', 'monthly', '0.9'],
  ['/electrician', 'monthly', '0.95'],
  ['/electrician/web-design', 'monthly', '0.9'],
  ['/electrician/seo', 'monthly', '0.9'],
  ['/electrician/google-ads', 'monthly', '0.9'],
  ['/electrician/lead-generation', 'monthly', '0.9'],
  ['/contractor-marketing-agency', 'monthly', '0.8'],

  // Service + Location Pages — Raleigh (L3)
  ['/raleigh-roofing-web-design', 'monthly', '0.8'],
  ['/raleigh-seo-for-roofers', 'monthly', '0.8'],
  ['/raleigh-google-ads-roofers', 'monthly', '0.8'],
  ['/raleigh-roofing-lead-generation', 'monthly', '0.8'],
  ['/raleigh-hvac-web-design', 'monthly', '0.8'],
  ['/raleigh-seo-for-hvac', 'monthly', '0.8'],
  ['/raleigh-google-ads-hvac', 'monthly', '0.8'],
  ['/raleigh-hvac-lead-generation', 'monthly', '0.8'],

  // Service + Location Pages — Charlotte (L3)
  ['/charlotte-roofing-web-design', 'monthly', '0.8'],
  ['/charlotte-seo-for-roofers', 'monthly', '0.8'],
  ['/charlotte-google-ads-roofers', 'monthly', '0.8'],
  ['/charlotte-roofing-lead-generation', 'monthly', '0.8'],

  // Service + Location Pages — Durham (L3)
  ['/durham-roofing-web-design', 'monthly', '0.8'],
  ['/durham-seo-for-roofers', 'monthly', '0.8'],
  ['/durham-google-ads-roofers', 'monthly', '0.8'],
  ['/durham-roofing-lead-generation', 'monthly', '0.8'],
  ['/durham-hvac-web-design', 'monthly', '0.8'],
  ['/durham-seo-for-hvac', 'monthly', '0.8'],
  ['/durham-google-ads-hvac', 'monthly', '0.8'],
  ['/durham-hvac-lead-generation', 'monthly', '0.8'],

  // Service + Location Pages — Greensboro (L3)
  ['/greensboro-roofing-web-design', 'monthly', '0.8'],
  ['/greensboro-seo-for-roofers', 'monthly', '0.8'],
  ['/greensboro-google-ads-roofers', 'monthly', '0.8'],
  ['/greensboro-roofing-lead-generation', 'monthly', '0.8'],
  ['/greensboro-hvac-web-design', 'monthly', '0.8'],
  ['/greensboro-seo-for-hvac', 'monthly', '0.8'],
  ['/greensboro-google-ads-hvac', 'monthly', '0.8'],
  ['/greensboro-hvac-lead-generation', 'monthly', '0.8'],

  // Service + Location Pages — Winston-Salem (L3)
  ['/winston-salem-roofing-web-design', 'monthly', '0.8'],
  ['/winston-salem-seo-for-roofers', 'monthly', '0.8'],
  ['/winston-salem-google-ads-roofers', 'monthly', '0.8'],
  ['/winston-salem-roofing-lead-generation', 'monthly', '0.8'],
  ['/winston-salem-hvac-web-design', 'monthly', '0.8'],
  ['/winston-salem-seo-for-hvac', 'monthly', '0.8'],
  ['/winston-salem-google-ads-hvac', 'monthly', '0.8'],
  ['/winston-salem-hvac-lead-generation', 'monthly', '0.8'],

  // Service + Location Pages — Fayetteville (L3)
  ['/fayetteville-roofing-web-design', 'monthly', '0.8'],
  ['/fayetteville-seo-for-roofers', 'monthly', '0.8'],
  ['/fayetteville-google-ads-roofers', 'monthly', '0.8'],
  ['/fayetteville-roofing-lead-generation', 'monthly', '0.8'],
  ['/fayetteville-hvac-web-design', 'monthly', '0.8'],
  ['/fayetteville-seo-for-hvac', 'monthly', '0.8'],
  ['/fayetteville-google-ads-hvac', 'monthly', '0.8'],
  ['/fayetteville-hvac-lead-generation', 'monthly', '0.8'],

  // Service + Location Pages — Wilmington (L3)
  ['/wilmington-roofing-web-design', 'monthly', '0.8'],
  ['/wilmington-seo-for-roofers', 'monthly', '0.8'],
  ['/wilmington-google-ads-roofers', 'monthly', '0.8'],
  ['/wilmington-roofing-lead-generation', 'monthly', '0.8'],
  ['/wilmington-hvac-web-design', 'monthly', '0.8'],
  ['/wilmington-seo-for-hvac', 'monthly', '0.8'],
  ['/wilmington-google-ads-hvac', 'monthly', '0.8'],
  ['/wilmington-hvac-lead-generation', 'monthly', '0.8'],

  // Service + Location Pages — Asheville (L3)
  ['/asheville-roofing-web-design', 'monthly', '0.8'],
  ['/asheville-seo-for-roofers', 'monthly', '0.8'],
  ['/asheville-google-ads-roofers', 'monthly', '0.8'],
  ['/asheville-roofing-lead-generation', 'monthly', '0.8'],
  ['/asheville-hvac-web-design', 'monthly', '0.8'],
  ['/asheville-seo-for-hvac', 'monthly', '0.8'],
  ['/asheville-google-ads-hvac', 'monthly', '0.8'],
  ['/asheville-hvac-lead-generation', 'monthly', '0.8'],
];
