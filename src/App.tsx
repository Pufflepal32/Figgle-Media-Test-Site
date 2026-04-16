import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { usePageTracking } from './hooks/usePageTracking';
import { useScrollToTop } from './hooks/useScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

// Homepage is eagerly imported so the above-fold hero renders without a chunk round-trip.
import HomePage from './pages/HomePage';

const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const OurWorkPage = lazy(() => import('./pages/OurWorkPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const FreeWebsitePlanPage = lazy(() => import('./pages/FreeWebsitePlanPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const RaleighPage = lazy(() => import('./pages/RaleighPage'));
const ServiceLandingPage = lazy(() => import('./pages/ServiceLandingPage'));
const CityLandingPage = lazy(() => import('./pages/CityLandingPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const IndustryPage = lazy(() => import('./pages/IndustryPage'));
const ServiceLocationPage2 = lazy(() => import('./pages/ServiceLocationPage2'));

function PageTracker() {
  usePageTracking();
  useScrollToTop();
  return null;
}

function App() {
  return (
    <Router>
      <PageTracker />
      <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        {/* Landing page route without header/footer for maximum conversions */}
        <Route path="/free-website-plan" element={<FreeWebsitePlanPage />} />

        {/* Main site routes with header/footer */}
        <Route
          path="*"
          element={
            <div className="min-h-screen">
              <Header />
              <main id="main">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/services/:slug" element={<ServiceLandingPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/our-process" element={<TestimonialsPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/our-work" element={<OurWorkPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />

                  {/* ── Industry Silos (new primary structure) ── */}
                  <Route path="/roofing" element={<IndustryPage />} />
                  <Route path="/roofing/web-design" element={<IndustryPage />} />
                  <Route path="/roofing/seo" element={<IndustryPage />} />
                  <Route path="/roofing/google-ads" element={<IndustryPage />} />
                  <Route path="/roofing/lead-generation" element={<IndustryPage />} />
                  <Route path="/hvac" element={<IndustryPage />} />
                  <Route path="/hvac/web-design" element={<IndustryPage />} />
                  <Route path="/hvac/seo" element={<IndustryPage />} />
                  <Route path="/hvac/google-ads" element={<IndustryPage />} />
                  <Route path="/hvac/lead-generation" element={<IndustryPage />} />
                  <Route path="/electrician" element={<IndustryPage />} />
                  <Route path="/electrician/web-design" element={<IndustryPage />} />
                  <Route path="/electrician/seo" element={<IndustryPage />} />
                  <Route path="/electrician/google-ads" element={<IndustryPage />} />
                  <Route path="/electrician/lead-generation" element={<IndustryPage />} />

                  {/* Umbrella / informational */}
                  <Route path="/contractor-marketing-agency" element={<IndustryPage />} />

                  {/* 301-equivalent client-side redirects from legacy flat L1 URLs (edge 301s in _redirects) */}
                  <Route path="/roofing-web-design" element={<Navigate to="/roofing/web-design" replace />} />
                  <Route path="/seo-for-roofers" element={<Navigate to="/roofing/seo" replace />} />
                  <Route path="/google-ads-for-roofers" element={<Navigate to="/roofing/google-ads" replace />} />
                  <Route path="/roofing-lead-generation" element={<Navigate to="/roofing/lead-generation" replace />} />
                  <Route path="/hvac-web-design" element={<Navigate to="/hvac/web-design" replace />} />
                  <Route path="/seo-for-hvac" element={<Navigate to="/hvac/seo" replace />} />
                  <Route path="/google-ads-for-hvac" element={<Navigate to="/hvac/google-ads" replace />} />
                  <Route path="/hvac-lead-generation" element={<Navigate to="/hvac/lead-generation" replace />} />

                  {/* ── SEO Layer 2: Location Hub Pages ── */}
                  {/* Raleigh uses the bespoke page (depth beats template). Future cities use LocationHubPage. */}
                  <Route path="/raleigh-web-design" element={<RaleighPage />} />

                  {/* ── SEO Layer 3: Service + Location Pages (Raleigh) ── */}
                  <Route path="/raleigh-roofing-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/raleigh-seo-for-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/raleigh-google-ads-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/raleigh-roofing-lead-generation" element={<ServiceLocationPage2 />} />
                  <Route path="/raleigh-hvac-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/raleigh-seo-for-hvac" element={<ServiceLocationPage2 />} />
                  <Route path="/raleigh-google-ads-hvac" element={<ServiceLocationPage2 />} />
                  <Route path="/raleigh-hvac-lead-generation" element={<ServiceLocationPage2 />} />

                  {/* ── SEO Layer 3: Service + Location Pages (Charlotte) ── */}
                  <Route path="/charlotte-roofing-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/charlotte-seo-for-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/charlotte-google-ads-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/charlotte-roofing-lead-generation" element={<ServiceLocationPage2 />} />

                  {/* ── SEO Layer 3: Service + Location Pages (Durham) ── */}
                  <Route path="/durham-roofing-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/durham-seo-for-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/durham-google-ads-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/durham-roofing-lead-generation" element={<ServiceLocationPage2 />} />
                  <Route path="/durham-hvac-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/durham-seo-for-hvac" element={<ServiceLocationPage2 />} />
                  <Route path="/durham-google-ads-hvac" element={<ServiceLocationPage2 />} />
                  <Route path="/durham-hvac-lead-generation" element={<ServiceLocationPage2 />} />

                  {/* ── SEO Layer 3: Service + Location Pages (Greensboro) ── */}
                  <Route path="/greensboro-roofing-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/greensboro-seo-for-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/greensboro-google-ads-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/greensboro-roofing-lead-generation" element={<ServiceLocationPage2 />} />
                  <Route path="/greensboro-hvac-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/greensboro-seo-for-hvac" element={<ServiceLocationPage2 />} />
                  <Route path="/greensboro-google-ads-hvac" element={<ServiceLocationPage2 />} />
                  <Route path="/greensboro-hvac-lead-generation" element={<ServiceLocationPage2 />} />

                  {/* ── SEO Layer 3: Service + Location Pages (Winston-Salem) ── */}
                  <Route path="/winston-salem-roofing-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/winston-salem-seo-for-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/winston-salem-google-ads-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/winston-salem-roofing-lead-generation" element={<ServiceLocationPage2 />} />
                  <Route path="/winston-salem-hvac-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/winston-salem-seo-for-hvac" element={<ServiceLocationPage2 />} />
                  <Route path="/winston-salem-google-ads-hvac" element={<ServiceLocationPage2 />} />
                  <Route path="/winston-salem-hvac-lead-generation" element={<ServiceLocationPage2 />} />

                  {/* ── SEO Layer 3: Service + Location Pages (Fayetteville) ── */}
                  <Route path="/fayetteville-roofing-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/fayetteville-seo-for-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/fayetteville-google-ads-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/fayetteville-roofing-lead-generation" element={<ServiceLocationPage2 />} />
                  <Route path="/fayetteville-hvac-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/fayetteville-seo-for-hvac" element={<ServiceLocationPage2 />} />
                  <Route path="/fayetteville-google-ads-hvac" element={<ServiceLocationPage2 />} />
                  <Route path="/fayetteville-hvac-lead-generation" element={<ServiceLocationPage2 />} />

                  {/* ── SEO Layer 3: Service + Location Pages (Wilmington) ── */}
                  <Route path="/wilmington-roofing-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/wilmington-seo-for-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/wilmington-google-ads-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/wilmington-roofing-lead-generation" element={<ServiceLocationPage2 />} />
                  <Route path="/wilmington-hvac-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/wilmington-seo-for-hvac" element={<ServiceLocationPage2 />} />
                  <Route path="/wilmington-google-ads-hvac" element={<ServiceLocationPage2 />} />
                  <Route path="/wilmington-hvac-lead-generation" element={<ServiceLocationPage2 />} />

                  {/* ── SEO Layer 3: Service + Location Pages (Asheville) ── */}
                  <Route path="/asheville-roofing-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/asheville-seo-for-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/asheville-google-ads-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/asheville-roofing-lead-generation" element={<ServiceLocationPage2 />} />
                  <Route path="/asheville-hvac-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/asheville-seo-for-hvac" element={<ServiceLocationPage2 />} />
                  <Route path="/asheville-google-ads-hvac" element={<ServiceLocationPage2 />} />
                  <Route path="/asheville-hvac-lead-generation" element={<ServiceLocationPage2 />} />

                  {/* ── City Location Hubs (new L2 URL pattern) ── */}
                  <Route path="/charlotte-web-design" element={<CityLandingPage />} />
                  <Route path="/durham-web-design" element={<CityLandingPage />} />
                  <Route path="/greensboro-web-design" element={<CityLandingPage />} />
                  <Route path="/winston-salem-web-design" element={<CityLandingPage />} />
                  <Route path="/fayetteville-web-design" element={<CityLandingPage />} />
                  <Route path="/wilmington-web-design" element={<CityLandingPage />} />
                  <Route path="/asheville-web-design" element={<CityLandingPage />} />

                  {/* ── Legacy city URLs — 301 at edge via public/_redirects, <Navigate> covers SPA client-nav ── */}
                  <Route path="/raleigh-contractor-web-design" element={<Navigate to="/raleigh-web-design" replace />} />
                  <Route path="/charlotte-contractor-web-design" element={<Navigate to="/charlotte-web-design" replace />} />
                  <Route path="/durham-contractor-web-design" element={<Navigate to="/durham-web-design" replace />} />
                  <Route path="/greensboro-contractor-web-design" element={<Navigate to="/greensboro-web-design" replace />} />
                  <Route path="/winston-salem-contractor-web-design" element={<Navigate to="/winston-salem-web-design" replace />} />
                  <Route path="/fayetteville-contractor-web-design" element={<Navigate to="/fayetteville-web-design" replace />} />
                  <Route path="/wilmington-contractor-web-design" element={<Navigate to="/wilmington-web-design" replace />} />
                  <Route path="/asheville-contractor-web-design" element={<Navigate to="/asheville-web-design" replace />} />

                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
