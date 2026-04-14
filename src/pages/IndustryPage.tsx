import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import { getIndustryPage } from '../data/seoPages';
import { BUSINESS } from '../config/business';

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
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-navy-blue/50 border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-cream/60" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link to="/contractor-marketing-agency" className="hover:text-white transition-colors">Contractor Marketing</Link>
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
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Call {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>

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

        {/* Cities We Serve — Internal links to Layer 3 */}
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
                className="inline-flex items-center justify-center gap-2 bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all"
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
