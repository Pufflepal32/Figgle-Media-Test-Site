import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-green/95 to-burnt-orange/90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            We Build Roofing Websites That Bring You More Leads.
          </h1>
          <p className="text-xl sm:text-2xl text-alabaster mb-10 leading-relaxed">
            We help roofers in West Virginia and Tennessee dominate Google and get more calls with beautiful, high-converting websites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-burnt-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl"
            >
              Get My Free Website Plan
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center bg-peach text-jet-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all"
            >
              <Play className="mr-2" size={20} />
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
