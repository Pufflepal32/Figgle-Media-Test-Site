import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/assets/logo.png"
                alt="Figgle Media Logo"
                className="h-14 w-14 object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-2xl font-bold text-white group-hover:text-burnt-orange transition-colors duration-300">
                Figgle Media
              </span>
            </Link>
          </div>

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

            <Link
              to="/free-website-plan"
              className="bg-burnt-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-orange transition-all shadow-md hover:shadow-lg"
            >
              Get My Free Website Plan
            </Link>
          </nav>

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
