import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark';
type Size = 'sm' | 'md' | 'lg';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-burnt-orange text-white hover:bg-deep-orange shadow-premium hover:shadow-premium-hover',
  secondary: 'bg-white text-navy-blue border-2 border-navy-blue hover:bg-navy-blue hover:text-white',
  ghost: 'bg-transparent text-navy-blue hover:bg-slate-100',
  dark: 'bg-navy-blue text-white hover:bg-navy shadow-premium',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  children: ReactNode;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = BaseProps & { to: string; href?: never };
type AnchorProps = BaseProps & { href: string; to?: never };

const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-button font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-burnt-orange focus-visible:ring-offset-2';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', iconLeft, iconRight, className = '', children, ...rest }, ref) => (
    <button
      ref={ref}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  )
);
Button.displayName = 'Button';

export function LinkButton({ variant = 'primary', size = 'md', iconLeft, iconRight, className = '', children, to }: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Link>
  );
}

export function AnchorButton({ variant = 'primary', size = 'md', iconLeft, iconRight, className = '', children, href }: AnchorProps) {
  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {iconLeft}
      {children}
      {iconRight}
    </a>
  );
}
