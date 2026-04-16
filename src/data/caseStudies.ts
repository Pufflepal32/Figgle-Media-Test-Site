export type Industry = 'Roofing' | 'HVAC' | 'Electrician';

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: Industry;
  city: string;
  headline: string;
  summary: string;
  services: string[];
  results: { metric: string; value: string }[];
  image: string;
  imageAlt: string;
  slug: string;
}

// Add real case studies here once you have client-approved metrics and permission to publish.
// Do NOT populate with fabricated numbers or client names — FTC endorsement rules.
export const caseStudies: CaseStudy[] = [];

export function getCaseStudiesByIndustry(industry: Industry | 'All'): CaseStudy[] {
  if (industry === 'All') return caseStudies;
  return caseStudies.filter((c) => c.industry === industry);
}
