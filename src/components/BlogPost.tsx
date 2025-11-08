import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogPost() {
  // Full blog post content with SEO optimization
  const post = {
    title: '10 Signs Your Roofing Business Needs a New Website in 2025',
    author: 'Figgle Media Team',
    publishDate: '2025-01-15',
    modifiedDate: '2025-01-15',
    readTime: '5 min read',
    category: 'Web Design',
    excerpt: 'Is your roofing website turning away potential customers? Learn the key indicators that it\'s time for a modern, conversion-focused website that actually brings in leads.',
    featuredImage: '/assets/blog/website-signs.jpg',
    featuredImageAlt: 'Modern roofing website on laptop showing lead generation form',
  };

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
          <meta itemProp="image" content={post.featuredImage} />
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
          <div className="relative h-96 bg-navy">
            <img
              src="/assets/blog/placeholder.svg"
              alt={post.featuredImageAlt}
              className="w-full h-full object-cover"
              itemProp="image"
            />
            {/* Replace placeholder.svg with your actual image: website-signs.jpg */}
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 sm:p-12 border border-white/20" itemProp="articleBody">
          {/* Introduction */}
          <p className="text-xl text-cream mb-8 leading-relaxed">
            Your website is often the first impression potential customers have of your roofing business. If it's outdated, slow, or hard to navigate, you're losing leads to competitors every single day. Here are 10 clear signs it's time to invest in a new website.
          </p>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">1. Your Website Isn't Mobile-Friendly</h2>
            <p className="text-cream mb-4 leading-relaxed">
              Over 70% of homeowners search for roofing contractors on their smartphones. If your website doesn't load properly on mobile devices or requires pinching and zooming to read, you're turning away the majority of potential customers.
            </p>
            <p className="text-cream leading-relaxed">
              Google also prioritizes mobile-friendly websites in search results. A website that's not optimized for mobile will rank lower, making it harder for customers to find you.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">2. It Takes More Than 3 Seconds to Load</h2>
            <p className="text-cream mb-4 leading-relaxed">
              Website speed is critical. Studies show that 53% of mobile users abandon a site if it takes longer than 3 seconds to load. Every second of delay reduces conversions by up to 7%.
            </p>
            <p className="text-cream leading-relaxed">
              Modern websites use optimized code, compressed images, and content delivery networks (CDNs) to ensure lightning-fast load times. If your site is slow, you're losing business.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">3. You're Not Getting Leads From Your Website</h2>
            <p className="text-cream mb-4 leading-relaxed">
              The primary purpose of your roofing website is to generate leads. If your phone isn't ringing and your contact form sits empty, your website isn't doing its job.
            </p>
            <p className="text-cream leading-relaxed">
              A conversion-focused website includes clear calls-to-action, trust signals like reviews and certifications, prominent phone numbers, and easy-to-use contact forms. If these elements are missing or poorly designed, you need a website overhaul.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">4. Your Website Doesn't Rank on Google</h2>
            <p className="text-cream mb-4 leading-relaxed">
              When was the last time you searched for "roofing contractor near me" and found your own website? If you're not on the first page of Google, you're invisible to potential customers.
            </p>
            <p className="text-cream leading-relaxed">
              Modern SEO-optimized websites are built with proper heading structure, meta tags, schema markup, fast load times, and mobile responsiveness - all factors Google uses to rank sites. An old website simply can't compete.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">5. The Design Looks Outdated</h2>
            <p className="text-cream mb-4 leading-relaxed">
              Design trends evolve quickly. If your website still has Flash animations, rotating banners, or looks like it was built in 2010, visitors will question whether your business is still operating.
            </p>
            <p className="text-cream leading-relaxed">
              A modern, professional design builds trust and credibility. It signals to customers that you're a legitimate, professional business that invests in quality - exactly the kind of contractor they want working on their roof.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">6. Your Contact Information is Hard to Find</h2>
            <p className="text-cream leading-relaxed">
              If visitors have to hunt for your phone number or scroll endlessly to find a contact form, they'll simply go to a competitor's website. Your contact information should be visible on every page, preferably in the header and footer.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">7. You Can't Update It Yourself</h2>
            <p className="text-cream leading-relaxed">
              If you have to call a developer every time you want to change a price, add a photo, or update your services, your website is costing you time and money. Modern websites use content management systems that allow you to make simple updates yourself.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">8. It Doesn't Showcase Your Work</h2>
            <p className="text-cream leading-relaxed">
              Homeowners want to see examples of your work before they hire you. High-quality before-and-after photos, customer testimonials, and case studies should be prominently featured on your website. If they're missing or buried, you're not building the trust needed to convert visitors into customers.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">9. Your Competitors Have Better Websites</h2>
            <p className="text-cream leading-relaxed">
              Take a look at your top competitors' websites. If they look more modern, load faster, and are easier to navigate than yours, they're winning the business that should be yours. In a competitive market, your website is a crucial differentiator.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">10. You're Not Tracking Results</h2>
            <p className="text-cream mb-4 leading-relaxed">
              Can you answer these questions: How many people visit your website each month? Where do they come from? Which pages do they visit? How many fill out your contact form? If not, you're flying blind.
            </p>
            <p className="text-cream leading-relaxed">
              Modern websites include analytics tracking, conversion tracking, and heat mapping tools that show exactly how visitors interact with your site. This data is essential for improving your results over time.
            </p>
          </section>

          {/* Conclusion */}
          <section className="bg-burnt-orange/10 border-l-4 border-burnt-orange p-6 rounded-r-lg mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Upgrade Your Roofing Website?</h2>
            <p className="text-cream mb-4 leading-relaxed">
              If you recognized 3 or more of these signs, it's time to invest in a new website. A modern, conversion-focused website will:
            </p>
            <ul className="list-disc list-inside text-cream space-y-2 mb-4">
              <li>Rank higher on Google and get found by more customers</li>
              <li>Convert more visitors into qualified leads</li>
              <li>Build trust and credibility with professional design</li>
              <li>Work perfectly on all devices</li>
              <li>Provide measurable ROI</li>
            </ul>
            <p className="text-white font-semibold">
              At Figgle Media, we specialize in building high-performance websites for roofing contractors. Let's talk about how we can help you get more leads and grow your business.
            </p>
          </section>
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
              <h3 className="text-2xl font-bold text-white mb-2">About Figgle Media Team</h3>
              <p className="text-cream leading-relaxed">
                The Figgle Media team specializes in helping roofing contractors grow their businesses through strategic web design, SEO, and digital marketing. With years of experience in the roofing industry, we understand what it takes to generate quality leads and build a strong online presence.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-burnt-orange to-deep-orange rounded-xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Get More Roofing Leads?
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
            <Link to="/blog/how-local-seo-helps-roofers-dominate-market" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-burnt-orange transition-colors">
                How Local SEO Helps Roofers Dominate Their Market
              </h4>
              <p className="text-cream text-sm">Learn proven local SEO strategies that help roofing contractors rank #1...</p>
            </Link>
            <Link to="/blog/converting-website-visitors-into-roofing-leads" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-xl transition-all group">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-burnt-orange transition-colors">
                Converting Website Visitors Into Roofing Leads
              </h4>
              <p className="text-cream text-sm">Essential elements every high-converting roofing website needs...</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
