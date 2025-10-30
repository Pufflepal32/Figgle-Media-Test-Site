import { ArrowRight, Calendar } from 'lucide-react';

export default function CTABanner() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-dark-green to-burnt-orange">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get More Roofing Leads This Month.
          </h2>
          <p className="text-xl sm:text-2xl text-alabaster mb-10 leading-relaxed">
            Schedule a free 30-minute consultation and discover how we can transform your website into a lead-generating machine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-burnt-orange text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all shadow-2xl hover:shadow-3xl w-full sm:w-auto"
            >
              <Calendar className="mr-2" size={24} />
              Claim Your Free Website Plan
              <ArrowRight className="ml-2" size={24} />
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-peach">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">No Obligation</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Free Strategy Session</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Quick Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
