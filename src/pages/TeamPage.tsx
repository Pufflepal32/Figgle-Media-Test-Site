import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';
import { BUSINESS } from '../config/business';
import { buildBreadcrumbSchema } from '../utils/breadcrumbSchema';
import CTABanner from '../components/CTABanner';

const team = [
  {
    name: 'Michael Burgess',
    role: 'Co-Founder',
    bio: 'Michael leads strategy and client partnerships at Figgle Media. With years of experience helping contractors grow through local SEO and paid search, he pairs deep construction-industry knowledge with a builder\'s eye for what actually moves the needle.',
    focus: ['Strategy', 'Paid Search', 'Client Partnerships'],
  },
  {
    name: 'Trevor',
    role: 'Co-Founder',
    bio: 'Trevor leads design and development at Figgle Media. He\'s obsessed with building fast, conversion-focused contractor websites that show up in search and turn visitors into booked jobs — no bloated frameworks, no vanity features.',
    focus: ['Web Design', 'Local SEO', 'Conversion Optimization'],
  },
];

export default function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Meet the Team | Figgle Media</title>
        <meta
          name="description"
          content="Meet the team behind Figgle Media — marketers who specialize exclusively in helping North Carolina contractors grow through web design, SEO, and paid search."
        />
        <link rel="canonical" href={`${BUSINESS.url}/team`} />
        <meta property="og:title" content="Meet the Team | Figgle Media" />
        <meta property="og:description" content="The people behind Figgle Media — a contractor-only marketing agency for North Carolina." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BUSINESS.url}/team`} />
        <meta property="og:image" content={`${BUSINESS.url}/assets/team.jpg`} />
        <script type="application/ld+json">
          {JSON.stringify(buildBreadcrumbSchema([
            { name: 'Home', url: BUSINESS.url },
            { name: 'About', url: `${BUSINESS.url}/about` },
            { name: 'Team', url: `${BUSINESS.url}/team` },
          ]))}
        </script>
      </Helmet>

      <div className="pt-20">
        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-cream">The Figgle Media Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Marketers Who <span className="text-burnt-orange">Speak Construction</span>
            </h1>
            <p className="text-xl text-cream leading-relaxed">
              We're a small, focused team that works exclusively with North Carolina contractors.
              No generic agency playbook, no junior account managers — just hands-on work from
              the people who built the system.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {team.map((person) => (
                <div
                  key={person.name}
                  className="bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-1">{person.name}</h2>
                    <p className="text-burnt-orange font-semibold">{person.role}</p>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">{person.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {person.focus.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold bg-white/10 text-slate-200 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="inline-flex items-center gap-2 text-slate-400 hover:text-burnt-orange transition-colors text-sm"
                      aria-label={`Email ${person.name}`}
                    >
                      <Mail size={16} />
                      <span>Email</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-400 hover:text-burnt-orange transition-colors text-sm"
                      aria-label={`${person.name} on LinkedIn`}
                    >
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              How We Work
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3">No Handoffs</h3>
                <p className="text-slate-300 leading-relaxed">
                  You work directly with the people building your site and running your campaigns.
                  No account managers filtering your feedback.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3">Contractor Focus</h3>
                <p className="text-slate-300 leading-relaxed">
                  We only take on roofing, HVAC, and electrical contractors. We know your
                  customers, your seasonality, and your competitors.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3">Real Results</h3>
                <p className="text-slate-300 leading-relaxed">
                  Every engagement is backed by a 90-day performance guarantee. If we don't
                  deliver, we keep working until we do.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/our-process"
                className="inline-flex items-center gap-2 text-burnt-orange font-semibold hover:text-deep-orange transition-colors"
              >
                See our full process
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        <CTABanner />
      </div>
    </>
  );
}
