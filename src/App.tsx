import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import HomePage from './pages/HomePage';
import { usePageTracking } from './hooks/usePageTracking';

const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const FreeWebsitePlanPage = lazy(() => import('./pages/FreeWebsitePlanPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const RaleighPage = lazy(() => import('./pages/RaleighPage'));
const ServiceLandingPage = lazy(() => import('./pages/ServiceLandingPage'));
const CityLandingPage = lazy(() => import('./pages/CityLandingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function AppRoutes() {
  usePageTracking();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
          {/* Landing page route without header/footer for maximum conversions */}
          <Route path="/free-website-plan" element={<FreeWebsitePlanPage />} />

          {/* Main site routes with header/footer */}
          <Route path="*" element={
            <div className="min-h-screen">
              <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-burnt-orange focus:text-white focus:px-4 focus:py-2 focus:rounded">
                Skip to main content
              </a>
              <Header />
              <main id="main-content">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/:slug" element={<ServiceLandingPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/our-process" element={<TestimonialsPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/raleigh-contractor-web-design" element={<RaleighPage />} />
                  <Route path="/charlotte-contractor-web-design" element={<CityLandingPage />} />
                  <Route path="/durham-contractor-web-design" element={<CityLandingPage />} />
                  <Route path="/greensboro-contractor-web-design" element={<CityLandingPage />} />
                  <Route path="/winston-salem-contractor-web-design" element={<CityLandingPage />} />
                  <Route path="/fayetteville-contractor-web-design" element={<CityLandingPage />} />
                  <Route path="/wilmington-contractor-web-design" element={<CityLandingPage />} />
                  <Route path="/asheville-contractor-web-design" element={<CityLandingPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          } />
        </Routes>
      </Suspense>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
