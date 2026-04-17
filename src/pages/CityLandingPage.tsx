import { Helmet } from 'react-helmet-async';
import { ArrowRight, Phone, CheckCircle, MapPin, Shield, Users, TrendingUp, Star, Zap, Building2, Sun } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { getCurrentMonthYear } from '../utils/useCurrentDate';
import { getCityBySlug } from '../data/cityData';
import { serviceLocationPages } from '../data/seoPages';
import { BUSINESS } from '../config/business';
import { buildBreadcrumbSchema } from '../utils/breadcrumbSchema';

const iconMap = {
  trending: TrendingUp,
  building: Building2,
  users: Users,
};

export default function CityLandingPage() {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, '');
  const city = getCityBySlug(slug);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${city?.name} form submitted:`, formData);
  };

  if (!city) {
    return <Navigate to="/" replace />;
  }

  // L3 service+location pages parented to this hub (if any)
  const childServicePages = Object.values(serviceLocationPages).filter(
    (p) => p.locationParentSlug === city.slug,
  );

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Figgle Media - ${city.name} Contractor Web Design`,
    description: city.metaDescription,
    url: `https://figglemedia.com/${city.slug}`,
    telephone: BUSINESS.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: 'North Carolina',
      },
    },
    priceRange: '$$',
    openingHours: 'Mo-Fr 08:00-18:00',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{city.metaTitle}</title>
        <meta name="description" content={city.metaDescription} />
        <meta name="keywords" content={city.metaKeywords} />
        <link rel="canonical" href={`https://figglemedia.com/${city.slug}`} />
        <meta property="og:title" content={city.metaTitle} />
        <meta property="og:description" content={city.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://figglemedia.com/${city.slug}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`https://figglemedia.com${city.cityImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={city.metaTitle} />
        <meta name="twitter:description" content={city.metaDescription} />
        <meta name="twitter:image" content={`https://figglemedia.com${city.cityImage}`} />
        <meta name="geo.region" content={`US-${city.state}`} />
        <meta name="geo.placename" content={city.name} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(buildBreadcrumbSchema([
            { name: 'Home', url: BUSINESS.url },
            { name: 'Service Areas', url: `${BUSINESS.url}/services` },
            { name: `${city.name} Web Design`, url: `${BUSINESS.url}/${city.slug}` },
          ]))}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* SVG Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D5C3B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-2">
                <MapPin className="text-burnt-orange" size={16} />
                <span className="text-sm font-semibold text-white">Serving {city.name}, {city.state}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {city.name} Contractors Are{' '}
                <span className="text-burnt-orange">Booking More Jobs</span> With Us
                <span className="block text-xl sm:text-2xl font-semibold text-cream/80 mt-3">
                  {city.heroSubline} — {getCurrentMonthYear()}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-cream leading-relaxed">
                {city.heroDescription}
              </p>

              <div className="space-y-3">
                {city.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-burnt-orange flex-shrink-0 mt-1" size={20} />
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4">
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="inline-flex items-center gap-3 bg-burnt-orange text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-deep-orange transition-all shadow-lg hover:shadow-xl group"
                >
                  <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                  <span>{BUSINESS.phoneDisplay}</span>
                </a>
                <span className="text-sm text-cream">Free consultation for {city.name} contractors</span>
              </div>
            </div>

            {/* Right Column - Lead Form */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-light-gray">
                {/* City Photo */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={city.cityImage}
                    alt={city.cityImageAlt}
                    width="800"
                    height="384"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent"></div>
                </div>

                <div className="p-8 -mt-8 relative">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-300 mb-2">
                    {city.formHeadline}
                  </h2>
                  <p className="text-slate-300">
                    {city.formSubline}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor={`${city.slug}-name`} className="block text-sm font-semibold text-navy-blue mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id={`${city.slug}-name`}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-all"
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor={`${city.slug}-phone`} className="block text-sm font-semibold text-navy-blue mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id={`${city.slug}-phone`}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-all"
                      placeholder={city.phonePlaceholder}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor={`${city.slug}-email`} className="block text-sm font-semibold text-navy-blue mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id={`${city.slug}-email`}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-all"
                      placeholder="john@mycompany.com"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-burnt-orange to-deep-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    Get My Free Analysis
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>

                  <p className="text-xs text-center text-navy-blue">
                    No obligation. We'll analyze your {city.name} market and show you exactly how to get more leads.
                  </p>
                </form>

                <div className="mt-6 pt-6 border-t border-light-gray">
                  <div className="flex items-center justify-center gap-4 text-sm text-navy-blue">
                    <div className="flex items-center gap-1">
                      <CheckCircle size={16} className="text-burnt-orange" />
                      <span>No Spam</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle size={16} className="text-burnt-orange" />
                      <span>Local Team</span>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Photo Banner */}
      <section className="relative overflow-hidden">
        <div className="h-64 sm:h-80 relative">
          <img
            src={city.cityImage}
            alt={city.cityImageAlt}
            width="1600"
            height="640"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-blue/70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <MapPin className="text-burnt-orange" size={28} />
                <span className="text-white text-2xl sm:text-3xl font-bold">
                  Proudly Serving {city.name}, {city.state}
                </span>
              </div>
              <p className="text-cream text-lg">Contractor Web Design & Marketing for {city.region}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-blue mb-6">
              {city.whySection.headline}
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              {city.whySection.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {city.whySection.cards.map((card, index) => {
              const Icon = iconMap[card.icon];
              return (
                <div key={index} className="bg-gradient-to-br from-navy-blue to-navy rounded-2xl p-8 text-white">
                  <div className="bg-burnt-orange rounded-full p-3 w-fit mb-6">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-cream leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              What We Build for {city.name} Contractors
            </h2>
            <p className="text-xl text-cream">
              Every site we build is designed to rank in the {city.name} market and convert local clients into paying customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'Lightning-Fast Load Times',
                desc: `Google ranks faster sites higher. Our contractor websites load in under 2 seconds on mobile — critical when ${city.name} clients are searching on their phones.`,
              },
              {
                icon: MapPin,
                title: `${city.name} Local SEO Built In`,
                desc: `We optimize for the keywords ${city.name} clients actually search: "contractor ${city.name} NC," "contractor near me," "construction company ${city.name}." Every page is built to rank locally.`,
              },
              {
                icon: Phone,
                title: 'Click-to-Call on Every Page',
                desc: `When a ${city.name} client finds your site, they should be able to call you in one tap. We add prominent click-to-call buttons that drive phone leads.`,
              },
              {
                icon: Shield,
                title: 'Trust Signals That Convert',
                desc: `We showcase your NC contractor license, insurance, reviews, and project photos so ${city.name} area clients trust you enough to pick up the phone.`,
              },
              {
                icon: Star,
                title: 'Google Business Profile Integration',
                desc: `Your website works hand-in-hand with your GBP listing. We optimize both so you show up in ${city.name}'s local map pack — where 46% of all Google searches go.`,
              },
              {
                icon: Sun,
                title: 'Seasonal Content Strategy',
                desc: `From seasonal renovation trends to new build launches, we create content that matches what ${city.name} area clients are searching for throughout the year.`,
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="bg-burnt-orange rounded-full p-3 w-fit mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-cream leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-blue mb-6">
              Why {city.name} Contractors Choose Figgle Media
            </h2>
            <p className="text-xl text-slate-300">
              We're not another generic web agency. We specialize in construction businesses and we know {city.region}.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {city.stats.map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-navy-blue to-navy">
                <div className="text-5xl font-bold text-burnt-orange mb-3">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <p className="text-cream text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized services (L3) — only renders when child pages exist */}
      {childServicePages.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-blue mb-4">
                Specialized Services for {city.name} Contractors
              </h2>
              <p className="text-lg text-slate-300">
                Industry-specific campaigns built for the {city.name} market — each with its own lead funnel and local SEO plan.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {childServicePages.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/${svc.slug}`}
                  className="group bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl hover:ring-2 hover:ring-burnt-orange transition-all"
                >
                  <h3 className="text-lg font-bold text-navy-blue group-hover:text-burnt-orange transition-colors mb-2">
                    {svc.industry} {svc.service} in {svc.city}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4">{svc.subtitle}</p>
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

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions — {city.name} Contractor Web Design
            </h2>

            <div className="space-y-6">
              {city.faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                  <p className="text-cream leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-burnt-orange">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {city.ctaHeadline}
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            {city.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="inline-flex items-center gap-3 bg-white text-burnt-orange px-8 py-4 rounded-xl font-bold text-lg hover:bg-cream transition-all shadow-lg hover:shadow-xl group"
            >
              <Phone size={20} className="group-hover:rotate-12 transition-transform" />
              Call {BUSINESS.phoneDisplay}
            </a>
            <Link
              to="/free-website-plan"
              className="inline-flex items-center gap-3 bg-navy-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-navy transition-all shadow-lg hover:shadow-xl group"
            >
              Get Your Free Plan
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
