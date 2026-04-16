import type { ReactNode } from 'react';

type Variant = 'white' | 'slate' | 'cream' | 'navy' | 'dark-navy';
type Padding = 'tight' | 'default' | 'feature';

const variantClasses: Record<Variant, string> = {
  white: 'bg-white text-slate-800',
  slate: 'bg-slate-50 text-slate-800',
  cream: 'bg-cream text-slate-800',
  navy: 'bg-navy-blue text-white',
  'dark-navy': 'bg-gradient-to-br from-navy-blue via-dark-navy to-navy text-white',
};

const paddingClasses: Record<Padding, string> = {
  tight: 'py-16',
  default: 'py-24',
  feature: 'py-32',
};

interface Props {
  variant?: Variant;
  padding?: Padding;
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function SectionBand({ variant = 'white', padding = 'default', id, className = '', children }: Props) {
  return (
    <section id={id} className={`${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
