import { Quote, Star } from 'lucide-react';

export default function TestimonialsPreview() {
  const testimonials = [
    {
      name: 'Mike Johnson',
      company: 'Summit Roofing',
      location: 'Charleston, WV',
      rating: 5,
      text: 'Figgle Media built us a website that actually brings in leads. We went from 5-10 calls a month to 40+ qualified leads. Best investment we\'ve made.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      name: 'Sarah Mitchell',
      company: 'Elite Roofing Solutions',
      location: 'Nashville, TN',
      rating: 5,
      text: 'The team at Figgle Media understands the roofing industry. Our new website looks professional and we\'re getting way more calls from homeowners.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    {
      name: 'Tom Davis',
      company: 'Mountain View Roofing',
      location: 'Morgantown, WV',
      rating: 5,
      text: 'These guys know what they\'re doing. Our website ranks #1 on Google now and we\'re booked solid for months. Couldn\'t be happier!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy-blue via-dark-navy to-navy-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What Roofers Are Saying
          </h2>
          <p className="text-xl text-cream">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-light-cream to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-light-gray relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={64} className="text-teal" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-burnt-orange fill-burnt-orange" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-warm-gray mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal"
                />
                <div>
                  <div className="font-bold text-charcoal">{testimonial.name}</div>
                  <div className="text-sm text-warm-gray">
                    {testimonial.company} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
