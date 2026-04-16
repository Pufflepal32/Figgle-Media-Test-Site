import type { ReactNode } from 'react';

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
  size?: 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  md: 'text-heading-xl',
  lg: 'text-display-sm',
  xl: 'text-display-md',
};

export default function EyebrowHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
  size = 'lg',
}: Props) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = dark ? 'text-white' : 'text-navy-blue';
  const descColor = dark ? 'text-slate-200' : 'text-slate-600';

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <div className={`text-eyebrow uppercase mb-4 ${dark ? 'text-burnt-orange' : 'text-burnt-orange'}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`font-display font-extrabold tracking-tight ${sizeClasses[size]} ${titleColor} ${description ? 'mb-5' : ''}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-body-lg leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
