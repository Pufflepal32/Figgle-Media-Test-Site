import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

                  {/* ── SEO Layer 1: Industry Authority Pages ── */}
                  <Route path="/contractor-marketing-agency" element={<IndustryPage />} />
                  <Route path="/roofing-web-design" element={<IndustryPage />} />
                  <Route path="/seo-for-roofers" element={<IndustryPage />} />
                  <Route path="/google-ads-for-roofers" element={<IndustryPage />} />
                  <Route path="/roofing-lead-generation" element={<IndustryPage />} />

                  {/* ── SEO Layer 2: Location Hub Pages ── */}
                  <Route path="/raleigh-web-design" element={<LocationHubPage />} />

                  {/* ── SEO Layer 3: Service + Location Pages (Raleigh) ── */}
                  <Route path="/raleigh-roofing-web-design" element={<ServiceLocationPage2 />} />
                  <Route path="/raleigh-seo-for-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/raleigh-google-ads-roofers" element={<ServiceLocationPage2 />} />
                  <Route path="/raleigh-roofing-lead-generation" element={<ServiceLocationPage2 />} />

                  {/* ── Legacy city pages (existing) ── */}
                  <Route path="/raleigh-contractor-web-design" element={<RaleighPage />} />
                  <Route path="/charlotte-contractor-web-design" element={<CityLandingPage />} />
                  <Route path="/durham-contractor-web-design" element={<CityLandingPage />} />
                  <Route path="/greensboro-contractor-web-design" element={<CityLandingPage />} />
                  <Route path="/winston-salem-contractor-web-design" element={<CityLandingPage />} />
                  <Route path="/fayetteville-contractor-web-design" element={<CityLandingPage />} />
                  <Route path="/wilmington-contractor-web-design" element={<CityLandingPage />} />
                  <Route path="/asheville-contractor-web-design" element={<CityLandingPage />} />

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
