import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import PlaceholderImage from '@/components/PlaceholderImage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { sectionImages } from '@/data/siteData';

export default function Quality() {
  return (
    <>
      <PageHero
        label="QUALITY"
        title="Quality & Manufacturing"
        description="Wellshark is committed to quality across its pharmaceutical portfolio, working with established manufacturing partners."
      />

      {/* Quality & Manufacturing intro */}
      <section className="py-20 lg:py-28 bg-white" ref={useScrollReveal()}>
        <div className="container-inner">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            <div className="reveal">
              <SectionHeading
                label="01 — QUALITY & MANUFACTURING"
                title="Quality & Manufacturing"
                description="Wellshark works with established pharmaceutical manufacturing partners. Our manufacturing partners include established pharmaceutical facilities supporting the production of our portfolio. Wellshark does not own or operate manufacturing plants."
              />
            </div>
            <div className="reveal overflow-hidden rounded-2xl">
              <img
                src={sectionImages.quality}
                alt="Pharmaceutical manufacturing facility"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Partners */}
      <section className="py-20 lg:py-28 bg-cool-50" ref={useScrollReveal()}>
        <div className="container-inner">
          <div className="reveal">
            <SectionHeading
              label="02 — MANUFACTURING PARTNERS"
              title="Manufacturing Partners"
              description="Our manufacturing partners include established pharmaceutical facilities supporting the production of our portfolio."
            />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal">
            {[1, 2, 3].map((i) => (
              <PlaceholderImage
                key={i}
                type="manufacturer"
                alt={`Manufacturer ${i} logo`}
                className="aspect-[3/1] w-full rounded-xl"
                label={`Manufacturer logo to be supplied`}
              />
            ))}
          </div>
          
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 lg:py-28 bg-white" ref={useScrollReveal()}>
        <div className="container-inner">
          <div className="reveal max-w-3xl">
            <SectionHeading
              label="03 — QUALITY ASSURANCE"
              title="Quality Assurance"
              description="Wellshark's approach to quality assurance includes working with manufacturing partners who maintain established quality systems, maintaining documentation aligned with pharmaceutical regulatory requirements, and ongoing monitoring of product quality."
            />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3 reveal">
            {[
              {
                title: 'Partner Standards',
                text: 'Wellshark selects manufacturing partners with established quality systems.',
              },
              {
                title: 'Documentation',
                text: 'Wellshark maintains documentation aligned with pharmaceutical regulatory requirements.',
              },
              {
                title: 'Ongoing Monitoring',
                text: 'Wellshark monitors product quality through established processes.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-cool-50 p-8 border border-cool-200/70"
              >
                <h3 className="font-heading text-base font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28 bg-cool-50" ref={useScrollReveal()}>
        <div className="container-inner">
          <div className="reveal">
            <SectionHeading
              label="04 — CERTIFICATIONS"
              title="Certifications"
              description="Verified certifications will be displayed here once the relevant certificates have been verified and supplied."
            />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-xl border border-cool-200 bg-white p-8 text-center"
              >
                <PlaceholderImage
                  type="certification"
                  alt={`Certification ${i}`}
                  className="aspect-[4/3] w-full rounded-lg"
                  label={`Certificate to be supplied`}
                />
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
