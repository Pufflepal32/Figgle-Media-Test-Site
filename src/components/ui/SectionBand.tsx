import type { ReactNode } from 'react';

type Variant = 'white' | 'slate' | 'cream' | 'navy' | 'dark-navy';
type Padding = 'tight' | 'default' | 'feature';

// Everything "bright" (was white/slate-50/cream) now renders on the dark
// navy palette — one shade brighter than the header's bg-navy so there's
// a clear hierarchy. Text flips to slate-100 / slate-200 accordingly.
// slate/cream use a slightly different tone so adjacent sections still
// read as distinct bands.
const variantClasses: Record<Variant, string> = {
  white: 'bg-light-navy text-slate-100',
  slate: 'bg-[#2a3a5e] text-slate-100',
  cream: 'bg-light-navy text-slate-100',
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
