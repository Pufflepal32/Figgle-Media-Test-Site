import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactUs() {
  const serviceArea = "{{service_area}}"; // e.g., "Charleston, WV"
  const phoneNumber = "{{phone_number}}"; // e.g., "(304) 555-1234"
  const emailAddress = "{{email_address}}"; // e.g., "info@roofingcompany.com"

  // Simple Google Maps embed URL (no API key required)
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(serviceArea)}&output=embed`;

  return (
    <section id="contact" className="py-16 md:py-24" style={{ backgroundColor: '#FFF8E7' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1B3A2B' }}>
              Contact Us
            </h2>
            <p className="text-lg md:text-xl" style={{ color: '#4A5D55' }}>
              Get in touch for a free roofing estimate
            </p>
          </div>

          {/* 2-Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Information */}
            <div className="space-y-6">
              {/* Contact Info Card */}
              <div
                className="rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#1B3A2B' }}>
                  Get In Touch
                </h3>

                {/* Phone */}
                <div className="flex items-start mb-6 group">
                  <div
                    className="rounded-full p-3 mr-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: '#D66F2C' }}
                  >
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#1B3A2B' }}>
                      Phone
                    </h4>
                    <a
                      href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                      className="text-lg font-bold transition-colors duration-300"
                      style={{ color: '#D66F2C' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#B85820'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#D66F2C'}
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start mb-6 group">
                  <div
                    className="rounded-full p-3 mr-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: '#1FA4A9' }}
                  >
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#1B3A2B' }}>
                      Email
                    </h4>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-lg font-bold break-all transition-colors duration-300"
                      style={{ color: '#1FA4A9' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#178388'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#1FA4A9'}
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start mb-6 group">
                  <div
                    className="rounded-full p-3 mr-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: '#1B3A2B' }}
                  >
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#1B3A2B' }}>
                      Service Area
                    </h4>
                    <p className="text-lg" style={{ color: '#4A5D55' }}>
                      {serviceArea}
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start group">
                  <div
                    className="rounded-full p-3 mr-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: '#D66F2C' }}
                  >
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: '#1B3A2B' }}>
                      Business Hours
                    </h4>
                    <p className="text-lg" style={{ color: '#4A5D55' }}>
                      Mon-Fri: 8am - 6pm<br />
                      Sat: 9am - 4pm
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                className="block text-center font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{
                  backgroundColor: '#D66F2C',
                  color: '#FFFFFF'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#B85820'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#D66F2C'}
              >
                Call Now for Free Estimate
              </a>
            </div>

            {/* Right Column - Map */}
            <div>
              <div
                className="rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                style={{ border: '3px solid #1B3A2B' }}
              >
                <div className="relative w-full h-full min-h-[400px] md:min-h-[600px]">
                  <iframe
                    src={mapEmbedUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Service Area Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
