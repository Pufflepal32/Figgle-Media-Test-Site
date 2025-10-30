import { TrendingUp, Phone, Users } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      company: 'Mountain State Roofing',
      location: 'Charleston, WV',
      metric: '+285%',
      description: 'Increase in organic traffic',
      icon: TrendingUp,
      bg: 'bg-dark-green',
    },
    {
      company: 'Tennessee Roof Pros',
      location: 'Nashville, TN',
      metric: '+147',
      description: 'More qualified leads per month',
      icon: Users,
      bg: 'bg-burnt-orange',
    },
    {
      company: 'Valley Roofing & Siding',
      location: 'Morgantown, WV',
      metric: '+320%',
      description: 'Increase in phone calls',
      icon: Phone,
      bg: 'bg-dark-green',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-green mb-4">
            Real Results for Real Roofers.
          </h2>
          <p className="text-xl text-jet-black max-w-2xl mx-auto">
            We don't just build websites. We build lead-generating machines that transform your roofing business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`${item.bg} p-8 text-white min-h-[320px] flex flex-col justify-between`}>
                <div>
                  <item.icon size={48} className="mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">{item.company}</h3>
                  <p className="text-sm opacity-90 mb-6">{item.location}</p>
                </div>

                <div>
                  <div className="text-5xl font-bold mb-2">{item.metric}</div>
                  <p className="text-lg">{item.description}</p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
