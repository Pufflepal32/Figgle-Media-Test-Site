import type { ReactNode } from 'react';

interface Badge {
  name: string;
  content: ReactNode;  // can be text, icon, or img element
}

interface Props {
  badges?: Badge[];
  dark?: boolean;
  className?: string;
}

const defaultBadges: Badge[] = [
  { name: 'Google Partner', content: 'Google Partner' },
  { name: 'Meta Business Partner', content: 'Meta Partner' },
  { name: 'BBB A+', content: 'BBB A+' },
  { name: 'Angi Certified', content: 'Angi Certified' },
  { name: 'HomeAdvisor Pro', content: 'HomeAdvisor Pro' },
];

export default function BadgeShelf({ badges = defaultBadges, dark = false, className = '' }: Props) {
  const textColor = dark ? 'text-slate-300' : 'text-slate-500';
  const borderColor = dark ? 'border-white/10' : 'border-slate-200';
  const bgColor = dark ? 'bg-white/5' : 'bg-white';

  return (
    <div className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 ${className}`}>
      {badges.map((badge) => (
        <div
          key={badge.name}
          className={`inline-flex items-center px-4 py-3 rounded-button border ${borderColor} ${bgColor} ${textColor} font-semibold text-sm transition-all hover:border-burnt-orange hover:text-burnt-orange`}
          aria-label={badge.name}
        >
          {badge.content}
        </div>
      ))}
    </div>
  );
}
