import { Calendar, User, ArrowRight, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllBlogPosts } from '../data/blogPosts';

export default function Blog() {
  const blogPosts = getAllBlogPosts();

  const categories = ['All', 'Web Design', 'SEO', 'Digital Marketing', 'Lead Generation'];

  return (
    <section className="bg-gradient-to-br from-navy-blue via-navy to-light-navy">
      {/* Hero Section */}
      <div className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        {/* SVG Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="blog-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="24" height="1" fill="white" />
                <rect x="0" y="0" width="1" height="24" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-pattern)" />
          </svg>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-burnt-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-burnt-orange/5 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-burnt-orange/20 border border-burnt-orange/30 rounded-full px-5 py-2 mb-8">
            <BookOpen size={16} className="text-burnt-orange" />
            <span className="text-burnt-orange font-semibold text-sm">The Figgle Media Blog</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Marketing Tips That{' '}
            <span className="text-burnt-orange">Grow Your Business</span>
          </h1>
          <p className="text-xl text-cream max-w-2xl mx-auto leading-relaxed">
            Actionable insights on web design, SEO, and digital marketing — written specifically for contractors who want more leads.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">

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
                <img
                  src={post.image.replace('.jpg', '.svg')}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover"
                />
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
            Get Contractor Marketing Tips Delivered to Your Inbox
          </h2>
          <p className="text-cream mb-6 max-w-2xl mx-auto">
            Join our weekly newsletter for actionable tips to grow your construction business online.
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
