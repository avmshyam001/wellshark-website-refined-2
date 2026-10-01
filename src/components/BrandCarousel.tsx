import { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import type { Product } from '@/data/products';

interface BrandCarouselProps {
  products: Product[];
}

const GAP = 20;
const AUTO_ROTATE_INTERVAL = 4000;
const TRANSITION_DURATION = 500;

function getVisibleCards(): number {
  if (typeof window === 'undefined') return 4;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 4;
}

export default function BrandCarousel({ products }: BrandCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(products.length);
  const [isPaused, setIsPaused] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(getVisibleCards);

  const extendedProducts = [...products, ...products, ...products];
  const midStart = products.length;
  const midEnd = products.length * 2;

  useEffect(() => {
    const measure = () => {
      const card = trackRef.current?.querySelector('[data-card]') as HTMLElement | null;
      if (card) setCardWidth(card.offsetWidth);
      setVisibleCards(getVisibleCards());
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= midEnd) {
      setNoTransition(true);
      setCurrentIndex((prev) => prev - products.length);
    } else if (currentIndex < midStart) {
      setNoTransition(true);
      setCurrentIndex((prev) => prev + products.length);
    }
  };

  useEffect(() => {
    if (!noTransition) return;
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setNoTransition(false))
    );
    return () => cancelAnimationFrame(raf);
  }, [noTransition]);

  const next = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  useEffect(() => {
    if (isPaused || products.length === 0) return;
    const timer = setInterval(next, AUTO_ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next, products.length]);

  const offset = cardWidth > 0 ? -(currentIndex * (cardWidth + GAP)) : 0;
  const viewportWidth =
    cardWidth > 0
      ? visibleCards * cardWidth + (visibleCards - 1) * GAP
      : '100%';

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden" style={{ width: viewportWidth }}>
        <div
          ref={trackRef}
          className="flex gap-5"
          style={{
            transform: `translateX(${offset}px)`,
            transition: noTransition ? 'none' : `transform ${TRANSITION_DURATION}ms ease`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedProducts.map((product, i) => (
            <div key={`${product.id}-${i}`} data-card className="flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Scroll brands left"
          className="p-2.5 rounded-full border border-cool-300 text-navy-700 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-200"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Scroll brands right"
          className="p-2.5 rounded-full border border-cool-300 text-navy-700 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-200"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
