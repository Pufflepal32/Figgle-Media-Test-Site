import { Award, CheckCircle, Shield, Star, TrendingUp, Users } from 'lucide-react';

export default function TrustBadges() {
  const stats = [
    { number: '100+', label: 'Happy Roofers', icon: Users },
    { number: '500K+', label: 'Leads Generated', icon: TrendingUp },
    { number: '4.9/5', label: 'Client Rating', icon: Star },
    { number: '5 Years', label: 'In Business', icon: Award },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-dark-navy to-navy-blue border-y border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="text-burnt-orange" size={32} />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-cream font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Certification Badges */}
        <div className="text-center">
          <p className="text-sm font-semibold text-cream uppercase tracking-wider mb-6">
            We Partner With Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-90">
            <div className="flex items-center gap-2">
              <Shield size={24} className="text-burnt-orange" />
              <span className="font-semibold text-white">GAF Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={24} className="text-burnt-orange" />
              <span className="font-semibold text-white">Owens Corning</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={24} className="text-burnt-orange" />
              <span className="font-semibold text-white">CertainTeed</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={24} className="text-burnt-orange" />
              <span className="font-semibold text-white">Google Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
