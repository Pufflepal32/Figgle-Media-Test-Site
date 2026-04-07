import { Helmet } from 'react-helmet-async';
import { useParams, Navigate } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import { getBlogPostBySlug } from '../data/blogPosts';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || '');

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // SEO metadata for the blog post
  const postMeta = {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    author: post.author,
    publishDate: post.publishDate,
    modifiedDate: post.modifiedDate,
    image: `https://figglemedia.com${post.image.replace('.jpg', '.svg')}`,
    imageAlt: post.imageAlt,
    url: `https://figglemedia.com/blog/${post.slug}`,
    category: post.category,
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{postMeta.title} | Figgle Media</title>
        <meta name="title" content={postMeta.title} />
        <meta name="description" content={postMeta.description} />
        <meta name="keywords" content={postMeta.keywords} />
        <meta name="author" content={postMeta.author} />
        <link rel="canonical" href={postMeta.url} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postMeta.url} />
        <meta property="og:title" content={postMeta.title} />
        <meta property="og:description" content={postMeta.description} />
        <meta property="og:image" content={postMeta.image} />
        <meta property="og:image:alt" content={postMeta.imageAlt} />
        <meta property="article:published_time" content={postMeta.publishDate} />
        <meta property="article:modified_time" content={postMeta.modifiedDate} />
        <meta property="article:author" content={postMeta.author} />
        <meta property="article:section" content={postMeta.category} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={postMeta.url} />
        <meta property="twitter:title" content={postMeta.title} />
        <meta property="twitter:description" content={postMeta.description} />
        <meta property="twitter:image" content={postMeta.image} />
        <meta property="twitter:image:alt" content={postMeta.imageAlt} />

        {/* JSON-LD Schema for Article - Best practice for SEO in 2025 */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": postMeta.title,
            "description": postMeta.description,
            "image": {
              "@type": "ImageObject",
              "url": postMeta.image,
              "width": 1200,
              "height": 630,
              "caption": postMeta.imageAlt
            },
            "author": {
              "@type": "Organization",
              "name": postMeta.author,
              "url": "https://figglemedia.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Figgle Media",
              "logo": {
                "@type": "ImageObject",
                "url": "https://figglemedia.com/assets/logo.png",
                "width": 200,
                "height": 200
              }
            },
            "datePublished": postMeta.publishDate,
            "dateModified": postMeta.modifiedDate,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": postMeta.url
            },
            "articleSection": postMeta.category,
            "keywords": postMeta.keywords,
            "inLanguage": "en-US",
            "wordCount": 1500,
            "articleBody": "Your website is often the first impression potential customers have of your construction business. If it's outdated, slow, or hard to navigate, you're losing leads to competitors every single day.",
            "about": {
              "@type": "Thing",
              "name": "Contractor Website Design"
            }
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://figglemedia.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://figglemedia.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": postMeta.title,
                "item": postMeta.url
              }
            ]
          })}
        </script>
      </Helmet>

      <BlogPost />
    </>
  );
}
