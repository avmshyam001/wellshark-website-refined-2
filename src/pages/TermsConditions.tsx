import PageHero from '@/components/PageHero';

export default function TermsConditions() {
  return (
    <>
      <PageHero label="LEGAL" title="Terms & Conditions" />
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-inner max-w-3xl">
          <p className="text-sm text-charcoal/40 mb-8">
            These terms and conditions are a template. Content to be updated with verified legal content reviewed by qualified counsel.
          </p>
          <div className="space-y-8">
            <section>
              <h2 className="font-heading text-xl font-bold text-navy-900">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                By accessing this website, you agree to these terms and conditions.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold text-navy-900">
                2. Use of Website
              </h2>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                Content to be updated.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold text-navy-900">
                3. Intellectual Property
              </h2>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                All content on this website is the property of Wellshark Pharmaceuticals Pvt Ltd.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold text-navy-900">
                4. Product Information
              </h2>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                Product information displayed on this website is for informational purposes.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold text-navy-900">
                5. Contact
              </h2>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                For terms-related enquiries, please contact Wellshark Pharmaceuticals Pvt Ltd. Contact details to be updated.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
