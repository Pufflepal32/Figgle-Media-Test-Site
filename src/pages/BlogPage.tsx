import { Helmet } from 'react-helmet-async';
import Blog from '../components/Blog';

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Contractor Marketing Blog - Tips, Strategies & SEO for Contractors | Figgle Media</title>
        <meta
          name="description"
          content="Expert contractor marketing tips, web design strategies, and SEO advice for contractors. Learn how to get more leads and grow your contractor business online."
        />
        <meta
          name="keywords"
          content="contractor marketing, contractor SEO, contractor web design, contractor leads, digital marketing for contractors"
        />
        <link rel="canonical" href="https://figglemedia.com/blog" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://figglemedia.com/blog" />
        <meta property="og:title" content="Contractor Marketing Blog - Figgle Media" />
        <meta property="og:description" content="Expert tips and strategies to help contractor contractors get more leads and grow their business." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://figglemedia.com/blog" />
        <meta property="twitter:title" content="Contractor Marketing Blog - Figgle Media" />
        <meta property="twitter:description" content="Expert tips and strategies to help contractor contractors get more leads and grow their business." />

        {/* JSON-LD Schema for Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Figgle Media Contractor Marketing Blog",
            "description": "Expert insights on web design, SEO, and digital marketing strategies for contractor contractors",
            "url": "https://figglemedia.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Figgle Media",
              "logo": {
                "@type": "ImageObject",
                "url": "https://figglemedia.com/assets/logo.webp"
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
