import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Hammer } from 'lucide-react';
import Hero from '../components/Hero';
import BeforeAfter from '../components/BeforeAfter';
import TrustBadges from '../components/TrustBadges';
import ServicesPreview from '../components/ServicesPreview';
import TestimonialsPreview from '../components/TestimonialsPreview';
import CTABanner from '../components/CTABanner';
import MapEmbed from '../components/MapEmbed';

const cityLinks = [
  { label: 'Raleigh', href: '/raleigh-web-design' },
  { label: 'Charlotte', href: '/charlotte-web-design' },
  { label: 'Durham', href: '/durham-web-design' },
  { label: 'Greensboro', href: '/greensboro-web-design' },
  { label: 'Winston-Salem', href: '/winston-salem-web-design' },
  { label: 'Fayetteville', href: '/fayetteville-web-design' },
  { label: 'Wilmington', href: '/wilmington-web-design' },
  { label: 'Asheville', href: '/asheville-web-design' },
];

const nicheLinks = [
  { label: 'Roofing Marketing', href: '/roofing', desc: 'Web design, SEO, Google Ads, and lead generation for roofers. Storm-ready, neighborhood-targeted, conversion-tuned.' },
  { label: 'HVAC Marketing', href: '/hvac', desc: 'Web design, SEO, Google Ads, and lead generation for HVAC companies. Built for emergency calls and planned replacements.' },
  { label: 'Electrician Marketing', href: '/electrician', desc: 'Web design, SEO, Google Ads, and lead generation for electrical contractors. Tuned for emergency calls, panel upgrades, and the EV-charger boom.' },
];

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Figgle Media — Web Design & SEO for North Carolina Contractors</title>
        <meta
          name="description"
          content="Custom websites and local SEO that turn searches into booked jobs for contractors across North Carolina. Get a free website plan."
        />
        <link rel="canonical" href="https://figglemedia.com/" />
        <meta property="og:title" content="Figgle Media — Web Design & SEO for North Carolina Contractors" />
        <meta
          property="og:description"
          content="Custom websites and local SEO that turn searches into booked jobs for contractors across North Carolina."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://figglemedia.com/" />
      </Helmet>
      <Hero />
      <BeforeAfter />
      <TrustBadges />
      <ServicesPreview />

      {/* NC Cities We Serve */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-navy-blue/10 text-navy-blue rounded-full px-4 py-2 mb-4">
              <MapPin size={16} className="text-burnt-orange" />
              <span className="text-sm font-semibold">North Carolina Coverage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-blue mb-4">
              NC Cities We Serve
            </h2>
            <p className="text-lg text-charcoal">
              Local SEO and web design tailored to every major North Carolina metro — from the Triangle to the coast.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {cityLinks.map((city) => (
              <Link
                key={city.label}
                to={city.href}
                className="group flex items-center justify-between bg-white border border-light-gray rounded-xl p-4 shadow-sm hover:border-burnt-orange hover:shadow-md transition-all"
              >
                <span className="flex items-center gap-3 font-semibold text-navy-blue group-hover:text-burnt-orange transition-colors">
                  <MapPin size={18} className="text-burnt-orange" />
                  {city.label}
                </span>
                <ArrowRight size={16} className="text-warm-gray group-hover:text-burnt-orange group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contractor Specialties / Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-navy-blue/10 text-navy-blue rounded-full px-4 py-2 mb-4">
              <Hammer size={16} className="text-burnt-orange" />
              <span className="text-sm font-semibold">Built for Contractors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-blue mb-4">
              Contractor Specialties
            </h2>
            <p className="text-lg text-charcoal">
              Industry-specific playbooks for the trades. Deeper targeting, higher-converting pages, faster lead flow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nicheLinks.map((niche) => (
              <Link
                key={niche.label}
                to={niche.href}
                className="group bg-gradient-to-br from-navy-blue to-navy rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/10"
              >
                <h3 className="text-xl font-bold text-white group-hover:text-burnt-orange transition-colors mb-2">
                  {niche.label}
                </h3>
                <p className="text-cream text-sm mb-4 leading-relaxed">{niche.desc}</p>
                <span className="inline-flex items-center gap-1 text-burnt-orange font-semibold text-sm">
                  Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsPreview />
      <CTABanner />
      <MapEmbed />
    </>
  );
}

export default HomePage;
