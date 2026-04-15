import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../config/business';

type Industry = {
  label: string;
  hubHref: string;
  services: { label: string; href: string }[];
};

const industries: Industry[] = [
  {
    label: 'Roofing',
    hubHref: '/roofing',
    services: [
      { label: 'Roofing Web Design', href: '/roofing/web-design' },
      { label: 'Roofing SEO', href: '/roofing/seo' },
      { label: 'Roofing Google Ads', href: '/roofing/google-ads' },
      { label: 'Roofing Lead Generation', href: '/roofing/lead-generation' },
    ],
  },
  {
    label: 'HVAC',
    hubHref: '/hvac',
    services: [
      { label: 'HVAC Web Design', href: '/hvac/web-design' },
      { label: 'HVAC SEO', href: '/hvac/seo' },
      { label: 'HVAC Google Ads', href: '/hvac/google-ads' },
      { label: 'HVAC Lead Generation', href: '/hvac/lead-generation' },
    ],
  },
  {
    label: 'Electrician',
    hubHref: '/electrician',
    services: [
      { label: 'Electrician Web Design', href: '/electrician/web-design' },
      { label: 'Electrician SEO', href: '/electrician/seo' },
      { label: 'Electrician Google Ads', href: '/electrician/google-ads' },
      { label: 'Electrician Lead Generation', href: '/electrician/lead-generation' },
    ],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileLocationsOpen, setIsMobileLocationsOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState<string | null>(null);

  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const locationsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const industriesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const serviceLinks = [
    { label: 'Contractor Web Design', href: '/services/contractor-web-design' },
    { label: 'SEO for Contractors', href: '/services/seo-for-contractors' },
    { label: 'Google Ads Management', href: '/services/google-ads-management' },
    { label: 'Local Service Ads', href: '/services/local-service-ads' },
  ];

  const locationLinks = [
    { label: 'Raleigh', href: '/raleigh-web-design' },
    { label: 'Charlotte', href: '/charlotte-web-design' },
    { label: 'Durham', href: '/durham-web-design' },
    { label: 'Greensboro', href: '/greensboro-web-design' },
    { label: 'Winston-Salem', href: '/winston-salem-web-design' },
    { label: 'Fayetteville', href: '/fayetteville-web-design' },
    { label: 'Wilmington', href: '/wilmington-web-design' },
    { label: 'Asheville', href: '/asheville-web-design' },
  ];

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Industries', href: '#' },
    { label: 'Service Areas', href: '#' },
    { label: 'Our Process', href: '/our-process' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
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
              ) : link.label === 'Industries' ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
                    setIsIndustriesOpen(true);
                  }}
                  onMouseLeave={() => {
                    industriesTimeoutRef.current = setTimeout(() => {
                      setIsIndustriesOpen(false);
                      setHoveredIndustry(null);
                    }, 150);
                  }}
                >
                  <button className="text-cream hover:text-burnt-orange transition-colors font-medium flex items-center gap-1">
                    Industries
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isIndustriesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isIndustriesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-navy rounded-lg shadow-xl border border-white/10 py-2">
                      {industries.map((ind) => (
                        <div
                          key={ind.label}
                          className="relative"
                          onMouseEnter={() => setHoveredIndustry(ind.label)}
                        >
                          <Link
                            to={ind.hubHref}
                            className="flex items-center justify-between px-4 py-2 text-cream hover:text-burnt-orange hover:bg-white/5 transition-colors text-sm"
                            onClick={() => {
                              setIsIndustriesOpen(false);
                              setHoveredIndustry(null);
                            }}
                          >
                            <span>{ind.label}</span>
                            <ChevronRight size={14} className="text-cream/60" />
                          </Link>
                          {hoveredIndustry === ind.label && (
                            <div className="absolute top-0 left-full ml-1 w-60 bg-navy rounded-lg shadow-xl border border-white/10 py-2">
                              <Link
                                to={ind.hubHref}
                                className="block px-4 py-2 text-burnt-orange hover:bg-white/5 transition-colors text-sm font-semibold border-b border-white/10 mb-1"
                                onClick={() => {
                                  setIsIndustriesOpen(false);
                                  setHoveredIndustry(null);
                                }}
                              >
                                {ind.label} Overview
                              </Link>
                              {ind.services.map((svc) => (
                                <Link
                                  key={svc.href}
                                  to={svc.href}
                                  className="block px-4 py-2 text-cream hover:text-burnt-orange hover:bg-white/5 transition-colors text-sm"
                                  onClick={() => {
                                    setIsIndustriesOpen(false);
                                    setHoveredIndustry(null);
                                  }}
                                >
                                  {svc.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                      <Link
                        to="/contractor-marketing-agency"
                        className="block px-4 py-2 text-cream hover:text-burnt-orange hover:bg-white/5 transition-colors text-sm border-t border-white/10 mt-1 pt-2"
                        onClick={() => {
                          setIsIndustriesOpen(false);
                          setHoveredIndustry(null);
                        }}
                      >
                        Contractor Marketing Agency
                      </Link>
                      <div className="border-t border-white/10 mt-1 pt-2">
                        <p className="px-4 py-1 text-xs font-semibold text-cream/50 uppercase tracking-wider">Core Services</p>
                        {serviceLinks.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className="block px-4 py-2 text-cream hover:text-burnt-orange hover:bg-white/5 transition-colors text-sm"
                            onClick={() => {
                              setIsIndustriesOpen(false);
                              setHoveredIndustry(null);
                            }}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : link.label === 'Service Areas' ? (
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
                  <button className="text-cream hover:text-burnt-orange transition-colors font-medium flex items-center gap-1">
                    Service Areas
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
              ) : link.label === 'Industries' ? (
                <div key={link.label}>
                  <button
                    onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                    className="text-cream hover:text-burnt-orange transition-colors font-medium py-2 flex items-center gap-1 w-full"
                  >
                    Industries
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileIndustriesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMobileIndustriesOpen && (
                    <div className="pl-4 flex flex-col space-y-2 mt-1">
                      {industries.map((ind) => (
                        <div key={ind.label}>
                          <button
                            onClick={() => setMobileIndustryOpen(mobileIndustryOpen === ind.label ? null : ind.label)}
                            className="text-cream hover:text-burnt-orange transition-colors text-sm py-1 flex items-center gap-1 w-full"
                          >
                            {ind.label}
                            <ChevronDown size={14} className={`transition-transform duration-200 ${mobileIndustryOpen === ind.label ? 'rotate-180' : ''}`} />
                          </button>
                          {mobileIndustryOpen === ind.label && (
                            <div className="pl-4 flex flex-col space-y-1 mt-1">
                              <Link
                                to={ind.hubHref}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-burnt-orange hover:text-white transition-colors text-sm py-1 font-semibold"
                              >
                                {ind.label} Overview
                              </Link>
                              {ind.services.map((svc) => (
                                <Link
                                  key={svc.href}
                                  to={svc.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="text-cream hover:text-burnt-orange transition-colors text-sm py-1"
                                >
                                  {svc.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                      <Link
                        to="/contractor-marketing-agency"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-cream hover:text-burnt-orange transition-colors text-sm py-1"
                      >
                        Contractor Marketing Agency
                      </Link>
                      <div className="border-t border-white/10 mt-2 pt-2">
                        <p className="text-xs font-semibold text-cream/50 uppercase tracking-wider mb-1">Core Services</p>
                        {serviceLinks.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-cream hover:text-burnt-orange transition-colors text-sm py-1"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : link.label === 'Service Areas' ? (
                <div key={link.label}>
                  <button
                    onClick={() => setIsMobileLocationsOpen(!isMobileLocationsOpen)}
                    className="text-cream hover:text-burnt-orange transition-colors font-medium py-2 flex items-center gap-1 w-full"
                  >
                    Service Areas
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
