import { Award, CheckCircle, Shield, Star } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    { name: 'Google Partner', icon: Star },
    { name: 'Owens Corning', icon: Award },
    { name: 'GAF', icon: Shield },
    { name: 'CertainTeed', icon: CheckCircle },
  ];

  return (
    <section className="py-16 bg-alabaster">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark-green mb-12">
          Trusted by Roofers Across WV & TN
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <badge.icon size={48} className="text-burnt-orange mb-3" />
              <span className="text-jet-black font-semibold text-center">
                {badge.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
