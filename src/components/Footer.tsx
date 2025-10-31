import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const serviceAreas = [
    'Raleigh, NC',
    'Nashville, TN',
    'Morgantown, WV',
    'Charleston, WV',
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/assets/logo.png"
                alt="Figgle Media Logo"
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-2xl font-bold text-cream">Figgle Media</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Helping roofing contractors dominate local search and generate qualified leads.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-cream">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+1234567890" className="flex items-center text-gray-300 hover:text-teal transition-colors">
                <Phone size={18} className="mr-2" />
                (123) 456-7890
              </a>
              <a href="mailto:info@figglemedia.com" className="flex items-center text-gray-300 hover:text-teal transition-colors">
                <Mail size={18} className="mr-2" />
                info@figglemedia.com
              </a>
              <div className="flex items-start text-gray-300">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Main Street<br />Charleston, WV 25301</span>
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
              <a href="#" className="bg-dark-green p-2 rounded-full hover:bg-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-dark-green p-2 rounded-full hover:bg-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-dark-green p-2 rounded-full hover:bg-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-dark-green p-2 rounded-full hover:bg-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-gray pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Figgle Media. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-teal transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-teal transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
