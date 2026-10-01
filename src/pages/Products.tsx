import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ProductGrid from '@/components/ProductGrid';
import BrandCarousel from '@/components/BrandCarousel';
import SectionHeading from '@/components/SectionHeading';
import ProductDetail from '@/components/ProductDetail';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { products } from '@/data/siteData';

export function Products() {
  const featuredBrands = products.filter((p) => p.featured);

  return (
    <>
      <PageHero
        label="PRODUCT PORTFOLIO"
        title="Products"
        description="Explore Wellshark's portfolio of specialty pharmaceutical brands across key therapeutic areas."
      />

      <section className="py-20 lg:py-28 bg-white" ref={useScrollReveal()}>
        <div className="container-inner">
          {featuredBrands.length > 0 && (
            <div className="mb-20 reveal">
              <SectionHeading
                label="FEATURED BRANDS"
                title="Featured Brands"
                description="A curated showcase of selected flagship products from Wellshark's portfolio."
              />
              <div className="mt-10">
                <BrandCarousel products={featuredBrands} />
              </div>
            </div>
          )}

          <div className="reveal">
            <SectionHeading
              label="COMPLETE PORTFOLIO"
              title="Our Product Portfolio"
              description="Browse the full range of Wellshark products. Filter by therapeutic area to explore."
            />
            <div className="mt-8">
              <ProductGrid products={products} showFilter />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <div className="pt-20">
      <div className="container-inner pt-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:gap-2.5 transition-all duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          All Products
        </Link>
      </div>
      <ProductDetail product={product} />
    </div>
  );
}
