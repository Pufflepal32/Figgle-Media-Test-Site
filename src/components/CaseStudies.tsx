import { Globe, Search, Target, BarChart3, Smartphone, Shield } from 'lucide-react';

export default function CaseStudies() {
  const deliverables = [
    {
      title: 'Custom Contractor Website',
      description: 'A professional, conversion-focused website designed specifically for your construction business. Not a template — built from scratch to reflect your brand.',
      icon: Globe,
      bg: 'bg-gradient-to-br from-navy-blue to-navy',
    },
    {
      title: 'Local SEO Setup',
      description: 'On-page optimization, Google Business Profile setup, local keyword targeting, and technical SEO so clients in your area find you first.',
      icon: Search,
      bg: 'bg-gradient-to-br from-burnt-orange to-deep-orange',
    },
    {
      title: 'Lead Capture System',
      description: 'Strategic contact forms, click-to-call buttons, and lead tracking so every visitor has a clear path to becoming a customer.',
      icon: Target,
      bg: 'bg-gradient-to-br from-navy-blue to-navy',
    },
    {
      title: 'Analytics & Reporting',
      description: 'Google Analytics setup and a clear dashboard so you can see exactly where your leads are coming from and how your site is performing.',
      icon: BarChart3,
      bg: 'bg-gradient-to-br from-burnt-orange to-deep-orange',
    },
    {
      title: 'Mobile-First Design',
      description: 'Over 60% of local searches happen on mobile. Your site will look and work perfectly on every phone, tablet, and desktop.',
      icon: Smartphone,
      bg: 'bg-gradient-to-br from-navy-blue to-navy',
    },
    {
      title: '90-Day Performance Guarantee',
      description: "If your website doesn't generate more leads within 90 days, we'll keep working for free until it does. Zero risk for you.",
      icon: Shield,
      bg: 'bg-gradient-to-br from-burnt-orange to-deep-orange',
    },
  ];

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What You Get When You Work With Us
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything a construction business needs to start generating leads online — no gaps, no guesswork.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`${item.bg} p-8 text-white min-h-[280px] flex flex-col`}>
                <div className="mb-6">
                  <item.icon size={40} className="opacity-90" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
