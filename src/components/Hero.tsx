import { ArrowRight, Phone, CheckCircle, Star } from 'lucide-react';
import { useState } from 'react';
import { getCurrentMonthYear } from '../utils/useCurrentDate';
import { BUSINESS } from '../config/business';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="home" className="relative pt-20 bg-gradient-to-br from-navy-blue via-dark-navy to-navy">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D5C3B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
              <Star className="text-bright-orange fill-burnt-orange" size={14} />
              <span className="text-xs sm:text-sm font-semibold text-white">Built for Construction Businesses</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Websites That Turn Clicks Into{' '}
              <span className="text-bright-orange">Booked Jobs</span>
            </h1>

            {/* Subline with date */}
            <p className="text-sm sm:text-base font-semibold text-cream/70">
              Trusted by Contractors Nationwide — {getCurrentMonthYear()}
            </p>

            {/* Subheadline — hidden on small mobile to save space */}
            <p className="hidden sm:block text-lg sm:text-xl text-cream leading-relaxed">
              Custom-built websites that turn visitors into customers. We specialize in helping construction businesses across North Carolina dominate their local markets.
            </p>
            {/* Shorter mobile subheadline */}
            <p className="sm:hidden text-base text-cream leading-relaxed">
              Custom websites for contractors that rank on Google and generate real leads.
            </p>

            {/* Benefits — visible on sm+ only */}
            <div className="hidden sm:block space-y-3">
              {[
                'Get found on Google by clients searching for contractors',
                'Convert more visitors into qualified leads',
                'Professional design that builds trust instantly',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-bright-orange flex-shrink-0 mt-1" size={20} />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="inline-flex items-center justify-center gap-3 bg-burnt-orange text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-deep-orange transition-all shadow-lg hover:shadow-xl group"
              >
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                <span>{BUSINESS.phoneDisplay}</span>
              </a>
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all lg:hidden"
              >
                Get Free Plan
                <ArrowRight size={18} />
              </a>
              <span className="hidden sm:flex items-center text-sm text-cream">Call now for a free consultation</span>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="relative" id="lead-form">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-light-gray">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-charcoal mb-1 sm:mb-2">
                  Get Your Free Website Plan
                </h3>
                <p className="text-warm-gray text-sm sm:text-base">
                  See how we can help you get more leads
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy-blue mb-1.5 sm:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-all text-base"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy-blue mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-all text-base"
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-blue mb-1.5 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-all text-base"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-burnt-orange to-deep-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  Get My Free Plan
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>

                <p className="text-xs text-center text-navy-blue">
                  No obligation. Free consultation. We'll show you exactly how to get more leads.
                </p>
              </form>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-light-gray">
                <div className="flex items-center justify-center gap-4 text-sm text-navy-blue">
                  <div className="flex items-center gap-1">
                    <CheckCircle size={16} className="text-bright-orange" />
                    <span>No Spam</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={16} className="text-bright-orange" />
                    <span>Quick Response</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge — desktop only */}
            <div className="absolute -bottom-6 -left-6 bg-burnt-orange text-white px-6 py-3 rounded-xl shadow-xl transform rotate-3 hidden lg:block">
              <div className="text-sm font-semibold">Special Offer</div>
              <div className="text-2xl font-bold">Save 20%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-navy-blue/95 backdrop-blur-sm border-t border-white/10 p-3 flex gap-3 lg:hidden">
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-burnt-orange text-white py-3 rounded-lg font-bold text-sm hover:bg-deep-orange transition-all"
        >
          <Phone size={16} />
          Call Now
        </a>
        <a
          href="#lead-form"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white py-3 rounded-lg font-bold text-sm hover:bg-white/20 transition-all"
        >
          Free Plan
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
