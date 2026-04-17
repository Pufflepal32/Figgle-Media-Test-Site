import type { ReactNode } from 'react';

type Variant = 'white' | 'slate' | 'cream' | 'navy' | 'dark-navy';
type Padding = 'tight' | 'default' | 'feature';

// "Bright" variants (white/slate/cream) are fully transparent — the body
// bg owns the mesh. Sections only contribute padding, the dot pattern
// overlay, and their own decorative orbs. This is what makes adjacent
// sections blend: there is no section-level bg color to transition from.
// Navy + dark-navy variants still paint their own bg for "heavier" moments
// like the final CTA.
const variantClasses: Record<Variant, string> = {
  white: 'pattern-dots text-slate-100',
  slate: 'pattern-dots text-slate-100',
  cream: 'pattern-dots text-slate-100',
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
  const isMesh = variant === 'white' || variant === 'slate' || variant === 'cream';
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
    >
      {isMesh && (
        <>
          {/* Decorative glow orbs — give each band its own warmth on top of
              the shared body mesh, stay outside content bounds. */}
          <div className="pointer-events-none absolute top-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-burnt-orange/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-20%] left-[-15%] h-[440px] w-[440px] rounded-full bg-sky-gold/5 blur-3xl" />
        </>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}
