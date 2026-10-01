import type { ReactNode } from 'react';

interface PlaceholderImageProps {
  type: 'product' | 'therapeutic-area' | 'about' | 'hero' | 'manufacturer' | 'certification' | 'general';
  label?: string | null;
  alt?: string;
  className?: string;
  children?: ReactNode;
}

const gradients: Record<string, string> = {
  product: 'from-navy-800 to-navy-950',
  'therapeutic-area': 'from-navy-700 via-navy-800 to-navy-950',
  about: 'from-blue-800 via-navy-800 to-navy-900',
  hero: 'from-navy-800 via-navy-900 to-navy-950',
  manufacturer: 'from-cool-100 to-cool-200',
  certification: 'from-cool-100 to-cool-200',
  general: 'from-cool-100 to-cool-200',
};

const textColors: Record<string, string> = {
  product: 'text-white/50',
  'therapeutic-area': 'text-white/50',
  about: 'text-white/50',
  hero: 'text-white/50',
  manufacturer: 'text-navy-900/40',
  certification: 'text-navy-900/40',
  general: 'text-navy-900/40',
};

export default function PlaceholderImage({
  type,
  label,
  alt,
  className = '',
  children,
}: PlaceholderImageProps) {
  const isDark = ['product', 'therapeutic-area', 'about', 'hero'].includes(type);
  const iconColor = isDark ? 'text-white/15' : 'text-navy-900/15';

  return (
    <div
      className={`relative flex items-center justify-center bg-gradient-to-br ${gradients[type]} ${className}`}
      role="img"
      aria-label={alt || label || 'Image placeholder'}
    >
      {type === 'product' && (
        <svg viewBox="0 0 80 120" className="h-3/5 max-h-48 opacity-40" fill="none">
          <rect x="10" y="10" width="60" height="100" rx="6" stroke="white" strokeWidth="1.5" opacity="0.3" />
          <rect x="10" y="35" width="60" height="25" fill="white" opacity="0.08" />
          <rect x="18" y="20" width="44" height="3" rx="1.5" fill="white" opacity="0.15" />
          <rect x="18" y="26" width="30" height="2" rx="1" fill="white" opacity="0.1" />
          <rect x="18" y="75" width="44" height="2" rx="1" fill="white" opacity="0.1" />
          <rect x="18" y="82" width="35" height="2" rx="1" fill="white" opacity="0.1" />
        </svg>
      )}
      {type !== 'product' && (
        <div className={`absolute inset-0 flex items-center justify-center ${iconColor}`}>
          <svg viewBox="0 0 100 100" className="h-1/3 w-1/3" fill="none">
            <rect x="15" y="20" width="70" height="60" rx="4" stroke="currentColor" strokeWidth="2" />
            <circle cx="38" cy="45" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M25 75 L45 55 L60 70 L75 50 L75 75 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      )}
      {label && (
        <span
          className={`absolute bottom-3 left-3 right-3 text-center text-[10px] font-medium uppercase tracking-wider ${textColors[type]}`}
        >
          {label}
        </span>
      )}
      {children}
    </div>
  );
}
