import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BUSINESS } from '../config/business';
import { buildBreadcrumbSchema } from '../utils/breadcrumbSchema';
import { caseStudies, getCaseStudiesByIndustry, type Industry } from '../data/caseStudies';
import CTABanner from '../components/CTABanner';

type Filter = Industry | 'All';

const filters: Filter[] = ['All', 'Roofing', 'HVAC', 'Electrician'];

export default function OurWorkPage() {
  const [filter, setFilter] = useState<Filter>('All');
  const studies = getCaseStudiesByIndustry(filter);
  const hasStudies = caseStudies.length > 0;

  return (
    <>
      <Helmet>
        <title>Our Work | Case Studies from NC Contractor Clients | Figgle Media</title>
        <meta
          name="description"
          content="Real results for North Carolina contractors. Case studies from roofing, HVAC, and electrical clients working with Figgle Media."
        />
        <link rel="canonical" href={`${BUSINESS.url}/our-work`} />
        <meta property="og:title" content="Our Work | Case Studies from NC Contractor Clients" />
        <meta property="og:description" content="Case studies from NC contractor clients — roofing, HVAC, and electrical." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BUSINESS.url}/our-work`} />
        <meta property="og:image" content={`${BUSINESS.url}/assets/logo.webp`} />
        <script type="application/ld+json">
          {JSON.stringify(buildBreadcrumbSchema([
            { name: 'Home', url: BUSINESS.url },
            { name: 'Our Work', url: `${BUSINESS.url}/our-work` },
          ]))}
        </script>
      </Helmet>

      <div className="pt-20">
        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-cream">Case Studies</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Real Results for <span className="text-burnt-orange">North Carolina Contractors</span>
            </h1>
            <p className="text-xl text-cream leading-relaxed max-w-3xl mx-auto">
              We only work with contractors. As client results come in, we'll publish them here with full metrics and attribution — no cherry-picked anecdotes.
            </p>
          </div>
        </section>

        {/* Case studies grid OR empty state */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {hasStudies ? (
              <>
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Case Studies</h2>
                  <p className="text-lg text-slate-300">Filter by industry to see work from clients like yours.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {filters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                        filter === f
                          ? 'bg-burnt-orange text-white shadow-md'
                          : 'bg-slate-700 text-slate-100 border border-white/10 hover:border-burnt-orange hover:text-burnt-orange'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {studies.map((study) => (
                    <article
                      key={study.id}
                      className="bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="aspect-video overflow-hidden bg-navy-blue/30">
                        <img src={study.image} alt={study.imageAlt} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6 sm:p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="text-xs font-semibold bg-burnt-orange/20 text-burnt-orange px-3 py-1 rounded-full">
                            {study.industry}
                          </span>
                          <span className="text-xs font-semibold bg-white/10 text-slate-200 px-3 py-1 rounded-full">
                            {study.city}, NC
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{study.clientName}</h3>
                        <p className="text-lg text-burnt-orange font-semibold mb-4">{study.headline}</p>
                        <p className="text-slate-300 leading-relaxed mb-6">{study.summary}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <div className="max-w-2xl mx-auto text-center py-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Case studies coming soon
                </h2>
                <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                  We're actively working with North Carolina contractors, and as results come in and clients give us permission to publish, their case studies will appear here.
                </p>
                <p className="text-slate-300 mb-10">
                  In the meantime, reach out for a free custom plan — we'll walk you through our approach and show you what kind of results we're targeting for your industry and market.
                </p>
                <Link
                  to="/free-website-plan"
                  className="inline-flex items-center gap-2 bg-burnt-orange text-white px-8 py-4 rounded-xl font-bold hover:bg-deep-orange transition-all shadow-lg hover:shadow-xl"
                >
                  Get Your Free Plan
                  <ArrowRight size={20} />
                </Link>
              </div>
            )}
          </div>
        </section>

        <CTABanner />
      </div>
    </>
  );
}
