import { Users, Heart, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-light-navy via-navy to-navy-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Built by Marketers Who Understand Construction
            </h2>
            <p className="text-xl text-cream mb-6 leading-relaxed">
              We started Figgle Media with one mission: help local contractors stand out online with websites that actually bring results.
            </p>
            <p className="text-lg text-cream mb-8 leading-relaxed">
              Founded by Michael Burgess and Trevor, we've spent years working exclusively with construction businesses across North Carolina and West Virginia. We understand the unique challenges you face and know exactly what it takes to turn your website into a lead-generating machine.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-burnt-orange rounded-full p-2 mr-4">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">
                    Industry Expertise
                  </h3>
                  <p className="text-cream">
                    We only work with contractors, so we know your business inside and out.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-burnt-orange rounded-full p-2 mr-4">
                  <Heart size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">
                    Local Focus
                  </h3>
                  <p className="text-cream">
                    We're based in your backyard and understand local markets.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-burnt-orange rounded-full p-2 mr-4">
                  <Target size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">
                    Results-Driven
                  </h3>
                  <p className="text-cream">
                    Every decision we make is focused on getting you more leads.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-navy to-burnt-orange rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Figgle Media Team"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-burnt-orange p-6 rounded-lg shadow-xl max-w-xs">
              <p className="text-2xl font-bold text-white mb-2">90-Day</p>
              <p className="text-white">Performance guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
