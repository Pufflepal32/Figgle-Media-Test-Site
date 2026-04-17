import { Helmet } from 'react-helmet-async';
import { Users, Award, MapPin } from 'lucide-react';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Figgle Media — Marketing Built for Contractors</title>
        <meta
          name="description"
          content="Meet the team behind Figgle Media — a contractor-only marketing agency serving North Carolina. We don't work with restaurants or SaaS, just contractors."
        />
        <link rel="canonical" href="https://figglemedia.com/about" />
      </Helmet>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-burnt-orange/20 border border-burnt-orange/30 rounded-full px-5 py-2 mb-8">
                <Users size={16} className="text-burnt-orange" />
                <span className="text-burnt-orange font-semibold text-sm">Meet the Team Behind Figgle Media</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Marketers Who Speak{' '}
                <span className="text-burnt-orange">Construction</span>
              </h1>
              <p className="text-xl text-cream max-w-2xl mx-auto mb-12 leading-relaxed">
                We don't work with restaurants, law firms, or SaaS companies. We work with contractors — and only contractors. That focus is what makes us different.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-burnt-orange/20 rounded-full mx-auto mb-3">
                    <Award size={22} className="text-burnt-orange" />
                  </div>
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-cream text-sm">Construction Focus</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-burnt-orange/20 rounded-full mx-auto mb-3">
                    <MapPin size={22} className="text-burnt-orange" />
                  </div>
                  <p className="text-2xl font-bold text-white">NC</p>
                  <p className="text-cream text-sm">Market Served</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-burnt-orange/20 rounded-full mx-auto mb-3">
                    <Users size={22} className="text-burnt-orange" />
                  </div>
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-cream text-sm">Founders</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <About />
        <Testimonials />
        <CTABanner />
      </div>
    </>
  );
}

export default AboutPage;
