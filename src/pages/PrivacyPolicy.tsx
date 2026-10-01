import PageHero from '@/components/PageHero';

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero label="LEGAL" title="Privacy Policy" />
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-inner max-w-3xl">
          <p className="text-sm text-charcoal/40 mb-8">
            This privacy policy is a template. Content to be updated with verified legal content reviewed by qualified counsel.
          </p>
          <div className="space-y-8">
            <section>
              <h2 className="font-heading text-xl font-bold text-navy-900">
                1. Introduction
              </h2>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                Wellshark Pharmaceuticals Pvt Ltd respects your privacy and is committed to protecting your personal data.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold text-navy-900">
                2. Information We Collect
              </h2>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                Content to be updated.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold text-navy-900">
                3. How We Use Your Information
              </h2>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                Content to be updated.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold text-navy-900">
                4. Data Protection
              </h2>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                Content to be updated.
              </p>
            </section>
            <section>
              <h2 className="font-heading text-xl font-bold text-navy-900">
                5. Contact
              </h2>
              <p className="mt-3 text-charcoal/70 leading-relaxed">
                For privacy-related enquiries, please contact Wellshark Pharmaceuticals Pvt Ltd. Contact details to be updated.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
