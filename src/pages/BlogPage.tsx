import { Helmet } from 'react-helmet-async';
import Blog from '../components/Blog';

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Roofing Marketing Blog - Tips, Strategies & SEO for Contractors | Figgle Media</title>
        <meta
          name="description"
          content="Expert roofing marketing tips, web design strategies, and SEO advice for contractors. Learn how to get more leads and grow your roofing business online."
        />
        <meta
          name="keywords"
          content="roofing marketing, roofing SEO, contractor web design, roofing leads, digital marketing for roofers"
        />
        <link rel="canonical" href="https://figglemedia.com/blog" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://figglemedia.com/blog" />
        <meta property="og:title" content="Roofing Marketing Blog - Figgle Media" />
        <meta property="og:description" content="Expert tips and strategies to help roofing contractors get more leads and grow their business." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://figglemedia.com/blog" />
        <meta property="twitter:title" content="Roofing Marketing Blog - Figgle Media" />
        <meta property="twitter:description" content="Expert tips and strategies to help roofing contractors get more leads and grow their business." />

        {/* JSON-LD Schema for Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Figgle Media Roofing Marketing Blog",
            "description": "Expert insights on web design, SEO, and digital marketing strategies for roofing contractors",
            "url": "https://figglemedia.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Figgle Media",
              "logo": {
                "@type": "ImageObject",
                "url": "https://figglemedia.com/assets/logo.png"
              }
            },
            "inLanguage": "en-US"
          })}
        </script>
      </Helmet>

      <Blog />
    </>
  );
}
