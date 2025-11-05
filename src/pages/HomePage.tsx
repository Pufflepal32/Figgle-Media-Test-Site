import Hero from '../components/Hero';
import BeforeAfter from '../components/BeforeAfter';
import TrustBadges from '../components/TrustBadges';
import ServicesPreview from '../components/ServicesPreview';
import TestimonialsPreview from '../components/TestimonialsPreview';
import CTABanner from '../components/CTABanner';
import MapEmbed from '../components/MapEmbed';

function HomePage() {
  return (
    <>
      <Hero />
      <BeforeAfter />
      <TrustBadges />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTABanner />
      <MapEmbed />
    </>
  );
}

export default HomePage;
