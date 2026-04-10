import { Calendar, User, ArrowRight, Clock, BookOpen, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getAllBlogPosts } from '../data/blogPosts';

// Darker shades chosen so white text on the badge passes WCAG AA contrast.
const categoryColors: Record<string, string> = {
  'Web Design': 'bg-blue-700',
  'SEO': 'bg-emerald-700',
  'Digital Marketing': 'bg-purple-700',
  'Lead Generation': 'bg-burnt-orange',
  'Social Media': 'bg-pink-700',
  'Email Marketing': 'bg-amber-700',
  'Content Marketing': 'bg-teal-700',
  'Web Security': 'bg-red-700',
  'Branding': 'bg-indigo-700',
};

function getBadgeColor(category: string) {
  return categoryColors[category] || 'bg-navy';
}



export default function Blog() {
  const allPosts = getAllBlogPosts();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...Array.from(new Set(allPosts.map((p) => p.category)))];

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const secondaryPosts = filteredPosts.slice(1, 3);
  const remainingPosts = filteredPosts.slice(3);

  return (
    <section className="bg-gradient-to-b from-navy-blue via-dark-navy to-navy-blue min-h-screen">
      {/* Hero */}
      <div className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-burnt-orange/20 border border-burnt-orange/30 rounded-full px-5 py-2 mb-6">
            <BookOpen size={16} className="text-bright-orange" />
            <span className="text-bright-orange font-semibold text-sm">The Figgle Media Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-4xl mx-auto">
            Marketing Tips That{' '}
            <span className="text-bright-orange">Grow Your Business</span>
          </h1>
          <p className="text-lg text-cream max-w-2xl mx-auto mb-8">
            Actionable insights on web design, SEO, and digital marketing — written specifically for contractors who want more leads.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/40" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-transparent text-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0 order-2 lg:order-1">
            <div className="sticky top-28">
              <h2 className="text-sm font-bold text-cream/50 uppercase tracking-wider mb-4">Categories</h2>
              <nav className="space-y-1">
                {categories.map((cat) => {
                  const count = cat === 'All' ? allPosts.length : allPosts.filter((p) => p.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        activeCategory === cat
                          ? 'bg-burnt-orange text-white'
                          : 'text-cream hover:bg-white/10'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {cat !== 'All' && (
                          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${getBadgeColor(cat)}`}></span>
                        )}
                        {cat}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === cat ? 'bg-burnt-orange text-white' : 'bg-white/10 text-cream'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Newsletter CTA */}
              <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-bold mb-2">Get Weekly Tips</h3>
                <p className="text-cream/70 text-sm mb-4">Contractor marketing insights delivered to your inbox.</p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2.5 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-burnt-orange"
                  />
                  <button
                    type="submit"
                    className="w-full bg-burnt-orange text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-deep-orange transition-all"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-cream/40 text-xs mt-2">No spam. Unsubscribe anytime.</p>
              </div>

              {/* Popular Topics */}
              <div className="mt-8">
                <h2 className="text-sm font-bold text-cream/50 uppercase tracking-wider mb-4">Popular Topics</h2>
                <div className="flex flex-wrap gap-2">
                  {['Local SEO', 'Google Ads', 'Lead Gen', 'Web Design', 'Mobile', 'Reviews', 'Branding'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-white/10 text-cream/80 text-xs font-medium rounded-full hover:bg-white/20 cursor-pointer transition-colors border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 order-1 lg:order-2">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-2xl font-bold text-white mb-2">No articles found</p>
                <p className="text-cream/60">Try a different search or category.</p>
              </div>
            ) : (
              <>
                {/* Featured Post — Large Hero Card */}
                {featuredPost && (
                  <Link to={`/blog/${featuredPost.slug}`} className="group block mb-10">
                    <article
                      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/[0.07] transition-all"
                      itemScope
                      itemType="https://schema.org/BlogPosting"
                    >
                      <div className="grid md:grid-cols-2">
                        <div className="relative h-64 md:h-80 overflow-hidden">
                          <img
                            src={featuredPost.image}
                            alt={featuredPost.imageAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4 flex gap-2">
                            <span className={`px-3 py-1.5 rounded-full text-xs font-bold text-white ${getBadgeColor(featuredPost.category)}`}>
                              {featuredPost.category}
                            </span>
                            <span className="bg-burnt-orange text-white px-3 py-1.5 rounded-full text-xs font-bold">
                              Featured
                            </span>
                          </div>
                        </div>
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                          <div className="flex items-center gap-4 text-sm text-cream/50 mb-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar size={14} />
                              <time itemProp="datePublished" dateTime={featuredPost.publishDate}>
                                {new Date(featuredPost.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                              </time>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock size={14} />
                              <span>{featuredPost.readTime}</span>
                            </div>
                          </div>
                          <h2
                            className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-bright-orange transition-colors leading-tight"
                            itemProp="headline"
                          >
                            {featuredPost.title}
                          </h2>
                          <p className="text-cream/70 mb-6 leading-relaxed line-clamp-3" itemProp="description">
                            {featuredPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 bg-burnt-orange rounded-full flex items-center justify-center">
                                <User size={16} className="text-white" />
                              </div>
                              <span className="text-cream text-sm font-medium" itemProp="author">{featuredPost.author}</span>
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-bright-orange font-semibold text-sm group-hover:gap-2.5 transition-all">
                              Read Article <ArrowRight size={16} />
                            </span>
                          </div>
                          <meta itemProp="image" content={featuredPost.image} />
                          <meta itemProp="url" content={`/blog/${featuredPost.slug}`} />
                        </div>
                      </div>
                    </article>
                  </Link>
                )}

                {/* Secondary Posts — Two Column Cards */}
                {secondaryPosts.length > 0 && (
                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                    {secondaryPosts.map((post) => (
                      <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                        <article
                          className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/[0.07] transition-all h-full flex flex-col"
                          itemScope
                          itemType="https://schema.org/BlogPosting"
                        >
                          <div className="relative h-52 overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.imageAlt}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                              <span className={`px-3 py-1.5 rounded-full text-xs font-bold text-white ${getBadgeColor(post.category)}`}>
                                {post.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-3 text-xs text-cream/50 mb-3">
                              <time itemProp="datePublished" dateTime={post.publishDate}>
                                {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                              </time>
                              <span>·</span>
                              <span>{post.readTime}</span>
                            </div>
                            <h2
                              className="text-xl font-bold text-white mb-3 group-hover:text-bright-orange transition-colors leading-snug line-clamp-2"
                              itemProp="headline"
                            >
                              {post.title}
                            </h2>
                            <p className="text-cream/60 text-sm mb-4 line-clamp-2 flex-1" itemProp="description">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                              <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center">
                                <User size={14} className="text-cream" />
                              </div>
                              <span className="text-cream text-sm font-medium" itemProp="author">{post.author}</span>
                            </div>
                            <meta itemProp="image" content={post.image} />
                            <meta itemProp="url" content={`/blog/${post.slug}`} />
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                )}

                {/* All Articles Divider */}
                {remainingPosts.length > 0 && (
                  <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-lg font-bold text-white whitespace-nowrap">All Articles</h3>
                    <div className="h-px bg-white/10 flex-1"></div>
                  </div>
                )}

                {/* Remaining Posts — Compact Horizontal Cards */}
                <div className="space-y-4">
                  {remainingPosts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                      <article
                        className="flex flex-col sm:flex-row bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 hover:bg-white/[0.07] transition-all"
                        itemScope
                        itemType="https://schema.org/BlogPosting"
                      >
                        <div className="relative w-full sm:w-56 h-44 sm:h-auto flex-shrink-0 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.imageAlt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3 sm:hidden">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold text-white ${getBadgeColor(post.category)}`}>
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center py-4 sm:py-5 px-5 sm:pr-6 flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`hidden sm:inline-block px-2.5 py-1 rounded-full text-xs font-bold text-white ${getBadgeColor(post.category)}`}>
                              {post.category}
                            </span>
                            <span className="text-xs text-cream/50">
                              {new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="text-xs text-cream/30">·</span>
                            <span className="text-xs text-cream/50">{post.readTime}</span>
                          </div>
                          <h2
                            className="text-lg font-bold text-white mb-2 group-hover:text-bright-orange transition-colors leading-snug line-clamp-2"
                            itemProp="headline"
                          >
                            {post.title}
                          </h2>
                          <p className="text-cream/60 text-sm line-clamp-2 mb-3" itemProp="description">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 bg-navy rounded-full flex items-center justify-center">
                              <User size={12} className="text-cream" />
                            </div>
                            <span className="text-cream/80 text-xs font-medium" itemProp="author">{post.author}</span>
                          </div>
                          <meta itemProp="image" content={post.image} />
                          <meta itemProp="url" content={`/blog/${post.slug}`} />
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                {remainingPosts.length > 0 && (
                  <div className="text-center mt-12">
                    <button className="bg-burnt-orange text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-deep-orange transition-all shadow-lg hover:shadow-xl">
                      Load More Articles
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
