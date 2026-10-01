import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function PageHero({
  label,
  title,
  description,
  children,
}: PageHeroProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className="relative bg-navy-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, #ffffff 1px, transparent 1px), radial-gradient(circle at 20% 80%, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 right-0 w-[40vw] h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/3 rounded-full border border-white/20" />
        <div className="absolute top-1/2 right-0 w-64 h-64 -translate-y-1/2 translate-x-1/4 rounded-full border border-white/10" />
      </div>

      <div className="container-inner relative pt-36 pb-20 md:pt-40 md:pb-24">
        <div className="max-w-3xl">
          {label && (
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-blue-300 animate-fade-up">
              {label}
            </span>
          )}
          <h1
            className="mt-4 font-heading text-4xl md:text-5xl lg:text-5xl font-bold leading-tight animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            {title}
          </h1>
          {description && (
            <p
              className="mt-5 text-lg leading-relaxed text-white/70 max-w-xl animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              {description}
            </p>
          )}
          {children && (
            <div className="mt-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
