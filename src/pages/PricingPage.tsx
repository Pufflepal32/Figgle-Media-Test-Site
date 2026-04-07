import { Check, DollarSign, Shield, Zap } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CTABanner from '../components/CTABanner';

function PricingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,999',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Custom Website Design',
        'Mobile Responsive',
        'Basic SEO Setup',
        'Contact Form Integration',
        '5 Pages Included',
        '30 Days Support'
      ],
      featured: false
    },
    {
      name: 'Scaler',
      price: '$4,999',
      description: 'Most popular for growing businesses',
      features: [
        'Everything in Starter',
        'Advanced SEO Optimization',
        'Google Ads Management',
        'Social Media Integration',
        '10 Pages Included',
        'Blog Setup',
        'Analytics Dashboard',
        '90 Days Support'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: '$10,000+',
      description: 'Complete solution for established businesses',
      features: [
        'Everything in Scaler',
        'E-commerce Integration',
        'Custom Features & Integrations',
        'Unlimited Pages',
        'Priority Support',
        'Dedicated Account Manager',
        'Monthly Strategy Calls',
        '1 Year Support & Maintenance'
      ],
      featured: false
    }
  ];

  const services = [
    {
      icon: '💻',
      name: 'Custom Website',
      description: 'Professional, mobile-responsive website designed for your business',
      price: '$1,750'
    },
    {
      icon: '🔍',
      name: 'Local SEO',
      description: 'Optimize your online presence to rank higher in local search results',
      price: '$2,000'
    },
    {
      icon: '🎯',
      name: 'Aggressive SEO',
      description: 'Comprehensive SEO strategy to dominate your market',
      price: '$4,800'
    },
    {
      icon: '📱',
      name: 'Paid Ads Management',
      description: 'Expert Google Ads and social media advertising management',
      price: '$2,000'
    },
    {
      icon: '📍',
      name: 'Local Service Ads Management',
      description: 'Manage and optimize your Google Local Service Ads',
      price: '$500'
    },
    {
      icon: '🗺️',
      name: 'GBP Management',
      description: 'Google Business Profile optimization and management',
      price: '$1,000'
    }
  ];

  const faqs = [
    {
      question: 'What does your starter package include?',
      answer: 'Our starter package includes a custom-designed, mobile-responsive website with up to 5 pages, basic SEO setup, contact form integration, and 30 days of support after launch.'
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer: 'Yes, we can help you set up hosting and domain services, or work with your existing providers. Hosting and domain costs are separate from our design and development fees.'
    },
    {
      question: 'Why is Team Figgle the best choice for Paid Ads Management (Not just Google Ads)?',
      answer: 'We specialize in multiple advertising platforms including Google Ads, Facebook Ads, and Instagram Ads. Our team has years of experience managing campaigns across industries, ensuring your ad spend delivers maximum ROI.'
    },
    {
      question: 'How long does it take to build a website?',
      answer: 'Typical project timelines range from 4-8 weeks depending on the complexity and scope. We will provide a detailed timeline during our initial consultation.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-navy-blue via-dark-navy to-navy overflow-hidden">
        {/* SVG Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="pricing-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricing-dots)" />
          </svg>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-burnt-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-burnt-orange/5 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-burnt-orange/20 border border-burnt-orange/30 rounded-full px-5 py-2 mb-8">
            <DollarSign size={16} className="text-burnt-orange" />
            <span className="text-burnt-orange font-semibold text-sm">Transparent Pricing, No Hidden Fees</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Invest in Growth,{' '}
            <span className="text-burnt-orange">Not Guesswork</span>
          </h1>
          <p className="text-xl text-cream max-w-2xl mx-auto mb-12 leading-relaxed">
            Choose the package that fits your goals. Every plan is built to deliver measurable ROI for your construction business.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { icon: Shield, label: '90-Day Guarantee' },
              { icon: Zap, label: 'Results in 30 Days' },
              { icon: Check, label: 'No Long-Term Contracts' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-cream">
                <item.icon size={20} className="text-burnt-orange" />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 ${
                  tier.featured
                    ? 'bg-burnt-orange transform scale-105 border-4 border-yellow-400'
                    : 'bg-gray-800 border-2 border-gray-700'
                } transition-all hover:transform hover:scale-105`}
              >
                {tier.featured && (
                  <div className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-5xl font-bold text-white mb-4">{tier.price}</div>
                <p className={`mb-6 ${tier.featured ? 'text-white' : 'text-gray-300'}`}>{tier.description}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={tier.featured ? "text-yellow-300 flex-shrink-0 mt-1" : "text-green-400 flex-shrink-0 mt-1"} size={20} />
                      <span className={tier.featured ? "text-white" : "text-gray-200"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Scale Section */}
      <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to scale?
            </h2>
            <p className="text-xl text-cream mb-10">
              Let's discuss how we can help grow your construction business with a custom solution tailored to your market.
            </p>

            <a
              href="/free-website-plan"
              className="inline-block bg-burnt-orange text-white px-12 py-5 rounded-xl text-xl font-bold hover:bg-deep-orange transition-all shadow-2xl hover:shadow-burnt-orange/50 hover:scale-105 transform mb-10"
            >
              Talk to Sales
            </a>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-2xl font-bold text-burnt-orange mb-2">90 Days</p>
                <p className="text-cream text-sm">Performance guarantee — free work if no improvement</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-2xl font-bold text-burnt-orange mb-2">Construction Only</p>
                <p className="text-cream text-sm">We exclusively serve construction businesses</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-2xl font-bold text-burnt-orange mb-2">Full Service</p>
                <p className="text-cream text-sm">Design, SEO, Ads — all handled in-house</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Broken Down by Service */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            PRICING BROKEN DOWN BY SERVICE
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-8 border-2 border-gray-700 hover:border-burnt-orange transition-all"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-6 min-h-[60px]">{service.description}</p>
                <div className="text-4xl font-bold text-burnt-orange">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Figgle Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-burnt-orange rounded-xl p-12 text-white mb-12">
              <h2 className="text-4xl font-bold mb-6">
                WHY IS FIGGLE MEDIA MORE EXPENSIVE?
              </h2>
              <p className="text-lg leading-relaxed">
                You shouldn't be the cheapest, and we aren't either. Here's why:
              </p>
            </div>
            <div className="space-y-6 text-cream">
              <div className="flex gap-4">
                <Check className="text-burnt-orange flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-xl mb-2 text-white">Custom website design</h4>
                  <p>We take pride in every custom website we build, and it shows. On average, we spend 2x more time on websites compared to other agencies.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="text-burnt-orange flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-xl mb-2 text-white">Comprehensive approach</h4>
                  <p>We do everything in-house from custom illustrations to premium copywriting, and we really mean everything.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="text-burnt-orange flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-xl mb-2 text-white">We're invested in your success</h4>
                  <p>With limited monthly availability, we're working with you because we genuinely think our team is a good fit. At the end of the day, nothing matters more than ROI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Discount Section */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              GET MORE + BETTER RESULTS BY USING ALL SERVICES TOGETHER (AND GET 5K OFF)
            </h2>
            <p className="text-lg text-cream mb-8">
              Our bundled packages are designed to work together seamlessly, giving you the best results while saving you money.
            </p>
            <div className="bg-gray-800 rounded-xl p-8 border-2 border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-6">
                Our bundled approach saves you 5,000+ more than buying individual services, and speeds up launch time because you're working with one dedicated team rather than juggling multiple contractors. All our services work together to create a cohesive marketing strategy that drives real results for your business.
              </p>
              <a
                href="/free-website-plan"
                className="inline-block bg-burnt-orange text-white px-8 py-4 rounded-lg font-semibold hover:bg-deep-orange transition-all shadow-lg hover:shadow-xl"
              >
                Learn More About Bundles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            COMMONLY ASKED QUESTIONS
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left px-6 py-4 bg-gray-800 hover:bg-gray-750 transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-lg text-white">{faq.question}</span>
                  <span className="text-2xl text-burnt-orange">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 py-4 bg-gray-850 border-t-2 border-gray-700">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </div>
  );
}

export default PricingPage;
