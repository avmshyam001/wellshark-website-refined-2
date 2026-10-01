import { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import type { Product } from '@/data/products';

interface ProductGridProps {
  products: Product[];
  showFilter?: boolean;
}

const filterOptions = ['All', 'Urology', 'Gynecology', 'Nephrology', 'Diabetology', 'Dental', 'ENT'];

export default function ProductGrid({ products, showFilter = false }: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return products;
    return products.filter((p) => p.therapeuticArea === activeFilter);
  }, [products, activeFilter]);

  if (!showFilter) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <div key={product.id} className="flex justify-center">
            <div className="w-full max-w-[300px]">
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => setActiveFilter(option)}
            className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
              activeFilter === option
                ? 'bg-navy-900 text-white'
                : 'bg-cool-100 text-charcoal/70 hover:bg-cool-200'
            }`}
            aria-pressed={activeFilter === option}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <div key={product.id} className="flex justify-center">
            <div className="w-full max-w-[300px]">
              <ProductCard product={product} />
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-charcoal/50 py-12">
          No products in this therapeutic area yet.
        </p>
      )}
    </div>
  );
}
