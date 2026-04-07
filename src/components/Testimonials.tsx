import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mike Patterson',
      company: 'Patterson Roofing Co.',
      location: 'Charleston, WV',
      rating: 5,
      text: 'Figgle Media transformed our online presence. We went from 2-3 leads a week to getting 15-20 qualified calls. The website looks incredible and actually brings in business.',
    },
    {
      name: 'Sarah Williams',
      company: 'Blue Ridge Roofing',
      location: 'Raleigh, NC',
      rating: 5,
      text: 'Best investment we made for our roofing business. The team knows the roofing industry inside and out. Our phone has not stopped ringing since the new site launched.',
    },
    {
      name: 'Tom Jenkins',
      company: 'Mountain Top Contractors',
      location: 'Morgantown, WV',
      rating: 5,
      text: 'These guys know what they are doing. Our Google ranking went from page 3 to top 3 in just a few months. The ROI has been incredible and the team is always available.',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-dark-green">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Roofers Are Saying
          </h2>
          <p className="text-xl text-alabaster max-w-2xl mx-auto">
            Do not just take our word for it. Here is what our clients have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg relative"
            >
              <Quote size={40} className="text-peach absolute top-6 right-6 opacity-50" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-burnt-orange fill-current" />
                ))}
              </div>

              <p className="text-jet-black mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-dark-green">{testimonial.name}</p>
                <p className="text-sm text-jet-black">{testimonial.company}</p>
                <p className="text-sm text-burnt-orange">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
