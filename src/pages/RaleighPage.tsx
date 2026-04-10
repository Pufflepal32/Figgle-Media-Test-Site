import { Helmet } from 'react-helmet-async';
import { ArrowRight, Phone, CheckCircle, Star, MapPin, Shield, Users, TrendingUp, Zap, Building2, Sun } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCurrentMonthYear } from '../utils/useCurrentDate';
import { BUSINESS } from '../config/business';

export default function RaleighPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Raleigh form submitted:', formData);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Figgle Media - Raleigh Contractor Web Design',
    description: 'Custom web design and SEO for construction businesses in Raleigh, NC. We help contractors generate more leads with high-converting websites.',
    url: 'https://figglemedia.com/raleigh-contractor-web-design',
    telephone: BUSINESS.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Raleigh',
      addressRegion: 'NC',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: 'Raleigh',
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
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a contractor website cost in Raleigh?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our contractor websites for Raleigh construction businesses start at $2,999 for our Starter package, which includes custom design, mobile optimization, and basic SEO. Our most popular Scaler package is $4,999 and includes aggressive local SEO to rank in the Raleigh market.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to rank on Google in Raleigh?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most Raleigh contractors see meaningful ranking improvements within 3-6 months. The Raleigh market is competitive, but our local SEO strategies are designed to target high-intent keywords like "contractor near me Raleigh" and "contractor Raleigh NC" to get you visible fast.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you only work with contractors in Raleigh?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We serve construction businesses across North Carolina, and Raleigh is our home base. Being local means we understand the Raleigh market — from new development trends to the neighborhoods where clients are actively searching for contractors.',
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Contractor Web Design Raleigh NC | Websites for Contractors | Figgle Media</title>
        <meta
          name="description"
          content="Custom web design for construction businesses in Raleigh, NC. Get a high-converting website that ranks on Google and generates qualified leads. Based in Raleigh — we know your market."
        />
        <meta
          name="keywords"
          content="contractor web design Raleigh, contractor website Raleigh NC, construction SEO Raleigh, contractor website design, web design for contractors Raleigh, construction marketing Raleigh NC"
        />
        <link rel="canonical" href="https://figglemedia.com/raleigh-contractor-web-design" />
        <meta property="og:title" content="Contractor Web Design Raleigh NC | Figgle Media" />
        <meta
          property="og:description"
          content="Custom websites for Raleigh contractors. Rank higher on Google & get more leads. Free consultation available."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://figglemedia.com/raleigh-contractor-web-design" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contractor Web Design Raleigh NC | Figgle Media" />
        <meta
          name="twitter:description"
          content="Custom websites for Raleigh contractors. Rank higher on Google & get more leads."
        />
        <meta name="geo.region" content="US-NC" />
        <meta name="geo.placename" content="Raleigh" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-navy-blue via-dark-navy to-navy">
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
                <MapPin className="text-bright-orange" size={16} />
                <span className="text-sm font-semibold text-white">Based in Raleigh, NC</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Raleigh Contractors Are{' '}
                <span className="text-bright-orange">Booking More Jobs</span> With Us
                <span className="block text-xl sm:text-2xl font-semibold text-cream/80 mt-3">
                  #1 Rated Contractor Web Design in Raleigh — {getCurrentMonthYear()}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-cream leading-relaxed">
                We build high-converting websites for construction businesses in Raleigh, NC. Get found on Google by clients in the Raleigh area searching for contractors — and turn those clicks into booked jobs.
              </p>

              <div className="space-y-3">
                {[
                  'Rank on Google for "contractor near me Raleigh"',
                  'Convert Raleigh area clients into qualified leads',
                  'Built by a local team that knows the Triangle market',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-bright-orange flex-shrink-0 mt-1" size={20} />
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
                <span className="text-sm text-cream">Free consultation for Raleigh contractors</span>
              </div>
            </div>

            {/* Right Column - Lead Form */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-light-gray">
                {/* City Photo */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/assets/cities/raleigh.webp"
                    alt="Raleigh NC skyline - contractor web design services"
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
                  <h2 className="text-2xl font-bold text-charcoal mb-2">
                    Get Your Free Raleigh Market Analysis
                  </h2>
                  <p className="text-warm-gray">
                    See how your contractor website stacks up against Raleigh competitors
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="raleigh-name" className="block text-sm font-semibold text-navy-blue mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="raleigh-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-all"
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="raleigh-phone" className="block text-sm font-semibold text-navy-blue mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="raleigh-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-all"
                      placeholder="(919) 555-1234"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="raleigh-email" className="block text-sm font-semibold text-navy-blue mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="raleigh-email"
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
                    No obligation. We'll analyze your Raleigh market and show you exactly how to get more leads.
                  </p>
                </form>

                <div className="mt-6 pt-6 border-t border-light-gray">
                  <div className="flex items-center justify-center gap-4 text-sm text-navy-blue">
                    <div className="flex items-center gap-1">
                      <CheckCircle size={16} className="text-bright-orange" />
                      <span>No Spam</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle size={16} className="text-bright-orange" />
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

      {/* Why Raleigh Contractors Need a Great Website */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-blue mb-6">
              Why Raleigh Construction Businesses Need a Better Website
            </h2>
            <p className="text-xl text-charcoal leading-relaxed">
              Raleigh is one of the fastest-growing cities in the country. More residents and businesses means more competition for contractors. If your website isn't bringing in leads, you're losing jobs to competitors who invested in theirs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-navy-blue to-navy rounded-2xl p-8 text-white">
              <div className="bg-burnt-orange rounded-full p-3 w-fit mb-6">
                <TrendingUp size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Raleigh Is Booming</h3>
              <p className="text-cream leading-relaxed">
                The Triangle area is growing fast — over 60 people move to the Raleigh metro every day. That means more new construction, renovations, and remodels, with more clients searching Google for "contractor near me." If you're not showing up, someone else is getting that call.
              </p>
            </div>

            <div className="bg-gradient-to-br from-navy-blue to-navy rounded-2xl p-8 text-white">
              <div className="bg-burnt-orange rounded-full p-3 w-fit mb-6">
                <Building2 size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">New Construction Boom</h3>
              <p className="text-cream leading-relaxed">
                Raleigh's construction market is thriving with new residential developments, commercial projects, and renovation demand across the Triangle. When property owners and developers search for contractors online, a fast, professional website means you capture those leads before your competition does.
              </p>
            </div>

            <div className="bg-gradient-to-br from-navy-blue to-navy rounded-2xl p-8 text-white">
              <div className="bg-burnt-orange rounded-full p-3 w-fit mb-6">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Beat Local Competition</h3>
              <p className="text-cream leading-relaxed">
                There are hundreds of contractors in the Raleigh-Durham area. Most have outdated websites that don't convert. A modern, SEO-optimized site puts you ahead of competitors still running websites from 2015.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build for Raleigh Contractors */}
      <section className="py-20 bg-gradient-to-br from-navy-blue via-navy to-light-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              What We Build for Raleigh Contractors
            </h2>
            <p className="text-xl text-cream">
              Every site we build is designed to rank in the Raleigh market and convert local clients into paying customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'Lightning-Fast Load Times',
                desc: "Google ranks faster sites higher. Our contractor websites load in under 2 seconds on mobile — critical when clients are searching on their phones for a construction professional.",
              },
              {
                icon: MapPin,
                title: 'Raleigh Local SEO Built In',
                desc: 'We optimize for the keywords Raleigh clients actually search: "contractor Raleigh NC," "contractor near me," "construction company Raleigh." Every page is built to rank locally.',
              },
              {
                icon: Phone,
                title: 'Click-to-Call on Every Page',
                desc: "When a Raleigh client finds your site, they should be able to call you in one tap. We add prominent click-to-call buttons that drive phone leads.",
              },
              {
                icon: Shield,
                title: 'Trust Signals That Convert',
                desc: "We showcase your NC contractor license, insurance, reviews, and project photos so Raleigh area clients trust you enough to pick up the phone.",
              },
              {
                icon: Star,
                title: 'Google Business Profile Integration',
                desc: "Your website works hand-in-hand with your GBP listing. We optimize both so you show up in Raleigh's local map pack — where 46% of all Google searches go.",
              },
              {
                icon: Sun,
                title: 'Seasonal Content Strategy',
                desc: "From seasonal renovation trends to new build launches, we create content that matches what Raleigh area clients are searching for throughout the year.",
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

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-blue mb-6">
              Why Raleigh Contractors Choose Figgle Media
            </h2>
            <p className="text-xl text-charcoal">
              We're not another generic web agency. We specialize in construction businesses, and we're based right here in Raleigh.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-navy-blue to-navy">
              <div className="text-5xl font-bold text-bright-orange mb-3">100%</div>
              <div className="text-lg font-semibold text-white mb-2">Construction Focus</div>
              <p className="text-cream text-sm">We exclusively serve construction businesses and contractors</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-navy-blue to-navy">
              <div className="text-5xl font-bold text-bright-orange mb-3">Local</div>
              <div className="text-lg font-semibold text-white mb-2">Raleigh Team</div>
              <p className="text-cream text-sm">Based in Raleigh — we know your market and your competition</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-navy-blue to-navy">
              <div className="text-5xl font-bold text-bright-orange mb-3">90-Day</div>
              <div className="text-lg font-semibold text-white mb-2">Performance Guarantee</div>
              <p className="text-cream text-sm">If your leads don't improve, we work for free until they do</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-navy-blue via-dark-navy to-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions — Raleigh Contractor Web Design
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'How much does a contractor website cost in Raleigh?',
                  a: 'Our contractor websites for Raleigh construction businesses start at $2,999 for our Starter package, which includes custom design, mobile optimization, and basic SEO. Our most popular Scaler package is $4,999 and includes aggressive local SEO to rank in the Raleigh market.',
                },
                {
                  q: 'How long does it take to rank on Google in Raleigh?',
                  a: 'Most Raleigh contractors see meaningful ranking improvements within 3-6 months. The Raleigh market is competitive, but our local SEO strategies are designed to target high-intent keywords like "contractor near me Raleigh" and "contractor Raleigh NC" to get you visible fast.',
                },
                {
                  q: 'Do you only work with contractors in Raleigh?',
                  a: "We serve construction businesses across North Carolina, and Raleigh is our home base. Being local means we understand the Raleigh market — from new development trends to the neighborhoods where clients are actively searching for contractors.",
                },
                {
                  q: 'What if I already have a contractor website?',
                  a: "Most contractors we work with in Raleigh already have a website — it's just not generating leads. We'll do a free analysis of your current site, show you exactly what's holding it back, and build you a new one that actually converts Raleigh area clients into customers.",
                },
                {
                  q: 'Do you help with Google Ads for Raleigh contractors?',
                  a: "Yes. We offer Google Ads management and Local Service Ads specifically for the Raleigh market. Combined with a high-converting website, paid ads can get you leads immediately while your organic rankings build over time.",
                },
              ].map((faq, index) => (
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
            Ready to Dominate Raleigh's Construction Market?
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            Get a free website analysis and see exactly how we'll help you outrank every contractor in the Raleigh area.
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
