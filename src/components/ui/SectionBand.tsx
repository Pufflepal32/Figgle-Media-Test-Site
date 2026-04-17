import type { ReactNode } from 'react';

type Variant = 'white' | 'slate' | 'cream' | 'navy' | 'dark-navy';
type Padding = 'tight' | 'default' | 'feature';

// Every variant is fully transparent. The body bg owns the mesh + dots
// + all the orb-style hotspots, so sections never paint over it and the
// whole page reads as one continuous surface. Variant names are kept
// only for text-color differentiation and legacy call sites.
const variantClasses: Record<Variant, string> = {
  white: 'text-slate-100',
  slate: 'text-slate-100',
  cream: 'text-slate-100',
  navy: 'text-white',
  'dark-navy': 'text-white',
};

const paddingClasses: Record<Padding, string> = {
  tight: 'py-16',
  default: 'py-16',
  feature: 'py-20',
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
    <section
      id={id}
      className={`relative ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
