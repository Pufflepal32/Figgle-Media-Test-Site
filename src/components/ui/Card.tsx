import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'light' | 'dark' | 'bordered';

// Cards sit on a dark navy page bg, so "light" no longer means white. It's a
// slate-700 surface — clearly brighter than the section it sits on so the
// card reads as elevated, but not "bright white" that clashes with the rest
// of the site.
const variantClasses: Record<Variant, string> = {
  light: 'bg-slate-700 text-slate-100 shadow-lg hover:shadow-xl border border-white/10',
  dark: 'bg-gradient-to-br from-navy-blue to-navy text-white border border-white/10 shadow-premium-lg',
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
