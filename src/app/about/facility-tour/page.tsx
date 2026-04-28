import type { Metadata } from "next";
import Image from "next/image";
import * as content from "@content/content/pages/about-facility";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  alternates: { canonical: content.seo.canonical },
};

export default function FacilityTourPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Facility Tour" },
        ]}
      />

      <HeroSection variant="page" {...content.hero} />

      {/* Intro */}
      <section className="py-[100px] px-[5vw] bg-off-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Our Facility" className="mb-6" />
          <h2
            className="font-serif text-navy mb-8 max-w-[640px]"
            style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
          >
            {content.intro.headline}
          </h2>
          <div className="max-w-[720px] space-y-5">
            {content.intro.body.split("\n\n").map((para, i) => (
              <p key={i} className="text-[16px] leading-relaxed text-grey-700">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Facility areas */}
      <section className="py-[80px] px-[5vw]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-grey-100">
            {content.facilityAreas.map((area) => (
              <div key={area.id} className="bg-white group">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={area.image.src}
                    alt={area.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority={false}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-navy text-[16px] mb-3">
                    {area.name}
                  </h3>
                  <p className="text-[14px] text-grey-700 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="py-[80px] px-[5vw] bg-off-white border-t border-grey-100">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Access" className="mb-6" />
          <h2
            className="font-serif text-navy mb-8"
            style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
          >
            {content.accessibility.headline}
          </h2>
          <ul className="space-y-3 max-w-[600px]">
            {content.accessibility.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full bg-red shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[15px] text-grey-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        headline={content.ctaSection.headline}
        body={content.ctaSection.body}
        primaryCTA={content.ctaSection.primaryCTA}
        secondaryCTA={content.ctaSection.secondaryCTA}
        variant="navy"
      />
    </>
  );
}
