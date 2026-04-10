import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Figgle Media</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <section className="min-h-[70vh] flex items-center justify-center bg-cream px-4">
        <div className="text-center max-w-xl">
          <p className="text-burnt-orange font-bold text-lg mb-4">404</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-4">
            We couldn't find that page
          </h1>
          <p className="text-lg text-warm-gray mb-8">
            The page you're looking for was moved, removed, or never existed. Try one of the links
            below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-burnt-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-deep-orange transition-all"
            >
              <Home size={18} />
              Go to homepage
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white border border-light-gray text-charcoal px-6 py-3 rounded-xl font-semibold hover:bg-light-gray transition-all"
            >
              <ArrowLeft size={18} />
              Browse our services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
