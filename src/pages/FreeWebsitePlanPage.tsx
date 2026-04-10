import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, TrendingUp, Users, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FreeWebsitePlanPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    console.log('Form submitted:', formData);

    // Add a small delay to show loading state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy-blue to-navy flex items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-dark-green mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-charcoal mb-6">
              We've received your information and will be in touch within 24 hours with your custom website plan.
            </p>
            <p className="text-lg text-warm-gray mb-8">
              Check your email for next steps and what to expect from our team.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-burnt-orange hover:bg-deep-orange text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Return to Home
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Get Your Free Website Plan | Figgle Media</title>
        <meta
          name="description"
          content="Get a free, no-obligation website plan tailored to your contractor business. We'll show you exactly what's broken and how to fix it to generate more leads."
        />
        <link rel="canonical" href="https://figglemedia.com/free-website-plan" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-navy-blue via-dark-navy to-navy">
      {/* Simple Header with Logo Only */}
      <header className="py-6">
        <div className="container mx-auto px-4">
          <Link to="/" className="flex items-center gap-3 w-fit">
            <img
              src="/assets/logo.webp"
              alt="Figgle Media Logo"
              className="h-12 w-12 object-cover rounded-full"
            />
            <span className="text-2xl font-bold text-white">Figgle Media</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main id="main" className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Value Proposition */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Get Your Free Custom Website Plan
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-cream leading-relaxed">
                Discover exactly how we'll transform your contractor website into a 24/7 lead-generating machine.
              </p>

              {/* What's Included */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Your Free Plan Includes:</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-burnt-orange rounded-full p-2 flex-shrink-0">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Custom Design Mockup</h3>
                      <p className="text-cream">See exactly what your new site will look like</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-burnt-orange rounded-full p-2 flex-shrink-0">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Competitor Analysis</h3>
                      <p className="text-cream">We'll show you how to outrank your competition</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-burnt-orange rounded-full p-2 flex-shrink-0">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Lead Generation Strategy</h3>
                      <p className="text-cream">Proven tactics to turn visitors into customers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-burnt-orange rounded-full p-2 flex-shrink-0">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">SEO Opportunities</h3>
                      <p className="text-cream">Local keywords to dominate your market</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-burnt-orange mb-1">90-Day</div>
                  <div className="text-sm text-cream">Guarantee</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-burnt-orange mb-1">100%</div>
                  <div className="text-sm text-cream">Construction Focus</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold text-burnt-orange mb-1">24hr</div>
                  <div className="text-sm text-cream">Response Time</div>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-white rounded-xl p-6 text-charcoal">
                <div className="flex items-center gap-3 mb-3">
                  <Shield size={24} className="text-burnt-orange" />
                  <p className="text-lg font-bold text-dark-green">Our Performance Guarantee</p>
                </div>
                <p className="text-charcoal leading-relaxed">
                  If your new website doesn't generate more leads within 90 days, we'll keep working for free until it does. We only succeed when you do.
                </p>
              </div>
            </div>

            {/* Right Column - Lead Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:sticky lg:top-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-dark-green mb-2">
                    Start Growing Today
                  </h2>
                  <p className="text-charcoal">
                    Fill out the form below and we'll get started on your custom plan
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-dark-green mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-light-gray rounded-lg focus:border-burnt-orange focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark-green mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-light-gray rounded-lg focus:border-burnt-orange focus:outline-none transition-colors"
                      placeholder="john@mycompany.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-dark-green mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-light-gray rounded-lg focus:border-burnt-orange focus:outline-none transition-colors"
                      placeholder="(304) 555-1234"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-dark-green mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-light-gray rounded-lg focus:border-burnt-orange focus:outline-none transition-colors"
                      placeholder="ABC Construction"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-burnt-orange hover:bg-deep-orange disabled:bg-warm-gray disabled:cursor-not-allowed text-white font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Get My Free Website Plan
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-6 pt-4 text-sm text-warm-gray">
                    <div className="flex items-center gap-2">
                      <Shield size={16} className="text-teal" />
                      <span>No Obligation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap size={16} className="text-burnt-orange" />
                      <span>Quick Response</span>
                    </div>
                  </div>
                </form>
              </div>

              {/* Additional Trust Badges Below Form */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <TrendingUp className="mx-auto mb-2 text-teal" size={24} />
                  <p className="text-xs font-semibold text-dark-green">ROI Focused</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Users className="mx-auto mb-2 text-burnt-orange" size={24} />
                  <p className="text-xs font-semibold text-dark-green">Construction Experts</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                  <Shield className="mx-auto mb-2 text-dark-green" size={24} />
                  <p className="text-xs font-semibold text-dark-green">Data Secure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}
