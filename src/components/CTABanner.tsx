import { ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section id="contact" className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Get More Leads?
          </h2>
          <p className="text-xl sm:text-2xl text-cream mb-10 leading-relaxed">
            Schedule a free consultation and discover how we can transform your website into a lead-generating machine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/free-website-plan"
              className="inline-flex items-center justify-center bg-burnt-orange hover:bg-deep-orange text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-3xl hover:scale-105 w-full sm:w-auto"
            >
              <Calendar className="mr-2" size={24} />
              Get Your Free Website Plan
              <ArrowRight className="ml-2" size={24} />
            </Link>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-cream">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span className="font-semibold">No Obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span className="font-semibold">Free Strategy Session</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span className="font-semibold">Quick Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
