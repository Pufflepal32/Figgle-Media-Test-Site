import { Search, PenTool, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

export default function TestimonialsPreview() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Free Audit',
      description:
        "We analyze your current website, your local competition, and your market. You'll see exactly where you stand and what's holding you back.",
    },
    {
      number: '02',
      icon: PenTool,
      title: 'Custom Design & Build',
      description:
        'We design and build a website tailored to your construction business — optimized for conversions, mobile-first, and built to rank on Google.',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Launch & Optimize',
      description:
        'We go live, set up tracking and analytics, submit to Google, and fine-tune everything so your site starts generating leads from day one.',
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Grow',
      description:
        'Ongoing SEO, Google Ads management, and performance optimization to keep the leads flowing and your business growing month over month.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy-blue via-dark-navy to-navy-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How We Get You More Leads
          </h2>
          <p className="text-xl text-cream">
            A proven 4-step process designed specifically for construction businesses.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-white/20 relative group"
            >
              {/* Step Number */}
              <div className="text-6xl font-bold text-white/10 absolute top-4 right-6">
                {step.number}
              </div>

              {/* Icon */}
              <div className="bg-burnt-orange rounded-full p-3 w-fit mb-6 group-hover:scale-110 transition-transform">
                <step.icon size={24} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-cream leading-relaxed">{step.description}</p>

              {/* Arrow connector (hidden on last item and on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight size={24} className="text-bright-orange" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
