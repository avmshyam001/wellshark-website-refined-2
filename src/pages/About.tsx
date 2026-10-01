import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import Timeline from '@/components/Timeline';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { journeyTimeline, siteConfig, sectionImages } from '@/data/siteData';

export default function About() {
  return (
    <>
      <PageHero
        label="ABOUT WELLSHARK"
        title="About Wellshark"
        description="An established pharmaceutical marketing company with 10 years of operating experience, focused on specialty pharmaceuticals."
      />

      {/* About Wellshark */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-inner" ref={useScrollReveal()}>
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            <div className="reveal">
              <SectionHeading
                label="ESTABLISHED 2016"
                title="About Wellshark"
                description="Wellshark Pharmaceuticals Pvt Ltd is an established pharmaceutical marketing company with 10 years of operating experience. Founded in 2016, the company has built its foundation in specialty pharmaceuticals, with strong knowledge of pharmaceutical sales and marketing and a focused therapeutic portfolio."
              />
            </div>
            <div className="reveal overflow-hidden rounded-2xl">
              <img
                src={sectionImages.aboutPage}
                alt="Wellshark corporate office"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 lg:py-28 bg-cool-50">
        <div className="container-inner" ref={useScrollReveal()}>
          <div className="reveal">
            <SectionHeading
              label="OUR JOURNEY"
              title="Our Journey"
              description="A decade of building pharmaceutical expertise."
              align="center"
              className="mb-16"
            />
          </div>
          <div className="reveal max-w-4xl mx-auto">
            <Timeline items={journeyTimeline} />
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-inner" ref={useScrollReveal()}>
          <div className="reveal max-w-3xl">
            <SectionHeading
              label="OUR FOCUS"
              title="Our Focus"
              description="Wellshark focuses on specialty pharmaceuticals and selected therapeutic areas. The company's portfolio is built on deep knowledge of pharmaceutical sales and marketing, with a focused approach to specific therapeutic segments."
            />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal">
            {['Urology', 'Gynecology', 'Nephrology', 'Diabetology', 'Dental', 'ENT'].map((area) => (
              <Link
                key={area}
                to={`/therapeutic-areas/${area.toLowerCase()}`}
                className="group rounded-xl bg-cool-50 p-8 border border-cool-200/70 hover:border-blue-300 hover:bg-white transition-all duration-200"
              >
                <h3 className="font-heading text-lg font-bold text-navy-900">{area}</h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all duration-200">
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experienced Leadership */}
      <section className="py-20 lg:py-28 bg-cool-50">
        <div className="container-inner" ref={useScrollReveal()}>
          <div className="reveal max-w-3xl mx-auto text-center">
            <SectionHeading
              label="LEADERSHIP"
              title="Experienced Leadership"
              align="center"
            />
            <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
              Wellshark is led by a capable leadership team with extensive knowledge and
              experience across pharmaceutical operations, sales and marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 lg:py-28 bg-navy-900 text-white">
        <div className="container-inner" ref={useScrollReveal()}>
          <div className="reveal max-w-3xl mx-auto text-center">
            <SectionHeading
              label="LOOKING AHEAD"
              title="Our Vision"
              description="Building on a strong foundation to expand our therapeutic portfolio and strengthen our presence across India."
              light
              align="center"
            />
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-white/90 transition-all duration-200 hover:gap-3"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
