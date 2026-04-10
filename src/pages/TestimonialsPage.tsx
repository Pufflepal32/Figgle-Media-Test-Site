import { Helmet } from 'react-helmet-async';
import { Search, PenTool, Rocket, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialsPreview from '../components/TestimonialsPreview';
import CTABanner from '../components/CTABanner';

function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title>Our Process — From Free Audit to Growth | Figgle Media</title>
        <meta
          name="description"
          content="A battle-tested 4-step process to get your contractor business generating leads fast: free audit, design and build, launch, grow."
        />
        <link rel="canonical" href="https://figglemedia.com/our-process" />
      </Helmet>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-navy-blue via-dark-navy to-navy overflow-hidden">
          {/* SVG Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="process-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="40" cy="40" r="30" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#process-pattern)" />
            </svg>
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-burnt-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-burnt-orange/5 rounded-full blur-3xl"></div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-burnt-orange/20 border border-burnt-orange/30 rounded-full px-5 py-2 mb-8">
                <Rocket size={16} className="text-bright-orange" />
                <span className="text-bright-orange font-semibold text-sm">From Audit to Growth in 4 Steps</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                A Proven Process That{' '}
                <span className="text-bright-orange">Delivers Results</span>
              </h1>
              <p className="text-xl text-cream max-w-2xl mx-auto mb-14 leading-relaxed">
                No guesswork. No wasted time. We follow a battle-tested 4-step process designed to get your construction business generating leads fast.
              </p>

              {/* Process Steps Mini Preview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { num: '01', icon: Search, label: 'Free Audit' },
                  { num: '02', icon: PenTool, label: 'Design & Build' },
                  { num: '03', icon: Rocket, label: 'Launch' },
                  { num: '04', icon: TrendingUp, label: 'Grow' },
                ].map((step) => (
                  <div key={step.num} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                    <span className="text-bright-orange font-bold text-sm">{step.num}</span>
                    <step.icon size={28} className="text-white mx-auto my-3" />
                    <p className="text-cream font-semibold text-sm">{step.label}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/free-website-plan"
                className="inline-flex items-center gap-2 bg-burnt-orange text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-deep-orange transition-all shadow-lg hover:shadow-burnt-orange/25 group"
              >
                Start With a Free Audit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        <TestimonialsPreview />
        <CTABanner />
      </div>
    </>
  );
}

export default TestimonialsPage;
