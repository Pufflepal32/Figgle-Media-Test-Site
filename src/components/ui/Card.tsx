import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'light' | 'dark' | 'bordered';

// Cards sit on a dark navy mesh. "light" is a slate-700 surface — brighter
// than the body so the card reads as elevated, but no border: a 1px
// white-ish border antialiased into thin strips at the rounded-card corners
// on dark bgs, which looked like visible scratches at the top of each card.
// Shadow alone carries the elevation now.
const variantClasses: Record<Variant, string> = {
  light: 'bg-slate-700 text-slate-100 shadow-lg hover:shadow-xl',
  dark: 'bg-gradient-to-br from-navy-blue to-navy text-white shadow-premium-lg',
  bordered: 'bg-slate-700 text-slate-100 border-2 border-white/20 hover:border-burnt-orange',
};

interface Props {
  variant?: Variant;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

export default function Card({ variant = 'light', to, href, onClick, className = '', children }: Props) {
  const base = `rounded-card overflow-hidden transition-all duration-300 ${variantClasses[variant]}`;
  const interactive = (to || href || onClick) ? 'hover:-translate-y-1 cursor-pointer' : '';
  const classes = `${base} ${interactive} ${className}`;

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>;
  }
  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }
  if (onClick) {
    return <button onClick={onClick} className={`${classes} text-left w-full`}>{children}</button>;
  }
  return <div className={classes}>{children}</div>;
}
