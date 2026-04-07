import { Award, Shield, MapPin, Wrench, Code, BarChart3, Search } from 'lucide-react';

export default function TrustBadges() {
  const differentiators = [
    { label: 'Construction Only', sublabel: 'We exclusively serve contractors', icon: Wrench },
    { label: '90-Day Guarantee', sublabel: 'Free work if no improvement', icon: Shield },
    { label: 'Based in Raleigh', sublabel: 'Local team, local expertise', icon: MapPin },
    { label: 'Full-Service', sublabel: 'Design, SEO & Ads in-house', icon: Award },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-dark-navy to-navy-blue border-y border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Differentiators Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="text-burnt-orange" size={32} />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                {item.label}
              </div>
              <div className="text-cream text-sm font-medium">
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Platforms */}
        <div className="text-center">
          <p className="text-sm font-semibold text-cream uppercase tracking-wider mb-6">
            Tools & Platforms We Work With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-90">
            <div className="flex items-center gap-2">
              <Search size={24} className="text-burnt-orange" />
              <span className="font-semibold text-white">Google Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 size={24} className="text-burnt-orange" />
              <span className="font-semibold text-white">Google Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={24} className="text-burnt-orange" />
              <span className="font-semibold text-white">Google Business Profile</span>
            </div>
            <div className="flex items-center gap-2">
              <Code size={24} className="text-burnt-orange" />
              <span className="font-semibold text-white">Custom-Built Sites</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
