import { ArrowRight, Phone, CheckCircle, Star } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-light-cream via-white to-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D5C3B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-2">
              <Star className="text-teal fill-teal" size={16} />
              <span className="text-sm font-semibold text-dark-green">Trusted by 100+ Roofers</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              Get More Roofing Leads With a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-green to-teal">
                Website That Works
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-warm-gray leading-relaxed">
              Custom-built websites that turn visitors into customers. We specialize in helping roofers in West Virginia and Tennessee dominate their local markets.
            </p>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                'Get found on Google by homeowners searching for roofers',
                'Convert more visitors into qualified leads',
                'Professional design that builds trust instantly',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-teal flex-shrink-0 mt-1" size={20} />
                  <span className="text-charcoal">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Phone CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-4">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-3 bg-burnt-orange text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-deep-orange transition-all shadow-lg hover:shadow-xl group"
              >
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                <span>(123) 456-7890</span>
              </a>
              <span className="text-sm text-warm-gray">Call now for a free consultation</span>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-light-gray">
              {/* Form Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-charcoal mb-2">
                  Get Your Free Website Plan
                </h3>
                <p className="text-warm-gray">
                  See how we can help you get more roofing leads
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-dark-green to-teal text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  Get My Free Plan
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>

                <p className="text-xs text-center text-warm-gray">
                  No obligation. Free consultation. We'll show you exactly how to get more leads.
                </p>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-light-gray">
                <div className="flex items-center justify-center gap-4 text-sm text-warm-gray">
                  <div className="flex items-center gap-1">
                    <CheckCircle size={16} className="text-teal" />
                    <span>No Spam</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={16} className="text-teal" />
                    <span>Quick Response</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-burnt-orange text-white px-6 py-3 rounded-xl shadow-xl transform rotate-3 hidden lg:block">
              <div className="text-sm font-semibold">Special Offer</div>
              <div className="text-2xl font-bold">Save 20%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
