import { Globe, Search, Target, Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Contractor Web Design',
      description: 'Custom-built websites designed to convert visitors into customers. Mobile-optimized, fast-loading, and built specifically for construction businesses.',
      icon: Globe,
      slug: 'contractor-web-design',
    },
    {
      title: 'SEO for Contractors',
      description: 'Dominate local search results and get found by customers actively searching for construction services in your area.',
      icon: Search,
      slug: 'seo-for-contractors',
    },
    {
      title: 'Google Ads Management',
      description: 'Get immediate leads with expertly managed Google Ads campaigns that target clients ready to hire a contractor.',
      icon: Target,
      slug: 'google-ads-management',
    },
    {
      title: 'Local Service Ads',
      description: 'Maximize your Local Service Ads performance with optimization strategies that put you at the top of Google search results.',
      icon: Megaphone,
      slug: 'local-service-ads',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-navy-blue via-navy to-light-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Services Built for Construction Businesses
          </h2>
          <p className="text-xl text-cream max-w-2xl mx-auto">
            Everything you need to grow your construction business online, all under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-md hover:shadow-xl transition-all group border border-white/20"
            >
              <div className="flex items-start mb-6">
                <div className="bg-burnt-orange/20 p-4 rounded-lg group-hover:bg-burnt-orange transition-colors">
                  <service.icon
                    size={32}
                    className="text-burnt-orange group-hover:text-white transition-colors"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-cream mb-6 leading-relaxed">
                {service.description}
              </p>

              <Link
                to={`/services/${service.slug}`}
                aria-label={`Learn more about ${service.title}`}
                className="inline-flex items-center text-burnt-orange font-semibold hover:gap-2 hover:text-white transition-all"
              >
                Learn more about {service.title}
                <ArrowRight size={20} className="ml-1" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
