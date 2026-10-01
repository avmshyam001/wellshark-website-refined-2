import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { TherapeuticArea } from '@/data/products';

export default function TherapeuticAreaCard({
  area,
}: {
  area: TherapeuticArea;
}) {
  return (
    <Link
      to={`/therapeutic-areas/${area.slug}`}
      className="group relative overflow-hidden rounded-xl bg-navy-900 aspect-[4/3]"
    >
      {area.imageUrl ? (
        <img
          src={area.imageUrl}
          alt={`${area.name} — therapeutic area`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-950" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-heading text-xl lg:text-2xl font-bold text-white">
          {area.name}
        </h3>
        <p className="mt-2 text-sm text-white/70 leading-relaxed line-clamp-2">
          {area.shortDescription}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 group-hover:gap-2.5 transition-all duration-200">
          Explore
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
