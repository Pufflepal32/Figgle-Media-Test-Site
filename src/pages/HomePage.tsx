import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import ServicesPreview from '../components/ServicesPreview';
import TestimonialsPreview from '../components/TestimonialsPreview';
import CTABanner from '../components/CTABanner';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTABanner />
    </>
  );
}

export default HomePage;
