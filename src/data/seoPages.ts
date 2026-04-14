// Single source of truth for the 3-layer SEO page system.
// Templates read from this file; the sitemap generator does too.

// ─── TYPES ───────────────────────────────────────────────────────

export interface IndustryPage {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  intro: string;
  sections: { heading: string; content: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  /** Slugs of city hubs that have service+location children for this industry */
  cityLinks: { city: string; slug: string }[];
}

export interface LocationHub {
  slug: string;
  city: string;
  state: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  intro: string;
  stats: { value: string; label: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  /** Service+location children that appear in the "Services We Offer" grid */
  serviceLinks: { label: string; slug: string; description: string }[];
  /** Neighboring city hub slugs for cross-linking */
  nearbyHubs: { city: string; slug: string }[];
  cityImage: string;
  cityImageAlt: string;
}

export interface ServiceLocationPage {
  slug: string;
  city: string;
  service: string;
  industry: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  intro: string;
  sections: { heading: string; content: string }[];
  localData: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  /** Internal link targets */
  industryParentSlug: string;
  locationParentSlug: string;
  /** Sibling service+location pages in same city */
  siblingLinks: { label: string; slug: string }[];
  /** Same service in nearby cities */
  nearbyCityLinks: { city: string; slug: string }[];
}

// ─── LAYER 1: INDUSTRY AUTHORITY PAGES ───────────────────────────

export const industryPages: Record<string, IndustryPage> = {
  'contractor-marketing-agency': {
    slug: 'contractor-marketing-agency',
    title: 'Contractor Marketing Agency | Figgle Media',
    metaDescription:
      'Full-service marketing agency built exclusively for contractors. Web design, SEO, Google Ads, and lead generation that turns searches into booked jobs.',
    h1: 'The Marketing Agency Built for Contractors',
    subtitle: 'Web Design · SEO · Google Ads · Lead Generation',
    intro:
      'Most marketing agencies treat contractors like an afterthought. We made them our entire business. Every strategy, every design decision, every keyword we target is built around how construction customers search, compare, and hire.',
    sections: [
      {
        heading: 'Why Contractor-Specific Marketing Wins',
        content:
          'General agencies spread their expertise across restaurants, dentists, and SaaS companies. We invest 100% of our research, tooling, and strategy into the construction industry. That means we already know which keywords convert, which ad copy gets clicks, and which website layouts turn visitors into phone calls — before we write a single line of code for your business.',
      },
      {
        heading: 'Full-Service, Not Piecemeal',
        content:
          'Your website, your Google ranking, your paid ads, and your lead funnel all need to work together. We build them as one integrated system — not four disconnected vendor relationships. When a homeowner searches "roofer near me," we make sure your website loads fast, ranks first, and converts that visitor into a booked estimate.',
      },
      {
        heading: 'Built on Real Contractor Data',
        content:
          'We track what actually drives leads for construction businesses: which page layouts get the most form fills, which headlines make people call, which Google Ads copy lowers cost-per-lead. Every recommendation we make is backed by data from real contractor campaigns — not generic marketing theory.',
      },
    ],
    benefits: [
      'Websites designed to convert construction leads',
      'Local SEO that ranks you in the map pack',
      'Google Ads managed by contractor industry specialists',
      'Lead tracking so you know exactly what\'s working',
      '90-day performance guarantee',
    ],
    faqs: [
      {
        q: 'Why should I hire a contractor-specific marketing agency?',
        a: 'General agencies don\'t understand construction buying cycles, seasonal demand, or how homeowners search for contractors. We do — because it\'s all we work on. That specialization means faster results and lower cost-per-lead.',
      },
      {
        q: 'What size contractors do you work with?',
        a: 'We work with solo operators doing $200K/year up to multi-crew companies doing $5M+. Our packages scale to fit your goals and budget.',
      },
      {
        q: 'Do you require long-term contracts?',
        a: 'No. We offer month-to-month after an initial 90-day onboarding period. We keep clients by delivering results, not locking them in.',
      },
    ],
    cityLinks: [
      { city: 'Raleigh', slug: 'raleigh-web-design' },
      { city: 'Charlotte', slug: 'charlotte-web-design' },
      { city: 'Durham', slug: 'durham-web-design' },
      { city: 'Cary', slug: 'cary-web-design' },
      { city: 'Wake Forest', slug: 'wake-forest-web-design' },
    ],
  },

  'roofing-web-design': {
    slug: 'roofing-web-design',
    title: 'Roofing Web Design — Websites That Book Roofing Jobs | Figgle Media',
    metaDescription:
      'Custom web design for roofing companies. Storm-damage lead funnels, before/after galleries, and mobile-first layouts built to convert roofing leads.',
    h1: 'Web Design Built for Roofing Companies',
    subtitle: 'Websites that turn storm-season traffic into booked inspections',
    intro:
      'Roofing websites have a unique job: convert high-intent, often urgent searches into booked inspections — fast. A homeowner with a leak doesn\'t browse five tabs. They call the first roofer whose site loads quickly, looks professional, and has a phone number above the fold. We build that site.',
    sections: [
      {
        heading: 'Storm-Damage Lead Funnels',
        content:
          'After a major storm, roofing searches spike 300-500% in the affected area. Your website needs to capture that surge with dedicated storm-damage landing pages, emergency contact forms, and geo-targeted content that matches what panicked homeowners are actually typing into Google.',
      },
      {
        heading: 'Before/After Galleries That Build Trust',
        content:
          'Roofing is visual. Homeowners want to see the transformation. We build interactive before/after galleries with project details, materials used, and neighborhood-level location data. This content does double duty: it convinces prospects AND generates local SEO signals.',
      },
      {
        heading: 'Mobile-First for Field Referrals',
        content:
          'Over 70% of roofing website traffic comes from mobile. Your site needs to load in under 2 seconds on a phone, with tap-to-call buttons, thumb-friendly forms, and images optimized for cellular connections. We build mobile-first, then scale up to desktop.',
      },
    ],
    benefits: [
      'Emergency/storm-damage lead capture pages',
      'Interactive before/after project galleries',
      'Tap-to-call CTAs optimized for mobile',
      'Review integration (Google, Yelp, Angi)',
      'Financing calculator widgets',
      'Insurance claim assistance content',
    ],
    faqs: [
      {
        q: 'How is a roofing website different from a general contractor site?',
        a: 'Roofing has unique conversion patterns: storm-driven urgency, insurance claim questions, material comparisons (shingle vs. metal vs. tile), and seasonal demand spikes. A general template misses all of these. We build around them.',
      },
      {
        q: 'Can you add a roof cost calculator to my site?',
        a: 'Yes. We build interactive estimators that capture lead information while giving homeowners a ballpark range. These convert 3-4x better than standard contact forms because visitors get immediate value.',
      },
      {
        q: 'Do you include SEO with roofing web design?',
        a: 'Every site we build includes on-page SEO foundations: optimized title tags, schema markup, fast load times, and mobile responsiveness. For ongoing ranking campaigns, we offer dedicated roofing SEO packages.',
      },
    ],
    cityLinks: [
      { city: 'Raleigh', slug: 'raleigh-roofing-web-design' },
      { city: 'Charlotte', slug: 'charlotte-roofing-web-design' },
      { city: 'Durham', slug: 'durham-roofing-web-design' },
      { city: 'Cary', slug: 'cary-roofing-web-design' },
      { city: 'Wake Forest', slug: 'wake-forest-roofing-web-design' },
    ],
  },

  'seo-for-roofers': {
    slug: 'seo-for-roofers',
    title: 'SEO for Roofers — Rank #1 for Roofing Keywords | Figgle Media',
    metaDescription:
      'Specialized SEO for roofing companies. Rank for "roofer near me," dominate the local map pack, and generate organic leads that cost $0 per click.',
    h1: 'SEO That Puts Roofers on Page One',
    subtitle: 'Organic leads that cost zero per click — month after month',
    intro:
      'When a homeowner searches "roofer near me," the top 3 results get 75% of the clicks. Paid ads get the rest. Nobody scrolls to page two. Roofing SEO is the difference between your phone ringing and your competitors\' phones ringing.',
    sections: [
      {
        heading: 'Local Map Pack Domination',
        content:
          'The Google Map Pack (the 3 businesses shown with a map at the top of search results) drives more roofing calls than any other search feature. We optimize your Google Business Profile, build local citations, generate review velocity, and create location-specific content to lock in those top 3 spots.',
      },
      {
        heading: 'Roofing Keyword Strategy',
        content:
          'We target the keywords that actually drive roofing revenue — not vanity terms. "Roof repair near me" has 10x the conversion rate of "types of roofing materials." We build your content calendar around high-intent, geo-modified keywords that attract homeowners ready to hire.',
      },
      {
        heading: 'Review Generation Engine',
        content:
          'Reviews are the #1 ranking factor for local SEO. We implement automated review request flows that trigger after job completion — via text, email, or QR code on your invoice. More 5-star reviews means higher rankings and higher conversion rates.',
      },
    ],
    benefits: [
      'Google Business Profile optimization',
      'Local citation building (100+ directories)',
      'Automated review generation system',
      'Roofing-specific keyword targeting',
      'Monthly ranking reports with revenue attribution',
      'Competitor gap analysis',
    ],
    faqs: [
      {
        q: 'How long does roofing SEO take to show results?',
        a: 'Most roofing companies see measurable ranking improvements in 60-90 days and significant lead generation by month 4-6. Local map pack results often come faster than organic — sometimes within 30 days.',
      },
      {
        q: 'Is SEO better than Google Ads for roofers?',
        a: 'They serve different timelines. Ads generate leads today; SEO builds an asset that generates leads for years at zero per-click cost. The best roofing marketing strategies use both — ads for immediate volume, SEO for long-term dominance.',
      },
      {
        q: 'What if I\'m a new roofing company with no online presence?',
        a: 'We\'ve launched roofing companies from zero to page one in competitive markets. New businesses actually have an advantage — no bad SEO history to clean up, and Google gives fresh listings a temporary visibility boost that we exploit aggressively.',
      },
    ],
    cityLinks: [
      { city: 'Raleigh', slug: 'raleigh-seo-for-roofers' },
      { city: 'Charlotte', slug: 'charlotte-seo-for-roofers' },
      { city: 'Durham', slug: 'durham-seo-for-roofers' },
      { city: 'Cary', slug: 'cary-seo-for-roofers' },
      { city: 'Wake Forest', slug: 'wake-forest-seo-for-roofers' },
    ],
  },

  'google-ads-for-roofers': {
    slug: 'google-ads-for-roofers',
    title: 'Google Ads for Roofers — PPC That Fills Your Pipeline | Figgle Media',
    metaDescription:
      'Google Ads management for roofing companies. Lower your cost-per-lead, dominate Local Service Ads, and fill your pipeline with qualified roofing jobs.',
    h1: 'Google Ads That Fill Roofing Pipelines',
    subtitle: 'Qualified leads this week, not next quarter',
    intro:
      'Google Ads is the fastest way to get your roofing company in front of homeowners who are actively looking for a roofer right now. But most roofers waste 40-60% of their ad spend on irrelevant clicks. We eliminate that waste and route every dollar toward leads that actually book.',
    sections: [
      {
        heading: 'Local Service Ads (Google Guaranteed)',
        content:
          'Local Service Ads appear above regular Google Ads and display your Google Guaranteed badge, reviews, and phone number. You only pay when a homeowner actually calls or messages. We manage your LSA profile, optimize your service categories, and handle dispute resolution to keep your cost-per-lead as low as possible.',
      },
      {
        heading: 'Search Ads With Roofing-Specific Copy',
        content:
          'Generic ad copy like "Need a roofer? Call today!" doesn\'t convert. We write ads that match the exact intent behind each search — storm damage urgency, insurance claim questions, material-specific queries. Different keywords get different ads, different landing pages, and different calls-to-action.',
      },
      {
        heading: 'Negative Keyword Management',
        content:
          'The biggest money drain in roofing PPC: paying for clicks from people searching for "roofing jobs," "DIY roof repair," or "roofing materials wholesale." We maintain an aggressive negative keyword list refined from thousands of roofing campaigns — blocking waste before it costs you a cent.',
      },
    ],
    benefits: [
      'Local Service Ads setup and management',
      'Search campaign build with roofing ad copy',
      'Landing pages matched to each ad group',
      'Call tracking with recorded and scored leads',
      'Negative keyword lists from real roofing data',
      'Weekly budget and bid optimization',
    ],
    faqs: [
      {
        q: 'How much should roofers spend on Google Ads?',
        a: 'Most roofing companies start at $1,500-$3,000/month in ad spend and scale from there. Your ideal budget depends on market size, competition, and average job value. We recommend starting lean, proving ROI, then scaling the budget as leads convert to jobs.',
      },
      {
        q: 'What\'s the average cost-per-lead for roofing ads?',
        a: 'Industry average is $75-$150 per lead. Our clients typically see $40-$80 per lead because we optimize specifically for roofing intent keywords and use aggressive negative keyword management. In less competitive markets, we\'ve driven leads below $30.',
      },
      {
        q: 'Do you manage Local Service Ads for roofers?',
        a: 'Yes. LSAs are often the highest-ROI channel for roofers because you only pay for actual contacts, not clicks. We handle profile optimization, review management, service area targeting, and dispute resolution.',
      },
    ],
    cityLinks: [
      { city: 'Raleigh', slug: 'raleigh-google-ads-roofers' },
      { city: 'Charlotte', slug: 'charlotte-google-ads-roofers' },
      { city: 'Durham', slug: 'durham-google-ads-roofers' },
      { city: 'Cary', slug: 'cary-google-ads-roofers' },
      { city: 'Wake Forest', slug: 'wake-forest-google-ads-roofers' },
    ],
  },

  'roofing-lead-generation': {
    slug: 'roofing-lead-generation',
    title: 'Roofing Lead Generation — More Inspections, More Revenue | Figgle Media',
    metaDescription:
      'End-to-end lead generation for roofing companies. Website, SEO, ads, and follow-up systems that keep your crew booked year-round.',
    h1: 'Lead Generation That Keeps Roofing Crews Booked',
    subtitle: 'More inspections on the calendar — not just more clicks',
    intro:
      'Leads don\'t pay bills — booked jobs do. Roofing lead generation isn\'t just about driving traffic; it\'s about building a system where the right homeowners find you, trust you, and call you before they call anyone else. We build that full-funnel system.',
    sections: [
      {
        heading: 'The Full Roofing Lead Funnel',
        content:
          'Lead generation for roofers has four stages: visibility (they find you), credibility (they trust you), conversion (they contact you), and follow-up (you close them). Most agencies only handle the first stage. We build all four — from the Google search to the signed contract.',
      },
      {
        heading: 'Speed-to-Lead Automation',
        content:
          'The roofing company that responds first wins the job 78% of the time. We implement automated lead notification, text-back sequences, and CRM integration so every inquiry gets a response within minutes — even if you\'re on a roof.',
      },
      {
        heading: 'Seasonal Pipeline Management',
        content:
          'Roofing demand fluctuates with weather and seasons. We build marketing systems that ramp up ad spend before storm season, shift to maintenance keywords in slow months, and keep your pipeline stable year-round instead of feast-or-famine.',
      },
    ],
    benefits: [
      'Multi-channel lead capture (web, ads, social)',
      'Automated speed-to-lead response system',
      'CRM integration with lead scoring',
      'Seasonal campaign calendar',
      'Follow-up sequences for unconverted leads',
      'Monthly lead quality and revenue reporting',
    ],
    faqs: [
      {
        q: 'How many leads can I expect per month?',
        a: 'It depends on your market size and budget. A typical roofing company in a mid-size city starts at 20-40 leads/month and scales to 80-150+. We focus on lead quality over quantity — 20 leads that close at 40% is better than 100 leads that close at 5%.',
      },
      {
        q: 'Do you sell shared leads?',
        a: 'Never. Every lead we generate goes exclusively to you. We don\'t sell leads to multiple roofers. Your website, your ads, your phone number — every lead is yours.',
      },
      {
        q: 'What\'s your lead generation guarantee?',
        a: 'We guarantee measurable improvement in lead volume and quality within 90 days. If your leads don\'t improve, we keep working for free until they do. We only win when your crews are booked.',
      },
    ],
    cityLinks: [
      { city: 'Raleigh', slug: 'raleigh-roofing-lead-generation' },
      { city: 'Charlotte', slug: 'charlotte-roofing-lead-generation' },
      { city: 'Durham', slug: 'durham-roofing-lead-generation' },
      { city: 'Cary', slug: 'cary-roofing-lead-generation' },
      { city: 'Wake Forest', slug: 'wake-forest-roofing-lead-generation' },
    ],
  },
};

// ─── LAYER 2: LOCATION HUB (RALEIGH — PHASE 1) ─────────────────

export const locationHubs: Record<string, LocationHub> = {
  'raleigh-web-design': {
    slug: 'raleigh-web-design',
    city: 'Raleigh',
    state: 'NC',
    title: 'Web Design Raleigh NC — Contractor Websites | Figgle Media',
    metaDescription:
      'Custom web design for Raleigh contractors. Roofing, HVAC, and construction websites built to rank on Google and generate local leads in the Triangle.',
    h1: 'Web Design for Raleigh Contractors',
    subtitle: 'Websites that rank in the Triangle and convert local searches into booked jobs',
    intro:
      'Raleigh is one of the fastest-growing metros in the country — and that means more homeowners searching for contractors every day. If your website isn\'t converting that traffic, your competitors\' sites are. We build Raleigh-specific contractor websites engineered for the Triangle market.',
    stats: [
      { value: '1.4M+', label: 'Raleigh Metro Population' },
      { value: '#2', label: 'Fastest-Growing US Metro' },
      { value: '4,200+', label: 'Active Contractor Licenses' },
    ],
    benefits: [
      'Designed for Raleigh\'s competitive contractor market',
      'Local SEO targeting Triangle neighborhoods',
      'Google Business Profile optimization included',
      'Mobile-first for on-the-go homeowners',
      '90-day performance guarantee',
    ],
    faqs: [
      {
        q: 'Why choose a Raleigh-based marketing agency?',
        a: 'We live in the market we serve. We understand Raleigh\'s growth patterns, neighborhood dynamics, and seasonal demand better than a remote agency ever could. When we target "roof repair Cary NC" or "contractor North Hills Raleigh," we know exactly what those searchers are looking for.',
      },
      {
        q: 'How long does a Raleigh contractor website take to build?',
        a: 'Most sites launch in 3-4 weeks. That includes strategy, design, development, content, and SEO setup. We move fast because we\'ve built dozens of contractor sites for the Triangle market and have the process dialed in.',
      },
      {
        q: 'Do you serve all of Wake County?',
        a: 'Yes. We build pages and campaigns for Raleigh, Cary, Apex, Holly Springs, Wake Forest, Garner, Fuquay-Varina, and all surrounding areas in Wake County.',
      },
    ],
    serviceLinks: [
      {
        label: 'Roofing Web Design in Raleigh',
        slug: 'raleigh-roofing-web-design',
        description: 'Custom websites for Raleigh roofing companies with storm-damage lead funnels',
      },
      {
        label: 'SEO for Roofers in Raleigh',
        slug: 'raleigh-seo-for-roofers',
        description: 'Rank for "roofer near me Raleigh" and dominate the local map pack',
      },
      {
        label: 'Google Ads for Roofers in Raleigh',
        slug: 'raleigh-google-ads-roofers',
        description: 'PPC campaigns that fill your roofing pipeline with qualified Triangle leads',
      },
      {
        label: 'Roofing Lead Generation in Raleigh',
        slug: 'raleigh-roofing-lead-generation',
        description: 'Full-funnel system to keep your Raleigh roofing crews booked year-round',
      },
    ],
    nearbyHubs: [
      { city: 'Cary', slug: 'cary-web-design' },
      { city: 'Durham', slug: 'durham-web-design' },
      { city: 'Wake Forest', slug: 'wake-forest-web-design' },
    ],
    cityImage: '/assets/cities/raleigh.webp',
    cityImageAlt: 'Downtown Raleigh NC skyline — contractor web design services',
  },
};

// ─── LAYER 3: SERVICE + LOCATION PAGES (RALEIGH — PHASE 1) ─────

export const serviceLocationPages: Record<string, ServiceLocationPage> = {
  'raleigh-roofing-web-design': {
    slug: 'raleigh-roofing-web-design',
    city: 'Raleigh',
    service: 'Web Design',
    industry: 'Roofing',
    title: 'Roofing Web Design Raleigh NC | Figgle Media',
    metaDescription:
      'Custom web design for Raleigh roofing companies. Storm-damage lead pages, mobile-first design, and local SEO built for the Triangle roofing market.',
    h1: 'Roofing Web Design in Raleigh, NC',
    subtitle: 'Websites built for Raleigh roofers that convert storm-season traffic into inspections',
    intro:
      'Raleigh roofing companies face a unique challenge: most of your leads come in bursts after storms, and you need a website that captures every one of them. We build roofing websites specifically for the Raleigh market — with storm-damage lead funnels, neighborhood-targeted content, and mobile-first design that loads fast on any connection.',
    sections: [
      {
        heading: 'Built for the Raleigh Roofing Market',
        content:
          'The Triangle sees an average of 4-6 significant storm events per year. Each one triggers a surge of roofing searches from homeowners in North Raleigh, Cary, Apex, and Wake Forest. Your website needs dedicated storm-response pages that go live within hours, not days. We pre-build these templates so you can activate them instantly.',
      },
      {
        heading: 'Neighborhood-Level Targeting',
        content:
          'A homeowner in Five Points searches differently than one in Brier Creek. We build location-specific landing pages for Raleigh neighborhoods and zip codes — so when someone searches "roof repair 27609" or "roofer near North Hills," your site is the one that shows up.',
      },
      {
        heading: 'Raleigh Roofer Portfolio Integration',
        content:
          'We showcase your completed Raleigh projects with before/after galleries, materials used, and actual neighborhood names. This builds trust with local homeowners ("They did a great job on that house in my neighborhood") and generates hyper-local SEO signals.',
      },
    ],
    localData: [
      'Raleigh averages 4-6 major storm events per year driving roofing demand',
      'Wake County has 4,200+ active contractor licenses — your site needs to stand out',
      'Over 70% of Raleigh roofing searches happen on mobile devices',
    ],
    benefits: [
      'Pre-built storm-damage response pages for Triangle weather events',
      'Neighborhood landing pages for North Raleigh, Cary, Apex, Wake Forest',
      'Before/after galleries with Raleigh project locations',
      'Mobile-first design for on-the-go homeowners',
      'Review widget pulling Google and Angi reviews',
      'Insurance claim FAQ section for NC homeowners',
    ],
    faqs: [
      {
        q: 'How much does a roofing website cost in Raleigh?',
        a: 'Our roofing website packages start at $2,999 for the Starter plan and go up to $7,999 for our full lead generation system. Most Raleigh roofers choose the $4,999 Scaler package which includes storm-damage pages, local SEO, and review integration.',
      },
      {
        q: 'Can you build storm-damage landing pages for my Raleigh roofing site?',
        a: 'Yes — this is one of our most popular features for Triangle roofers. We pre-build storm-response templates that you can activate within hours of a major weather event, targeting the specific zip codes affected.',
      },
      {
        q: 'Do you help Raleigh roofers rank on Google?',
        a: 'Every site we build includes on-page SEO foundations. For ongoing ranking campaigns, see our dedicated SEO for Roofers in Raleigh service.',
      },
    ],
    industryParentSlug: 'roofing-web-design',
    locationParentSlug: 'raleigh-web-design',
    siblingLinks: [
      { label: 'SEO for Roofers in Raleigh', slug: 'raleigh-seo-for-roofers' },
      { label: 'Google Ads for Roofers in Raleigh', slug: 'raleigh-google-ads-roofers' },
      { label: 'Roofing Lead Gen in Raleigh', slug: 'raleigh-roofing-lead-generation' },
    ],
    nearbyCityLinks: [
      { city: 'Cary', slug: 'cary-roofing-web-design' },
      { city: 'Durham', slug: 'durham-roofing-web-design' },
      { city: 'Wake Forest', slug: 'wake-forest-roofing-web-design' },
    ],
  },

  'raleigh-seo-for-roofers': {
    slug: 'raleigh-seo-for-roofers',
    city: 'Raleigh',
    service: 'SEO',
    industry: 'Roofing',
    title: 'SEO for Roofers in Raleigh NC | Figgle Media',
    metaDescription:
      'Local SEO for Raleigh roofing companies. Rank for "roofer near me Raleigh," dominate the map pack, and generate organic leads in the Triangle.',
    h1: 'SEO for Roofers in Raleigh, NC',
    subtitle: 'Rank in the Triangle map pack and generate organic roofing leads',
    intro:
      'There are over 400 roofing companies competing for visibility in the Raleigh-Durham metro. Only 3 show up in the Google Map Pack. Our roofing SEO campaigns are built specifically for the Triangle market — targeting the neighborhoods, zip codes, and search patterns that Raleigh homeowners actually use.',
    sections: [
      {
        heading: 'Raleigh Map Pack Strategy',
        content:
          'We optimize your Google Business Profile for Raleigh-specific roofing searches, build citations on local Triangle directories (Triangle Business Journal, Raleigh Chamber, Nextdoor), and implement a review generation system that outpaces your competitors. Map Pack rankings in Raleigh typically improve within 30-60 days.',
      },
      {
        heading: 'Triangle Neighborhood Content',
        content:
          'We create content targeting the neighborhoods where your roofing customers live: North Hills, Midtown, Five Points, Brier Creek, Cary\'s Preston, Wake Forest\'s Heritage. Each piece targets specific long-tail keywords like "roof replacement North Raleigh" that your competitors aren\'t pursuing.',
      },
      {
        heading: 'Raleigh Competitor Analysis',
        content:
          'We audit the top 10 ranking roofers in Raleigh to identify exactly where their SEO is weak and where you can overtake them. This isn\'t generic — it\'s specific to your Raleigh zip codes, your services, and your competitors\' backlink profiles.',
      },
    ],
    localData: [
      '400+ roofing companies compete in the Raleigh-Durham metro area',
      'Raleigh map pack results generate 5x more calls than organic listings',
      'Triangle homeowners search for roofers most heavily March through October',
    ],
    benefits: [
      'Google Business Profile optimization for Raleigh',
      'Local citation building on Triangle directories',
      'Neighborhood-specific content (North Hills, Brier Creek, etc.)',
      'Automated review generation targeting 4.8+ average',
      'Monthly ranking and lead reports',
      'Competitor monitoring in Wake County',
    ],
    faqs: [
      {
        q: 'How competitive is roofing SEO in Raleigh?',
        a: 'Moderately competitive. Raleigh\'s roofing market is growing fast, but most competitors have weak SEO — they rely on word-of-mouth or paid ads. That creates an opportunity for roofers willing to invest in organic visibility.',
      },
      {
        q: 'How long until I rank for "roofer near me Raleigh"?',
        a: 'Map Pack improvements often appear in 30-60 days. Organic rankings for competitive terms like "roofing company Raleigh NC" typically take 3-6 months. We provide monthly reports showing progress on every target keyword.',
      },
      {
        q: 'Do you handle Google Business Profile management?',
        a: 'Yes. GBP optimization is a core part of every roofing SEO campaign. We handle photos, posts, Q&A, review responses, and service category optimization.',
      },
    ],
    industryParentSlug: 'seo-for-roofers',
    locationParentSlug: 'raleigh-web-design',
    siblingLinks: [
      { label: 'Roofing Web Design in Raleigh', slug: 'raleigh-roofing-web-design' },
      { label: 'Google Ads for Roofers in Raleigh', slug: 'raleigh-google-ads-roofers' },
      { label: 'Roofing Lead Gen in Raleigh', slug: 'raleigh-roofing-lead-generation' },
    ],
    nearbyCityLinks: [
      { city: 'Cary', slug: 'cary-seo-for-roofers' },
      { city: 'Durham', slug: 'durham-seo-for-roofers' },
      { city: 'Wake Forest', slug: 'wake-forest-seo-for-roofers' },
    ],
  },

  'raleigh-google-ads-roofers': {
    slug: 'raleigh-google-ads-roofers',
    city: 'Raleigh',
    service: 'Google Ads',
    industry: 'Roofing',
    title: 'Google Ads for Roofers in Raleigh NC | Figgle Media',
    metaDescription:
      'Google Ads management for Raleigh roofing companies. Local Service Ads, search campaigns, and PPC that fill your Triangle pipeline with qualified roofing leads.',
    h1: 'Google Ads for Roofers in Raleigh, NC',
    subtitle: 'Qualified roofing leads in the Triangle — this week, not next quarter',
    intro:
      'Raleigh\'s roofing market moves fast — especially during storm season. Google Ads lets you get in front of Triangle homeowners who need a roofer right now. We manage roofing PPC campaigns specifically for the Raleigh market, targeting Wake County zip codes and neighborhoods with the highest roofing demand.',
    sections: [
      {
        heading: 'Raleigh Local Service Ads',
        content:
          'We set up and manage your Google Guaranteed Local Service Ads targeting Raleigh, Cary, Apex, Holly Springs, Wake Forest, and surrounding areas. LSAs appear above search ads and only charge you when a homeowner actually contacts you — making them the highest-ROI ad channel for Triangle roofers.',
      },
      {
        heading: 'Storm-Season Ad Campaigns',
        content:
          'When severe weather hits the Triangle, we activate pre-built storm-response campaigns within hours. These target the specific zip codes in the storm path with urgent ad copy: "Storm Damage? Free Raleigh Roof Inspection — Call Now." Timing is everything, and we\'re ready before the storm clears.',
      },
      {
        heading: 'Wake County Geo-Targeting',
        content:
          'We don\'t waste your budget showing ads to people in Fayetteville or Greensboro. Our campaigns target exact zip codes and radius boundaries around your service area in Wake County — down to neighborhood-level targeting for high-value areas like North Hills, Five Points, and Cameron Village.',
      },
    ],
    localData: [
      'Raleigh roofing ad clicks average $15-$35 depending on season and keyword',
      'Local Service Ads in Raleigh generate roofing leads at $30-$60 each',
      'Storm-season campaigns can spike call volume 400% within 24 hours',
    ],
    benefits: [
      'Local Service Ads with Google Guaranteed badge',
      'Pre-built storm-response campaigns for Triangle weather',
      'Wake County zip code geo-targeting',
      'Call tracking with lead scoring',
      'Roofing-specific negative keyword list',
      'Weekly optimization and budget management',
    ],
    faqs: [
      {
        q: 'How much should Raleigh roofers spend on Google Ads?',
        a: 'Most Raleigh roofing companies start at $1,500-$2,500/month in ad spend. During storm season (March-September), we recommend scaling to $3,000-$5,000 to capture the demand surge. We\'ll help you set a budget based on your close rate and target revenue.',
      },
      {
        q: 'What\'s the typical cost-per-lead for roofing ads in Raleigh?',
        a: 'Our Raleigh roofing clients average $45-$75 per lead through search ads and $30-$50 through Local Service Ads. That\'s well below the industry average of $100-$150, thanks to our roofing-specific keyword and negative keyword strategy.',
      },
      {
        q: 'Can you manage ads just during storm season?',
        a: 'Yes. We offer storm-season campaign management that activates March through October. However, year-round campaigns build stronger quality scores and lower long-term costs. We\'ll recommend the approach that fits your budget.',
      },
    ],
    industryParentSlug: 'google-ads-for-roofers',
    locationParentSlug: 'raleigh-web-design',
    siblingLinks: [
      { label: 'Roofing Web Design in Raleigh', slug: 'raleigh-roofing-web-design' },
      { label: 'SEO for Roofers in Raleigh', slug: 'raleigh-seo-for-roofers' },
      { label: 'Roofing Lead Gen in Raleigh', slug: 'raleigh-roofing-lead-generation' },
    ],
    nearbyCityLinks: [
      { city: 'Cary', slug: 'cary-google-ads-roofers' },
      { city: 'Durham', slug: 'durham-google-ads-roofers' },
      { city: 'Wake Forest', slug: 'wake-forest-google-ads-roofers' },
    ],
  },

  'raleigh-roofing-lead-generation': {
    slug: 'raleigh-roofing-lead-generation',
    city: 'Raleigh',
    service: 'Lead Generation',
    industry: 'Roofing',
    title: 'Roofing Lead Generation Raleigh NC | Figgle Media',
    metaDescription:
      'End-to-end roofing lead generation in Raleigh. Websites, SEO, ads, and follow-up systems that keep your Triangle crews booked year-round.',
    h1: 'Roofing Lead Generation in Raleigh, NC',
    subtitle: 'A complete system that keeps Raleigh roofing crews booked',
    intro:
      'Raleigh roofers don\'t need more clicks — they need more booked inspections. We build end-to-end lead generation systems for Triangle roofing companies: from the Google search to the signed contract. Your website, SEO, ads, and follow-up sequences all work together as one system designed for the Raleigh market.',
    sections: [
      {
        heading: 'Raleigh Roofing Lead Funnel',
        content:
          'We build a lead funnel tailored to how Triangle homeowners search for roofers. That starts with ranking for Raleigh-specific keywords, continues with a high-converting website built for roofing, and finishes with automated follow-up that keeps you top-of-mind until the homeowner books. Every stage is optimized for the Raleigh market.',
      },
      {
        heading: 'Speed-to-Lead for Triangle Roofers',
        content:
          'When a Raleigh homeowner submits a form or calls your number, they\'re also contacting 2-3 other roofers. The first company to respond wins the job 78% of the time. We implement instant notifications, automated text-back responses, and CRM alerts so you respond before the competition.',
      },
      {
        heading: 'Year-Round Pipeline (Not Just Storm Season)',
        content:
          'The Raleigh roofing market peaks March through October, but maintenance, gutters, and roof inspections generate year-round demand. We build campaigns that capture storm-season surges while maintaining steady lead flow during slower months through re-roofing and maintenance keywords.',
      },
    ],
    localData: [
      'Raleigh roofers who respond to leads within 5 minutes close at 3x the rate',
      'The Triangle roofing market is projected to grow 15% through 2028',
      'Wake County issues 8,000+ roofing permits annually',
    ],
    benefits: [
      'Multi-channel lead capture (website, ads, organic, social)',
      'Speed-to-lead automation with 60-second response',
      'CRM integration and lead scoring',
      'Storm-season surge campaigns',
      'Year-round pipeline management',
      'Monthly reporting tied to actual revenue',
    ],
    faqs: [
      {
        q: 'How many roofing leads can I expect in Raleigh?',
        a: 'Most Raleigh roofers on our lead generation program receive 30-60 qualified leads per month during peak season and 15-30 during off-season. Volume depends on your budget and service area — Wake County companies typically see higher volume than those limited to a single zip code.',
      },
      {
        q: 'Do you guarantee roofing leads in Raleigh?',
        a: 'We guarantee measurable improvement in lead volume and quality within 90 days. If your leads haven\'t improved, we keep working for free until they do. Every lead is exclusive to your company — we never sell shared leads.',
      },
      {
        q: 'Can I start with just one service and add more later?',
        a: 'Absolutely. Many Raleigh roofers start with a website and SEO, then add Google Ads and lead generation as revenue grows. Our packages are designed to stack — each service amplifies the others.',
      },
    ],
    industryParentSlug: 'roofing-lead-generation',
    locationParentSlug: 'raleigh-web-design',
    siblingLinks: [
      { label: 'Roofing Web Design in Raleigh', slug: 'raleigh-roofing-web-design' },
      { label: 'SEO for Roofers in Raleigh', slug: 'raleigh-seo-for-roofers' },
      { label: 'Google Ads for Roofers in Raleigh', slug: 'raleigh-google-ads-roofers' },
    ],
    nearbyCityLinks: [
      { city: 'Cary', slug: 'cary-roofing-lead-generation' },
      { city: 'Durham', slug: 'durham-roofing-lead-generation' },
      { city: 'Wake Forest', slug: 'wake-forest-roofing-lead-generation' },
    ],
  },
};

// ─── HELPER FUNCTIONS ────────────────────────────────────────────

export function getIndustryPage(slug: string): IndustryPage | undefined {
  return industryPages[slug];
}

export function getLocationHub(slug: string): LocationHub | undefined {
  return locationHubs[slug];
}

export function getServiceLocationPage(slug: string): ServiceLocationPage | undefined {
  return serviceLocationPages[slug];
}

/** All slugs for the sitemap generator. */
export function getAllSeoSlugs(): string[] {
  return [
    ...Object.keys(industryPages),
    ...Object.keys(locationHubs),
    ...Object.keys(serviceLocationPages),
  ];
}
