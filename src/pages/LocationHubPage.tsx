import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { CheckCircle, ArrowRight, MapPin, ChevronRight, Phone, Star } from 'lucide-react';
import { getLocationHub } from '../data/seoPages';
import { BUSINESS } from '../config/business';
import { useState } from 'react';

export default function LocationHubPage() {
  const slug = useLocation().pathname.replace(/^\//, '');
  const page = getLocationHub(slug);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  if (!page) return <Navigate to="/" replace />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Location hub form submitted:', formData);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${BUSINESS.name} — ${page.city}`,
    description: page.metaDescription,
    url: `${BUSINESS.url}/${page.slug}`,
    telephone: BUSINESS.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      addressLocality: page.city,
      addressRegion: page.state,
      addressCountry: 'US',
    },
    areaServed: { '@type': 'City', name: page.city },
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
        <div className="bg-dark-navy border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm text-slate-300" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-white">{page.city} Web Design</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-navy-blue via-dark-navy to-navy overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2">
                  <Star className="text-burnt-orange fill-burnt-orange" size={14} />
                  <span className="text-sm font-semibold text-white">Based in {page.city}, {page.state}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {page.h1}
                </h1>
                <p className="text-sm font-semibold text-cream/70">{page.subtitle}</p>
                <p className="text-lg text-cream leading-relaxed">{page.intro}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {page.stats.map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <p className="text-2xl font-bold text-burnt-orange">{stat.value}</p>
                      <p className="text-cream text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="inline-flex items-center gap-3 bg-burnt-orange text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-deep-orange transition-all shadow-lg"
                >
                  <Phone size={20} />
                  {BUSINESS.phoneDisplay}
                </a>
              </div>

              {/* Right — City Image + Form */}
              <div className="space-y-6">
                <div className="relative rounded-2xl overflow-hidden h-48">
                  <img
                    src={page.cityImage}
                    alt={page.cityImageAlt}
                    width="800"
                    height="384"
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-blue/80 to-transparent" />
                </div>
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-light-gray">
                  <h2 className="text-xl font-bold text-charcoal mb-4 text-center">
                    Get a Free {page.city} Website Plan
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text" placeholder="Your Name" required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange"
                    />
                    <input
                      type="tel" placeholder="Phone Number" required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange"
                    />
                    <input
                      type="email" placeholder="Email Address" required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange"
                    />
                    <button
                      type="submit"
                      className="w-full bg-burnt-orange text-white font-bold py-3 rounded-lg hover:bg-deep-orange transition-all shadow-lg"
                    >
                      Get My Free Plan
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services We Offer — Links to Layer 3 children */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal text-center mb-4">
              Services We Offer in {page.city}
            </h2>
            <p className="text-warm-gray text-center max-w-2xl mx-auto mb-12">
              Specialized marketing services for {page.city} contractors — each one designed to generate leads in your local market.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {page.serviceLinks.map((link) => (
                <Link
                  key={link.slug}
                  to={`/${link.slug}`}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-light-gray hover:border-burnt-orange hover:shadow-md transition-all"
                >
                  <h3 className="text-lg font-bold text-charcoal group-hover:text-burnt-orange transition-colors mb-2">
                    {link.label}
                  </h3>
                  <p className="text-warm-gray text-sm mb-4">{link.description}</p>
                  <span className="inline-flex items-center gap-1 text-burnt-orange font-semibold text-sm">
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-br from-navy-blue to-navy">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why {page.city} Contractors Choose Us
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {page.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5">
                  <CheckCircle size={20} className="text-burnt-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Link to umbrella authority page */}
            <div className="text-center mt-10">
              <Link
                to="/contractor-marketing-agency"
                className="inline-flex items-center gap-2 text-burnt-orange font-semibold hover:text-white transition-colors"
              >
                Learn why we built an agency exclusively for contractors
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
              {page.city} Web Design FAQ
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

        {/* Nearby Cities */}
        {page.nearbyHubs.length > 0 && (
          <section className="py-16 bg-gradient-to-br from-light-navy to-navy-blue">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-white text-center mb-8">
                Also Serving
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {page.nearbyHubs.map((hub) => (
                  <Link
                    key={hub.slug}
                    to={`/${hub.slug}`}
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-3 rounded-xl hover:bg-white/20 transition-all"
                  >
                    <MapPin size={16} />
                    {hub.city} Web Design
                    <ArrowRight size={14} />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-burnt-orange">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Dominate the {page.city} Market?
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto mb-8">
              Get a free analysis and see exactly how we'll help you outrank every contractor in {page.city}.
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
