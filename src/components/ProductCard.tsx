import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PlaceholderImage from './PlaceholderImage';
import type { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group flex flex-col bg-white rounded-xl border border-cool-200/70 overflow-hidden transition-all duration-300 hover:border-cool-300 hover:shadow-md flex-shrink-0 w-[280px] sm:w-[300px]"
    >
      <PlaceholderImage
        type="product"
        alt={`${product.brandName} packshot`}
        className="aspect-[4/3] w-full"
        label="Product packshot to be supplied"
      />
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-heading text-lg font-bold text-navy-900">
          {product.brandName}
        </h3>
        <p className="mt-2 text-sm text-charcoal/60 leading-relaxed line-clamp-2">
          {product.composition}
        </p>
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all duration-200">
            View Product
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
