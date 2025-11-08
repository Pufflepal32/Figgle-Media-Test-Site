import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

export default function Blog() {
  // Placeholder blog posts with SEO-optimized content structure
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: '10 Signs Your Roofing Business Needs a New Website in 2025',
      excerpt: 'Is your roofing website turning away potential customers? Learn the key indicators that it\'s time for a modern, conversion-focused website that actually brings in leads.',
      author: 'Figgle Media Team',
      publishDate: '2025-01-15',
      readTime: '5 min read',
      category: 'Web Design',
      image: '/assets/blog/website-signs.jpg',
      slug: '10-signs-your-roofing-business-needs-new-website',
    },
    {
      id: '2',
      title: 'How Local SEO Helps Roofers Dominate Their Market',
      excerpt: 'Discover proven local SEO strategies that help roofing contractors rank #1 in their area and get more qualified leads from homeowners searching for roof repairs.',
      author: 'Figgle Media Team',
      publishDate: '2025-01-10',
      readTime: '7 min read',
      category: 'SEO',
      image: '/assets/blog/local-seo.jpg',
      slug: 'how-local-seo-helps-roofers-dominate-market',
    },
    {
      id: '3',
      title: 'Google Ads vs. Local Service Ads for Roofing Companies',
      excerpt: 'Not sure which advertising platform is right for your roofing business? We break down the pros, cons, and ROI of each to help you make the best decision.',
      author: 'Figgle Media Team',
      publishDate: '2025-01-05',
      readTime: '6 min read',
      category: 'Digital Marketing',
      image: '/assets/blog/google-ads.jpg',
      slug: 'google-ads-vs-local-service-ads-roofing',
    },
    {
      id: '4',
      title: 'Converting Website Visitors Into Roofing Leads: A Complete Guide',
      excerpt: 'Your website gets traffic, but are you converting those visitors into paying customers? Learn the essential elements every high-converting roofing website needs.',
      author: 'Figgle Media Team',
      publishDate: '2024-12-28',
      readTime: '8 min read',
      category: 'Lead Generation',
      image: '/assets/blog/conversion-guide.jpg',
      slug: 'converting-website-visitors-into-roofing-leads',
    },
    {
      id: '5',
      title: 'Mobile-First Design: Why It Matters for Roofing Contractors',
      excerpt: 'Over 70% of homeowners search for roofers on their phones. If your website isn\'t mobile-optimized, you\'re losing leads every day. Here\'s what you need to know.',
      author: 'Figgle Media Team',
      publishDate: '2024-12-20',
      readTime: '5 min read',
      category: 'Web Design',
      image: '/assets/blog/mobile-first.jpg',
      slug: 'mobile-first-design-roofing-contractors',
    },
    {
      id: '6',
      title: 'Customer Reviews: The Secret Weapon for Roofing SEO',
      excerpt: 'Google reviews aren\'t just for social proof—they\'re a powerful SEO ranking factor. Learn how to leverage reviews to boost your local search visibility.',
      author: 'Figgle Media Team',
      publishDate: '2024-12-15',
      readTime: '6 min read',
      category: 'SEO',
      image: '/assets/blog/customer-reviews.jpg',
      slug: 'customer-reviews-secret-weapon-roofing-seo',
    },
  ];

  const categories = ['All', 'Web Design', 'SEO', 'Digital Marketing', 'Lead Generation'];

  return (
    <section className="py-20 bg-gradient-to-br from-navy-blue via-navy to-light-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with SEO-optimized H1 */}
        <div className="text-center mb-16 pt-16 sm:pt-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Roofing Marketing & Business Growth Tips
          </h1>
          <p className="text-xl text-cream max-w-3xl mx-auto">
            Expert insights on web design, SEO, and digital marketing strategies that help roofing contractors get more leads and grow their business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                category === 'All'
                  ? 'bg-burnt-orange text-white'
                  : 'bg-white/10 text-cream hover:bg-white/20 border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid - SEO-optimized article structure */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:shadow-2xl transition-all group"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* Featured Image */}
              <div className="relative overflow-hidden h-48 bg-navy">
                <div className="absolute inset-0 bg-gradient-to-br from-burnt-orange/20 to-navy-blue/40 flex items-center justify-center">
                  <span className="text-white/50 text-sm">Image Placeholder</span>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-burnt-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-cream mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <time itemProp="datePublished" dateTime={post.publishDate}>
                      {new Date(post.publishDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Article Heading - SEO H2 */}
                <h2
                  className="text-xl font-bold text-white mb-3 group-hover:text-burnt-orange transition-colors line-clamp-2"
                  itemProp="headline"
                >
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-cream mb-4 line-clamp-3" itemProp="description">
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 text-sm text-cream mb-4">
                  <User size={14} />
                  <span itemProp="author">{post.author}</span>
                </div>

                {/* Read More Link */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-burnt-orange font-semibold hover:gap-3 transition-all"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read Article
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Hidden Schema.org metadata */}
              <meta itemProp="image" content={post.image} />
              <meta itemProp="url" content={`/blog/${post.slug}`} />
            </article>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <button className="bg-burnt-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-deep-orange transition-all shadow-lg hover:shadow-xl">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Signup - Additional SEO benefit */}
        <div className="mt-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Roofing Marketing Tips Delivered to Your Inbox
          </h2>
          <p className="text-cream mb-6 max-w-2xl mx-auto">
            Join 500+ roofing contractors who receive our weekly newsletter with actionable tips to grow their business online.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border border-light-gray focus:outline-none focus:ring-2 focus:ring-burnt-orange"
              required
            />
            <button
              type="submit"
              className="bg-burnt-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-deep-orange transition-all"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-cream mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
