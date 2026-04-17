import type { ReactNode } from 'react';

type Variant = 'white' | 'slate' | 'cream' | 'navy' | 'dark-navy';
type Padding = 'tight' | 'default' | 'feature';

// All "bright" variants (white/slate/cream) now render on layered mesh
// gradients with a subtle dot pattern on top — no more solid fills. The
// navy + dark-navy variants stay for sections that should read as heavier
// (e.g. final CTA).
const variantClasses: Record<Variant, string> = {
  white: 'bg-mesh-a pattern-dots text-slate-100',
  slate: 'bg-mesh-b pattern-dots text-slate-100',
  cream: 'bg-mesh-a pattern-dots text-slate-100',
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
          {/* Decorative glow orbs — give the mesh some depth, stay outside
              content bounds so they don't obscure text on narrow viewports. */}
          <div className="pointer-events-none absolute top-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-burnt-orange/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-20%] left-[-15%] h-[440px] w-[440px] rounded-full bg-sky-gold/5 blur-3xl" />
          {/* Soft top + bottom fades to the page bg color so this section
              blends into its neighbors instead of hard-cutting at the edge.
              Adjacent sections both fade to #0A1628, so they meet mid-fade. */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0A1628] to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A1628] to-transparent" />
        </>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}
