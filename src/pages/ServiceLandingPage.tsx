import { Helmet } from 'react-helmet-async';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const serviceData: Record<string, { title: string; headline: string; description: string; meta: string; benefits: string[] }> = {
  'contractor-web-design': {
    title: 'Contractor Web Design',
    headline: 'Custom Websites Built for Construction Businesses',
    description: 'We design and build high-converting websites exclusively for contractors. Mobile-first, fast-loading, and optimized to turn visitors into leads.',
    meta: 'Custom web design for construction businesses. Professional, mobile-optimized websites that generate leads. Built by Figgle Media.',
    benefits: ['Mobile-First Design', 'Built for Lead Generation', 'Fast Load Speeds'],
  },
  'seo-for-contractors': {
    title: 'SEO for Contractors',
    headline: 'Dominate Local Search Results in Your Market',
    description: 'Our local SEO strategies help construction businesses rank at the top of Google. We target the keywords clients actually search when they need a contractor.',
    meta: 'Local SEO services for construction businesses. Rank higher on Google and get found by clients in your area. Figgle Media.',
    benefits: ['Rank on Google Maps', 'Target Local Keywords', 'Monthly Reporting'],
  },
  'google-ads-management': {
    title: 'Google Ads Management',
    headline: 'Get Immediate Leads With Google Ads',
    description: 'We manage Google Ads campaigns specifically for contractors. Every dollar is optimized to target clients who are ready to hire.',
    meta: 'Google Ads management for construction businesses. Get qualified leads fast with expertly managed PPC campaigns. Figgle Media.',
    benefits: ['Leads in Days, Not Months', 'ROI-Optimized Campaigns', 'Dedicated Ad Manager'],
  },
  'local-service-ads': {
    title: 'Local Service Ads',
    headline: 'Show Up First With Google Local Service Ads',
    description: 'Local Service Ads put your construction business at the very top of Google search results with a Google Guaranteed badge. We handle setup and optimization.',
    meta: 'Google Local Service Ads management for contractors. Get the Google Guaranteed badge and top placement. Figgle Media.',
    benefits: ['Google Guaranteed Badge', 'Top of Search Results', 'Pay Per Lead Only'],
  },
};

export default function ServiceLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-blue pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link to="/services" className="text-burnt-orange hover:text-white transition-colors">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | Figgle Media</title>
        <meta name="description" content={service.meta} />
      </Helmet>

      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-navy-blue via-dark-navy to-navy overflow-hidden">
          {/* SVG Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="service-hex" x="0" y="0" width="50" height="43.3" patternUnits="userSpaceOnUse">
                  <polygon points="25,0 50,14.4 50,28.9 25,43.3 0,28.9 0,14.4" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#service-hex)" />
            </svg>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-burnt-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-burnt-orange/5 rounded-full blur-3xl"></div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-burnt-orange/20 border border-burnt-orange/30 rounded-full px-5 py-2 mb-8">
                <span className="text-burnt-orange font-semibold text-sm">{service.title}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {service.headline}
              </h1>
              <p className="text-xl text-cream mb-10 leading-relaxed max-w-2xl mx-auto">
                {service.description}
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
                    <CheckCircle size={16} className="text-burnt-orange" />
                    <span className="text-cream font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/free-website-plan"
                  className="inline-flex items-center gap-2 bg-burnt-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-deep-orange transition-all shadow-lg hover:shadow-burnt-orange/25 group"
                >
                  Get Started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:612-778-3914"
                  className="inline-flex items-center gap-2 text-cream hover:text-white transition-colors font-semibold"
                >
                  <Phone size={20} />
                  612-778-3914
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-charcoal mb-8">
                Full {service.title.toLowerCase()} page coming soon. In the meantime, get in touch for a free consultation.
              </p>
              <Link
                to="/free-website-plan"
                className="inline-flex items-center gap-2 bg-navy-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-navy transition-all"
              >
                Get Your Free Plan
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
