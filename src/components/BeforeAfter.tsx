export default function BeforeAfter() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-blue via-navy to-light-navy">
      <style>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .scroll-animation {
          animation: scrollDown 15s ease-in-out infinite alternate;
        }

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
              See The Transformation
            </h2>
            <p className="text-xl text-cream">
              Real results from roofing websites we've built
            </p>
          </div>

          {/* Before/After Comparison */}
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
                    {/* Full website screenshot - Replace with actual "before" screenshot if available */}
                    <img
                      src="/assets/old-website-before.png"
                      alt="Old Outdated Website Design"
                      className="w-full h-auto object-top"
                      style={{ minHeight: '1200px', objectFit: 'cover' }}
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `
                          <div class="bg-gradient-to-b from-gray-800 to-gray-900 min-h-[1200px] p-8">
                            <div class="text-center mb-8">
                              <div class="text-6xl mb-4">📱</div>
                              <h3 class="text-white text-2xl font-bold mb-2">Old Website Design</h3>
                              <p class="text-gray-400">Outdated, slow, not mobile-friendly</p>
                            </div>
                            <div class="space-y-6 max-w-4xl mx-auto">
                              <div class="bg-gray-700 h-48 rounded flex items-center justify-center text-gray-500 border border-gray-600">
                                <div class="text-center">
                                  <p class="font-bold text-gray-400">Old Hero Section</p>
                                  <p class="text-sm text-gray-500 mt-2">Poor layout, no clear CTA</p>
                                </div>
                              </div>
                              <div class="bg-gray-700 h-32 rounded flex items-center justify-center text-gray-500 border border-gray-600">
                                <div class="text-center">
                                  <p class="font-bold text-gray-400">Cluttered Services</p>
                                  <p class="text-sm text-gray-500 mt-2">Hard to read, no hierarchy</p>
                                </div>
                              </div>
                              <div class="bg-gray-700 h-40 rounded flex items-center justify-center text-gray-500 border border-gray-600">
                                <div class="text-center">
                                  <p class="font-bold text-gray-400">Generic About Section</p>
                                  <p class="text-sm text-gray-500 mt-2">Stock photos, no personality</p>
                                </div>
                              </div>
                              <div class="bg-gray-700 h-32 rounded flex items-center justify-center text-gray-500 border border-gray-600">
                                <div class="text-center">
                                  <p class="font-bold text-gray-400">Hidden Contact Form</p>
                                  <p class="text-sm text-gray-500 mt-2">Difficult to find</p>
                                </div>
                              </div>
                              <div class="bg-gray-700 h-24 rounded flex items-center justify-center text-gray-500 border border-gray-600">
                                <p class="font-bold text-gray-400">Messy Footer</p>
                              </div>
                            </div>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal to-transparent p-6 z-10">
                  <div className="grid grid-cols-3 gap-4 text-center text-white">
                    <div>
                      <p className="text-2xl font-bold text-burnt-orange">2</p>
                      <p className="text-sm">Leads/Month</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-burnt-orange">60%</p>
                      <p className="text-sm">Bounce Rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-burnt-orange">5s</p>
                      <p className="text-sm">Load Time</p>
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
                    {/* Full website screenshot */}
                    <img
                      src="/assets/premium-roofing-after.png"
                      alt="Modern Premium Roofing Website Design"
                      className="w-full h-auto object-top"
                      style={{ minHeight: '1200px', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-blue to-transparent p-6 z-10">
                  <div className="grid grid-cols-3 gap-4 text-center text-white">
                    <div>
                      <p className="text-2xl font-bold text-cream">25+</p>
                      <p className="text-sm">Leads/Month</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-cream">25%</p>
                      <p className="text-sm">Bounce Rate</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-cream">0.8s</p>
                      <p className="text-sm">Load Time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-burnt-orange to-deep-orange text-white px-8 py-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold mb-2">10X More Leads</p>
              <p className="text-lg">Average improvement across our roofing clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
