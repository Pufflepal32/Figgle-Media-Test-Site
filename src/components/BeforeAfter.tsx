export default function BeforeAfter() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-dark-green mb-4">
              See The Transformation
            </h2>
            <p className="text-xl text-jet-black">
              Real results from roofing websites we've built
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Before */}
            <div className="group">
              <div className="relative overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105">
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-charcoal text-white px-4 py-2 rounded-lg font-bold text-lg z-10">
                  BEFORE
                </div>

                {/* Placeholder Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-warm-gray to-charcoal flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">📱</div>
                    <p className="text-white text-lg font-semibold">
                      Old Website Design
                    </p>
                    <p className="text-light-gray mt-2">
                      Outdated, slow, not mobile-friendly
                    </p>
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal to-transparent p-6">
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
              <div className="relative overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105 border-4 border-burnt-orange">
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-burnt-orange text-white px-4 py-2 rounded-lg font-bold text-lg z-10">
                  AFTER
                </div>

                {/* Placeholder Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-teal to-dark-green flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">✨</div>
                    <p className="text-white text-lg font-semibold">
                      Modern Figgle Media Design
                    </p>
                    <p className="text-cream mt-2">
                      Fast, responsive, lead-generating
                    </p>
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-green to-transparent p-6">
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
            <div className="inline-block bg-gradient-to-r from-dark-green to-teal text-white px-8 py-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold mb-2">10X More Leads</p>
              <p className="text-lg">Average improvement across our roofing clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
