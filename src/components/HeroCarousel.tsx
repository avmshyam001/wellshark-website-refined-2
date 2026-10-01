import { useEffect, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { heroImages } from '@/data/siteData';

interface Slide {
  label: string;
  heading: string;
  copy: string;
  cta: { label: string; path: string };
  secondaryCta?: { label: string; path: string };
  image: string;
}

const slides: Slide[] = [
  {
    label: 'WELLSHARK — 10 YEARS',
    heading: '10 Years of Wellshark',
    copy: 'A decade of experience in specialty pharmaceuticals, built on focused therapeutic expertise and a commitment to quality.',
    cta: { label: 'Explore Products', path: '/products' },
    secondaryCta: { label: 'About Wellshark', path: '/about' },
    image: heroImages.slide1,
  },
  {
    label: 'OUR EXPERIENCE',
    heading: 'Built on Pharmaceutical Experience',
    copy: 'Experience across pharmaceutical sales, marketing, and operations, with a focused portfolio spanning selected therapeutic areas.',
    cta: { label: 'Our Approach', path: '/about' },
    secondaryCta: { label: 'Explore Products', path: '/products' },
    image: heroImages.slide2,
  },
  {
    label: 'THE NEXT PHASE',
    heading: 'Preparing for the Next Phase of Growth',
    copy: 'Building on a strong foundation to expand our therapeutic portfolio and reach across India.',
    cta: { label: 'About Wellshark', path: '/about' },
    secondaryCta: { label: 'Explore Products', path: '/products' },
    image: heroImages.slide3,
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) prev();
      else next();
    }
  };

  return (
    <section
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-navy-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Featured highlights"
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          aria-hidden={i !== current}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-900/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/20" />
          </div>

          <div className="relative h-full flex items-center">
            <div className="container-inner w-full">
              <div className="max-w-2xl">
                {i === current && (
                  <>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 animate-fade-up">
                      {slide.label}
                    </span>
                    <h1
                      className="mt-5 font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] text-white animate-fade-up text-balance"
                      style={{ animationDelay: '0.1s' }}
                    >
                      {slide.heading}
                    </h1>
                    <p
                      className="mt-6 text-base md:text-lg leading-relaxed text-white/70 max-w-lg animate-fade-up"
                      style={{ animationDelay: '0.2s' }}
                    >
                      {slide.copy}
                    </p>
                    <div
                      className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up"
                      style={{ animationDelay: '0.3s' }}
                    >
                      <Link
                        to={slide.cta.path}
                        className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-white/90 transition-all duration-200 hover:gap-3"
                      >
                        {slide.cta.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      {slide.secondaryCta && (
                        <Link
                          to={slide.secondaryCta.path}
                          className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
                        >
                          {slide.secondaryCta.label}
                        </Link>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container-inner flex items-center justify-center">
          <div className="flex items-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-white' : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
