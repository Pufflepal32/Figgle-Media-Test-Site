import { MapPin, CheckCircle, Phone } from 'lucide-react';

export default function MapEmbed() {
  const serviceAreas = [
    { city: 'Charleston', state: 'WV' },
    { city: 'Huntington', state: 'WV' },
    { city: 'Morgantown', state: 'WV' },
    { city: 'Parkersburg', state: 'WV' },
    { city: 'Wheeling', state: 'WV' },
    { city: 'Nashville', state: 'TN' },
    { city: 'Memphis', state: 'TN' },
    { city: 'Knoxville', state: 'TN' },
    { city: 'Chattanooga', state: 'TN' },
  ];

  // Map centered on the region between Tennessee and West Virginia
  const mapUrl = 'https://www.google.com/maps?q=Tennessee+West+Virginia&output=embed&z=7';

  return (
    <section className="py-16 bg-gradient-to-br from-navy-blue via-navy to-light-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Most Future Proof Web Design Agency in Tennessee and West Virginia
          </h2>
          <p className="text-xl text-cream max-w-3xl mx-auto">
            Proudly serving roofing contractors across both states with cutting-edge websites that drive results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Service Areas & Info */}
          <div className="space-y-6">
            {/* Service Areas Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-burnt-orange rounded-full p-3">
                  <MapPin size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark-green">Our Service Areas</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-teal flex-shrink-0" />
                    <span className="text-charcoal font-medium">
                      {area.city}, {area.state}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-warm-gray text-sm italic">
                And surrounding areas throughout Tennessee and West Virginia
              </p>
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-br from-light-navy to-navy rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Roofing Contractors Choose Us</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-1" />
                  <p>Specialized in roofing industry websites</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-1" />
                  <p>Local market expertise in TN & WV</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-1" />
                  <p>Proven lead generation strategies</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-1" />
                  <p>Mobile-first, lightning-fast designs</p>
                </div>
              </div>

              <a
                href="tel:+1234567890"
                className="mt-6 flex items-center justify-center gap-2 bg-burnt-orange hover:bg-deep-orange text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
              >
                <Phone size={20} />
                Call Us Today
              </a>
            </div>
          </div>

          {/* Right Column - Map */}
          <div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-burnt-orange sticky top-8">
              <div className="relative w-full h-[500px] lg:h-[600px]">
                <iframe
                  src={mapUrl}
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Service Areas Map - Tennessee and West Virginia"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
