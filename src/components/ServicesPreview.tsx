import { Globe, Search, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPreview() {
  const services = [
    {
      icon: Globe,
      title: 'Custom Website Design',
      description: 'Beautiful, professional websites that showcase your roofing business and build trust with homeowners.',
      color: 'from-teal to-light-teal',
    },
    {
      icon: Search,
      title: 'Local SEO',
      description: 'Get found by homeowners searching for roofers in your area. Dominate local search results.',
      color: 'from-dark-green to-teal',
    },
    {
      icon: TrendingUp,
      title: 'Lead Generation',
      description: 'Convert more visitors into paying customers with proven lead generation strategies.',
      color: 'from-burnt-orange to-deep-orange',
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Your website will look perfect on every device. Most roofing leads come from mobile.',
      color: 'from-warm-gray to-charcoal',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-light-cream to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mb-6">
            Everything You Need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-green to-teal">
              Grow Your Business
            </span>
          </h2>
          <p className="text-xl text-warm-gray">
            We build complete digital solutions designed specifically for roofing contractors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-light-gray group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-warm-gray leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-teal hover:text-dark-green font-semibold text-lg group"
          >
            View All Services
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
