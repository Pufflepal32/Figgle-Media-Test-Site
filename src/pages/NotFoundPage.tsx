import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Figgle Media</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="min-h-[70vh] flex items-center justify-center bg-light-cream">
        <div className="text-center px-4">
          <h1 className="text-8xl font-bold text-burnt-orange mb-4">404</h1>
          <h2 className="text-3xl font-bold text-navy-blue mb-4">Page Not Found</h2>
          <p className="text-lg text-charcoal mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-burnt-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-deep-orange transition-all"
            >
              <Home size={20} />
              Back to Home
            </Link>
            <Link
              to="/free-website-plan"
              className="inline-flex items-center gap-2 bg-navy-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-navy transition-all group"
            >
              Get a Free Plan
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
