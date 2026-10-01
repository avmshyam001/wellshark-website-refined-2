import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PlaceholderImage from './PlaceholderImage';
import type { Product } from '@/data/products';

export default function ProductDetail({ product }: { product: Product }) {
  const specs = [
    { label: 'Composition', value: product.composition },
    { label: 'Dosage Form', value: product.dosageForm },
    { label: 'Pack Size', value: product.packSize },
    { label: 'Therapeutic Area', value: product.therapeuticArea },
    { label: 'Indication', value: product.indication },
  ];

  return (
    <div className="container-inner py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <PlaceholderImage
            type="product"
            alt={`${product.brandName} packshot`}
            className="aspect-square w-full rounded-2xl"
            label="Product packshot to be supplied"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy-900">
            {product.brandName}
          </h1>

          <div className="mt-8 space-y-0">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-4 border-b border-cool-200"
              >
                <span className="text-sm font-semibold uppercase tracking-wider text-charcoal/40 w-40 flex-shrink-0">
                  {spec.label}
                </span>
                <span className="text-base text-charcoal/80 leading-relaxed">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="font-heading text-lg font-semibold text-navy-900">
              Product Description
            </h2>
            <p className="mt-3 text-base leading-relaxed text-charcoal/70">
              {product.description}
            </p>
          </div>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-navy-800 transition-all duration-200 hover:gap-3"
            >
              Enquire About This Product
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
