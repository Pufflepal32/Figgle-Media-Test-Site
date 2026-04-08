import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import BeforeAfter from '../components/BeforeAfter';
import TrustBadges from '../components/TrustBadges';
import ServicesPreview from '../components/ServicesPreview';
import TestimonialsPreview from '../components/TestimonialsPreview';
import CTABanner from '../components/CTABanner';
import MapEmbed from '../components/MapEmbed';

function HomePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Figgle Media',
    url: 'https://figglemedia.com',
    logo: 'https://figglemedia.com/assets/logo.png',
    description: 'Custom websites and digital marketing for contractors in NC & WV.',
    telephone: '612-778-3914',
    email: 'info@figglemedia.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Raleigh',
      addressRegion: 'NC',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.facebook.com/people/Figgle-Media/61566383850893/',
      'https://x.com/FiggleMedia',
      'https://www.instagram.com/figglemedia/',
      'https://www.linkedin.com/in/trevor-alford-753435248/',
    ],
  };

  return (
    <>
      <Helmet>
        <title>Contractor Web Design & Marketing | Figgle Media</title>
        <meta name="description" content="Custom-built websites that turn visitors into customers. We specialize in helping construction businesses in North Carolina and West Virginia dominate their local markets." />
        <link rel="canonical" href="https://figglemedia.com/" />
        <meta property="og:title" content="Contractor Web Design & Marketing | Figgle Media" />
        <meta property="og:description" content="Websites that turn clicks into booked jobs. Trusted by contractors in NC & WV." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://figglemedia.com/" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contractor Web Design & Marketing | Figgle Media" />
        <meta name="twitter:description" content="Websites that turn clicks into booked jobs. Trusted by contractors in NC & WV." />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
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
