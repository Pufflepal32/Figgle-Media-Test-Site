import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import FreeWebsitePlanPage from './pages/FreeWebsitePlanPage';
import PricingPage from './pages/PricingPage';
import RaleighPage from './pages/RaleighPage';
import ServiceLandingPage from './pages/ServiceLandingPage';
import CityLandingPage from './pages/CityLandingPage';
import NotFoundPage from './pages/NotFoundPage';
import IndustryPage from './pages/IndustryPage';
import LocationHubPage from './pages/LocationHubPage';
import ServiceLocationPage2 from './pages/ServiceLocationPage2';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
