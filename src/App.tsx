import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import About from './components/About';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <CaseStudies />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <About />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;
