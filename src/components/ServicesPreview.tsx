import { Globe, Search, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPreview() {
  const services = [
    {
      icon: Globe,
      title: 'Custom Website Design',
      description: 'Beautiful, professional websites that showcase your construction business and build trust with clients.',
      color: 'from-teal to-light-teal',
      slug: 'contractor-web-design',
    },
    {
      icon: Search,
      title: 'Local SEO',
      description: 'Get found by clients searching for contractors in your area. Dominate local search results.',
      color: 'from-dark-green to-teal',
      slug: 'seo-for-contractors',
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation',
      description: 'Convert more visitors into paying customers with proven lead generation strategies.',
      color: 'from-burnt-orange to-deep-orange',
      slug: 'google-ads-management',
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Your website will look perfect on every device. Most contractor leads come from mobile.',
      color: 'from-warm-gray to-charcoal',
      slug: 'contractor-web-design',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-light-navy to-navy-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Everything You Need to{' '}
            <span className="text-burnt-orange">
              Grow Your Business
            </span>
          </h2>
          <p className="text-xl text-cream">
            We build complete digital solutions designed specifically for construction businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.slug}`}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-white/20 group block"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-cream leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center text-burnt-orange font-semibold group-hover:text-white transition-colors">
                Learn more about {service.title}
                <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-burnt-orange hover:text-white font-semibold text-lg group transition-colors"
          >
            View All Services
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
