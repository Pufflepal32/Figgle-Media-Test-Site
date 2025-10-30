import { Globe, Search, Target, Megaphone, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Roofing Web Design',
      description: 'Custom-built websites designed to convert visitors into customers. Mobile-optimized, fast-loading, and built specifically for roofing contractors.',
      icon: Globe,
    },
    {
      title: 'SEO for Roofers',
      description: 'Dominate local search results and get found by customers actively searching for roofing services in your area.',
      icon: Search,
    },
    {
      title: 'Google Ads Management',
      description: 'Get immediate leads with expertly managed Google Ads campaigns that target homeowners ready to hire a roofer.',
      icon: Target,
    },
    {
      title: 'Local Service Ads',
      description: 'Maximize your Local Service Ads performance with optimization strategies that put you at the top of Google search results.',
      icon: Megaphone,
    },
  ];

  return (
    <section id="services" className="py-20 bg-alabaster">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-green mb-4">
            Services Built for Roofing Contractors
          </h2>
          <p className="text-xl text-jet-black max-w-2xl mx-auto">
            Everything you need to grow your roofing business online, all under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="flex items-start mb-6">
                <div className="bg-burnt-orange/10 p-4 rounded-lg group-hover:bg-burnt-orange transition-colors">
                  <service.icon
                    size={32}
                    className="text-burnt-orange group-hover:text-white transition-colors"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-dark-green mb-4">
                {service.title}
              </h3>
              <p className="text-jet-black mb-6 leading-relaxed">
                {service.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center text-burnt-orange font-semibold hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight size={20} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
