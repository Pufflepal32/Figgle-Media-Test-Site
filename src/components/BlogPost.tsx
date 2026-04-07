import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getBlogPostBySlug } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const post = getBlogPostBySlug(slug || '');

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Show placeholder for incomplete blogs
  if (!post.isComplete) {
    return (
      <article className="py-20 bg-gradient-to-br from-navy-blue via-navy to-light-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-cream hover:text-burnt-orange transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-burnt-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Placeholder Content */}
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-burnt-orange/20 rounded-full flex items-center justify-center">
                <Calendar size={64} className="text-burnt-orange" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-cream mb-8 max-w-2xl mx-auto">
                {post.excerpt}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12 border border-white/20 max-w-2xl mx-auto">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-cream mb-6 leading-relaxed">
                We're currently working on this article. Check back soon for expert insights on {post.title.toLowerCase()}.
              </p>
              <p className="text-sm text-cream/70">
                <span className="flex items-center justify-center gap-2">
                  <Clock size={16} />
                  Expected {post.readTime}
                </span>
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-r from-burnt-orange to-deep-orange rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help Now?
              </h3>
              <p className="text-white mb-6">
                While you wait for this article, get your free website plan and start growing your construction business today.
              </p>
              <Link
                to="/free-website-plan"
                className="inline-block bg-white text-burnt-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-cream transition-all shadow-lg hover:shadow-xl"
              >
                Get My Free Website Plan
              </Link>
            </div>

            {/* Back to Blog */}
            <div className="mt-12">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-burnt-orange font-semibold hover:gap-3 transition-all text-lg"
              >
                <ArrowLeft size={20} />
                View All Blog Posts
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className="py-20 bg-gradient-to-br from-navy-blue via-navy to-light-navy"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-cream hover:text-burnt-orange transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="bg-burnt-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight" itemProp="headline">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-cream">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">{post.author}</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <time itemProp="datePublished" dateTime={post.publishDate}>
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Hidden metadata for SEO */}
          <meta itemProp="dateModified" content={post.modifiedDate} />
          <meta itemProp="image" content={post.image} />
          {post.location && (
            <>
              <meta itemProp="contentLocation" content={`${post.location.city}, ${post.location.state}`} />
            </>
          )}
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
          <div className="relative h-96 bg-navy">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-full object-cover"
              itemProp="image"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 sm:p-12 border border-white/20" itemProp="articleBody">
          {/* Introduction */}
          <p className="text-xl text-cream mb-8 leading-relaxed">
            {post.content.introduction}
          </p>

          {/* Dynamic Sections */}
          {post.content.sections.map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">{section.heading}</h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-cream mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {/* Conclusion */}
          {post.content.conclusion && (
            <section className="bg-burnt-orange/10 border-l-4 border-burnt-orange p-6 rounded-r-lg mt-12">
              <h2 className="text-2xl font-bold text-white mb-4">{post.content.conclusion.heading}</h2>
              {post.content.conclusion.content.map((paragraph, index) => (
                <p key={index} className="text-cream mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {post.content.conclusion.list && (
                <ul className="list-disc list-inside text-cream space-y-2 mb-4">
                  {post.content.conclusion.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              {post.content.conclusion.content.length > 1 && (
                <p className="text-white font-semibold">
                  {post.content.conclusion.content[post.content.conclusion.content.length - 1]}
                </p>
              )}
            </section>
          )}
        </div>

        {/* Social Share Buttons */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Share this article</h3>
            <div className="flex items-center gap-4">
              <button className="bg-[#1877f2] text-white p-3 rounded-lg hover:opacity-90 transition-opacity">
                <Facebook size={20} />
              </button>
              <button className="bg-[#1da1f2] text-white p-3 rounded-lg hover:opacity-90 transition-opacity">
                <Twitter size={20} />
              </button>
              <button className="bg-[#0077b5] text-white p-3 rounded-lg hover:opacity-90 transition-opacity">
                <Linkedin size={20} />
              </button>
              <button className="bg-burnt-orange text-white p-3 rounded-lg hover:opacity-90 transition-opacity">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-burnt-orange rounded-full flex items-center justify-center flex-shrink-0">
              <User size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">About {post.author}</h3>
              <p className="text-cream leading-relaxed">
                The Figgle Media team specializes in helping construction businesses grow through strategic web design, SEO, and digital marketing. With years of experience in the construction industry, we understand what it takes to generate quality leads and build a strong online presence.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-burnt-orange to-deep-orange rounded-xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Get More Leads?
          </h3>
          <p className="text-white mb-6 max-w-2xl mx-auto">
            Let's build you a website that actually brings in customers. Get your free website plan today.
          </p>
          <Link
            to="/free-website-plan"
            className="inline-block bg-white text-burnt-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-cream transition-all shadow-lg hover:shadow-xl"
          >
            Get My Free Website Plan
          </Link>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Show 2 other random articles */}
            <Link to="/blog/how-local-seo-helps-contractors-dominate-market" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-burnt-orange transition-colors">
                How Local SEO Helps Contractors Dominate Their Market
              </h4>
              <p className="text-cream text-sm">Learn proven local SEO strategies that help contractors rank #1...</p>
            </Link>
            <Link to="/blog/converting-website-visitors-into-leads" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-burnt-orange transition-colors">
                Converting Website Visitors Into Leads
              </h4>
              <p className="text-cream text-sm">Essential elements every high-converting contractor website needs...</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
