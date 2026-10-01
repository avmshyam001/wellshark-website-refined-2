import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import SectionHeading from '@/components/SectionHeading';
import BrandCarousel from '@/components/BrandCarousel';
import TherapeuticAreaCard from '@/components/TherapeuticAreaCard';
import EnquiryForm from '@/components/EnquiryForm';
import PresenceMap from '@/components/PresenceMap';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { products, therapeuticAreas, sectionImages } from '@/data/siteData';

export default function Home() {
  const featuredBrands = products.slice(0, 8);
  const whyWellshark = [
    {
      title: 'Focused Expertise',
      text: 'A focused specialty pharmaceutical portfolio built around selected therapeutic areas and long-standing market experience.',
    },
    {
      title: 'Quality',
      text: 'A quality-focused approach supported by established pharmaceutical manufacturing partners and appropriate quality systems.',
    },
    {
      title: 'Strong Portfolio',
      text: 'A focused portfolio of specialty pharmaceutical brands across multiple therapeutic areas.',
    },
    {
      title: 'Market Reach',
      text: 'A strong foundation in South India with experience across multiple markets and an ongoing expansion of reach.',
    },
  ];

  return (
    <>
      <HeroCarousel />

      {/* About Wellshark */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-inner" ref={useScrollReveal()}>
          <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-center">
            <div className="reveal">
              <SectionHeading
                label="ABOUT WELLSHARK"
                title="About Wellshark"
                description="An established pharmaceutical marketing company with 10 years of operating experience, focused on specialty pharmaceuticals and a focused therapeutic portfolio."
              />
              <Link
                to="/about"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:gap-2.5 transition-all duration-200"
              >
                Know More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="reveal overflow-hidden rounded-2xl">
              <img
                src={sectionImages.about}
                alt="Wellshark pharmaceutical team"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="py-16 lg:py-24 bg-cool-50">
        <div className="container-inner" ref={useScrollReveal()}>
          <div className="reveal">
            <SectionHeading
              label="FEATURED BRANDS"
              title="Featured Brands"
              description="A focused portfolio of specialty pharmaceutical brands."
            />
          </div>
          <div className="mt-10 reveal">
            <BrandCarousel products={featuredBrands} />
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-inner" ref={useScrollReveal()}>
          <div className="reveal">
            <SectionHeading
              label="THERAPEUTIC EXPERTISE"
              title="Therapeutic Areas"
              description="Focused expertise across key therapeutic areas."
            />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal">
            {therapeuticAreas.map((area) => (
              <TherapeuticAreaCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Wellshark */}
      <section className="py-16 lg:py-20 bg-cool-50">
        <div className="container-inner" ref={useScrollReveal()}>
          <div className="reveal">
            <SectionHeading
              label="OUR STRENGTHS"
              title="Why Wellshark"
              align="center"
              className="mb-10"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyWellshark.map((item, i) => (
              <div
                key={item.title}
                className="reveal rounded-xl bg-white p-6 lg:p-7 border border-cool-200/70"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center mb-4">
                  <span className="font-heading text-sm font-bold text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-heading text-base lg:text-lg font-bold text-navy-900">
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

      {/* Quality & Manufacturing */}
      <section className="py-16 lg:py-24 bg-navy-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 70% 30%, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />
        <div className="container-inner relative" ref={useScrollReveal()}>
          <div className="grid gap-10 lg:gap-14 lg:grid-cols-2 items-center">
            <div className="reveal">
              <SectionHeading
                label="QUALITY & MANUFACTURING"
                title="Quality & Manufacturing"
                description="Wellshark works with established pharmaceutical manufacturing partners to support its product portfolio. Our manufacturing partners include established pharmaceutical facilities supporting the production of our portfolio."
                light
              />
              <Link
                to="/quality"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 hover:gap-2.5 transition-all duration-200"
              >
                Our Quality Standards
                <ArrowRight className="h-4 w-4" />
              </Link>
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

      {/* Our Presence */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-inner" ref={useScrollReveal()}>
          <div className="reveal max-w-2xl">
            <SectionHeading
              label="OUR PRESENCE"
              title="Our Presence"
              description="From regional expertise to a growing national presence."
            />
            <p className="mt-4 text-base text-charcoal/70 leading-relaxed">
              Wellshark has built its foundation in South India, with experience across
              multiple markets over the years. Today, we continue to strengthen our presence
              while expanding our reach across India.
            </p>
          </div>
          <div className="mt-10 reveal">
            <PresenceMap />
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-16 lg:py-24 bg-cool-50">
        <div className="container-inner" ref={useScrollReveal()}>
          <div className="grid gap-10 lg:gap-14 lg:grid-cols-2">
            <div className="reveal">
              <SectionHeading
                label="CONTACT"
                title="Get in Touch"
                description="For product information, availability or any other enquiry, please get in touch with us."
              />
            </div>
            <div className="reveal lg:bg-white lg:p-8 lg:rounded-2xl lg:border lg:border-cool-200/70">
              <EnquiryForm title="Send Enquiry" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
