import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import CareerForm from '@/components/CareerForm';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Careers() {
  return (
    <>
      <PageHero
        label="CAREERS"
        title="Careers at Wellshark"
        description="Wellshark welcomes applications from professionals with experience in pharmaceutical sales, marketing, and operations."
      />

      <section className="py-20 lg:py-28 bg-white" ref={useScrollReveal()}>
        <div className="container-inner">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="reveal">
              <SectionHeading
                label="WORK WITH US"
                title="Work With Us"
                description="Wellshark welcomes applications from professionals with experience in pharmaceutical sales, marketing, and operations. Submit an open application below and we will get in touch if there is a match."
              />
              <div className="mt-8 space-y-4">
                <p className="text-base leading-relaxed text-charcoal/70">
                  We are always interested in hearing from capable individuals who align
                  with Wellshark’s focus on specialty pharmaceuticals.
                </p>
                <p className="text-base leading-relaxed text-charcoal/70">
                  Please submit your details and resume using the form. We will reach out
                  if a suitable opportunity arises.
                </p>
              </div>
            </div>

            <div className="reveal lg:bg-cool-50 lg:p-8 lg:rounded-2xl">
              <CareerForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
