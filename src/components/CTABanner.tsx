import { ArrowRight, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-navy-blue via-dark-navy to-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

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
