import type { Metadata } from "next";
import Image from "next/image";
import * as content from "@content/content/pages/about-mission";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  alternates: { canonical: content.seo.canonical },
};

export default function AboutMissionPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Mission & Vision" },
        ]}
      />

      <HeroSection variant="page" {...content.hero} />

      {/* Mission */}
      <section className="py-[100px] px-[5vw] bg-off-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Mission" className="mb-6" />
          <h2
            className="font-serif text-navy mb-8 max-w-[640px]"
            style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
          >
            {content.mission.headline}
          </h2>
          <div className="max-w-[720px] space-y-5">
            {content.mission.body.split("\n\n").map((para, i) => (
              <p key={i} className="text-[16px] leading-relaxed text-grey-700">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* State-of-the-art photo */}
      <section className="px-[5vw] bg-off-white pb-[80px]">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal variant="fade-up">
            <div className="relative overflow-hidden rounded-sm">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red to-amber-400 z-10" aria-hidden="true" />
              <Image
                src="/images/facility/imaging.jpg"
                alt="Advanced diagnostic imaging suite at Rand Medical Center in Arlington Heights, IL"
                width={2400}
                height={1350}
                priority={false}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-[420px] lg:h-[560px]"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision */}
      <section className="py-[80px] px-[5vw] border-b border-grey-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-navy p-12 max-w-[800px]">
            <SectionLabel text="Vision" className="mb-6" />
            <h2
              className="font-serif text-white mb-6"
              style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              {content.vision.headline}
            </h2>
            <div className="space-y-5">
              {content.vision.body.split("\n\n").map((para, i) => (
                <p key={i} className="text-white/75 text-[16px] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <WhyChooseUs
        headline={content.principles.headline}
        features={content.principles.items}
      />

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
