import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-dark-green">
              Figgle Media
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-jet-black hover:text-burnt-orange transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/about"
              className="bg-burnt-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Get My Free Website Plan
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-jet-black"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-jet-black hover:text-burnt-orange transition-colors font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="bg-burnt-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-center"
            >
              Get My Free Website Plan
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
