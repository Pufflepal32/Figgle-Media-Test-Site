import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'About', href: '/about' },
  ];

  const locations = [
    { name: 'Charleston', slug: 'charleston' },
    { name: 'Huntington', slug: 'huntington' },
    { name: 'Morgantown', slug: 'morgantown' },
    { name: 'Parkersburg', slug: 'parkersburg' },
    { name: 'Wheeling', slug: 'wheeling' },
    { name: 'Weirton', slug: 'weirton' },
    { name: 'Fairmont', slug: 'fairmont' },
    { name: 'Logan', slug: 'logan' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/assets/logo.png"
                alt="Figgle Media Logo"
                className="h-14 w-14 object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-2xl font-bold text-dark-green group-hover:text-burnt-orange transition-colors duration-300">
                Figgle Media
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-charcoal hover:text-teal transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Locations Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsLocationsOpen(true)}
              onMouseLeave={() => setIsLocationsOpen(false)}
            >
              <button className="flex items-center gap-1 text-charcoal hover:text-teal transition-colors font-medium py-2">
                Locations
                <ChevronDown size={16} className={`transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLocationsOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-48 bg-white rounded-lg shadow-xl border border-light-gray py-2">
                    {locations.map((location) => (
                      <Link
                        key={location.slug}
                        to={`/locations/${location.slug}`}
                        className="block px-4 py-2 text-charcoal hover:bg-cream hover:text-teal transition-colors"
                      >
                        {location.name}, WV
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="bg-burnt-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-deep-orange transition-all shadow-md hover:shadow-lg"
            >
              Get My Free Website Plan
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-charcoal"
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
                className="text-charcoal hover:text-teal transition-colors font-medium py-2"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Locations Dropdown */}
            <div>
              <button
                onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                className="flex items-center justify-between w-full text-charcoal hover:text-teal transition-colors font-medium py-2"
              >
                Locations
                <ChevronDown size={16} className={`transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLocationsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {locations.map((location) => (
                    <Link
                      key={location.slug}
                      to={`/locations/${location.slug}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsLocationsOpen(false);
                      }}
                      className="block text-warm-gray hover:text-teal transition-colors py-1"
                    >
                      {location.name}, WV
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
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
