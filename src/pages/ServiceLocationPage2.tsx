import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight, MapPin, ChevronRight, Phone, BarChart3, Zap } from 'lucide-react';
import { getServiceLocationPage } from '../data/seoPages';
import { BUSINESS } from '../config/business';
import { buildBreadcrumbSchema } from '../utils/breadcrumbSchema';
import { useState } from 'react';

export default function ServiceLocationPage2() {
  const slug = useLocation().pathname.replace(/^\//, '');
  const page = getServiceLocationPage(slug);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  if (!page) return <Navigate to="/" replace />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service-location form submitted:', formData);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${page.industry} ${page.service} in ${page.city}`,
    description: page.metaDescription,
    areaServed: { '@type': 'City', name: page.city, containedInPlace: { '@type': 'State', name: 'North Carolina' } },
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      url: BUSINESS.url,
      telephone: BUSINESS.phoneDisplay,
      address: { '@type': 'PostalAddress', addressLocality: page.city, addressRegion: 'NC', addressCountry: 'US' },
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
          {JSON.stringify(buildBreadcrumbSchema([
            { name: 'Home', url: BUSINESS.url },
            { name: page.industry, url: `${BUSINESS.url}/${page.industryParentSlug}` },
            { name: page.city, url: `${BUSINESS.url}/${page.locationParentSlug}` },
            { name: `${page.industry} ${page.service}`, url: `${BUSINESS.url}/${page.slug}` },
          ]))}
        </script>
      </Helmet>

      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-navy-blue/50 border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-cream/60 flex-wrap" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link to={`/${page.industryParentSlug}`} className="hover:text-white transition-colors">
                {page.industry} {page.service}
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">{page.city}</span>
            </nav>
          </div>
        </div>

        {/* Hero with Lead Form */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-navy-blue via-dark-navy to-navy overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left — Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-burnt-orange/20 border border-burnt-orange/30 rounded-full px-4 py-2">
                  <MapPin size={14} className="text-burnt-orange" />
                  <span className="text-burnt-orange font-semibold text-sm">{page.city}, NC</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {page.h1}
                </h1>

                <p className="text-sm font-semibold text-cream/70">{page.subtitle}</p>

                <p className="text-lg text-cream leading-relaxed">{page.intro}</p>

                {/* Local Data Points */}
                <div className="space-y-3">
                  {page.localData.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <BarChart3 size={18} className="text-burnt-orange flex-shrink-0 mt-1" />
                      <span className="text-white text-sm">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href={`tel:${BUSINESS.phoneTel}`}
                    className="inline-flex items-center justify-center gap-3 bg-burnt-orange text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-deep-orange transition-all shadow-lg"
                  >
                    <Phone size={20} />
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Right — Lead Form */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-light-gray">
                <h2 className="text-2xl font-bold text-charcoal mb-2 text-center">
                  Get a Free {page.industry} {page.service} Plan
                </h2>
                <p className="text-warm-gray text-center mb-6 text-sm">
                  Tailored for {page.city} {page.industry.toLowerCase()} companies
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-burnt-orange text-white font-bold py-4 rounded-lg hover:bg-deep-orange transition-all shadow-lg text-lg"
                  >
                    Get My Free Plan
                  </button>
                  <p className="text-xs text-center text-warm-gray">
                    No obligation. We'll analyze your {page.city} market and show you exactly how to get more leads.
                  </p>
                </form>
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

              {/* Internal link to industry parent */}
              <div className="bg-white rounded-xl p-6 border border-light-gray">
                <p className="text-warm-gray mb-3">
                  Learn more about our {page.industry.toLowerCase()} {page.service.toLowerCase()} expertise:
                </p>
                <Link
                  to={`/${page.industryParentSlug}`}
                  className="inline-flex items-center gap-2 text-burnt-orange font-semibold hover:text-deep-orange transition-colors"
                >
                  {page.industry} {page.service} — How We Do It
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-br from-navy-blue to-navy">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              What's Included
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

        {/* Other Services in This City */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-4">
              Other Roofing Services in {page.city}
            </h2>
            <p className="text-warm-gray text-center max-w-2xl mx-auto mb-10">
              Get the full marketing stack working together for maximum results.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {page.siblingLinks.map((link) => (
                <Link
                  key={link.slug}
                  to={`/${link.slug}`}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-light-gray hover:border-burnt-orange hover:shadow-md transition-all"
                >
                  <Zap size={24} className="text-burnt-orange mb-3" />
                  <h3 className="font-bold text-charcoal group-hover:text-burnt-orange transition-colors mb-2">
                    {link.label}
                  </h3>
                  <span className="text-sm text-burnt-orange font-semibold inline-flex items-center gap-1">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>

            {/* Link back to location hub */}
            <div className="text-center mt-10">
              <Link
                to={`/${page.locationParentSlug}`}
                className="inline-flex items-center gap-2 text-burnt-orange font-semibold hover:text-deep-orange transition-colors"
              >
                <MapPin size={18} />
                View all services in {page.city}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Same Service in Nearby Cities */}
        {page.nearbyCityLinks.length > 0 && (
          <section className="py-16 bg-gradient-to-br from-light-navy to-navy-blue">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white text-center mb-8">
                {page.industry} {page.service} in Nearby Cities
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {page.nearbyCityLinks.map((link) => (
                  <Link
                    key={link.slug}
                    to={`/${link.slug}`}
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-3 rounded-xl hover:bg-white/20 transition-all"
                  >
                    <MapPin size={16} />
                    {link.city}
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal text-center mb-12">
              {page.industry} {page.service} in {page.city} — FAQ
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {page.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-light-gray shadow-sm">
                  <h3 className="text-lg font-bold text-charcoal mb-3">{faq.q}</h3>
                  <p className="text-warm-gray leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-burnt-orange">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Grow Your {page.city} {page.industry} Business?
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto mb-8">
              Get a free {page.service.toLowerCase()} plan built specifically for {page.city} {page.industry.toLowerCase()} companies.
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
