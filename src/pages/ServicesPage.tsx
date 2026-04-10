import { Helmet } from 'react-helmet-async';
import { Globe, Search, Target, Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import CTABanner from '../components/CTABanner';
import { BUSINESS } from '../config/business';

function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Contractor Marketing Services | Web Design, SEO & Ads | Figgle Media</title>
        <meta
          name="description"
          content="Web design, local SEO, Google Ads, and Local Service Ads management for contractors. Everything you need to dominate your local market and book more jobs."
        />
        <link rel="canonical" href="https://figglemedia.com/services" />
      </Helmet>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-navy-blue via-dark-navy to-navy overflow-hidden">
          {/* SVG Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="services-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#services-grid)" />
            </svg>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-burnt-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-burnt-orange/5 rounded-full blur-3xl"></div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-burnt-orange/20 border border-burnt-orange/30 rounded-full px-5 py-2 mb-8">
                <Target size={16} className="text-burnt-orange" />
                <span className="text-burnt-orange font-semibold text-sm">Built Exclusively for Contractors</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Everything You Need to{' '}
                <span className="text-burnt-orange">Dominate Online</span>
              </h1>
              <p className="text-xl text-cream max-w-2xl mx-auto mb-12 leading-relaxed">
                From custom websites to local SEO and paid ads — we handle your entire digital presence so you can focus on what you do best: building.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Link
                  to="/free-website-plan"
                  className="inline-flex items-center gap-2 bg-burnt-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-deep-orange transition-all shadow-lg hover:shadow-burnt-orange/25 group"
                >
                  Get Your Free Plan
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="inline-flex items-center gap-2 text-cream hover:text-white transition-colors font-semibold text-lg"
                >
                  Or call {BUSINESS.phoneDisplay}
                </a>
              </div>

              {/* Service Quick Links */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Globe, label: 'Web Design', href: '/services/contractor-web-design' },
                  { icon: Search, label: 'Local SEO', href: '/services/seo-for-contractors' },
                  { icon: Target, label: 'Google Ads', href: '/services/google-ads-management' },
                  { icon: Megaphone, label: 'Local Service Ads', href: '/services/local-service-ads' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="group bg-white/5 border border-white/10 hover:border-burnt-orange/50 hover:bg-white/10 rounded-xl p-5 transition-all"
                  >
                    <item.icon size={28} className="text-burnt-orange mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="text-cream font-semibold text-sm">{item.label}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Services />
        <WhyChooseUs />
        <CTABanner />
      </div>
    </>
  );
}

export default ServicesPage;
