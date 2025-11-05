import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

export default function MapEmbed() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (err) => {
          setError('Unable to get your location');
          setLoading(false);
          console.error('Geolocation error:', err);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
    }
  }, []);

  const mapUrl = location
    ? `https://www.google.com/maps?q=${location.lat},${location.lng}&output=embed`
    : 'https://www.google.com/maps?q=United+States&output=embed';

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-green">
            Most Future Proof Web Design Agency in Tennessee and West Virginia
          </h2>
        </div>

        <div className="w-full h-96 md:h-[500px] relative rounded-xl overflow-hidden shadow-2xl">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-cream z-20">
              <div className="text-center">
                <MapPin className="animate-bounce mx-auto mb-2 text-dark-green" size={32} />
                <p className="text-dark-green font-semibold">Getting your location...</p>
              </div>
            </div>
          )}
          {error && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-burnt-orange text-white px-4 py-2 rounded-lg shadow-lg z-10">
              {error}
            </div>
          )}
          <iframe
            src={mapUrl}
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Your Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
