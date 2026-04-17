import { Search, PenTool, Rocket, TrendingUp, Shield, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const steps = [
    {
      icon: Search,
      title: 'Step 1: Free Website & Market Audit',
      details: [
        'Analyze your current website performance',
        'Research your local competition',
        'Identify the keywords clients in your area are searching',
        'Find gaps and quick wins in your online presence',
      ],
    },
    {
      icon: PenTool,
      title: 'Step 2: Custom Design & Development',
      details: [
        'Design a website tailored to your construction brand',
        'Build for mobile-first — where most searches happen',
        'Optimize every page for local SEO from day one',
        'Add lead capture forms, click-to-call, and trust signals',
      ],
    },
    {
      icon: Rocket,
      title: 'Step 3: Launch & Configure',
      details: [
        'Go live with zero downtime',
        'Set up Google Analytics and conversion tracking',
        'Submit sitemap to Google Search Console',
        'Configure Google Business Profile integration',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Step 4: Optimize & Grow',
      details: [
        'Monitor rankings and adjust SEO strategy',
        'Manage Google Ads and Local Service Ads',
        'Create content that targets high-intent local searches',
        'Monthly reporting so you see exactly what\'s working',
      ],
    },
  ];

  return (
    <section id="reviews" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Process — Step by Step
          </h2>
          <p className="text-xl text-cream max-w-2xl mx-auto">
            Here's exactly what happens when you work with Figgle Media.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-burnt-orange rounded-full p-3">
                  <step.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
              </div>

              <ul className="space-y-3">
                {step.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-burnt-orange flex-shrink-0 mt-0.5" />
                    <span className="text-cream">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-burnt-orange rounded-2xl p-8 md:p-12 text-center">
            <Shield size={48} className="text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Our 90-Day Performance Guarantee
            </h3>
            <p className="text-xl text-white leading-relaxed">
              If your website doesn't start generating more leads within 90 days of launch, we'll keep working for free until it does. We only win when you win.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
