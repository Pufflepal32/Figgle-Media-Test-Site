import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../config/business';

const roofingLinks = [
  { label: 'Roofing Overview', href: '/roofing' },
  { label: 'Roofing Web Design', href: '/roofing/web-design' },
  { label: 'Roofing SEO', href: '/roofing/seo' },
  { label: 'Roofing Google Ads', href: '/roofing/google-ads' },
  { label: 'Roofing Lead Generation', href: '/roofing/lead-generation' },
];

const hvacLinks = [
  { label: 'HVAC Overview', href: '/hvac' },
  { label: 'HVAC Web Design', href: '/hvac/web-design' },
  { label: 'HVAC SEO', href: '/hvac/seo' },
  { label: 'HVAC Google Ads', href: '/hvac/google-ads' },
  { label: 'HVAC Lead Generation', href: '/hvac/lead-generation' },
];

const electricianLinks = [
  { label: 'Electrician Overview', href: '/electrician' },
  { label: 'Electrician Web Design', href: '/electrician/web-design' },
  { label: 'Electrician SEO', href: '/electrician/seo' },
  { label: 'Electrician Google Ads', href: '/electrician/google-ads' },
  { label: 'Electrician Lead Generation', href: '/electrician/lead-generation' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Our Process', href: '/our-process' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/free-website-plan' },
];

const serviceAreas = [
  { label: 'Raleigh, NC', href: '/raleigh-web-design' },
  { label: 'Charlotte, NC', href: '/charlotte-web-design' },
  { label: 'Durham, NC', href: '/durham-web-design' },
  { label: 'Greensboro, NC', href: '/greensboro-web-design' },
  { label: 'Winston-Salem, NC', href: '/winston-salem-web-design' },
  { label: 'Fayetteville, NC', href: '/fayetteville-web-design' },
  { label: 'Wilmington, NC', href: '/wilmington-web-design' },
  { label: 'Asheville, NC', href: '/asheville-web-design' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          <div className="lg:col-span-1">
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
              Specialist marketing for roofing and HVAC contractors across North Carolina.
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

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Roofing</h4>
            <ul className="space-y-2">
              {roofingLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-300 hover:text-teal transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">HVAC</h4>
            <ul className="space-y-2">
              {hvacLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-300 hover:text-teal transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Electrician</h4>
            <ul className="space-y-2">
              {electricianLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-300 hover:text-teal transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.href}>
                  <Link to={area.href} className="text-gray-300 hover:text-teal transition-colors text-sm">
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
