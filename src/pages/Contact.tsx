import { MapPin, Phone, Mail } from 'lucide-react';
import PageHero from '@/components/PageHero';
import EnquiryForm from '@/components/EnquiryForm';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { siteConfig } from '@/data/siteData';

export default function Contact() {
  return (
    <>
      <PageHero
        label="CONTACT"
        title="Get in Touch"
        description="For product information, availability or any other enquiry, please get in touch with us."
      />

      <section className="py-20 lg:py-28 bg-white" ref={useScrollReveal()}>
        <div className="container-inner">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — Company info */}
            <div className="reveal">
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">
                Company Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal/40">
                      Address
                    </h3>
                    <p className="mt-1 text-base text-charcoal/80 leading-relaxed">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal/40">
                      Phone
                    </h3>
                    <p className="mt-1 text-base text-charcoal/80">
                      {siteConfig.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal/40">
                      Email
                    </h3>
                    <p className="mt-1 text-base text-charcoal/80">
                      {siteConfig.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal/40 mb-3">
                  Location
                </h3>
                <div className="rounded-xl overflow-hidden border border-cool-200">
                  <div className="aspect-[16/10] bg-cool-100 flex items-center justify-center">
                    <p className="text-sm text-charcoal/40">
                      [MAP LOCATION PLACEHOLDER — Google Maps embed to be added with
                      verified address.]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Enquiry form */}
            <div className="reveal lg:bg-cool-50 lg:p-8 lg:rounded-2xl">
              <EnquiryForm title="General Enquiry" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
