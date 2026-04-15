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
  /** Only set on industry-hub pages (/roofing, /hvac) — lists child service pages */
  serviceLinks?: { label: string; slug: string; description: string }[];
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
  // ─── Industry Hubs ───
  roofing: {
    slug: 'roofing',
    title: 'Roofing Marketing Agency | Web Design, SEO, Google Ads, Lead Generation',
    metaDescription:
      'Full-service marketing for roofing companies. Web design, SEO, Google Ads, and lead generation built around storm-season demand, insurance-claim cycles, and roofing buyer behavior.',
    h1: 'Roofing Marketing That Fills Your Schedule',
    subtitle: 'Web Design · SEO · Google Ads · Lead Generation — built exclusively for roofers',
    intro:
      "Roofing doesn't convert like other trades. Your leads come in storm-driven bursts, your customers are navigating insurance claims while they shop, and your competition knows exactly how to bid you off Google. Generic marketing agencies miss all of it. We built our entire playbook around how roofing customers search, compare, and hire — from the first \"hail damage inspection\" query to the signed contract.",
    sections: [
      {
        heading: 'Why Roofing Needs Specialist Marketing',
        content:
          "A restaurant's busy season is Friday night. A roofer's busy season is a 48-hour window after a hail storm. That one fact changes everything — your website, your ad spend, your content calendar, your lead-response workflow. We pre-build storm-response templates that go live within hours, run weather-triggered ad campaigns, and structure content around insurance-claim questions your customers are actively Googling while they decide who to call.",
      },
      {
        heading: 'The Full Roofing Funnel',
        content:
          'We build every stage as one integrated system: a website that converts emergency traffic into booked inspections, SEO that ranks you in the Map Pack before the next storm hits, Google Ads that capture demand surges without wasting budget on DIY searches, and lead-generation systems that respond to every call in under 60 seconds. Mix and match — or run all four as one campaign.',
      },
    ],
    benefits: [
      'Storm-response website templates you can activate in hours',
      'Map Pack + organic SEO built on real roofing search data',
      'Google Ads + Local Service Ads with roofing-specific negative keyword libraries',
      'Speed-to-lead automation that responds before the homeowner calls a competitor',
      '90-day measurable improvement guarantee',
    ],
    faqs: [
      {
        q: 'Do I need all four services, or can I start with one?',
        a: "You can start with any one. Most roofers begin with web design because the site is the foundation everything else pushes traffic to. Others start with Google Ads for immediate lead volume, then layer SEO for long-term cost reduction. The services stack — each one amplifies the others.",
      },
      {
        q: "What's the difference between this and a general marketing agency?",
        a: "General agencies write generic ad copy, generic content, and generic site designs that don't understand roofing buyer behavior. We spend 100% of our time on roofing and related trades. That means faster onboarding, lower cost-per-lead, and higher conversion rates — because we're not learning your industry on your budget.",
      },
      {
        q: 'How fast do you typically deliver results?',
        a: 'Google Ads can generate leads in the first week. Map Pack rankings typically move in 30–60 days. Organic SEO for competitive head terms takes 3–6 months. We report measurable progress monthly, and we guarantee improvement within 90 days or we work free until you see it.',
      },
    ],
    cityLinks: [],
    serviceLinks: [
      { label: 'Roofing Web Design', slug: 'roofing/web-design', description: 'Websites that convert storm traffic into booked inspections.' },
      { label: 'Roofing SEO', slug: 'roofing/seo', description: 'Rank in the Map Pack before the next storm hits.' },
      { label: 'Roofing Google Ads', slug: 'roofing/google-ads', description: 'Paid campaigns tuned for insurance-claim urgency.' },
      { label: 'Roofing Lead Generation', slug: 'roofing/lead-generation', description: 'End-to-end system that keeps crews booked year-round.' },
    ],
  },

  hvac: {
    slug: 'hvac',
    title: 'HVAC Marketing Agency | Web Design, SEO, Google Ads, Lead Generation',
    metaDescription:
      "Full-service marketing for HVAC contractors. Web design, SEO, Google Ads, and lead generation built for emergency calls, replacement cycles, and HVAC's dual seasonal peaks.",
    h1: 'HVAC Marketing That Keeps Techs Booked',
    subtitle: 'Web Design · SEO · Google Ads · Lead Generation — built exclusively for HVAC',
    intro:
      "HVAC has two customer journeys that look almost nothing alike: the emergency call on the hottest day of July and the planned replacement that the homeowner researches for six weeks. Your website, your ads, your follow-up sequences — all of it has to serve both journeys without forcing either customer into the wrong funnel. We built our HVAC marketing playbook around this dual reality.",
    sections: [
      {
        heading: 'Why HVAC Needs Specialist Marketing',
        content:
          "Your demand doubles during heat waves and cold snaps. It halves during shoulder seasons. Most HVAC companies run the same flat ad budget year-round — overpaying during quiet months and getting outbid exactly when leads are most available. We fix that with weather-driven bid strategies, seasonal content calendars, and dual-journey websites that handle emergencies and replacements as separate flows.",
      },
      {
        heading: 'The Full HVAC Funnel',
        content:
          'One integrated system: a website that splits emergency vs planned journeys, SEO optimized for service-area coverage across every ZIP you serve, Google Ads that scale up before heat waves and down during shoulder weeks, and lead-generation with 60-second response automation. Built to capture seasonal surges while smoothing out the shoulder-season valleys that kill most HVAC P&Ls.',
      },
    ],
    benefits: [
      'Dual-journey websites: emergency + planned replacement',
      'Service-area SEO that ranks you in every suburb you cover',
      'Weather-driven ad bidding tied to 7-day forecasts',
      'Maintenance-agreement enrollment funnels that smooth shoulder seasons',
      '90-day measurable improvement guarantee',
    ],
    faqs: [
      {
        q: 'Do I need all four services, or can I start with one?',
        a: 'You can start with any one. Most HVAC companies begin with web design or Google Ads — the site is your foundation, and ads generate leads fastest. SEO and full lead-generation layer on as revenue scales. Each service amplifies the others.',
      },
      {
        q: "What's different about specialist HVAC marketing?",
        a: "General agencies treat HVAC like plumbing or roofing. But HVAC has dual seasonal peaks, emergency vs planned journeys, financing integration on replacements, and service-area ranking as the #1 SEO lever. None of that is generic. We specialize so you don't pay to teach an agency your industry.",
      },
      {
        q: 'How fast do you deliver results?',
        a: 'Google Ads can generate leads in week one. Map Pack improvements typically come in 30–60 days. Service-area page rankings land in 2–3 months. We guarantee measurable improvement within 90 days or we work free until you see it.',
      },
    ],
    cityLinks: [],
    serviceLinks: [
      { label: 'HVAC Web Design', slug: 'hvac/web-design', description: 'Websites that handle emergency calls and planned replacements.' },
      { label: 'HVAC SEO', slug: 'hvac/seo', description: 'Rank for every "AC repair near me" ZIP you serve.' },
      { label: 'HVAC Google Ads', slug: 'hvac/google-ads', description: 'Weather-driven campaigns that capture every heat wave.' },
      { label: 'HVAC Lead Generation', slug: 'hvac/lead-generation', description: 'End-to-end system for year-round pipeline management.' },
    ],
  },

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

  'roofing/web-design': {
    slug: 'roofing/web-design',
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

  'roofing/seo': {
    slug: 'roofing/seo',
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

  'roofing/google-ads': {
    slug: 'roofing/google-ads',
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

  'roofing/lead-generation': {
    slug: 'roofing/lead-generation',
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

  // ─── HVAC L1 ───────────────────────────────────────────────────

  'hvac/web-design': {
    slug: 'hvac/web-design',
    title: 'HVAC Web Design — Websites Built for HVAC Contractors | Figgle Media',
    metaDescription:
      'Custom web design for HVAC companies. Service-area pages, seasonal lead funnels, and mobile-first design that turns emergency searches into booked calls.',
    h1: 'Web Design Built for HVAC Companies',
    subtitle: 'Sites that convert emergency searches into booked service calls',
    intro:
      "HVAC is one of the most search-driven trades online — homeowners find you when their system fails, usually on the hottest or coldest day of the year. Your website has about 8 seconds to prove you're the right call. Most HVAC sites fail that test: slow load, no click-to-call, generic stock photos, and forms that ask for too much. We build HVAC websites tuned for the way HVAC customers actually search and decide.",
    sections: [
      {
        heading: 'Built for HVAC Buyer Behavior',
        content:
          "HVAC has two distinct customer journeys: emergency (system failed, book today) and planned (new install, replacement, tune-up). These customers need different pages, different trust signals, and different CTAs. An emergency customer wants your phone number and your response-time guarantee; a replacement customer wants financing, SEER ratings, and a detailed estimate process. We build both journeys into every site, with clear routing based on entry keyword.",
      },
      {
        heading: 'Seasonal Landing Page Architecture',
        content:
          'HVAC demand doubles in July and January. We pre-build seasonal landing pages — "AC repair near me," "furnace not heating," "AC tune-up spring special" — that you can activate with a single toggle before each season. Each page is pre-optimized for the specific keywords and search intent that spike during that window, so your site is ranked and ready when demand surges.',
      },
      {
        heading: 'Service-Area Pages That Rank',
        content:
          'HVAC is hyper-local — customers want someone who can be at their house in under two hours. We build dedicated service-area pages for every city and neighborhood you serve, each with unique local content, testimonials from that area, and zip-code-specific keywords. This is the single biggest ranking lever in HVAC SEO, and generic sites miss it entirely.',
      },
    ],
    benefits: [
      'Dual customer journeys: emergency + planned',
      'Pre-built seasonal landing pages (summer AC, winter heating, spring/fall tune-up)',
      'Service-area pages for every ZIP code you serve',
      'Click-to-call buttons sized for thumb-tap on any device',
      'Financing application forms embedded in replacement flows',
      'Review widget pulling Google + Angi + BBB',
    ],
    faqs: [
      {
        q: 'How is an HVAC website different from a general contractor site?',
        a: 'HVAC has unique patterns: emergency vs. planned customer journeys, dual seasonal spikes (summer + winter), financing integration on big-ticket replacements, and service-area ranking as the #1 SEO lever. A generic template handles none of these. We build around all of them.',
      },
      {
        q: 'Can you add a financing application to my HVAC site?',
        a: 'Yes. We integrate with Wells Fargo, GreenSky, Synchrony, and most other HVAC financing partners. Embedded financing applications on replacement pages typically increase quote-close rate by 15–25% because the customer commits before leaving your site.',
      },
      {
        q: 'Do you include SEO with HVAC web design?',
        a: 'Every site includes on-page SEO foundations — title tags, schema markup, fast load times, and mobile responsiveness. For ongoing ranking and service-area expansion, we offer dedicated HVAC SEO packages.',
      },
    ],
    cityLinks: [
      { city: 'Raleigh', slug: 'raleigh-hvac-web-design' },
    ],
  },

  'hvac/seo': {
    slug: 'hvac/seo',
    title: 'SEO for HVAC Companies — Rank for Emergency Keywords | Figgle Media',
    metaDescription:
      'Local SEO for HVAC contractors. Dominate the map pack, rank for emergency + seasonal keywords, and generate organic leads that cost $0 per click.',
    h1: 'SEO That Gets HVAC Phones Ringing',
    subtitle: 'Organic leads during every heat wave and cold snap — without paying per click',
    intro:
      "HVAC search volume is among the spikiest of any trade. A single heat wave can push \"AC repair near me\" to 4x its baseline volume in 48 hours. If you're not ranked when that spike hits, you miss the entire window. HVAC SEO is about being in the top 3 map-pack results before demand surges — so when the thermostat fails, your phone rings first.",
    sections: [
      {
        heading: 'Map Pack Domination for HVAC',
        content:
          "The Google Map Pack drives more HVAC calls than any other search feature — often 70%+ of all organic leads. We optimize your Google Business Profile, build citations on HVAC-specific directories (HomeAdvisor, Thumbtack, BBB, ACCA), generate review velocity, and tune your service areas to lock in those top 3 spots for every service + city combination.",
      },
      {
        heading: 'Emergency + Seasonal Keyword Strategy',
        content:
          'HVAC keywords break into three intent tiers: emergency ("AC repair near me," "furnace not working"), seasonal planning ("AC tune-up spring," "heating maintenance winter"), and replacement research ("new HVAC system cost," "heat pump vs furnace"). We build your content calendar around all three, with intent-matched landing pages that convert each tier into the right call.',
      },
      {
        heading: 'Service-Area Expansion Strategy',
        content:
          "HVAC is won or lost on service-area pages. We build location-specific pages for every city and suburb you serve — each with unique copy, local testimonials, neighborhood-specific trust signals. This is the fastest way to rank for \"{city} AC repair\" in every corner of your market. Competitors who skip this step will never outrank you.",
      },
    ],
    benefits: [
      'Google Business Profile optimization across all service areas',
      'Citations on 100+ HVAC + home-services directories',
      'Intent-matched landing pages (emergency / seasonal / replacement)',
      'Service-area page architecture for every city + ZIP',
      'Automated review generation targeting 4.8+ average',
      'Seasonal content calendar tied to HVAC demand cycles',
    ],
    faqs: [
      {
        q: 'How long does HVAC SEO take to show results?',
        a: 'Map Pack improvements often appear in 30–60 days because HVAC GBP competition is moderate in most markets. Organic rankings for competitive terms ("HVAC company [city]") typically take 4–6 months. Service-area page rankings for suburb-specific keywords often come fastest — 2–3 months.',
      },
      {
        q: 'Is SEO better than Google Ads for HVAC?',
        a: "They solve different problems. Ads spike your visibility during heat waves and cold snaps when you can't afford to miss leads. SEO builds a foundation that generates leads year-round at zero per-click cost. Most profitable HVAC companies run both — ads for demand surges, SEO for the rest.",
      },
      {
        q: 'What if my HVAC company serves a huge area?',
        a: "We build out service-area pages systematically — starting with your highest-value cities and expanding outward. A 15-city service area might take 9–12 months to fully build out, but each new city page starts generating its own organic leads within weeks of publishing.",
      },
    ],
    cityLinks: [
      { city: 'Raleigh', slug: 'raleigh-seo-for-hvac' },
    ],
  },

  'hvac/google-ads': {
    slug: 'hvac/google-ads',
    title: 'Google Ads for HVAC Companies — Fill Your Pipeline | Figgle Media',
    metaDescription:
      'Google Ads management for HVAC contractors. Lower cost-per-lead, dominate Local Service Ads, and capture emergency searches with ads that convert.',
    h1: 'Google Ads That Fill HVAC Pipelines',
    subtitle: 'Capture every heat wave and cold snap — before the call goes to a competitor',
    intro:
      "When a homeowner's AC dies at 2pm on an 95-degree day, they don't scroll — they click the first HVAC ad and call. Google Ads is how you win that moment. But most HVAC companies waste 40–60% of their ad spend on irrelevant clicks: people searching for jobs, DIY repairs, or wholesale parts. We eliminate that waste and route every dollar toward the emergency and replacement leads that actually book.",
    sections: [
      {
        heading: 'Local Service Ads (Google Guaranteed)',
        content:
          'Local Service Ads appear above regular search ads and display your Google Guaranteed badge, reviews, and phone number. You pay only when a homeowner actually calls or messages. For HVAC, LSAs consistently generate the lowest cost-per-lead of any ad channel — often $25–$45 per booked call. We manage your LSA profile, service categories, and dispute resolution so every qualifying lead gets through and every invalid one gets credited back.',
      },
      {
        heading: 'Emergency vs. Planned Campaign Split',
        content:
          'Emergency HVAC keywords ("AC repair now," "furnace emergency") demand different ad copy, landing pages, and bid strategies than planned-replacement keywords ("new HVAC system," "heat pump installation"). We split these into separate campaigns with tuned budgets, so emergency spend scales up during demand spikes and replacement spend runs steady year-round.',
      },
      {
        heading: 'Seasonal Bid Strategy + Negative Keywords',
        content:
          'HVAC bids in July for AC terms are 2–3x their April rate — if you use the same flat budget, you disappear during peak demand. We adjust bids dynamically by season and weather forecast, and maintain an aggressive negative keyword list that blocks DIY searches, parts searches, jobs searches, and other budget-wasters refined from hundreds of HVAC campaigns.',
      },
    ],
    benefits: [
      'Local Service Ads setup + ongoing management',
      'Separate emergency and planned-replacement campaigns',
      'Dynamic seasonal bid strategy (summer AC surge, winter heating surge)',
      'Call tracking with lead scoring + recorded conversations',
      'Negative keyword library built from real HVAC campaign data',
      'Weekly budget + bid optimization tied to weather forecasts',
    ],
    faqs: [
      {
        q: 'How much should HVAC companies spend on Google Ads?',
        a: 'Most HVAC companies start at $1,500–$3,000/month and scale seasonally. During peak summer (June–August) and peak winter (December–February), we recommend scaling to $4,000–$8,000 to capture demand surges. Off-season, budgets drop 40–60% and shift toward maintenance + tune-up campaigns.',
      },
      {
        q: "What's the average cost-per-lead for HVAC ads?",
        a: 'Industry average is $60–$125 per lead. Our HVAC clients typically see $35–$70 per lead because we split emergency and planned campaigns separately and maintain tight negative keyword lists. In less competitive markets, we\'ve driven HVAC leads below $25 during off-peak seasons.',
      },
      {
        q: 'Do you manage Local Service Ads for HVAC?',
        a: "Yes. For HVAC, LSAs are almost always the highest-ROI ad channel — you pay only for actual calls and messages. We handle profile optimization, service-category selection, review management, service-area tuning, and dispute resolution.",
      },
    ],
    cityLinks: [
      { city: 'Raleigh', slug: 'raleigh-google-ads-hvac' },
    ],
  },

  'hvac/lead-generation': {
    slug: 'hvac/lead-generation',
    title: 'HVAC Lead Generation — Book More Service Calls | Figgle Media',
    metaDescription:
      'End-to-end lead generation for HVAC contractors. Website, SEO, ads, and automated follow-up systems that keep techs booked year-round.',
    h1: 'Lead Generation That Keeps HVAC Techs Booked',
    subtitle: 'More service calls on the calendar — through every season',
    intro:
      "HVAC leads don't pay bills — booked service calls do. Lead generation for HVAC isn't just about driving traffic; it's about building a system where the right homeowners find you, trust you, and call you before they call anyone else. We build that full-funnel system, tuned specifically to HVAC's seasonal demand patterns and dual emergency-vs-planned customer journeys.",
    sections: [
      {
        heading: 'The Full HVAC Lead Funnel',
        content:
          'Lead generation for HVAC has four stages: visibility (they find you via map pack, ads, or referral), credibility (reviews, response-time guarantees, financing options), conversion (click-to-call, online booking, emergency form), and follow-up (maintenance reminders, replacement nurturing, seasonal tune-up offers). Most agencies handle the first stage. We build all four as a single integrated system.',
      },
      {
        heading: 'Speed-to-Lead for Emergency Calls',
        content:
          "When an AC dies in July, the customer will call 2–3 HVAC companies within 15 minutes. The first company to answer books the job 78% of the time. We implement instant call forwarding, automated text-back when you can't answer, CRM alerts, and on-call escalation so every emergency lead gets a human response in under 60 seconds — even after hours.",
      },
      {
        heading: 'Seasonal Pipeline Management',
        content:
          'HVAC demand peaks in July (AC) and January (heating) — but the money is in smoothing the valleys. We build campaigns that capture seasonal surges while running maintenance agreement enrollment, tune-up specials, and replacement-lead nurturing during shoulder seasons (March–May, September–November). A year-round pipeline beats seasonal booms and busts every time.',
      },
    ],
    benefits: [
      'Multi-channel lead capture (web, ads, organic, referral)',
      'Speed-to-lead automation with under-60-second response',
      'CRM integration + lead scoring by emergency vs. planned',
      'Seasonal campaign calendar tied to HVAC demand cycles',
      'Maintenance agreement enrollment funnels',
      'Follow-up sequences that nurture replacement leads for 6–12 months',
    ],
    faqs: [
      {
        q: 'How many HVAC leads can I expect per month?',
        a: 'It depends on market size, budget, and service areas. A typical HVAC company starts at 40–80 leads/month and scales to 150–300+ during peak seasons. We focus on lead quality — 50 qualified leads that close at 35% beats 150 tire-kicker leads that close at 8%.',
      },
      {
        q: 'Do you sell shared HVAC leads?',
        a: "Never. Every lead we generate goes exclusively to you. We don't broker leads to multiple HVAC companies. Your website, your ads, your phone number — every lead is yours.",
      },
      {
        q: "What's your lead generation guarantee?",
        a: "We guarantee measurable improvement in lead volume and quality within 90 days. If your leads haven't improved, we keep working for free until they do. We only win when your trucks are booked.",
      },
    ],
    cityLinks: [
      { city: 'Raleigh', slug: 'raleigh-hvac-lead-generation' },
    ],
  },

  // ─── Electrician Silo ─────────────────────────────────────────

  electrician: {
    slug: 'electrician',
    title: 'Electrician Marketing Agency | Web Design, SEO, Google Ads, Lead Generation',
    metaDescription:
      'Full-service marketing for electrical contractors. Web design, SEO, Google Ads, and lead generation built around emergency calls, panel upgrades, EV charger installs, and the trust signals electrical customers demand.',
    h1: 'Electrician Marketing That Keeps Your Schedule Full',
    subtitle: 'Web Design · SEO · Google Ads · Lead Generation — built exclusively for electrical contractors',
    intro:
      "Electrical customers are cautious. Most have been burned by an unlicensed handyman, and they'll pay a premium for someone who proves licensed, bonded, and insured before they ever pick up the phone. Then there's the urgency layer — breaker panels that fail at 9pm, storm-driven generator calls, and an exploding EV-charger install market. Generic marketing agencies treat electrical contractors like plumbers or HVAC. We built our entire playbook around the unique way electrical customers search, verify, and hire.",
    sections: [
      {
        heading: 'Why Electrical Needs Specialist Marketing',
        content:
          "Electrical has three customer journeys that look almost nothing alike: emergency (panel failed, sparking outlet, breaker won't reset), planned upgrade (100A → 200A service panel, EV charger, generator install, whole-home rewire), and commercial / industrial. Each journey needs different landing pages, different trust signals, and different lead-response workflows. Homeowners also hyper-research electrical contractors because of fire risk — your NCBEEC license, insurance, warranty, and permit practices need to be front and center, not buried in a footer. We build around all of it.",
      },
      {
        heading: 'The Full Electrical Funnel',
        content:
          'One integrated system: a website that splits emergency / upgrade / commercial journeys, SEO that ranks your Map Pack listing before the next storm knocks power out, Google Ads that capture the EV-charger boom at industry-leading CPL, and lead-generation with 60-second response on emergency calls plus 90-day nurture on upgrade quotes. Also: reputation management specifically tuned for electrical — NC electrical contractors carry outsized review weight because customers are already scared about safety before they dial.',
      },
    ],
    benefits: [
      'Three-journey websites: emergency / panel upgrade / commercial',
      'NCBEEC license + insurance + bonding signals surfaced, not buried',
      'Map Pack dominance for "electrician near me" emergency searches',
      'EV-charger campaigns tuned to Tesla / Ford / GM / Rivian owner patterns',
      'Speed-to-lead automation that answers panic calls in under 60 seconds',
      '90-day measurable improvement guarantee',
    ],
    faqs: [
      {
        q: 'Do I need all four services, or can I start with one?',
        a: 'You can start with any one. Most electricians begin with web design and LSAs — the site is the foundation, and Local Service Ads generate qualified emergency calls almost immediately. SEO and full lead-generation layer on as revenue scales. Each service stacks with the others.',
      },
      {
        q: "What's different about specialist electrical marketing?",
        a: "General agencies treat electrical like any other trade. But electrical has three-way journey splitting, outsized trust-signal requirements (license + bond + insurance + warranty), an emerging EV-charger category that behaves like nothing else in the trades, and emergency response windows measured in minutes. None of that is generic. We specialize so you don't pay to teach an agency your industry.",
      },
      {
        q: 'How fast do you deliver results?',
        a: 'Local Service Ads can generate booked calls in week one. Map Pack rankings typically move in 30–45 days because most electrical competitors optimize poorly. Organic rankings for competitive terms ("panel upgrade [city]," "EV charger installation") take 3–5 months. We guarantee measurable improvement within 90 days or we work free until you see it.',
      },
    ],
    cityLinks: [],
    serviceLinks: [
      { label: 'Electrician Web Design', slug: 'electrician/web-design', description: 'Websites that convert cautious electrical customers.' },
      { label: 'Electrician SEO', slug: 'electrician/seo', description: 'Dominate "electrician near me" and EV-charger searches.' },
      { label: 'Electrician Google Ads', slug: 'electrician/google-ads', description: 'LSAs + PPC that undercut franchise CPL.' },
      { label: 'Electrician Lead Generation', slug: 'electrician/lead-generation', description: 'End-to-end system built for electrical buying cycles.' },
    ],
  },

  'electrician/web-design': {
    slug: 'electrician/web-design',
    title: 'Electrician Web Design | Websites for Electrical Contractors | Figgle Media',
    metaDescription:
      'Custom web design for electrical contractors. Emergency + panel upgrade + EV charger funnels, NCBEEC license display built-in, mobile-first design that converts cautious electrical customers.',
    h1: 'Web Design Built for Electrical Contractors',
    subtitle: 'Sites that convert cautious electrical customers into booked service calls',
    intro:
      "Electrical customers research differently than any other trade. Before they ever click your phone number, they're verifying your license on the NCBEEC website, reading your reviews on three platforms, checking whether you're bonded and insured, and looking for photos of your actual permitted work — not stock images. Your website has about 15 seconds to clear every one of those hurdles, or they bounce to the next result. Most electrical sites fail that test: buried license numbers, generic stock photos, no warranty or bonding information, slow load times. We build electrical websites that pre-answer every trust question before the customer even asks.",
    sections: [
      {
        heading: 'Built for Electrical Buyer Behavior',
        content:
          "Electrical has three distinct customer journeys. Emergency customers (dead panel, sparking outlet, breaker that won't reset) want your phone number and response-time guarantee now — they won't read a single paragraph. Upgrade customers (200A panel, EV charger, generator, whole-home rewire) want pricing transparency, permit-handling explained, and a portfolio of similar jobs in their neighborhood. Commercial / industrial customers want your license classification (U, SP, EB), bonding capacity, and client references. Each journey needs distinct pages, distinct CTAs, and distinct trust signals. A one-size-fits-all template buries your best leads in the wrong funnel.",
      },
      {
        heading: 'License & Trust Signals Pre-Built',
        content:
          'NC electrical customers hyper-research because of fire risk. We pre-build a trust-signal system into every electrical site: NCBEEC license number prominently displayed with a live validation link, insurance certificate upload section, bonding amount for commercial pages, warranty terms on a dedicated page, and permit handling explained with photos of actual inspection stickers from your past jobs. Competitors who bury this in footer copy lose leads to sites that surface it in the hero. Surfacing these signals typically lifts form-conversion rates 20–35% on electrical sites.',
      },
      {
        heading: 'EV Charger & Panel Upgrade Estimators',
        content:
          'The two fastest-growing electrical service categories both have clear price ranges customers can ballpark — if you give them the tools. We build interactive estimators for EV-charger installs (accounting for panel capacity, run distance, breaker type, and whether mast replacement is needed) and panel upgrades (100A → 200A, 200A → 400A, residential vs commercial). These estimators convert 4–6x better than standard contact forms because the customer invests time in the tool before leaving their info, and the estimate output pre-qualifies the lead for your sales team.',
      },
    ],
    benefits: [
      'Three-journey site architecture (emergency / upgrade / commercial)',
      'NCBEEC license + insurance + bonding surfaced in hero',
      'EV charger install estimator with panel-capacity logic',
      'Panel upgrade calculator (100A / 200A / 400A, residential + commercial)',
      'Click-to-call buttons sized for thumb-tap during power outages',
      'Financing integrated into upgrade flows (Synchrony, GreenSky, Wells Fargo)',
      'Review widget pulling Google + Angi + BBB + Nextdoor',
    ],
    faqs: [
      {
        q: 'How is an electrician website different from a plumber or HVAC site?',
        a: "Electrical has three-way journey splitting, outsized trust-signal requirements, an emerging EV-charger category with its own buyer behavior, and fire-risk psychology that drives hyper-research. None of that exists in the same form for plumbing or HVAC. A generic trades template handles zero of it.",
      },
      {
        q: 'Can you add an EV charger cost estimator to my site?',
        a: 'Yes — this is one of our most requested features for electrical contractors. The estimator factors in your pricing for the run, panel capacity check, breaker, permit, and inspection. EV charger estimators on electrical sites typically generate 2–4x the quote requests of a plain contact form.',
      },
      {
        q: 'Do you include SEO with electrician web design?',
        a: 'Every site includes on-page SEO foundations: optimized title tags, schema markup, fast load times, mobile responsiveness, and local business schema tuned for Map Pack. For ongoing ranking across emergency + upgrade + commercial keyword tiers, we offer dedicated electrical SEO packages.',
      },
    ],
    cityLinks: [],
  },

  'electrician/seo': {
    slug: 'electrician/seo',
    title: 'SEO for Electricians | Rank for Emergency + EV-Charger Keywords | Figgle Media',
    metaDescription:
      "Local SEO for electrical contractors. Dominate \"electrician near me\" in the map pack, rank for EV charger + panel upgrade searches, and generate organic leads year-round.",
    h1: 'SEO That Keeps Electrician Phones Ringing',
    subtitle: 'Organic leads from every power outage, panel failure, and EV-charger search',
    intro:
      '"Electrician near me" is one of the most emergency-weighted search terms in any trade — 60%+ of clicks happen within 10 minutes of the query. If you\'re not in the top 3 Map Pack results when someone\'s panel fails, they call the next result. We build electrical SEO campaigns that win those emergency spots while ranking you for the slower-burn searches that drive five-figure jobs: "200 amp panel upgrade cost," "EV charger installation near me," "whole house rewire." Different keyword tiers, different content, one integrated campaign.',
    sections: [
      {
        heading: 'Map Pack Dominance for "Electrician Near Me"',
        content:
          "The Google Map Pack drives 75%+ of organic electrical call volume — materially higher than most trades because of emergency search behavior. We optimize your GBP for emergency categories first (Electrician, Emergency Electrician, 24/7 Electrician), build citations on electrical-specific and home-services directories (BBB, Angi, HomeAdvisor, Nextdoor, local Chamber), implement aggressive review velocity tuned to out-pace the 3–4 large franchise competitors in your market, and tune service areas to lock in the top 3 Map Pack spots across your coverage zone. Emergency Map Pack rankings often move within 30 days because most competitors — including the franchises — optimize poorly.",
      },
      {
        heading: 'Three-Tier Keyword Strategy',
        content:
          'Electrical keywords split into three intent tiers that demand separate content and landing pages. Emergency ("no power," "breaker won\'t reset," "electrician 24 hour"), upgrade research ("200 amp panel upgrade cost," "EV charger installation near me," "whole home rewire cost"), and commercial ("commercial electrician," "industrial electrical contractor," "electrical contractor bond"). Each tier has its own search volume, its own content cadence, and its own internal linking structure. We build all three layers — most competitors only target emergency terms and leave the high-value upgrade and commercial traffic on the table.',
      },
      {
        heading: 'Service-Area Pages for Every ZIP You Cover',
        content:
          "Electrical is hyper-local — nobody drives 45 minutes for a tripped breaker, and permit requirements vary by city. We build unique service-area pages for every city, suburb, and ZIP you serve, each with distinct local content, testimonials from that area, and zip-code-specific keywords. This is the single highest-leverage electrical SEO move, and most large franchise competitors (Mr. Electric, Mister Sparky, HomeServe) either skip it entirely or use templated content that Google filters out of local results.",
      },
    ],
    benefits: [
      'GBP optimization across emergency + upgrade + commercial categories',
      'Citations on 100+ home-services + electrical directories',
      'Intent-matched landing pages (emergency / upgrade / commercial)',
      'Service-area architecture for every ZIP in your coverage',
      'Automated review generation targeting 4.8+ average',
      'EV charger + panel upgrade content calendar tied to real search volume',
    ],
    faqs: [
      {
        q: 'How long does electrician SEO take to show results?',
        a: 'Map Pack improvements often appear in 30–45 days for emergency categories because franchise competitors optimize weakly. Organic rankings for competitive upgrade terms ("panel upgrade [city]," "EV charger installation") typically take 3–5 months. Service-area page rankings for suburb-specific keywords often come fastest — 2–3 months.',
      },
      {
        q: 'Is SEO better than Google Ads for electricians?',
        a: "They solve different problems. Ads generate emergency leads today — when a panel fails you can't wait 90 days for SEO. SEO builds an asset that generates leads for years at zero per-click cost. Profitable electrical companies run both: LSAs + search ads for emergency volume, SEO for upgrade-category leads and long-term cost reduction.",
      },
      {
        q: "What's the opportunity in EV charger SEO?",
        a: 'Huge and underexploited. EV-charger search volume has roughly 4x\'d in NC since 2022 and is still compounding. Most electrical contractors have zero EV-specific content, which means ranking for "EV charger installation [city]" is currently much easier than ranking for traditional electrical terms — and the resulting leads average higher-value jobs than standard repair calls.',
      },
    ],
    cityLinks: [],
  },

  'electrician/google-ads': {
    slug: 'electrician/google-ads',
    title: 'Google Ads for Electricians | Fill Your Schedule Fast | Figgle Media',
    metaDescription:
      'Google Ads management for electrical contractors. Local Service Ads, EV charger campaigns, emergency search ads — tuned to undercut franchise competitor CPL.',
    h1: 'Google Ads That Capture Every Emergency Call',
    subtitle: 'Leads from every power outage and EV-charger search — at half the franchise CPL',
    intro:
      "When a homeowner's panel fails at 9pm, they click the first electrician ad and call. Google Ads is how you win that moment. But electrical PPC is brutal without specialist management — franchise competitors (Mr. Electric, Mister Sparky) overspend on head terms, amateur electrical handymen pay for DIY-search clicks, and the EV-charger boom has brought in bad actors bidding up CPCs. We eliminate that waste and route every dollar toward the emergency and upgrade leads that actually convert.",
    sections: [
      {
        heading: 'Local Service Ads (Google Guaranteed)',
        content:
          'For electrical, LSAs consistently crush search ads on cost-per-lead — often $25–$50 per booked call vs $75–$150 for regular PPC. LSAs also display your Google Guaranteed badge, which matters roughly 2x more in electrical than in other trades because customers are already hypersensitive to safety trust signals. We manage your LSA profile, service categories (Electrician, Emergency Electrician, Generator Installer, EV Charger Installer), review responses, service-area tuning, and dispute resolution to recover wrongly-charged leads.',
      },
      {
        heading: 'EV Charger Campaign Strategy',
        content:
          'EV-charger installation is the fastest-growing electrical service category — search volume has roughly 4x\'d in NC since 2022. Most electrical contractors either skip EV ads entirely or run generic "EV charger near me" campaigns that attract price shoppers. We build EV-charger campaigns segmented by EV make (Tesla, Ford F-150 Lightning, GM / Chevy Bolt, Rivian) and panel requirements, with ad copy matched to the specific owner\'s install challenges — Tesla Wall Connector wiring differs from a Ford Charge Station Pro, and the ads that acknowledge those differences convert 40–60% cheaper than generic.',
      },
      {
        heading: 'Emergency vs. Upgrade Campaign Split + Negatives',
        content:
          'Emergency keywords ("no power," "breaker tripped," "emergency electrician near me") and upgrade keywords ("panel upgrade cost," "EV charger install," "generator installation") demand different bid strategies, different landing pages, different call tracking. We split them into separate campaigns with tuned budgets — emergency campaigns scale up after storms and weather events, upgrade campaigns run steady year-round. Equally critical: our electrical negative keyword list blocks DIY searches, wholesale parts queries, electrician jobs listings, and schooling-related terms that drain budgets on competitor sites.',
      },
    ],
    benefits: [
      'LSA setup, management, and dispute recovery',
      'Separate emergency / upgrade / EV-charger / commercial campaigns',
      'EV-make-specific ad copy (Tesla, Ford, GM, Rivian)',
      'Call tracking with lead scoring + recorded conversations',
      'Electrical-specific negative keyword library',
      'Weekly budget optimization tied to weather + local news triggers',
    ],
    faqs: [
      {
        q: 'How much should electricians spend on Google Ads?',
        a: 'Most electrical companies start at $1,500–$3,000/month and scale based on closing rate. Post-storm weeks we typically recommend scaling to $4,000–$6,000 temporarily to capture the generator + panel-upgrade demand spike. EV-charger campaigns run steady year-round and perform best at $1,000–$2,000/month allocated separately from emergency spend.',
      },
      {
        q: "What's the average cost-per-lead for electrician ads?",
        a: "Industry average runs $75–$150 per lead through search ads. Our electrical clients typically see $35–$65 per lead through search and $25–$50 through Local Service Ads — because we split campaigns by intent tier, maintain aggressive negative keywords, and use EV-make-specific ad copy. In less competitive NC secondary markets, we've driven electrical LSA leads below $20.",
      },
      {
        q: 'Do you manage Local Service Ads for electricians?',
        a: "Yes — for electrical, LSAs are almost always the highest-ROI ad channel because you pay only for qualified contacts and the Google Guaranteed badge compounds your trust signals. We handle profile setup, service-category optimization, review management, service-area tuning, and lead-dispute resolution to recover wrongly-billed leads.",
      },
    ],
    cityLinks: [],
  },

  'electrician/lead-generation': {
    slug: 'electrician/lead-generation',
    title: 'Electrician Lead Generation | Book More Service Calls | Figgle Media',
    metaDescription:
      'End-to-end lead generation for electrical contractors. Website, SEO, ads, and automated follow-up systems that keep electricians booked year-round.',
    h1: 'Lead Generation That Keeps Electricians Booked',
    subtitle: 'More emergency calls, more panel upgrades, more EV-charger installs — one integrated system',
    intro:
      "Electrical leads don't pay bills — booked service calls and closed upgrade quotes do. Lead generation for electricians isn't just about driving traffic; it's about building a system where the right customers find you during their moment of electrical panic, trust you enough to pick up the phone instead of your franchise competitor, and close at rates that make each lead genuinely profitable. We build that full-funnel system, tuned specifically to electrical's unique mix of emergency, upgrade, and commercial buyers.",
    sections: [
      {
        heading: 'The Full Electrical Lead Funnel',
        content:
          "Lead generation for electrical has four stages: visibility (Map Pack + LSAs for emergency + upgrade searches), credibility (license + insurance + warranty + review trust signals front and center, not buried), conversion (one-tap call buttons + three-journey forms + EV-charger and panel-upgrade estimators), and follow-up (upgrade-quote nurture sequences + maintenance-agreement enrollment for commercial). Most agencies handle stage one. We build all four as a single integrated system where each stage pushes qualified leads into the next.",
      },
      {
        heading: 'Speed-to-Lead for Emergency Calls',
        content:
          "When a homeowner's panel fails, they'll call 3–4 electricians within 10 minutes. The first company to answer wins the job 78% of the time — and for electrical that number runs higher than other trades because customers are scared and want resolution fast. We implement instant call forwarding, automated text-back for missed calls, CRM alerts with on-call escalation, and dispatch integration so every electrical emergency lead gets a human voice in under 60 seconds, even after hours. Missed emergency calls are the single largest revenue leak in most electrical P&Ls — we close that leak.",
      },
      {
        heading: 'Upgrade Quote Nurture Sequences',
        content:
          "The average residential panel upgrade takes 3–8 weeks from first inquiry to signed contract. EV-charger installs average 2–4 weeks. Most electrical contractors quote once and move on — losing 40–60% of quoted leads because they never follow up, and the customer signs with whoever does. We build automated nurture sequences that stay in touch with unconverted quotes via email + SMS + retargeting ads for 90+ days, with timely check-ins tied to permit timelines and financing approval. Typical recovery: 15–30% of initially-lost quotes become booked jobs.",
      },
    ],
    benefits: [
      'Multi-channel lead capture across web, ads, organic, GBP, and LSA',
      'Speed-to-lead automation with 60-second emergency response',
      'CRM integration + lead scoring by emergency / upgrade / commercial',
      'Panel upgrade + EV charger quote nurture (90-day sequences)',
      'Maintenance-agreement enrollment funnels for commercial clients',
      'Follow-up sequences for unconverted quotes (recovers 15–30%)',
    ],
    faqs: [
      {
        q: 'How many electrical leads can I expect per month?',
        a: "It depends on market size, budget, and service areas. A typical electrical company starts at 30–60 qualified leads per month and scales to 100–200+ over 6–12 months. We focus on lead quality — 40 qualified leads that close at 40% beats 120 tire-kickers at 10%, because electrical lead-handling time matters more than volume.",
      },
      {
        q: 'Do you sell shared electrical leads?',
        a: 'Never. Every lead we generate goes exclusively to you. We do not broker leads to multiple electrical companies. Your website, your ads, your GBP listing, your phone number — every lead is yours alone.',
      },
      {
        q: "What's your lead generation guarantee?",
        a: 'We guarantee measurable improvement in lead volume and quality within 90 days. If your leads have not improved, we keep working for free until they do. We only win when your electricians are booked.',
      },
    ],
    cityLinks: [],
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
    industryParentSlug: 'roofing/web-design',
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
    industryParentSlug: 'roofing/seo',
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
    industryParentSlug: 'roofing/google-ads',
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
    industryParentSlug: 'roofing/lead-generation',
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

  // ─── Charlotte Roofing L3 ──────────────────────────────────────

  'charlotte-roofing-web-design': {
    slug: 'charlotte-roofing-web-design',
    city: 'Charlotte',
    service: 'Web Design',
    industry: 'Roofing',
    title: 'Roofing Web Design Charlotte NC | Figgle Media',
    metaDescription:
      'Custom web design for Charlotte roofing companies. Neighborhood-targeted lead pages, mobile-first design, and local SEO built for the Queen City market.',
    h1: 'Roofing Web Design in Charlotte, NC',
    subtitle: 'Websites built for Charlotte roofers that convert Queen City demand into booked inspections',
    intro:
      "Charlotte is the largest roofing market in the Carolinas — and also the most saturated. Over 2,000 roofing companies compete across Mecklenburg, Union, and Cabarrus counties. Most have generic websites built by agencies that have never set foot in Ballantyne. We build roofing websites specifically for the Charlotte market: neighborhood-level landing pages, hail-storm response templates, and mobile-first design that loads fast on every South End commute.",
    sections: [
      {
        heading: 'Built for the Charlotte Roofing Market',
        content:
          "Charlotte's roofing demand is driven less by hurricanes than by hail and high-wind storms rolling in off the Piedmont — especially in late spring and early summer. Our Charlotte roofing sites include pre-built storm-damage response templates tuned for hail claims, with content addressing the questions Queen City homeowners actually ask their insurer. We also account for the tear-off cycles on 1990s-era suburban builds in Ballantyne and Waxhaw that are now hitting replacement age.",
      },
      {
        heading: 'Neighborhood-Level Targeting Across Mecklenburg',
        content:
          "A homeowner in Myers Park searches very differently than one in University City or Huntersville. We build location-specific landing pages for Charlotte neighborhoods — Uptown, SouthPark, Ballantyne, Dilworth, NoDa, Plaza Midwood, Steele Creek, Matthews, Mint Hill — so when someone searches \"roof repair 28226\" or \"roofer near Ballantyne,\" your site is the one that ranks.",
      },
      {
        heading: 'Charlotte Roofer Portfolio Integration',
        content:
          'We showcase your completed Charlotte projects with before/after galleries, specific neighborhood names, and the materials used. A Dilworth homeowner evaluating roofers trusts photos of the bungalow down the street more than a generic stock gallery. Every project you upload generates hyper-local SEO signals tied to real Charlotte zip codes.',
      },
    ],
    localData: [
      "Mecklenburg County alone has 2,000+ active roofing contractors — your site must stand out above competitors",
      'Average Charlotte roofing website converts at 2.1% vs our clients at 6–9%',
      "Over 75% of Charlotte roofing searches happen on mobile — site speed is decisive",
      'Mecklenburg issues ~6,500 residential re-roof permits annually',
    ],
    benefits: [
      'Pre-built hail-storm response pages for Piedmont weather events',
      'Neighborhood landing pages for Ballantyne, SouthPark, Uptown, Dilworth, NoDa',
      'Before/after galleries tagged with Charlotte neighborhood names',
      'Mobile-first design for on-the-go Queen City homeowners',
      'Insurance claim FAQ tuned to NC adjusters and common Charlotte carriers',
      'Review widget pulling Google + Angi + Nextdoor reviews',
    ],
    faqs: [
      {
        q: 'How much does a roofing website cost in Charlotte?',
        a: 'Our roofing website packages start at $2,999 for Starter and go up to $7,999 for our full lead-generation system. Most Charlotte roofers choose the $4,999 Scaler package, which includes hail-response pages, neighborhood SEO across Mecklenburg, and review integration.',
      },
      {
        q: 'Can you build hail-storm landing pages for my Charlotte roofing site?',
        a: 'Yes — this is one of our most requested features for Queen City roofers. We pre-build hail-response templates you can activate within hours of a storm event, geo-targeted to the affected Mecklenburg zip codes with copy tuned to insurance claim questions.',
      },
      {
        q: 'How fast can I rank in the Charlotte market?',
        a: "Charlotte is more competitive than most NC metros because of the sheer volume of roofers. Expect meaningful Map Pack movement in 60–90 days and first-page organic rankings for neighborhood-specific terms (e.g., \"roofer Ballantyne\") within 4–6 months.",
      },
    ],
    industryParentSlug: 'roofing/web-design',
    locationParentSlug: 'charlotte-web-design',
    siblingLinks: [
      { label: 'SEO for Roofers in Charlotte', slug: 'charlotte-seo-for-roofers' },
      { label: 'Google Ads for Roofers in Charlotte', slug: 'charlotte-google-ads-roofers' },
      { label: 'Roofing Lead Gen in Charlotte', slug: 'charlotte-roofing-lead-generation' },
    ],
    nearbyCityLinks: [
      { city: 'Raleigh', slug: 'raleigh-roofing-web-design' },
    ],
  },

  'charlotte-seo-for-roofers': {
    slug: 'charlotte-seo-for-roofers',
    city: 'Charlotte',
    service: 'SEO',
    industry: 'Roofing',
    title: 'SEO for Roofers in Charlotte NC | Figgle Media',
    metaDescription:
      'Local SEO for Charlotte roofing companies. Rank for "roofer near me Charlotte," dominate the Queen City map pack, and generate organic leads across Mecklenburg.',
    h1: 'SEO for Roofers in Charlotte, NC',
    subtitle: 'Rank in the Queen City map pack and generate organic roofing leads',
    intro:
      "Over 2,000 roofing companies compete for visibility in Charlotte. Only 3 show up in the Google Map Pack for \"roofer near me\" — and those 3 get roughly 75% of the organic call volume. Our roofing SEO campaigns are built specifically for the Queen City market: the neighborhoods, zip codes, and search patterns Charlotte homeowners actually use.",
    sections: [
      {
        heading: 'Charlotte Map Pack Strategy',
        content:
          'We optimize your Google Business Profile for Charlotte-specific roofing searches, build citations on Queen City directories (Charlotte Business Journal, Charlotte Chamber, Nextdoor neighborhood boards), and implement a review generation flow that outpaces competitors. Charlotte Map Pack rankings typically improve within 45–75 days — slightly longer than less-competitive NC metros because of market saturation.',
      },
      {
        heading: 'Mecklenburg Neighborhood Content',
        content:
          "We create content targeting the neighborhoods where your roofing customers actually live: Myers Park, Dilworth, Eastover, SouthPark, Ballantyne, Providence, Plaza Midwood, NoDa, University City, Steele Creek, Huntersville, Matthews. Each piece targets long-tail keywords like \"roof replacement Dilworth\" or \"roofer Ballantyne NC\" that competitors aren't actively pursuing.",
      },
      {
        heading: 'Charlotte Competitor Gap Analysis',
        content:
          "We audit the top 10 ranking Charlotte roofers to map exactly where their SEO is weak — thin content, missing citations, stagnant review velocity, poor site speed. Then we build your campaign to exploit every gap. This isn't generic; it's specific to your Mecklenburg zip codes, your services, and your competitors' backlink profiles.",
      },
    ],
    localData: [
      'Charlotte roofing SEO is ~2x more competitive than Raleigh by keyword difficulty',
      'Map Pack results in Charlotte generate 5x more calls than standard organic listings',
      'Queen City homeowners search for roofers heaviest April–October (hail + heat cycle)',
      'Average organic cost-per-lead in Charlotte: $18 vs paid at $55',
    ],
    benefits: [
      'Google Business Profile optimization for Charlotte + Mecklenburg service area',
      'Local citation building on 100+ Queen City directories',
      'Neighborhood-specific content (Ballantyne, SouthPark, NoDa, etc.)',
      'Automated review generation targeting 4.8+ average',
      'Monthly ranking + lead reports with revenue attribution',
      'Competitor monitoring across Mecklenburg + Union counties',
    ],
    faqs: [
      {
        q: 'How competitive is roofing SEO in Charlotte?',
        a: "Highly competitive — the most competitive roofing market in the Carolinas. Charlotte has 2,000+ roofing companies, and several large regional players spend heavily on SEO. The good news: most of them target generic terms. Neighborhood-specific and long-tail keywords remain wide open.",
      },
      {
        q: 'How long until I rank for "roofer near me Charlotte"?',
        a: 'Map Pack improvements typically appear in 45–75 days. Organic rankings for head terms like "roofing company Charlotte NC" can take 6–9 months. Neighborhood-level terms ("roofer Dilworth," "roof repair Ballantyne") often rank in 3–4 months because competition is thinner.',
      },
      {
        q: 'Do you handle Google Business Profile management?',
        a: 'Yes. GBP optimization is a core part of every Charlotte roofing SEO campaign: photos, posts, Q&A, review responses, service category optimization, and service-area tuning across Mecklenburg.',
      },
    ],
    industryParentSlug: 'roofing/seo',
    locationParentSlug: 'charlotte-web-design',
    siblingLinks: [
      { label: 'Roofing Web Design in Charlotte', slug: 'charlotte-roofing-web-design' },
      { label: 'Google Ads for Roofers in Charlotte', slug: 'charlotte-google-ads-roofers' },
      { label: 'Roofing Lead Gen in Charlotte', slug: 'charlotte-roofing-lead-generation' },
    ],
    nearbyCityLinks: [
      { city: 'Raleigh', slug: 'raleigh-seo-for-roofers' },
    ],
  },

  'charlotte-google-ads-roofers': {
    slug: 'charlotte-google-ads-roofers',
    city: 'Charlotte',
    service: 'Google Ads',
    industry: 'Roofing',
    title: 'Google Ads for Roofers in Charlotte NC | Figgle Media',
    metaDescription:
      'Google Ads management for Charlotte roofing companies. Local Service Ads, search campaigns, and PPC that fill Queen City pipelines with qualified roofing leads.',
    h1: 'Google Ads for Roofers in Charlotte, NC',
    subtitle: 'Qualified Charlotte roofing leads this week — not next quarter',
    intro:
      "Charlotte's roofing market is the most expensive PPC market in the Carolinas, but it also generates the highest-value leads. We manage roofing Google Ads campaigns specifically for the Queen City — targeting Mecklenburg zip codes, Union County suburbs, and the high-value neighborhoods where your best customers live. Our Charlotte clients average 35–50% lower cost-per-lead than industry benchmarks because we actively block waste with roofing-specific negative keyword libraries.",
    sections: [
      {
        heading: 'Charlotte Local Service Ads',
        content:
          'We set up and manage your Google Guaranteed Local Service Ads targeting Charlotte, Huntersville, Matthews, Mint Hill, Pineville, Cornelius, Davidson, and Waxhaw. LSAs appear above search ads and only charge when a homeowner actually contacts you — consistently the highest-ROI channel for Queen City roofers.',
      },
      {
        heading: 'Hail-Season Ad Campaigns',
        content:
          "When hail hits the Piedmont, we activate pre-built storm-response campaigns within hours, targeting the specific Mecklenburg zip codes in the storm path. Ad copy speaks directly to insurance-claim urgency: \"Hail Damage? Free Charlotte Roof Inspection — Call Now.\" Timing is decisive; we're ready before the storm even clears.",
      },
      {
        heading: 'Mecklenburg Geo-Targeting',
        content:
          "We don't waste budget showing ads to people in Greensboro or Asheville. Our campaigns target exact Charlotte zip codes and radius boundaries around your service area — down to neighborhood-level targeting for high-value areas like SouthPark, Ballantyne, Myers Park, and Providence. Every dollar lands in front of homeowners who can actually book you.",
      },
    ],
    localData: [
      'Charlotte roofing ad clicks average $22–$45 (highest in NC) depending on season and keyword',
      'Local Service Ads in Charlotte generate roofing leads at $45–$85 each',
      'Hail-season campaigns can spike Charlotte call volume 500%+ within 24 hours',
      'Ballantyne + SouthPark zip codes have the highest customer lifetime value of any Charlotte submarket',
    ],
    benefits: [
      'Local Service Ads with Google Guaranteed badge',
      'Pre-built hail-response campaigns for Piedmont weather',
      'Mecklenburg + Union County zip-code geo-targeting',
      'Call tracking with lead scoring and recording',
      'Roofing-specific negative keyword list tuned for Charlotte',
      'Weekly optimization + budget management',
    ],
    faqs: [
      {
        q: 'How much should Charlotte roofers spend on Google Ads?',
        a: 'Most Charlotte roofing companies start at $2,500–$4,000/month — higher than other NC metros because CPC is more expensive. During hail season (April–July), we recommend scaling to $5,000–$8,000 to capture the demand surge. Below $2,000/month, Charlotte ad competition will outbid you.',
      },
      {
        q: "What's the typical cost-per-lead for roofing ads in Charlotte?",
        a: 'Our Charlotte roofing clients average $55–$90 per lead through search ads and $45–$75 through Local Service Ads. Industry average in Charlotte runs $120–$180, so our aggressive negative keyword strategy and landing-page optimization cut CPL roughly in half.',
      },
      {
        q: 'Can you manage ads just during hail season?',
        a: "Yes. We offer seasonal campaign management that activates April through September. However, year-round Charlotte campaigns build stronger quality scores and lower long-term CPCs — and you'll pay 20–30% less per click after 6 months of continuous run time.",
      },
    ],
    industryParentSlug: 'roofing/google-ads',
    locationParentSlug: 'charlotte-web-design',
    siblingLinks: [
      { label: 'Roofing Web Design in Charlotte', slug: 'charlotte-roofing-web-design' },
      { label: 'SEO for Roofers in Charlotte', slug: 'charlotte-seo-for-roofers' },
      { label: 'Roofing Lead Gen in Charlotte', slug: 'charlotte-roofing-lead-generation' },
    ],
    nearbyCityLinks: [
      { city: 'Raleigh', slug: 'raleigh-google-ads-roofers' },
    ],
  },

  'charlotte-roofing-lead-generation': {
    slug: 'charlotte-roofing-lead-generation',
    city: 'Charlotte',
    service: 'Lead Generation',
    industry: 'Roofing',
    title: 'Roofing Lead Generation Charlotte NC | Figgle Media',
    metaDescription:
      'End-to-end roofing lead generation in Charlotte. Websites, SEO, ads, and follow-up systems that keep Queen City crews booked across Mecklenburg year-round.',
    h1: 'Roofing Lead Generation in Charlotte, NC',
    subtitle: 'A complete system that keeps Charlotte roofing crews booked',
    intro:
      "Charlotte roofers don't need more clicks — they need more booked inspections. We build end-to-end lead generation systems for Queen City roofing companies: from the first Google search to the signed contract. Your website, SEO, ads, and automated follow-up sequences work together as one system tuned for the Charlotte market's specific rhythms — hail surges, insurance cycles, and the neighborhood-level purchasing patterns of Mecklenburg homeowners.",
    sections: [
      {
        heading: 'Charlotte Roofing Lead Funnel',
        content:
          'We build a funnel tuned to how Queen City homeowners actually search for roofers. That means ranking for Charlotte-specific and neighborhood-level keywords, a conversion-optimized website with hail-claim guidance, and automated follow-up that keeps you top-of-mind while the homeowner navigates their insurance claim. Every stage is tuned to the Charlotte market cycle.',
      },
      {
        heading: 'Speed-to-Lead for Queen City Roofers',
        content:
          "When a Charlotte homeowner submits a form or calls you, they're usually contacting 3–4 other roofers in the same hour — competition is higher here than anywhere else in NC. The first company to respond wins the job 78% of the time. We implement instant notifications, automated text-back, and CRM alerts so you respond in under 60 seconds, before a Ballantyne homeowner has called your competitor down the street.",
      },
      {
        heading: 'Year-Round Pipeline Across Mecklenburg',
        content:
          "Charlotte's roofing market peaks April through September with hail and summer storms, but re-roofs of aging 1990s/2000s-era suburban builds in Huntersville, Matthews, and Waxhaw drive year-round demand. We build campaigns that capture hail-season surges while maintaining steady lead flow through maintenance, gutter, and re-roof keywords during quieter months.",
      },
    ],
    localData: [
      'Charlotte roofers who respond to leads within 5 minutes close at 3x the rate',
      'Mecklenburg roofing market is projected to grow 18% through 2028 (highest in NC)',
      'Mecklenburg County issues ~6,500 residential re-roof permits annually',
      'Average Charlotte homeowner contacts 3.4 roofers before booking',
    ],
    benefits: [
      'Multi-channel lead capture across web, ads, organic, and social',
      'Speed-to-lead automation with 60-second response',
      'CRM integration + lead scoring',
      'Hail-season surge campaigns',
      'Year-round pipeline management across Mecklenburg + Union counties',
      'Monthly reporting tied to actual revenue',
    ],
    faqs: [
      {
        q: 'How many roofing leads can I expect in Charlotte?',
        a: 'Most Charlotte roofers on our lead generation program receive 40–80 qualified leads per month during peak season (April–September) and 20–40 during off-season. Volume depends on budget and service area — companies covering all of Mecklenburg typically see higher volume than those limited to a single submarket.',
      },
      {
        q: 'Do you guarantee roofing leads in Charlotte?',
        a: 'We guarantee measurable improvement in lead volume and quality within 90 days. If your leads have not improved, we keep working for free until they do. Every lead is exclusive to your company — we never sell shared leads.',
      },
      {
        q: 'Can I start with just one service and add more later?',
        a: 'Absolutely. Many Charlotte roofers start with a website and SEO, then add Google Ads and full lead generation as revenue grows. Our packages stack — each service amplifies the others.',
      },
    ],
    industryParentSlug: 'roofing/lead-generation',
    locationParentSlug: 'charlotte-web-design',
    siblingLinks: [
      { label: 'Roofing Web Design in Charlotte', slug: 'charlotte-roofing-web-design' },
      { label: 'SEO for Roofers in Charlotte', slug: 'charlotte-seo-for-roofers' },
      { label: 'Google Ads for Roofers in Charlotte', slug: 'charlotte-google-ads-roofers' },
    ],
    nearbyCityLinks: [
      { city: 'Raleigh', slug: 'raleigh-roofing-lead-generation' },
    ],
  },

  // ─── Raleigh HVAC L3 ───────────────────────────────────────────

  'raleigh-hvac-web-design': {
    slug: 'raleigh-hvac-web-design',
    city: 'Raleigh',
    service: 'Web Design',
    industry: 'HVAC',
    title: 'HVAC Web Design Raleigh NC | Figgle Media',
    metaDescription:
      'Custom web design for Raleigh HVAC companies. Emergency + replacement funnels, service-area pages across the Triangle, and mobile-first design that converts.',
    h1: 'HVAC Web Design in Raleigh, NC',
    subtitle: 'Websites built for Triangle HVAC companies — emergency calls and planned replacements, one site',
    intro:
      "Raleigh's HVAC market has its own rhythm: long, humid AC seasons that run April through October, short but intense heating demand from December through February, and a large stock of 15-to-25-year-old systems in North Raleigh, Cary, and Apex that are hitting replacement age. Your website needs to work for both the 95-degree emergency call and the planned replacement research trip. We build Raleigh HVAC sites that handle both journeys — without forcing one customer into the wrong funnel.",
    sections: [
      {
        heading: 'Built for the Triangle HVAC Market',
        content:
          "Raleigh HVAC customers behave differently than in other NC metros. RTP tech workers expect smart-thermostat compatibility, heat-pump efficiency data, and detailed SEER ratings. Older Triangle neighborhoods (Five Points, Mordecai, Oakwood) have attic installations with specific airflow challenges. We build your site's content and service pages to speak to both segments — with heat-pump education for the Preston/Brier Creek replacement buyer and emergency-repair content for the summer breakdown in Wake Forest.",
      },
      {
        heading: 'Service-Area Pages Across the Triangle',
        content:
          'HVAC rankings are won on service-area coverage. We build dedicated landing pages for every Triangle submarket: North Raleigh, Downtown, Cary, Apex, Wake Forest, Holly Springs, Morrisville, Garner, Knightdale. Each page carries unique neighborhood content, local testimonials, and zip-code-specific keywords. A homeowner searching "AC repair Cary" sees a Cary-specific page, not a generic Raleigh one.',
      },
      {
        heading: 'Duke Energy Rebate Integration',
        content:
          'Raleigh HVAC customers care about Duke Energy rebates — often $500–$1,500 off high-efficiency systems. We build rebate calculators and eligibility checkers directly into your replacement-quote flow, giving Triangle customers a reason to choose you over a competitor who makes them chase rebate paperwork on their own.',
      },
    ],
    localData: [
      'Wake County issues ~11,000 residential HVAC permits annually',
      'Raleigh AC season runs ~6 months — one of the longest in NC',
      "Over 70% of Raleigh HVAC searches happen on mobile during emergency calls",
      'Duke Energy rebates on high-efficiency HVAC save Triangle homeowners $500–$1,500',
    ],
    benefits: [
      'Emergency + planned replacement journey separation',
      'Service-area pages for Cary, Apex, Wake Forest, Holly Springs, Morrisville',
      'Smart-thermostat and heat-pump education content for RTP demographics',
      'Duke Energy rebate calculator integrated into quote flow',
      'Click-to-call buttons sized for thumb-tap in Triangle heat emergencies',
      'Financing application integrated for replacement leads',
    ],
    faqs: [
      {
        q: 'How much does an HVAC website cost in Raleigh?',
        a: 'Packages start at $2,999 for Starter and run to $7,999 for our full lead-generation system. Most Raleigh HVAC companies choose the $4,999 Scaler package which includes service-area pages across the Triangle, rebate integration, and financing application flows.',
      },
      {
        q: "Can my Raleigh HVAC site show Duke Energy rebates?",
        a: "Yes — this is one of our most popular features for Triangle HVAC companies. We integrate a rebate eligibility checker into your replacement-quote flow so Raleigh homeowners see exactly how much they'll save before committing to an estimate.",
      },
      {
        q: 'How fast can I rank for Triangle HVAC keywords?',
        a: "Map Pack rankings typically improve in 30–60 days for core Raleigh HVAC terms. Service-area pages for suburb-specific keywords (\"HVAC Cary,\" \"AC repair Wake Forest\") often rank faster — 2–3 months — because competition is thinner outside the Raleigh city-center keywords.",
      },
    ],
    industryParentSlug: 'hvac/web-design',
    locationParentSlug: 'raleigh-web-design',
    siblingLinks: [
      { label: 'SEO for HVAC in Raleigh', slug: 'raleigh-seo-for-hvac' },
      { label: 'Google Ads for HVAC in Raleigh', slug: 'raleigh-google-ads-hvac' },
      { label: 'HVAC Lead Gen in Raleigh', slug: 'raleigh-hvac-lead-generation' },
    ],
    nearbyCityLinks: [],
  },

  'raleigh-seo-for-hvac': {
    slug: 'raleigh-seo-for-hvac',
    city: 'Raleigh',
    service: 'SEO',
    industry: 'HVAC',
    title: 'SEO for HVAC in Raleigh NC | Figgle Media',
    metaDescription:
      'Local SEO for Raleigh HVAC companies. Rank for "AC repair near me," dominate the Triangle map pack, and generate organic leads across Wake County.',
    h1: 'SEO for HVAC in Raleigh, NC',
    subtitle: 'Rank in the Triangle map pack — before the next heat wave hits',
    intro:
      'Triangle HVAC search volume doubles within 48 hours of a Raleigh heat wave. If you\'re not already in the top 3 map pack results when that spike hits, you miss the entire window — and the phones ring at your competitor down Creedmoor Road instead. Our Raleigh HVAC SEO campaigns are built for that reality: rank before the weather, collect the leads when it breaks.',
    sections: [
      {
        heading: 'Triangle Map Pack Strategy',
        content:
          'We optimize your Google Business Profile for Raleigh-specific HVAC queries, build citations on Triangle-focused directories (Triangle Business Journal, WRAL, Nextdoor neighborhood groups, Wake County BBB), and implement review velocity tuned to outpace the 5–7 large HVAC companies that dominate Raleigh Map Pack. Most meaningful improvements hit within 30–60 days for service-area terms.',
      },
      {
        heading: 'Triangle Neighborhood Content',
        content:
          "Your Raleigh HVAC SEO lives or dies on service-area pages. We create unique content for every Triangle submarket: North Hills, Five Points, Brier Creek, Wake Forest's Heritage, Cary's Preston, Apex's Haddon Hall, Morrisville. Each piece targets long-tail keywords like \"AC repair North Raleigh\" or \"heat pump installation Cary\" that your large competitors don't bother to target individually.",
      },
      {
        heading: 'Heat Wave + Cold Snap Content Calendar',
        content:
          "Triangle weather is bimodal: AC dominates March–October, heating dominates November–February. We build your content calendar to match — AC-repair content published in March, heating content in October, tune-up content twice a year. This keeps your site consistently relevant when each seasonal search spike arrives, instead of scrambling to catch up after.",
      },
    ],
    localData: [
      'Raleigh HVAC search volume spikes 2–4x during heat waves + cold snaps',
      'Triangle map pack results generate 6x more calls than standard organic listings',
      '5–7 large HVAC companies dominate Raleigh Map Pack — service-area pages are the opening',
      'Average Raleigh organic cost-per-lead: $12 vs paid at $50',
    ],
    benefits: [
      'Google Business Profile optimization across Wake + Durham counties',
      'Local citation building on 100+ Triangle directories',
      'Service-area pages for every Triangle submarket',
      'Seasonal content calendar (AC / heating / tune-up cycles)',
      'Automated review generation targeting 4.8+ average',
      'Monthly reporting on map-pack position + lead attribution',
    ],
    faqs: [
      {
        q: 'How competitive is HVAC SEO in Raleigh?',
        a: "Moderately competitive. Raleigh has 5–7 large HVAC companies (Bolton, Yellow Dot, Michael & Son, etc.) that dominate head terms. The opening is in service-area pages — most of those incumbents have thin coverage of suburban submarkets like Holly Springs, Apex, Morrisville, and Knightdale. That's where we concentrate the campaign.",
      },
      {
        q: 'How long until I rank for "AC repair near me Raleigh"?',
        a: 'Map Pack improvements typically appear in 30–60 days. Organic rankings for head terms like "HVAC Raleigh NC" take 4–6 months. Service-area pages for suburb-specific terms often rank in 2–3 months because your content is more locally-specific than the incumbents\'.',
      },
      {
        q: 'Do you handle Google Business Profile management?',
        a: 'Yes. GBP optimization is core to every Raleigh HVAC SEO campaign: photos, posts, Q&A, review responses, service category optimization, and service-area tuning across Wake and Durham counties.',
      },
    ],
    industryParentSlug: 'hvac/seo',
    locationParentSlug: 'raleigh-web-design',
    siblingLinks: [
      { label: 'HVAC Web Design in Raleigh', slug: 'raleigh-hvac-web-design' },
      { label: 'Google Ads for HVAC in Raleigh', slug: 'raleigh-google-ads-hvac' },
      { label: 'HVAC Lead Gen in Raleigh', slug: 'raleigh-hvac-lead-generation' },
    ],
    nearbyCityLinks: [],
  },

  'raleigh-google-ads-hvac': {
    slug: 'raleigh-google-ads-hvac',
    city: 'Raleigh',
    service: 'Google Ads',
    industry: 'HVAC',
    title: 'Google Ads for HVAC in Raleigh NC | Figgle Media',
    metaDescription:
      'Google Ads management for Raleigh HVAC contractors. Local Service Ads, seasonal campaigns, and PPC tuned to Triangle heat waves and cold snaps.',
    h1: 'Google Ads for HVAC in Raleigh, NC',
    subtitle: 'Capture every Triangle heat wave — before the call goes to Michael & Son',
    intro:
      "Raleigh HVAC ad competition is real: Bolton, Yellow Dot, Michael & Son, and several regional players run aggressive campaigns. But they also overspend on waste — generic keywords, poor negatives, no seasonal bid adjustments. We manage Triangle HVAC campaigns that undercut their cost-per-lead through tighter Wake County geo-targeting, weather-driven bid strategy, and emergency-vs-replacement campaign separation.",
    sections: [
      {
        heading: 'Triangle Local Service Ads',
        content:
          "We set up and manage your Google Guaranteed Local Service Ads targeting Raleigh, Cary, Apex, Wake Forest, Holly Springs, Morrisville, Garner, and Knightdale. For Raleigh HVAC, LSAs consistently generate the lowest cost-per-lead of any channel — often $30–$55 per booked emergency call. We handle your LSA profile, dispute resolution, and service-area tuning to squeeze every qualifying lead from the budget.",
      },
      {
        heading: 'Weather-Driven Bid Strategy',
        content:
          "Raleigh HVAC ad CPCs swing dramatically with temperature. A 95°F July day can 3x your bid requirement — if your budget is flat, you disappear right when demand peaks. We adjust bids dynamically using 7-day Raleigh weather forecasts, scaling emergency spend up before heat waves and back down during shoulder-season weeks. Same total budget, ~2x the booked leads.",
      },
      {
        heading: 'Wake County Geo-Targeting + Negatives',
        content:
          "We don't waste budget showing ads to people in Greensboro or Fayetteville. Our campaigns target exact Wake County zip codes and radius boundaries around your service area, with neighborhood-level targeting for high-value submarkets (North Hills, Brier Creek, Preston in Cary). Our Raleigh HVAC negative keyword list blocks DIY searches, parts queries, and job-seekers — common money drains that most competitors leave wide open.",
      },
    ],
    localData: [
      'Raleigh HVAC ad clicks average $18–$40 depending on season and emergency vs planned',
      'Local Service Ads in Raleigh generate HVAC leads at $30–$55 each',
      'Heat-wave campaigns can spike Raleigh call volume 300% within 48 hours',
      'Duke Energy rebate offers boost ad CTR ~25% when referenced in ad copy',
    ],
    benefits: [
      'Local Service Ads with Google Guaranteed badge',
      'Weather-driven seasonal bid strategy tied to Triangle forecasts',
      'Wake County zip-code + neighborhood geo-targeting',
      'Separate emergency vs. planned-replacement campaigns',
      'Raleigh-specific negative keyword list',
      'Weekly optimization + budget management',
    ],
    faqs: [
      {
        q: 'How much should Raleigh HVAC companies spend on Google Ads?',
        a: 'Most Raleigh HVAC companies start at $2,000–$3,500/month. During peak summer (June–August) and peak winter (December–February), we recommend scaling to $4,500–$7,000 to capture the demand surge. Below $1,500/month, Triangle ad competition from Michael & Son and Bolton will outbid you consistently.',
      },
      {
        q: "What's the typical cost-per-lead for HVAC ads in Raleigh?",
        a: 'Our Raleigh HVAC clients average $45–$80 per lead through search ads and $30–$55 through Local Service Ads. Industry average in Raleigh runs $90–$140 per lead, so our aggressive negative keyword strategy and weather-driven bid adjustments cut CPL roughly in half.',
      },
      {
        q: 'Can you manage ads just during summer?',
        a: "Yes. We offer seasonal campaign management that runs April through October for AC terms. However, year-round Raleigh HVAC campaigns build stronger quality scores and lower long-term CPCs — and heating season (December–February) has its own demand spike that single-season campaigns miss entirely.",
      },
    ],
    industryParentSlug: 'hvac/google-ads',
    locationParentSlug: 'raleigh-web-design',
    siblingLinks: [
      { label: 'HVAC Web Design in Raleigh', slug: 'raleigh-hvac-web-design' },
      { label: 'SEO for HVAC in Raleigh', slug: 'raleigh-seo-for-hvac' },
      { label: 'HVAC Lead Gen in Raleigh', slug: 'raleigh-hvac-lead-generation' },
    ],
    nearbyCityLinks: [],
  },

  'raleigh-hvac-lead-generation': {
    slug: 'raleigh-hvac-lead-generation',
    city: 'Raleigh',
    service: 'Lead Generation',
    industry: 'HVAC',
    title: 'HVAC Lead Generation Raleigh NC | Figgle Media',
    metaDescription:
      'End-to-end HVAC lead generation in Raleigh. Websites, SEO, ads, and follow-up systems that keep Triangle techs booked through every heat wave and cold snap.',
    h1: 'HVAC Lead Generation in Raleigh, NC',
    subtitle: 'A complete system that keeps Triangle HVAC techs booked — year round',
    intro:
      "Raleigh HVAC companies don't need more clicks — they need more booked service calls and more closed replacement quotes. We build end-to-end lead generation systems for Triangle HVAC: from the first \"AC not cooling\" Google search to the signed install contract. Your website, SEO, ads, and automated follow-up work together as one system — tuned to Raleigh's long AC season, short heating season, and the replacement wave hitting 1990s-era systems across North Raleigh and Cary.",
    sections: [
      {
        heading: 'Triangle HVAC Lead Funnel',
        content:
          "We build a funnel tuned to how Raleigh homeowners actually search for HVAC help. That means ranking for Triangle-specific emergency keywords, a website that splits emergency and planned journeys cleanly, and automated follow-up that nurtures replacement leads for 6–12 months — because the average Raleigh HVAC replacement customer researches for 4–8 weeks before booking the estimate. Miss that nurture window and the lead goes to Bolton.",
      },
      {
        heading: 'Speed-to-Lead for Emergency Calls',
        content:
          "When a Raleigh homeowner's AC dies at 3pm on an August Wednesday, they'll call 3–4 HVAC companies within 20 minutes. The first to answer wins the job 78% of the time. We implement instant call forwarding, automated text-back for missed calls, CRM alerts, and on-call escalation so every Triangle emergency lead gets a human voice in under 60 seconds — even after hours.",
      },
      {
        heading: 'Year-Round Pipeline (Not Just Summer)',
        content:
          "Raleigh HVAC peaks in July and January — but the money is in smoothing the valleys. We build campaigns that capture those seasonal surges while running Duke Energy rebate promotions, spring AC tune-up specials, fall heating inspections, and maintenance-agreement enrollment during shoulder seasons. A year-round Triangle pipeline beats the feast-or-famine that kills most HVAC companies financially.",
      },
    ],
    localData: [
      'Raleigh HVAC companies that respond in under 5 minutes close at 3x the rate',
      'Triangle HVAC market projected to grow 14% through 2028',
      'Average Raleigh HVAC replacement researched for 4–8 weeks before booking estimate',
      'Maintenance agreement customers generate 3–5x lifetime revenue vs one-off calls',
    ],
    benefits: [
      'Multi-channel lead capture (web, ads, organic, Duke Energy partner referrals)',
      'Speed-to-lead automation with 60-second response',
      'CRM integration + lead scoring by emergency vs planned',
      'Heat-wave + cold-snap surge campaigns',
      'Maintenance agreement enrollment funnels',
      'Replacement lead nurture sequences spanning 6–12 months',
    ],
    faqs: [
      {
        q: 'How many HVAC leads can I expect in Raleigh?',
        a: 'Most Raleigh HVAC companies on our lead generation program receive 50–100 qualified leads per month during peak season (June–August, December–February) and 25–45 during shoulder months. Volume depends on budget and service-area coverage across the Triangle.',
      },
      {
        q: 'Do you guarantee HVAC leads in Raleigh?',
        a: "We guarantee measurable improvement in lead volume and quality within 90 days. If your leads haven't improved, we keep working for free until they do. Every lead is exclusive to your company — we never sell shared HVAC leads.",
      },
      {
        q: 'Can I start with just one service and add more later?',
        a: 'Absolutely. Many Triangle HVAC companies start with a website and SEO, then add Google Ads and full lead-generation as revenue scales. Our packages stack — each service amplifies the others.',
      },
    ],
    industryParentSlug: 'hvac/lead-generation',
    locationParentSlug: 'raleigh-web-design',
    siblingLinks: [
      { label: 'HVAC Web Design in Raleigh', slug: 'raleigh-hvac-web-design' },
      { label: 'SEO for HVAC in Raleigh', slug: 'raleigh-seo-for-hvac' },
      { label: 'Google Ads for HVAC in Raleigh', slug: 'raleigh-google-ads-hvac' },
    ],
    nearbyCityLinks: [],
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
