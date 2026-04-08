import { X, Check } from 'lucide-react';

export default function BeforeAfter() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-blue via-navy to-light-navy">
      <style>{`
        .scroll-animation-before {
          animation: scrollDownBefore 15s ease-in-out infinite alternate;
        }

        @keyframes scrollDownBefore {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-100% + 600px));
          }
        }

        .scroll-animation-after {
          animation: scrollDownAfter 15s ease-in-out infinite alternate;
        }

        @keyframes scrollDownAfter {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-100% + 600px));
          }
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              The Figgle Media Difference
            </h2>
            <p className="text-xl text-white">
              Most contractor websites are costing their owners jobs. Here's what we build instead.
            </p>
          </div>

          {/* Before/After Visual Comparison */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Before */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-charcoal text-white px-4 py-2 rounded-lg font-bold text-lg z-10">
                  BEFORE
                </div>

                {/* Scrolling Website Preview */}
                <div className="h-[600px] overflow-hidden bg-gray-800">
                  <div className="scroll-animation-before">
                    <img
                      src="/assets/old-website-before.webp" loading="lazy"
                      alt="Typical outdated contractor website design"
                      className="w-full h-auto object-top"
                      style={{ minHeight: '1200px', objectFit: 'cover' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="bg-gradient-to-b from-gray-800 to-gray-900 min-h-[1200px] p-8">
                            <div class="text-center mb-8">
                              <h3 class="text-white text-2xl font-bold mb-2">Typical Contractor Website</h3>
                              <p class="text-gray-400">Outdated, slow, not mobile-friendly</p>
                            </div>
                            <div class="space-y-6 max-w-4xl mx-auto">
                              <div class="bg-gray-700 h-48 rounded flex items-center justify-center border border-gray-600">
                                <div class="text-center">
                                  <p class="font-bold text-gray-400">Old Hero Section</p>
                                  <p class="text-sm text-gray-500 mt-2">Poor layout, no clear CTA</p>
                                </div>
                              </div>
                              <div class="bg-gray-700 h-32 rounded flex items-center justify-center border border-gray-600">
                                <div class="text-center">
                                  <p class="font-bold text-gray-400">Cluttered Services</p>
                                  <p class="text-sm text-gray-500 mt-2">Hard to read, no hierarchy</p>
                                </div>
                              </div>
                              <div class="bg-gray-700 h-40 rounded flex items-center justify-center border border-gray-600">
                                <div class="text-center">
                                  <p class="font-bold text-gray-400">Generic About Section</p>
                                  <p class="text-sm text-gray-500 mt-2">Stock photos, no personality</p>
                                </div>
                              </div>
                              <div class="bg-gray-700 h-32 rounded flex items-center justify-center border border-gray-600">
                                <div class="text-center">
                                  <p class="font-bold text-gray-400">Hidden Contact Form</p>
                                  <p class="text-sm text-gray-500 mt-2">Difficult to find</p>
                                </div>
                              </div>
                              <div class="bg-gray-700 h-24 rounded flex items-center justify-center border border-gray-600">
                                <p class="font-bold text-gray-400">Messy Footer</p>
                              </div>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>

                {/* Problems Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal to-transparent p-6 z-10">
                  <div className="grid grid-cols-3 gap-4 text-center text-white">
                    <div className="flex flex-col items-center">
                      <X size={20} className="text-red-400 mb-1" />
                      <p className="text-sm">Slow Loading</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <X size={20} className="text-red-400 mb-1" />
                      <p className="text-sm">No Mobile</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <X size={20} className="text-red-400 mb-1" />
                      <p className="text-sm">No SEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-burnt-orange">
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-burnt-orange text-white px-4 py-2 rounded-lg font-bold text-lg z-10">
                  AFTER
                </div>

                {/* Scrolling Website Preview */}
                <div className="h-[600px] overflow-hidden bg-navy-blue">
                  <div className="scroll-animation-after">
                    <img
                      src="/assets/premium-roofing-after.webp" loading="lazy"
                      alt="Modern premium contractor website designed by Figgle Media"
                      className="w-full h-auto object-top"
                      style={{ minHeight: '1200px', objectFit: 'cover' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="bg-gradient-to-b from-navy-blue to-navy min-h-[1200px] p-8">
                            <div class="text-center mb-8">
                              <h3 class="text-white text-2xl font-bold mb-2">A Figgle Media Website</h3>
                              <p class="text-cream">Modern, fast, built to convert</p>
                            </div>
                            <div class="space-y-6 max-w-4xl mx-auto">
                              <div class="bg-burnt-orange/20 h-48 rounded flex items-center justify-center border border-burnt-orange/40">
                                <div class="text-center">
                                  <p class="font-bold text-white">Conversion-Focused Hero</p>
                                  <p class="text-sm text-cream mt-2">Clear CTA, lead capture form</p>
                                </div>
                              </div>
                              <div class="bg-burnt-orange/20 h-32 rounded flex items-center justify-center border border-burnt-orange/40">
                                <div class="text-center">
                                  <p class="font-bold text-white">Trust Signals</p>
                                  <p class="text-sm text-cream mt-2">Guarantee, credentials, social proof</p>
                                </div>
                              </div>
                              <div class="bg-burnt-orange/20 h-40 rounded flex items-center justify-center border border-burnt-orange/40">
                                <div class="text-center">
                                  <p class="font-bold text-white">Services & Process</p>
                                  <p class="text-sm text-cream mt-2">Clear value proposition</p>
                                </div>
                              </div>
                              <div class="bg-burnt-orange/20 h-32 rounded flex items-center justify-center border border-burnt-orange/40">
                                <div class="text-center">
                                  <p class="font-bold text-white">Click-to-Call CTA</p>
                                  <p class="text-sm text-cream mt-2">One tap to contact you</p>
                                </div>
                              </div>
                              <div class="bg-burnt-orange/20 h-24 rounded flex items-center justify-center border border-burnt-orange/40">
                                <p class="font-bold text-white">Professional Footer</p>
                              </div>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>

                {/* Benefits Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-blue to-transparent p-6 z-10">
                  <div className="grid grid-cols-3 gap-4 text-center text-white">
                    <div className="flex flex-col items-center">
                      <Check size={20} className="text-burnt-orange mb-1" />
                      <p className="text-sm">Fast Loading</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Check size={20} className="text-burnt-orange mb-1" />
                      <p className="text-sm">Mobile-First</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <Check size={20} className="text-burnt-orange mb-1" />
                      <p className="text-sm">SEO Built-In</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-burnt-orange to-deep-orange text-white px-8 py-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold mb-2">Your Website Should Work as Hard as You Do</p>
              <p className="text-lg">We build contractor websites that actually generate leads.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
