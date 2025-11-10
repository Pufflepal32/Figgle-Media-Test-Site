import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Services', href: '/services' },
    { label: 'Testimonials', href: '/testimonials' },
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
              src="/assets/logo.png"
              alt="Figgle Media Logo"
              className="h-14 w-14 object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="flex flex-col leading-normal">
              <span className="text-3xl font-semibold text-cream group-hover:text-burnt-orange transition-colors duration-300">
                Figgle
              </span>
              <span className="text-lg font-medium text-cream group-hover:text-burnt-orange transition-colors duration-300">
                Media
              </span>
            </div>
          </Link>

          {/* Nav links in the center */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-cream hover:text-burnt-orange transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone and CTA button on the right */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:612-778-3914" className="flex items-center gap-2 text-cream hover:text-burnt-orange transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="font-semibold">612-778-3914</span>
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
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-cream hover:text-burnt-orange transition-colors font-medium py-2"
              >
                {link.label}
              </Link>
            ))}

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
