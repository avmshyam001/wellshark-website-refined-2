import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import PageHero from '@/components/PageHero';
import TherapeuticAreaCard from '@/components/TherapeuticAreaCard';
import ProductCard from '@/components/ProductCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { therapeuticAreas, products } from '@/data/siteData';

export function TherapeuticAreas() {
  return (
    <>
      <PageHero
        label="THERAPEUTIC EXPERTISE"
        title="Therapeutic Areas"
        description="Focused expertise across key therapeutic areas. Wellshark operates across six therapeutic domains, building specialised knowledge and a focused product portfolio in each."
      />
      <section className="py-20 lg:py-28 bg-white" ref={useScrollReveal()}>
        <div className="container-inner">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal">
            {therapeuticAreas.map((area) => (
              <TherapeuticAreaCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function TherapeuticAreaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const area = therapeuticAreas.find((a) => a.slug === slug);
  const ref = useScrollReveal();

  if (!area) return <Navigate to="/therapeutic-areas" replace />;

  const areaProducts = products.filter((p) => p.therapeuticAreaSlug === slug);

  return (
    <>
      <PageHero label="THERAPEUTIC AREA" title={area.name} description={area.shortDescription} />

      <section className="py-20 lg:py-28 bg-white" ref={ref}>
        <div className="container-inner">
          <div className="reveal mb-10">
            <Link
              to="/therapeutic-areas"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:gap-2.5 transition-all duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              All Therapeutic Areas
            </Link>
          </div>

          {areaProducts.length > 0 ? (
            <>
              <div className="reveal mb-8">
                <h2 className="font-heading text-2xl font-bold text-navy-900">
                  Products in {area.name}
                </h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 reveal">
                {areaProducts.map((product) => (
                  <div key={product.id} className="flex justify-center">
                    <div className="w-full max-w-[300px]">
                      <ProductCard product={product} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-charcoal/50 py-12 reveal">
              Products for this therapeutic area will be listed here once verified product information is supplied.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
