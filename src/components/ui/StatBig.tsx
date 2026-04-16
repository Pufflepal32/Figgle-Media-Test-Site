import type { ReactNode } from 'react';

interface Props {
  value: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  accent?: 'orange' | 'gold' | 'navy';
  dark?: boolean;
}

const accentClasses = {
  orange: 'text-burnt-orange',
  gold: 'text-sky-gold',
  navy: 'text-navy-blue',
};

export default function StatBig({ value, label, description, icon, accent = 'orange', dark = false }: Props) {
  const labelColor = dark ? 'text-white' : 'text-navy-blue';
  const descColor = dark ? 'text-slate-300' : 'text-slate-600';

  return (
    <div className="text-center">
      {icon && (
        <div className={`inline-flex items-center justify-center rounded-full p-3 mb-4 ${dark ? 'bg-white/10' : 'bg-burnt-orange/10'}`}>
          {icon}
        </div>
      )}
      <div className={`font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight mb-2 ${accentClasses[accent]}`}>
        {value}
      </div>
      <div className={`font-semibold text-body-md ${labelColor} mb-1`}>{label}</div>
      {description && <p className={`text-body-sm ${descColor}`}>{description}</p>}
    </div>
  );
}
