import type { ReactNode } from 'react';

type Device = 'laptop' | 'phone' | 'tablet';

interface Props {
  device?: Device;
  children: ReactNode;  // typically an <img>
  className?: string;
}

/**
 * Renders children inside a CSS-based device frame.
 * Children should be an <img> filling the content area.
 */
export default function DeviceFrame({ device = 'laptop', children, className = '' }: Props) {
  if (device === 'laptop') {
    return (
      <div className={`relative ${className}`}>
        {/* Laptop body */}
        <div className="relative rounded-t-2xl bg-slate-800 p-2 pb-0 shadow-premium-lg">
          <div className="relative aspect-[16/10] bg-slate-900 rounded-t-lg overflow-hidden">
            {/* Top bar with dots */}
            <div className="absolute top-0 left-0 right-0 h-6 bg-slate-700 flex items-center px-3 gap-1.5 z-10">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
            {/* Content */}
            <div className="absolute inset-0 top-6 overflow-hidden">
              {children}
            </div>
          </div>
        </div>
        {/* Laptop base */}
        <div className="relative h-2 bg-slate-700 rounded-b-3xl mx-auto" style={{ width: '108%', marginLeft: '-4%' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-800 rounded-b-lg"></div>
        </div>
      </div>
    );
  }

  if (device === 'phone') {
    return (
      <div className={`relative mx-auto ${className}`} style={{ maxWidth: '280px' }}>
        <div className="relative rounded-[2.5rem] bg-slate-900 p-3 shadow-premium-lg">
          <div className="relative aspect-[9/19] bg-slate-800 rounded-[1.75rem] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-10"></div>
            <div className="absolute inset-0 overflow-hidden rounded-[1.75rem]">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // tablet
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-xl bg-slate-800 p-3 shadow-premium-lg">
        <div className="relative aspect-[4/3] bg-slate-900 rounded-lg overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
