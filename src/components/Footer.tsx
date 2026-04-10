import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { BUSINESS } from '../config/business';

export default function Footer() {
  const serviceAreas = [
    'Raleigh, NC',
    'Charlotte, NC',
    'Durham, NC',
    'Greensboro, NC',
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
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
            <p className="text-gray-300 mb-4">
              Helping construction businesses dominate local search and generate qualified leads.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Contact Us</h4>
            <div className="space-y-3">
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
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-gray-300">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Figgle-Media/61566383850893/" target="_blank" rel="noopener noreferrer" aria-label="Figgle Media on Facebook" className="bg-dark-green p-2 rounded-full hover:bg-teal transition-colors">
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a href="https://x.com/FiggleMedia" target="_blank" rel="noopener noreferrer" aria-label="Figgle Media on X" className="bg-dark-green p-2 rounded-full hover:bg-teal transition-colors">
                <Twitter size={20} aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/figglemedia/" target="_blank" rel="noopener noreferrer" aria-label="Figgle Media on Instagram" className="bg-dark-green p-2 rounded-full hover:bg-teal transition-colors">
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/trevor-alford-753435248/" target="_blank" rel="noopener noreferrer" aria-label="Trevor Alford on LinkedIn" className="bg-dark-green p-2 rounded-full hover:bg-teal transition-colors">
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </div>
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
