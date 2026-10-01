import type { ReactNode } from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
  children,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = light ? 'text-white' : 'text-navy-900';
  const descColor = light ? 'text-white/70' : 'text-charcoal/70';
  const labelColor = light ? 'text-blue-300' : 'text-blue-600';

  return (
    <div className={`${alignClass} max-w-2xl ${className}`}>
      {label && (
        <span
          className={`block text-xs font-semibold uppercase tracking-[0.18em] ${labelColor}`}
        >
          {label}
        </span>
      )}
      <h2
        className={`mt-3 font-heading text-3xl md:text-4xl font-bold leading-tight ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
