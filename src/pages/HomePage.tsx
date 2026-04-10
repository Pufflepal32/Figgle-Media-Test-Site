import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Figgle Media — Web Design & SEO for North Carolina Contractors</title>
        <meta
          name="description"
          content="Custom websites and local SEO that turn searches into booked jobs for contractors across North Carolina. Get a free website plan."
        />
        <link rel="canonical" href="https://figglemedia.com/" />
        <meta property="og:title" content="Figgle Media — Web Design & SEO for North Carolina Contractors" />
        <meta
          property="og:description"
          content="Custom websites and local SEO that turn searches into booked jobs for contractors across North Carolina."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://figglemedia.com/" />
      </Helmet>
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
