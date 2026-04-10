import { Zap, TrendingUp, Wrench, Shield } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Built for Conversions',
      description: 'Every design element is strategically placed to turn visitors into paying customers. No fluff, just results.',
      icon: Zap,
    },
    {
      title: 'Proven SEO Strategy',
      description: 'We use battle-tested SEO tactics that consistently rank contractors at the top of local search results.',
      icon: TrendingUp,
    },
    {
      title: 'Done-for-You Setup',
      description: 'We handle everything from design to launch. You focus on building, we focus on bringing you leads.',
      icon: Wrench,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy-blue via-navy to-light-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why Contractors Choose Figgle Media
          </h2>
          <p className="text-xl text-cream max-w-2xl mx-auto">
            We're not just another web design agency. We're your growth partner.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl hover:shadow-xl transition-all border border-white/20 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-burnt-orange/20 rounded-full mb-6 group-hover:bg-burnt-orange transition-colors">
                <reason.icon size={32} className="text-bright-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-cream leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Shield size={48} className="text-bright-orange" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Our Performance Guarantee
          </h3>
          <p className="text-xl text-cream max-w-3xl mx-auto">
            If you don't see improvement in your leads within 90 days, we'll work for free until you do. That's how confident we are in our process.
          </p>
        </div>
      </div>
    </section>
  );
}
