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
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
