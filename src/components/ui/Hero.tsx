import { useState, type FormEvent } from 'react';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { AnchorButton } from './Button';
import { BUSINESS } from '../../config/business';

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire to backend (Supabase / form service). For now just mark submitted.
    console.log('Hero form submitted:', form);
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-mesh-a pattern-grid">
      {/* Glow orbs — heavier than the section defaults so the hero reads as the
          "moment of impact" while still feeling part of the same palette. */}
      <div className="pointer-events-none absolute top-10 right-[-5%] h-[560px] w-[560px] rounded-full bg-burnt-orange/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[480px] w-[480px] rounded-full bg-sky-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-light-navy/20 blur-3xl" />
      {/* Bottom fade to the shared page bg so the hero dissolves into the
          first section instead of ending on a hard edge. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A1628] to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left column — content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-button px-4 py-2">
              <span className="w-2 h-2 bg-burnt-orange rounded-full animate-pulse"></span>
              <span className="text-eyebrow uppercase text-white">Contractor Marketing Agency · NC</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] tracking-tight">
              Websites That Turn{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-burnt-orange">Clicks</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-burnt-orange/20 -z-0"></span>
              </span>
              {' '}Into Booked Jobs.
            </h1>

            <p className="text-body-lg text-slate-200 max-w-2xl leading-relaxed">
              Custom websites and local SEO built exclusively for North Carolina contractors — roofing, HVAC, and electrical. We don't take on other industries. That's the advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <AnchorButton href={`tel:${BUSINESS.phoneTel}`} variant="primary" size="lg" iconLeft={<Phone size={20} />}>
                {BUSINESS.phoneDisplay}
              </AnchorButton>
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg text-white font-semibold border-2 border-white/30 rounded-button hover:bg-white/10 transition-all"
              >
                Get Your Free Plan
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Quick trust points */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-burnt-orange rounded-full"></div>
                <span>90-Day Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-burnt-orange rounded-full"></div>
                <span>No Long-Term Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-burnt-orange rounded-full"></div>
                <span>Built for Contractors</span>
              </div>
            </div>
          </div>

          {/* Right column — lead form */}
          <div id="lead-form" className="lg:col-span-5 lg:pl-4">
            <div className="bg-white rounded-feature p-6 sm:p-8 shadow-premium-lg">
              {!submitted ? (
                <>
                  <div className="text-eyebrow uppercase text-burnt-orange mb-2">Free Custom Plan</div>
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-navy-blue mb-2">
                    Get your website plan in 48 hours.
                  </h2>
                  <p className="text-slate-600 mb-6 text-body-sm">
                    Tell us about your business. We'll send back a tailored plan — no obligation.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="hero-name" className="block text-sm font-semibold text-navy-blue mb-1">
                        Full Name
                      </label>
                      <input
                        id="hero-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-button focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="hero-company" className="block text-sm font-semibold text-navy-blue mb-1">
                        Company Name
                      </label>
                      <input
                        id="hero-company"
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-button focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-all"
                        placeholder="Smith Roofing"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="hero-phone" className="block text-sm font-semibold text-navy-blue mb-1">
                          Phone
                        </label>
                        <input
                          id="hero-phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-button focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-all"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="hero-email" className="block text-sm font-semibold text-navy-blue mb-1">
                          Email
                        </label>
                        <input
                          id="hero-email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 border border-slate-300 rounded-button focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent transition-all"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-burnt-orange text-white px-6 py-4 rounded-button font-bold hover:bg-deep-orange transition-all shadow-premium hover:shadow-premium-hover flex items-center justify-center gap-2"
                    >
                      Get My Free Plan
                      <ArrowRight size={20} />
                    </button>
                    <p className="text-xs text-center text-slate-500">
                      No spam. We reply within one business day.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-burnt-orange/10 rounded-full mb-4">
                    <CheckCircle size={32} className="text-burnt-orange" />
                  </div>
                  <h2 className="font-display font-extrabold text-2xl text-navy-blue mb-3">
                    Got it — thanks!
                  </h2>
                  <p className="text-slate-600">
                    We'll review your info and send your custom plan within 48 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
