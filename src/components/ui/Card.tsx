import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'light' | 'dark' | 'bordered';

const variantClasses: Record<Variant, string> = {
  light: 'bg-white shadow-premium hover:shadow-premium-hover border border-slate-100',
  dark: 'bg-gradient-to-br from-navy-blue to-navy text-white border border-white/10 shadow-premium-lg',
  bordered: 'bg-white border-2 border-slate-200 hover:border-burnt-orange',
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
