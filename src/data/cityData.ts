export interface CityData {
  slug: string;
  name: string;
  state: string;
  region: string;
  areaCode: string;
  phonePlaceholder: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  heroSubline: string;
  heroDescription: string;
  benefits: string[];
  formHeadline: string;
  formSubline: string;
  whySection: {
    headline: string;
    description: string;
    cards: { title: string; description: string; icon: 'trending' | 'building' | 'users' }[];
  };
  stats: { value: string; label: string; description: string }[];
  faqs: { q: string; a: string }[];
  ctaHeadline: string;
  ctaDescription: string;
  /** Path to city photo in /assets/cities/ */
  cityImage: string;
  /** Alt text for the city image */
  cityImageAlt: string;
}

export const cityData: Record<string, CityData> = {
  charlotte: {
    slug: 'charlotte-contractor-web-design',
    name: 'Charlotte',
    state: 'NC',
    region: 'Charlotte Metro',
    areaCode: '704',
    phonePlaceholder: '(704) 555-1234',
    metaTitle: 'Contractor Web Design Charlotte NC | Websites for Contractors | Figgle Media',
    metaDescription: 'Custom web design for construction businesses in Charlotte, NC. High-converting websites that rank on Google and generate leads. The Queen City\'s top contractor marketing agency.',
    metaKeywords: 'contractor web design Charlotte, contractor website Charlotte NC, construction SEO Charlotte, web design for contractors Charlotte, construction marketing Charlotte NC',
    heroSubline: '#1 Rated Contractor Web Design in Charlotte',
    heroDescription: 'We build high-converting websites for construction businesses in Charlotte, NC. Dominate the Queen City\'s booming construction market — get found on Google and turn clicks into booked jobs.',
    benefits: [
      'Rank on Google for "contractor near me Charlotte"',
      'Convert Charlotte area clients into qualified leads',
      'Built for the Queen City\'s booming construction market',
    ],
    formHeadline: 'Get Your Free Charlotte Market Analysis',
    formSubline: 'See how your contractor website stacks up against Charlotte competitors',
    whySection: {
      headline: 'Why Charlotte Construction Businesses Need a Better Website',
      description: 'Charlotte is the largest city in North Carolina and one of the fastest-growing metro areas in the U.S. With massive development across Uptown, South End, and the surrounding suburbs, contractors who invest in their online presence win more jobs.',
      cards: [
        {
          title: 'Queen City Is Booming',
          description: 'Charlotte adds thousands of new residents every year. New neighborhoods, commercial developments, and renovation projects are everywhere — and clients are searching Google to find contractors for all of it.',
          icon: 'trending',
        },
        {
          title: 'Banking Capital Development',
          description: 'As the second-largest banking hub in the U.S., Charlotte\'s commercial construction market is massive. Office builds, retail spaces, and mixed-use developments create constant demand for quality contractors.',
          icon: 'building',
        },
        {
          title: 'Outpace 2,000+ Competitors',
          description: 'The Charlotte metro has thousands of contractors competing for the same clients. Most have outdated websites that don\'t convert. A modern, SEO-optimized site puts you ahead of the pack.',
          icon: 'users',
        },
      ],
    },
    stats: [
      { value: '100%', label: 'Construction Focus', description: 'We exclusively serve construction businesses and contractors' },
      { value: 'Local', label: 'Charlotte Experts', description: 'We know the Charlotte market and your competition' },
      { value: '90-Day', label: 'Performance Guarantee', description: "If your leads don't improve, we work for free until they do" },
    ],
    faqs: [
      { q: 'How much does a contractor website cost in Charlotte?', a: 'Our contractor websites for Charlotte construction businesses start at $2,999 for our Starter package, which includes custom design, mobile optimization, and basic SEO. Our most popular Scaler package is $4,999 and includes aggressive local SEO to rank in the Charlotte market.' },
      { q: 'How long does it take to rank on Google in Charlotte?', a: 'Most Charlotte contractors see meaningful ranking improvements within 3-6 months. The Charlotte market is competitive, but our local SEO strategies target high-intent keywords like "contractor near me Charlotte" and "contractor Charlotte NC" to get you visible fast.' },
      { q: 'Do you work with contractors outside Charlotte?', a: 'We serve construction businesses across North Carolina and West Virginia. But Charlotte is a key market for us — we understand the Queen City\'s growth patterns, from South End to Ballantyne, and know exactly how to position your business.' },
      { q: 'What if I already have a contractor website?', a: 'Most contractors we work with in Charlotte already have a website — it just isn\'t generating leads. We\'ll do a free analysis, show you exactly what\'s holding it back, and build you a new one that converts Charlotte area clients into customers.' },
      { q: 'Do you help with Google Ads for Charlotte contractors?', a: 'Yes. We offer Google Ads management and Local Service Ads specifically for the Charlotte market. Combined with a high-converting website, paid ads get you leads immediately while your organic rankings build over time.' },
    ],
    ctaHeadline: "Ready to Dominate Charlotte's Construction Market?",
    ctaDescription: "Get a free website analysis and see exactly how we'll help you outrank every contractor in the Charlotte area.",
    cityImage: '/assets/cities/charlotte.jpg',
    cityImageAlt: 'Charlotte NC skyline - contractor web design services',
  },

  durham: {
    slug: 'durham-contractor-web-design',
    name: 'Durham',
    state: 'NC',
    region: 'the Triangle',
    areaCode: '919',
    phonePlaceholder: '(919) 555-1234',
    metaTitle: 'Contractor Web Design Durham NC | Websites for Contractors | Figgle Media',
    metaDescription: 'Custom web design for construction businesses in Durham, NC. High-converting websites that rank on Google and generate leads in the Bull City and Triangle area.',
    metaKeywords: 'contractor web design Durham, contractor website Durham NC, construction SEO Durham, web design for contractors Durham, construction marketing Durham NC, Bull City contractor',
    heroSubline: '#1 Rated Contractor Web Design in Durham',
    heroDescription: 'We build high-converting websites for construction businesses in Durham, NC. The Bull City is growing fast — get found on Google by Triangle area clients and turn those clicks into booked jobs.',
    benefits: [
      'Rank on Google for "contractor near me Durham"',
      'Convert Triangle area clients into qualified leads',
      'Built for Durham\'s booming tech-driven construction market',
    ],
    formHeadline: 'Get Your Free Durham Market Analysis',
    formSubline: 'See how your contractor website stacks up against Durham competitors',
    whySection: {
      headline: 'Why Durham Construction Businesses Need a Better Website',
      description: 'Durham is experiencing a tech-fueled construction boom. Research Triangle Park, Duke University, and downtown revitalization are driving massive demand for contractors. If your website isn\'t generating leads, you\'re leaving money on the table.',
      cards: [
        {
          title: 'Bull City Is Booming',
          description: 'Durham\'s population has surged with the tech boom. New apartments, office spaces, and mixed-use developments are going up across downtown and RTP — and clients are searching Google to find contractors for every project.',
          icon: 'trending',
        },
        {
          title: 'RTP Drives Development',
          description: 'Research Triangle Park is one of the largest research parks in the world. The constant flow of tech companies, lab spaces, and corporate campuses creates year-round construction demand in the Durham market.',
          icon: 'building',
        },
        {
          title: 'Beat Local Competition',
          description: 'Durham has hundreds of contractors competing for Triangle area clients. Most have outdated websites that don\'t rank or convert. A modern, SEO-optimized site sets you apart and wins you more jobs.',
          icon: 'users',
        },
      ],
    },
    stats: [
      { value: '100%', label: 'Construction Focus', description: 'We exclusively serve construction businesses and contractors' },
      { value: 'Local', label: 'Triangle Experts', description: 'We know the Durham-Raleigh market and your competition' },
      { value: '90-Day', label: 'Performance Guarantee', description: "If your leads don't improve, we work for free until they do" },
    ],
    faqs: [
      { q: 'How much does a contractor website cost in Durham?', a: 'Our contractor websites for Durham construction businesses start at $2,999 for our Starter package. Our most popular Scaler package is $4,999 and includes aggressive local SEO to rank in the Durham and Triangle market.' },
      { q: 'How long does it take to rank on Google in Durham?', a: 'Most Durham contractors see ranking improvements within 3-6 months. We target high-intent keywords like "contractor near me Durham" and "contractor Durham NC" to get you visible in the Triangle market fast.' },
      { q: 'Do you serve the entire Triangle area?', a: 'Yes! We serve contractors across Durham, Raleigh, Chapel Hill, and the entire Triangle. We understand the nuances of each local market and optimize your site accordingly.' },
      { q: 'What if I already have a contractor website?', a: 'Most Durham contractors we work with already have a website that isn\'t generating leads. We\'ll do a free analysis, show you what\'s holding it back, and build you a new one that converts Bull City clients into customers.' },
      { q: 'Do you help with Google Ads for Durham contractors?', a: 'Yes. We offer Google Ads and Local Service Ads management for the Durham market. Combined with a high-converting website, paid ads get you leads immediately while organic rankings build.' },
    ],
    ctaHeadline: "Ready to Dominate Durham's Construction Market?",
    ctaDescription: "Get a free website analysis and see exactly how we'll help you outrank every contractor in the Triangle area.",
    cityImage: '/assets/cities/durham.jpg',
    cityImageAlt: 'Downtown Durham NC skyline - contractor web design services',
  },

  greensboro: {
    slug: 'greensboro-contractor-web-design',
    name: 'Greensboro',
    state: 'NC',
    region: 'the Piedmont Triad',
    areaCode: '336',
    phonePlaceholder: '(336) 555-1234',
    metaTitle: 'Contractor Web Design Greensboro NC | Websites for Contractors | Figgle Media',
    metaDescription: 'Custom web design for construction businesses in Greensboro, NC. High-converting websites that rank on Google and generate leads in the Piedmont Triad.',
    metaKeywords: 'contractor web design Greensboro, contractor website Greensboro NC, construction SEO Greensboro, web design for contractors Greensboro, construction marketing Piedmont Triad',
    heroSubline: '#1 Rated Contractor Web Design in Greensboro',
    heroDescription: 'We build high-converting websites for construction businesses in Greensboro, NC. The Piedmont Triad is growing — get found on Google by local clients and turn those searches into booked jobs.',
    benefits: [
      'Rank on Google for "contractor near me Greensboro"',
      'Convert Piedmont Triad clients into qualified leads',
      'Built for Greensboro\'s revitalizing downtown market',
    ],
    formHeadline: 'Get Your Free Greensboro Market Analysis',
    formSubline: 'See how your contractor website stacks up against Greensboro competitors',
    whySection: {
      headline: 'Why Greensboro Construction Businesses Need a Better Website',
      description: 'Greensboro is the heart of the Piedmont Triad and a hub of commercial and residential development. With downtown revitalization, new logistics hubs, and growing suburban neighborhoods, contractors who are visible online win more jobs.',
      cards: [
        {
          title: 'Triad Is Growing Fast',
          description: 'The Piedmont Triad metro area is one of NC\'s largest. New housing developments, commercial projects, and infrastructure upgrades mean constant demand for contractors across Greensboro, High Point, and beyond.',
          icon: 'trending',
        },
        {
          title: 'Downtown Renaissance',
          description: 'Greensboro\'s downtown is being transformed with new mixed-use developments, renovated historic buildings, and public projects. Contractors positioned online are capturing this wave of construction work.',
          icon: 'building',
        },
        {
          title: 'Stand Out Locally',
          description: 'Most Greensboro contractors rely on word of mouth alone. A professional, SEO-optimized website puts you in front of clients who are actively searching — before they even ask their neighbor for a referral.',
          icon: 'users',
        },
      ],
    },
    stats: [
      { value: '100%', label: 'Construction Focus', description: 'We exclusively serve construction businesses and contractors' },
      { value: 'Local', label: 'Triad Experts', description: 'We know the Greensboro market and your competition' },
      { value: '90-Day', label: 'Performance Guarantee', description: "If your leads don't improve, we work for free until they do" },
    ],
    faqs: [
      { q: 'How much does a contractor website cost in Greensboro?', a: 'Our contractor websites for Greensboro construction businesses start at $2,999 for our Starter package. Our most popular Scaler package is $4,999 and includes aggressive local SEO to rank in the Piedmont Triad market.' },
      { q: 'How long does it take to rank on Google in Greensboro?', a: 'Most Greensboro contractors see ranking improvements within 3-6 months. The Triad market is less saturated than Charlotte or Raleigh, which means faster results with the right SEO strategy.' },
      { q: 'Do you serve the entire Piedmont Triad?', a: 'Yes! We serve contractors across Greensboro, Winston-Salem, High Point, Burlington, and the entire Piedmont Triad. We optimize your site for your specific service area.' },
      { q: 'What if I already have a contractor website?', a: 'Most contractors we work with already have a website that isn\'t generating leads. We\'ll do a free analysis, show you what\'s holding it back, and build one that converts Triad area clients into customers.' },
      { q: 'Do you help with Google Ads for Greensboro contractors?', a: 'Yes. We manage Google Ads and Local Service Ads for the Greensboro market. Paid ads get you leads immediately while your organic rankings build over time.' },
    ],
    ctaHeadline: "Ready to Dominate Greensboro's Construction Market?",
    ctaDescription: "Get a free website analysis and see exactly how we'll help you outrank every contractor in the Piedmont Triad.",
    cityImage: '/assets/cities/greensboro.jpg',
    cityImageAlt: 'Greensboro NC skyline - contractor web design services',
  },

  'winston-salem': {
    slug: 'winston-salem-contractor-web-design',
    name: 'Winston-Salem',
    state: 'NC',
    region: 'the Piedmont Triad',
    areaCode: '336',
    phonePlaceholder: '(336) 555-1234',
    metaTitle: 'Contractor Web Design Winston-Salem NC | Websites for Contractors | Figgle Media',
    metaDescription: 'Custom web design for construction businesses in Winston-Salem, NC. High-converting websites that rank on Google and generate leads. Innovation Quarter and beyond.',
    metaKeywords: 'contractor web design Winston-Salem, contractor website Winston-Salem NC, construction SEO Winston-Salem, web design for contractors Winston-Salem, construction marketing Winston-Salem NC',
    heroSubline: '#1 Rated Contractor Web Design in Winston-Salem',
    heroDescription: 'We build high-converting websites for construction businesses in Winston-Salem, NC. From Innovation Quarter to historic renovations — get found on Google and turn clicks into booked jobs.',
    benefits: [
      'Rank on Google for "contractor near me Winston-Salem"',
      'Convert Piedmont Triad clients into qualified leads',
      'Built for Winston-Salem\'s innovation-driven growth',
    ],
    formHeadline: 'Get Your Free Winston-Salem Market Analysis',
    formSubline: 'See how your contractor website stacks up against Winston-Salem competitors',
    whySection: {
      headline: 'Why Winston-Salem Construction Businesses Need a Better Website',
      description: 'Winston-Salem is reinventing itself. The Innovation Quarter, Wake Forest growth, and historic preservation projects are driving new construction demand. Contractors who show up online are the ones getting called.',
      cards: [
        {
          title: 'Innovation Quarter Growth',
          description: 'Winston-Salem\'s Innovation Quarter is a $1B+ development transforming the city. New office spaces, biotech labs, apartments, and retail mean steady construction demand for contractors positioned to capture it.',
          icon: 'trending',
        },
        {
          title: 'Historic Renovation Boom',
          description: 'Winston-Salem\'s rich architectural history drives a thriving renovation market. From Old Salem to West End, property owners are investing in historic restoration — and searching Google for qualified contractors.',
          icon: 'building',
        },
        {
          title: 'Less Competition Online',
          description: 'Compared to Charlotte and Raleigh, fewer Winston-Salem contractors have invested in their online presence. That\'s your advantage — a professional website gets you to the top of local search faster.',
          icon: 'users',
        },
      ],
    },
    stats: [
      { value: '100%', label: 'Construction Focus', description: 'We exclusively serve construction businesses and contractors' },
      { value: 'Local', label: 'Triad Experts', description: 'We know the Winston-Salem market and your competition' },
      { value: '90-Day', label: 'Performance Guarantee', description: "If your leads don't improve, we work for free until they do" },
    ],
    faqs: [
      { q: 'How much does a contractor website cost in Winston-Salem?', a: 'Our contractor websites for Winston-Salem construction businesses start at $2,999 for our Starter package. Our most popular Scaler package is $4,999 and includes aggressive local SEO to rank in the Winston-Salem and Triad market.' },
      { q: 'How long does it take to rank on Google in Winston-Salem?', a: 'Most Winston-Salem contractors see ranking improvements within 3-6 months. The Winston-Salem market has less online competition than larger NC cities, which often means faster SEO results.' },
      { q: 'Do you serve the entire Triad area?', a: 'Yes! We serve contractors across Winston-Salem, Greensboro, High Point, and the entire Piedmont Triad. We optimize your site for your specific service area.' },
      { q: 'What if I already have a contractor website?', a: 'Most contractors we work with already have a website that isn\'t generating leads. We\'ll do a free analysis, show you what\'s holding it back, and build one that actually converts.' },
      { q: 'Do you help with Google Ads for Winston-Salem contractors?', a: 'Yes. We manage Google Ads and Local Service Ads for the Winston-Salem market. Paid ads get you leads immediately while your organic rankings build.' },
    ],
    ctaHeadline: "Ready to Dominate Winston-Salem's Construction Market?",
    ctaDescription: "Get a free website analysis and see exactly how we'll help you outrank every contractor in the Winston-Salem area.",
    cityImage: '/assets/cities/winston-salem.jpg',
    cityImageAlt: 'Winston-Salem NC skyline - contractor web design services',
  },

  fayetteville: {
    slug: 'fayetteville-contractor-web-design',
    name: 'Fayetteville',
    state: 'NC',
    region: 'the Sandhills',
    areaCode: '910',
    phonePlaceholder: '(910) 555-1234',
    metaTitle: 'Contractor Web Design Fayetteville NC | Websites for Contractors | Figgle Media',
    metaDescription: 'Custom web design for construction businesses in Fayetteville, NC. High-converting websites that rank on Google and generate leads near Fort Liberty and the Sandhills region.',
    metaKeywords: 'contractor web design Fayetteville, contractor website Fayetteville NC, construction SEO Fayetteville, web design for contractors Fayetteville, construction marketing Fayetteville NC, Fort Liberty contractor',
    heroSubline: '#1 Rated Contractor Web Design in Fayetteville',
    heroDescription: 'We build high-converting websites for construction businesses in Fayetteville, NC. With Fort Liberty and steady military-driven growth, Fayetteville contractors who show up online win more jobs.',
    benefits: [
      'Rank on Google for "contractor near me Fayetteville"',
      'Capture military community and civilian project leads',
      'Built for Fayetteville\'s steady, military-driven market',
    ],
    formHeadline: 'Get Your Free Fayetteville Market Analysis',
    formSubline: 'See how your contractor website stacks up against Fayetteville competitors',
    whySection: {
      headline: 'Why Fayetteville Construction Businesses Need a Better Website',
      description: 'Fayetteville is anchored by Fort Liberty — one of the largest military installations in the world. The constant flow of military families, base development, and commercial growth creates reliable demand for contractors year-round.',
      cards: [
        {
          title: 'Military-Driven Demand',
          description: 'Fort Liberty brings a constant stream of families needing home renovations, new builds, and repairs. Military relocations mean regular turnover and fresh demand for contractors who are easy to find online.',
          icon: 'trending',
        },
        {
          title: 'Steady Commercial Growth',
          description: 'Fayetteville\'s commercial corridor continues to expand with new retail, medical facilities, and mixed-use developments. Contractors visible on Google capture these commercial opportunities first.',
          icon: 'building',
        },
        {
          title: 'Underserved Online Market',
          description: 'Most Fayetteville contractors still rely on word of mouth and base referrals. Very few have invested in a professional web presence — which means a well-optimized site gives you a massive competitive edge.',
          icon: 'users',
        },
      ],
    },
    stats: [
      { value: '100%', label: 'Construction Focus', description: 'We exclusively serve construction businesses and contractors' },
      { value: 'Local', label: 'Sandhills Experts', description: 'We know the Fayetteville market and your competition' },
      { value: '90-Day', label: 'Performance Guarantee', description: "If your leads don't improve, we work for free until they do" },
    ],
    faqs: [
      { q: 'How much does a contractor website cost in Fayetteville?', a: 'Our contractor websites for Fayetteville construction businesses start at $2,999 for our Starter package. Our most popular Scaler package is $4,999 and includes aggressive local SEO to rank in the Fayetteville and Sandhills market.' },
      { q: 'How long does it take to rank on Google in Fayetteville?', a: 'Most Fayetteville contractors see ranking improvements within 2-4 months. The Fayetteville market has less online competition than larger NC metros, making it one of the fastest markets to rank in.' },
      { q: 'Do you work with military-adjacent contractors?', a: 'Absolutely. Many of our Fayetteville clients serve the Fort Liberty community. We understand the unique dynamics of military-driven demand and optimize your site to capture those searches.' },
      { q: 'What if I already have a contractor website?', a: 'Most contractors we work with in Fayetteville already have a website that isn\'t generating leads. We\'ll do a free analysis, show you what\'s holding it back, and build one that converts.' },
      { q: 'Do you help with Google Ads for Fayetteville contractors?', a: 'Yes. We manage Google Ads and Local Service Ads for the Fayetteville market. Paid ads get you leads immediately while organic rankings build.' },
    ],
    ctaHeadline: "Ready to Dominate Fayetteville's Construction Market?",
    ctaDescription: "Get a free website analysis and see exactly how we'll help you outrank every contractor in the Fayetteville area.",
    cityImage: '/assets/cities/fayetteville.jpg',
    cityImageAlt: 'Fayetteville NC Cape Fear River Trail - contractor web design services',
  },

  wilmington: {
    slug: 'wilmington-contractor-web-design',
    name: 'Wilmington',
    state: 'NC',
    region: 'the Cape Fear Coast',
    areaCode: '910',
    phonePlaceholder: '(910) 555-1234',
    metaTitle: 'Contractor Web Design Wilmington NC | Websites for Contractors | Figgle Media',
    metaDescription: 'Custom web design for construction businesses in Wilmington, NC. High-converting websites that rank on Google and generate leads on the Cape Fear Coast.',
    metaKeywords: 'contractor web design Wilmington, contractor website Wilmington NC, construction SEO Wilmington, web design for contractors Wilmington, construction marketing Wilmington NC, coastal contractor',
    heroSubline: '#1 Rated Contractor Web Design in Wilmington',
    heroDescription: 'We build high-converting websites for construction businesses in Wilmington, NC. The Cape Fear Coast is growing — get found on Google by local clients and turn those clicks into booked jobs.',
    benefits: [
      'Rank on Google for "contractor near me Wilmington"',
      'Capture coastal construction and renovation leads',
      'Built for Wilmington\'s tourism-driven building boom',
    ],
    formHeadline: 'Get Your Free Wilmington Market Analysis',
    formSubline: 'See how your contractor website stacks up against Wilmington competitors',
    whySection: {
      headline: 'Why Wilmington Construction Businesses Need a Better Website',
      description: 'Wilmington is one of NC\'s fastest-growing coastal cities. Between tourism-driven commercial builds, hurricane-resilient construction, and steady residential growth, contractors who are visible online capture more of this booming market.',
      cards: [
        {
          title: 'Coastal Growth Surge',
          description: 'Wilmington\'s population is booming as more people relocate to the coast. New residential communities, vacation properties, and retirement homes mean constant demand for contractors across the Cape Fear region.',
          icon: 'trending',
        },
        {
          title: 'Storm-Ready Construction',
          description: 'Coastal NC demands specialized construction — hurricane-resistant builds, storm damage repair, and resilient renovations. Homeowners search Google for contractors with this expertise. Your website needs to show it.',
          icon: 'building',
        },
        {
          title: 'Tourism Fuels Development',
          description: 'Wilmington\'s thriving tourism industry drives demand for hotels, restaurants, retail spaces, and vacation rentals. Contractors who rank locally online are first in line for these commercial projects.',
          icon: 'users',
        },
      ],
    },
    stats: [
      { value: '100%', label: 'Construction Focus', description: 'We exclusively serve construction businesses and contractors' },
      { value: 'Local', label: 'Coastal NC Experts', description: 'We know the Wilmington market and your competition' },
      { value: '90-Day', label: 'Performance Guarantee', description: "If your leads don't improve, we work for free until they do" },
    ],
    faqs: [
      { q: 'How much does a contractor website cost in Wilmington?', a: 'Our contractor websites for Wilmington construction businesses start at $2,999 for our Starter package. Our most popular Scaler package is $4,999 and includes aggressive local SEO to rank in the Wilmington and Cape Fear market.' },
      { q: 'How long does it take to rank on Google in Wilmington?', a: 'Most Wilmington contractors see ranking improvements within 3-5 months. The coastal market is competitive but our local SEO strategies target the exact keywords Wilmington clients search.' },
      { q: 'Do you understand coastal construction marketing?', a: 'Yes. We know that Wilmington contractors deal with unique factors — hurricane season, coastal building codes, and seasonal demand. We build websites and content strategies that speak directly to these needs.' },
      { q: 'What if I already have a contractor website?', a: 'Most contractors we work with in Wilmington already have a website that isn\'t generating leads. We\'ll do a free analysis, show you what\'s holding it back, and build one that actually converts.' },
      { q: 'Do you help with Google Ads for Wilmington contractors?', a: 'Yes. We manage Google Ads and Local Service Ads for the Wilmington market. Paid ads get you leads right away while organic rankings build.' },
    ],
    ctaHeadline: "Ready to Dominate Wilmington's Construction Market?",
    ctaDescription: "Get a free website analysis and see exactly how we'll help you outrank every contractor on the Cape Fear Coast.",
    cityImage: '/assets/cities/wilmington.jpg',
    cityImageAlt: 'Downtown Wilmington NC from Cape Fear Memorial Bridge - contractor web design services',
  },

  asheville: {
    slug: 'asheville-contractor-web-design',
    name: 'Asheville',
    state: 'NC',
    region: 'Western NC',
    areaCode: '828',
    phonePlaceholder: '(828) 555-1234',
    metaTitle: 'Contractor Web Design Asheville NC | Websites for Contractors | Figgle Media',
    metaDescription: 'Custom web design for construction businesses in Asheville, NC. High-converting websites that rank on Google and generate leads in Western NC and the Blue Ridge.',
    metaKeywords: 'contractor web design Asheville, contractor website Asheville NC, construction SEO Asheville, web design for contractors Asheville, construction marketing Western NC, Blue Ridge contractor',
    heroSubline: '#1 Rated Contractor Web Design in Asheville',
    heroDescription: 'We build high-converting websites for construction businesses in Asheville, NC. Western NC\'s tourism boom and mountain living demand mean more construction work — and clients are searching Google to find you.',
    benefits: [
      'Rank on Google for "contractor near me Asheville"',
      'Capture mountain construction and renovation leads',
      'Built for Asheville\'s unique tourism-driven market',
    ],
    formHeadline: 'Get Your Free Asheville Market Analysis',
    formSubline: 'See how your contractor website stacks up against Asheville competitors',
    whySection: {
      headline: 'Why Asheville Construction Businesses Need a Better Website',
      description: 'Asheville is one of the most sought-after destinations in the Southeast. The combination of tourism, mountain living, and a thriving arts scene drives constant construction demand — from custom mountain homes to boutique commercial spaces.',
      cards: [
        {
          title: 'Mountain Living Demand',
          description: 'More people are moving to the Asheville area for the mountain lifestyle. Custom homes, cabins, and luxury builds in the Blue Ridge create steady high-value work for contractors who are easy to find online.',
          icon: 'trending',
        },
        {
          title: 'Tourism Drives Building',
          description: 'Asheville\'s booming tourism industry fuels demand for hotels, breweries, restaurants, and retail spaces. Commercial construction projects are constant — and business owners search Google for contractors to build them.',
          icon: 'building',
        },
        {
          title: 'Stand Out in WNC',
          description: 'Western NC contractors face unique challenges — mountain terrain, specialized builds, and a tight-knit community. A professional website that speaks to these specifics earns trust and wins more bids.',
          icon: 'users',
        },
      ],
    },
    stats: [
      { value: '100%', label: 'Construction Focus', description: 'We exclusively serve construction businesses and contractors' },
      { value: 'Local', label: 'WNC Experts', description: 'We know the Asheville market and your competition' },
      { value: '90-Day', label: 'Performance Guarantee', description: "If your leads don't improve, we work for free until they do" },
    ],
    faqs: [
      { q: 'How much does a contractor website cost in Asheville?', a: 'Our contractor websites for Asheville construction businesses start at $2,999 for our Starter package. Our most popular Scaler package is $4,999 and includes aggressive local SEO to rank in the Asheville and Western NC market.' },
      { q: 'How long does it take to rank on Google in Asheville?', a: 'Most Asheville contractors see ranking improvements within 3-5 months. The Asheville market is competitive in certain niches but our hyper-local SEO strategies get results.' },
      { q: 'Do you understand mountain construction?', a: 'Yes. We know that Asheville-area contractors deal with unique factors — mountain terrain, specialized building requirements, and seasonal tourism cycles. We build content and SEO strategies that speak to Western NC clients.' },
      { q: 'What if I already have a contractor website?', a: 'Most contractors we work with in Asheville already have a website that isn\'t pulling its weight. We\'ll do a free analysis, show you exactly what\'s wrong, and build one that generates real leads.' },
      { q: 'Do you help with Google Ads for Asheville contractors?', a: 'Yes. We manage Google Ads and Local Service Ads for the Asheville market. Paid ads get you leads right away while organic rankings build over time.' },
    ],
    ctaHeadline: "Ready to Dominate Asheville's Construction Market?",
    ctaDescription: "Get a free website analysis and see exactly how we'll help you outrank every contractor in Western North Carolina.",
    cityImage: '/assets/cities/asheville.jpg',
    cityImageAlt: 'Downtown Asheville NC panorama - contractor web design services',
  },
};

export function getCityBySlug(slug: string): CityData | null {
  // Match slug pattern like "charlotte-contractor-web-design" -> "charlotte"
  for (const key of Object.keys(cityData)) {
    if (cityData[key].slug === slug) {
      return cityData[key];
    }
  }
  return null;
}

export function getAllCities(): CityData[] {
  return Object.values(cityData);
}
