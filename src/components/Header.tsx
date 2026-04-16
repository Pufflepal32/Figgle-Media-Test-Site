import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../config/business';

const serviceLinks = [
  { label: 'Contractor Web Design', href: '/services/contractor-web-design' },
  { label: 'SEO for Contractors', href: '/services/seo-for-contractors' },
  { label: 'Google Ads Management', href: '/services/google-ads-management' },
  { label: 'Local Service Ads', href: '/services/local-service-ads' },
];

const industries = [
  { label: 'Roofing', href: '/roofing' },
  { label: 'HVAC', href: '/hvac' },
  { label: 'Electrician', href: '/electrician' },
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

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Process', href: '/our-process' },
  { label: 'Team', href: '/team' },
];

const navLinks = [
  { label: 'Services', key: 'services' },
  { label: 'Solutions', key: 'solutions' },
  { label: 'Our Work', key: 'link', href: '/our-work' },
  { label: 'Pricing', key: 'link', href: '/pricing' },
  { label: 'Company', key: 'company' },
  { label: 'Blog', key: 'link', href: '/blog' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(key);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };
  const closeAll = () => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };
  const toggleMobile = (key: string) => {
    setMobileDropdown(mobileDropdown === key ? null : key);
  };

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
            <div className="flex flex-col items-center leading-none font-display">
              <span className="text-[28px] font-bold tracking-[0.04em] text-cream group-hover:text-burnt-orange transition-colors duration-300 uppercase">
                Figgle
              </span>
              <span className="text-[13px] font-normal tracking-[0.35em] text-cream group-hover:text-burnt-orange transition-colors duration-300 uppercase">
                Media
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              if (link.key === 'link') {
                return (
                  <Link
                    key={link.label}
                    to={link.href!}
                    className="text-cream hover:text-burnt-orange transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                );
              }

              if (link.key === 'services') {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleEnter('services')}
                    onMouseLeave={handleLeave}
                  >
                    <button className="text-cream hover:text-burnt-orange transition-colors font-medium flex items-center gap-1">
                      Services
                      <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === 'services' && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-navy rounded-lg shadow-xl border border-white/10 py-2">
                        {serviceLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            onClick={closeAll}
                            className="block px-4 py-2 text-cream hover:text-burnt-orange hover:bg-white/5 transition-colors text-sm"
                          >
                            {sub.label}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          onClick={closeAll}
                          className="block px-4 py-2 text-burnt-orange hover:bg-white/5 transition-colors text-sm font-semibold border-t border-white/10 mt-1 pt-2"
                        >
                          View All Services →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.key === 'solutions') {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleEnter('solutions')}
                    onMouseLeave={handleLeave}
                  >
                    <button className="text-cream hover:text-burnt-orange transition-colors font-medium flex items-center gap-1">
                      Solutions
                      <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === 'solutions' && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-navy rounded-lg shadow-xl border border-white/10 p-6">
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <p className="text-xs font-semibold text-cream/50 uppercase tracking-wider mb-3">By Industry</p>
                            <div className="space-y-1">
                              {industries.map((ind) => (
                                <Link
                                  key={ind.href}
                                  to={ind.href}
                                  onClick={closeAll}
                                  className="block px-3 py-2 text-cream hover:text-burnt-orange hover:bg-white/5 transition-colors text-sm rounded"
                                >
                                  {ind.label} Marketing
                                </Link>
                              ))}
                              <Link
                                to="/contractor-marketing-agency"
                                onClick={closeAll}
                                className="block px-3 py-2 text-burnt-orange hover:bg-white/5 transition-colors text-sm font-semibold rounded"
                              >
                                All Contractors →
                              </Link>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-cream/50 uppercase tracking-wider mb-3">By Location</p>
                            <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                              {locationLinks.map((loc) => (
                                <Link
                                  key={loc.href}
                                  to={loc.href}
                                  onClick={closeAll}
                                  className="block px-3 py-2 text-cream hover:text-burnt-orange hover:bg-white/5 transition-colors text-sm rounded"
                                >
                                  {loc.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.key === 'company') {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleEnter('company')}
                    onMouseLeave={handleLeave}
                  >
                    <button className="text-cream hover:text-burnt-orange transition-colors font-medium flex items-center gap-1">
                      Company
                      <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === 'company' ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === 'company' && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-navy rounded-lg shadow-xl border border-white/10 py-2">
                        {companyLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            onClick={closeAll}
                            className="block px-4 py-2 text-cream hover:text-burnt-orange hover:bg-white/5 transition-colors text-sm"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return null;
            })}
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {/* Services */}
            <div>
              <button
                onClick={() => toggleMobile('services')}
                className="text-cream hover:text-burnt-orange transition-colors font-medium py-2 flex items-center justify-between w-full"
              >
                Services
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'services' && (
                <div className="pl-4 flex flex-col space-y-2 mt-1">
                  {serviceLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      onClick={closeAll}
                      className="text-cream hover:text-burnt-orange text-sm py-1"
                    >
                      {sub.label}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    onClick={closeAll}
                    className="text-burnt-orange text-sm py-1 font-semibold"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions */}
            <div>
              <button
                onClick={() => toggleMobile('solutions')}
                className="text-cream hover:text-burnt-orange transition-colors font-medium py-2 flex items-center justify-between w-full"
              >
                Solutions
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'solutions' && (
                <div className="pl-4 flex flex-col space-y-3 mt-2">
                  <div>
                    <p className="text-xs font-semibold text-cream/50 uppercase tracking-wider mb-2">By Industry</p>
                    {industries.map((ind) => (
                      <Link
                        key={ind.href}
                        to={ind.href}
                        onClick={closeAll}
                        className="block text-cream hover:text-burnt-orange text-sm py-1"
                      >
                        {ind.label} Marketing
                      </Link>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-cream/50 uppercase tracking-wider mb-2">By Location</p>
                    {locationLinks.map((loc) => (
                      <Link
                        key={loc.href}
                        to={loc.href}
                        onClick={closeAll}
                        className="block text-cream hover:text-burnt-orange text-sm py-1"
                      >
                        {loc.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Simple links */}
            <Link to="/our-work" onClick={closeAll} className="text-cream hover:text-burnt-orange font-medium py-2">Our Work</Link>
            <Link to="/pricing" onClick={closeAll} className="text-cream hover:text-burnt-orange font-medium py-2">Pricing</Link>

            {/* Company */}
            <div>
              <button
                onClick={() => toggleMobile('company')}
                className="text-cream hover:text-burnt-orange transition-colors font-medium py-2 flex items-center justify-between w-full"
              >
                Company
                <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdown === 'company' && (
                <div className="pl-4 flex flex-col space-y-2 mt-1">
                  {companyLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      to={sub.href}
                      onClick={closeAll}
                      className="text-cream hover:text-burnt-orange text-sm py-1"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/blog" onClick={closeAll} className="text-cream hover:text-burnt-orange font-medium py-2">Blog</Link>

            <Link
              to="/free-website-plan"
              onClick={closeAll}
              className="bg-burnt-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-orange transition-all text-center shadow-md hover:shadow-lg"
            >
              Schedule Intro Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
