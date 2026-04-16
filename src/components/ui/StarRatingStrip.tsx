import { Star } from 'lucide-react';

interface Props {
  rating?: number;            // 0-5
  reviewCount?: number;
  platform?: string;
  dark?: boolean;
  className?: string;
}

export default function StarRatingStrip({ rating = 4.9, reviewCount = 50, platform = 'Google', dark = false, className = '' }: Props) {
  const textColor = dark ? 'text-white' : 'text-navy-blue';
  const mutedColor = dark ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={20}
            className={i <= Math.round(rating) ? 'text-sky-gold fill-sky-gold' : 'text-slate-300'}
          />
        ))}
      </div>
      <div className={`text-body-sm ${textColor}`}>
        <span className="font-bold">{rating.toFixed(1)}</span>
        <span className={mutedColor}> · {reviewCount}+ reviews on {platform}</span>
      </div>
    </div>
  );
}
