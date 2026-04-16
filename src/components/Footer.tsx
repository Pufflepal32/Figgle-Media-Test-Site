import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../config/business';

const servicesLinks = [
  { label: 'Contractor Web Design', href: '/services/contractor-web-design' },
  { label: 'SEO for Contractors', href: '/services/seo-for-contractors' },
  { label: 'Google Ads Management', href: '/services/google-ads-management' },
  { label: 'Local Service Ads', href: '/services/local-service-ads' },
  { label: 'All Services', href: '/services' },
];

const solutionsIndustries = [
  { label: 'Roofing Marketing', href: '/roofing' },
  { label: 'HVAC Marketing', href: '/hvac' },
  { label: 'Electrician Marketing', href: '/electrician' },
];

const solutionsTopCities = [
  { label: 'Raleigh', href: '/raleigh-web-design' },
  { label: 'Charlotte', href: '/charlotte-web-design' },
  { label: 'Durham', href: '/durham-web-design' },
  { label: 'Greensboro', href: '/greensboro-web-design' },
];

const workLinks = [
  { label: 'Case Studies', href: '/our-work' },
  { label: 'Testimonials', href: '/our-work#testimonials' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Our Process', href: '/our-process' },
  { label: 'Team', href: '/team' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/free-website-plan' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/assets/logo.webp"
                alt="Figgle Media Logo"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
                className="h-10 w-10 object-cover rounded-full"
              />
              <h3 className="text-2xl font-bold text-cream">Figgle Media</h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              Specialist marketing for roofing, HVAC, and electrical contractors across North Carolina.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center text-gray-300 hover:text-teal transition-colors">
                <Phone size={18} className="mr-2" />
                {BUSINESS.phoneDisplay}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center text-gray-300 hover:text-teal transition-colors">
                <Mail size={18} className="mr-2" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start text-gray-300">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Raleigh, NC</span>
              </div>
            </div>
            <div className="flex space-x-3 mt-5">
              <a href="https://www.facebook.com/people/Figgle-Media/61566383850893/" target="_blank" rel="noopener noreferrer" aria-label="Figgle Media on Facebook" className="bg-dark-green p-2 rounded-full hover:bg-teal transition-colors">
                <Facebook size={18} aria-hidden="true" />
              </a>
              <a href="https://x.com/FiggleMedia" target="_blank" rel="noopener noreferrer" aria-label="Figgle Media on X" className="bg-dark-green p-2 rounded-full hover:bg-teal transition-colors">
                <Twitter size={18} aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/figglemedia/" target="_blank" rel="noopener noreferrer" aria-label="Figgle Media on Instagram" className="bg-dark-green p-2 rounded-full hover:bg-teal transition-colors">
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/trevor-alford-753435248/" target="_blank" rel="noopener noreferrer" aria-label="Trevor Alford on LinkedIn" className="bg-dark-green p-2 rounded-full hover:bg-teal transition-colors">
                <Linkedin size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-300 hover:text-teal transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Solutions</h4>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">By Industry</p>
            <ul className="space-y-2 mb-4">
              {solutionsIndustries.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-300 hover:text-teal transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">By Location</p>
            <ul className="space-y-2">
              {solutionsTopCities.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-300 hover:text-teal transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/#cities" className="text-light-teal hover:text-cream transition-colors text-sm font-semibold">
                  View all 8 cities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Our Work</h4>
            <ul className="space-y-2">
              {workLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-300 hover:text-teal transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-300 hover:text-teal transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/free-website-plan"
              className="inline-block mt-5 bg-burnt-orange text-white px-5 py-3 rounded-lg font-semibold hover:bg-deep-orange transition-all text-sm shadow-md"
            >
              Get a Free Plan
            </Link>
          </div>
        </div>

        <div className="border-t border-warm-gray pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
