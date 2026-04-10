import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../config/business';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileLocationsOpen, setIsMobileLocationsOpen] = useState(false);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const locationsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const serviceLinks = [
    { label: 'Contractor Web Design', href: '/services/contractor-web-design' },
    { label: 'SEO for Contractors', href: '/services/seo-for-contractors' },
    { label: 'Google Ads Management', href: '/services/google-ads-management' },
    { label: 'Local Service Ads', href: '/services/local-service-ads' },
  ];

  const locationLinks = [
    { label: 'Raleigh', href: '/raleigh-contractor-web-design' },
    { label: 'Charlotte', href: '/charlotte-contractor-web-design' },
    { label: 'Durham', href: '/durham-contractor-web-design' },
    { label: 'Greensboro', href: '/greensboro-contractor-web-design' },
    { label: 'Winston-Salem', href: '/winston-salem-contractor-web-design' },
    { label: 'Fayetteville', href: '/fayetteville-contractor-web-design' },
    { label: 'Wilmington', href: '/wilmington-contractor-web-design' },
    { label: 'Asheville', href: '/asheville-contractor-web-design' },
  ];

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Services', href: '/services' },
    { label: 'Locations', href: '#' },
    { label: 'Our Process', href: '/our-process' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on the left */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/logo.webp"
              alt="Figgle Media Logo"
              width="48"
              height="48"
              fetchPriority="high"
              decoding="async"
              className="h-12 w-12 object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="flex flex-col items-center leading-none" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
              <span className="text-[28px] font-bold tracking-[0.04em] text-cream group-hover:text-burnt-orange transition-colors duration-300 uppercase">
                Figgle
              </span>
              <span className="text-[13px] font-normal tracking-[0.35em] text-cream group-hover:text-burnt-orange transition-colors duration-300 uppercase">
                Media
              </span>
            </div>
          </Link>

          {/* Nav links in the center */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.label === 'Services' ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                    setIsServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    servicesTimeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150);
                  }}
                >
                  <Link
                    to={link.href}
                    className="text-cream hover:text-burnt-orange transition-colors font-medium flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-navy rounded-lg shadow-xl border border-white/10 py-2">
                      {serviceLinks.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="block px-4 py-2 text-cream hover:text-burnt-orange hover:bg-white/5 transition-colors text-sm"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.label === 'Locations' ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (locationsTimeoutRef.current) clearTimeout(locationsTimeoutRef.current);
                    setIsLocationsOpen(true);
                  }}
                  onMouseLeave={() => {
                    locationsTimeoutRef.current = setTimeout(() => setIsLocationsOpen(false), 150);
                  }}
                >
                  <button
                    className="text-cream hover:text-burnt-orange transition-colors font-medium flex items-center gap-1"
                  >
                    Locations
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isLocationsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isLocationsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-navy rounded-lg shadow-xl border border-white/10 py-2">
                      {locationLinks.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="block px-4 py-2 text-cream hover:text-burnt-orange hover:bg-white/5 transition-colors text-sm"
                          onClick={() => setIsLocationsOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-cream hover:text-burnt-orange transition-colors font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Phone and CTA button on the right */}
          <div className="hidden lg:flex items-center gap-6">
            <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-2 text-cream hover:text-burnt-orange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="font-semibold">{BUSINESS.phoneDisplay}</span>
            </a>
            <Link
              to="/free-website-plan"
              className="bg-burnt-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-orange transition-all shadow-md hover:shadow-lg"
            >
              Schedule Intro Call
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) =>
              link.label === 'Services' ? (
                <div key={link.label}>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="text-cream hover:text-burnt-orange transition-colors font-medium py-2 flex items-center gap-1 w-full"
                  >
                    Services
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMobileServicesOpen && (
                    <div className="pl-4 flex flex-col space-y-2 mt-1">
                      <Link
                        to="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-cream hover:text-burnt-orange transition-colors text-sm py-1"
                      >
                        All Services
                      </Link>
                      {serviceLinks.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-cream hover:text-burnt-orange transition-colors text-sm py-1"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.label === 'Locations' ? (
                <div key={link.label}>
                  <button
                    onClick={() => setIsMobileLocationsOpen(!isMobileLocationsOpen)}
                    className="text-cream hover:text-burnt-orange transition-colors font-medium py-2 flex items-center gap-1 w-full"
                  >
                    Locations
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileLocationsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMobileLocationsOpen && (
                    <div className="pl-4 flex flex-col space-y-2 mt-1">
                      {locationLinks.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-cream hover:text-burnt-orange transition-colors text-sm py-1"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-cream hover:text-burnt-orange transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              )
            )}

            <Link
              to="/free-website-plan"
              onClick={() => setIsMenuOpen(false)}
              className="bg-burnt-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-orange transition-all text-center shadow-md hover:shadow-lg"
            >
              Get My Free Website Plan
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
