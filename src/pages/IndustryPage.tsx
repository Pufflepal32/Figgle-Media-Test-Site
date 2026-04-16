import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import { getIndustryPage } from '../data/seoPages';
import { BUSINESS } from '../config/business';
import { buildBreadcrumbSchema } from '../utils/breadcrumbSchema';

export default function IndustryPage() {
  const slug = useLocation().pathname.replace(/^\//, '');
  const page = getIndustryPage(slug);

  if (!page) return <Navigate to="/" replace />;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    description: page.metaDescription,
    provider: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: BUSINESS.url,
      telephone: BUSINESS.phoneDisplay,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={`${BUSINESS.url}/${page.slug}`} />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BUSINESS.url}/${page.slug}`} />
        <meta property="og:image" content={`${BUSINESS.url}/assets/logo.webp`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(buildBreadcrumbSchema(
            page.slug.includes('/')
              ? [
                  { name: 'Home', url: BUSINESS.url },
                  { name: page.slug.split('/')[0].charAt(0).toUpperCase() + page.slug.split('/')[0].slice(1), url: `${BUSINESS.url}/${page.slug.split('/')[0]}` },
                  { name: page.h1, url: `${BUSINESS.url}/${page.slug}` },
                ]
              : [
                  { name: 'Home', url: BUSINESS.url },
                  { name: page.h1, url: `${BUSINESS.url}/${page.slug}` },
                ]
          ))}
        </script>
      </Helmet>

      <div className="pt-20">
        {/* Breadcrumb — industry-silo aware */}
        <div className="bg-dark-navy border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-slate-300" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              {page.slug.includes('/') && (() => {
                const industry = page.slug.split('/')[0];
                return (
                  <>
                    <ChevronRight size={14} />
                    <Link to={`/${industry}`} className="hover:text-white transition-colors capitalize">
                      {industry}
                    </Link>
                  </>
                );
              })()}
              <ChevronRight size={14} />
              <span className="text-white">{page.h1}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy-blue via-dark-navy to-navy overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-burnt-orange font-semibold text-sm uppercase tracking-wider mb-4">
                {page.subtitle}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {page.h1}
              </h1>
              <p className="text-xl text-cream max-w-2xl mx-auto mb-10 leading-relaxed">
                {page.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/free-website-plan"
                  className="inline-flex items-center justify-center gap-2 bg-burnt-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-deep-orange transition-all shadow-lg"
                >
                  Get a Free Plan
                  <ArrowRight size={20} />
                </Link>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-navy-blue transition-all"
                >
                  Call {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services grid — only renders on hub pages (/roofing, /hvac) */}
        {page.serviceLinks && page.serviceLinks.length > 0 && (
          <section className="py-20 bg-cream">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
                  Our {page.h1.split(' ')[0]} Services
                </h2>
                <p className="text-lg text-warm-gray">
                  Four specialist services — use one, stack all four. Every service is tuned to how {page.h1.split(' ')[0].toLowerCase()} customers search, compare, and hire.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {page.serviceLinks.map((svc) => (
                  <Link
                    key={svc.slug}
                    to={`/${svc.slug}`}
                    className="group bg-white border border-light-gray rounded-xl p-6 shadow-sm hover:border-burnt-orange hover:shadow-md transition-all"
                  >
                    <h3 className="text-xl font-bold text-navy-blue group-hover:text-burnt-orange transition-colors mb-2">
                      {svc.label}
                    </h3>
                    <p className="text-warm-gray text-sm mb-4">{svc.description}</p>
                    <span className="inline-flex items-center gap-1 text-burnt-orange font-semibold text-sm">
                      Learn more
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content Sections */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
              {page.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-3xl font-bold text-charcoal mb-4">{section.heading}</h2>
                  <p className="text-lg text-warm-gray leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-br from-navy-blue to-navy">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              What You Get
            </h2>
            <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
              {page.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5">
                  <CheckCircle size={20} className="text-burnt-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities We Serve — Internal links to Layer 3 (only renders when L3s exist) */}
        {page.cityLinks.length > 0 && (
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal text-center mb-4">
              Cities We Serve
            </h2>
            <p className="text-warm-gray text-center max-w-2xl mx-auto mb-12">
              We bring our specialized expertise to contractors across North Carolina.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {page.cityLinks.map((link) => (
                <Link
                  key={link.slug}
                  to={`/${link.slug}`}
                  className="group flex items-center gap-3 bg-white rounded-xl p-5 shadow-sm border border-light-gray hover:border-burnt-orange hover:shadow-md transition-all"
                >
                  <MapPin size={20} className="text-burnt-orange flex-shrink-0" />
                  <span className="font-semibold text-charcoal group-hover:text-burnt-orange transition-colors">
                    {link.city}
                  </span>
                  <ArrowRight size={16} className="ml-auto text-warm-gray group-hover:text-burnt-orange transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* FAQs */}
        <section className="py-20 bg-gradient-to-br from-navy-blue to-navy">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {page.faqs.map((faq, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-cream leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-burnt-orange">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto mb-8">
              Get a free, no-obligation plan showing exactly how we'll grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/free-website-plan"
                className="inline-flex items-center justify-center gap-2 bg-white text-burnt-orange px-8 py-4 rounded-xl font-bold text-lg hover:bg-cream transition-all shadow-lg"
              >
                Get Your Free Plan
                <ArrowRight size={20} />
              </Link>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-burnt-orange transition-all"
              >
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
