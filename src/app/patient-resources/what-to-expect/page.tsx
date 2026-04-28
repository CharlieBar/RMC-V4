import type { Metadata } from "next";
import * as content from "@content/content/pages/what-to-expect";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  alternates: { canonical: content.seo.canonical },
};

export default function WhatToExpectPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Patient Resources", href: "/patient-resources" },
          { label: "What to Expect" },
        ]}
      />

      <HeroSection variant="page" {...content.hero} />

      {/* Intro */}
      <section className="py-[100px] px-[5vw] bg-off-white">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal variant="fade-up">
            <SectionLabel text="Overview" className="mb-6" />
            <h2
              className="font-serif text-navy mb-6 max-w-[640px]"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
            >
              {content.intro.headline}
            </h2>
            <p className="text-[17px] leading-relaxed text-grey-700 max-w-[640px]">
              {content.intro.body}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Before visit */}
      <section className="py-[80px] px-[5vw] border-b border-grey-100">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal variant="fade-up">
            <SectionLabel text="Preparation" className="mb-6" />
            <h2
              className="font-serif text-navy mb-8"
              style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              {content.beforeVisit.headline}
            </h2>
            <ul className="space-y-3 max-w-[680px]">
              {content.beforeVisit.items.map((item, i) => (
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
          </ScrollReveal>
        </div>
      </section>

      {/* During visit — step by step */}
      <section className="py-[80px] px-[5vw] border-b border-grey-100">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal variant="fade-up">
            <SectionLabel text="Your Visit" className="mb-6" />
            <h2
              className="font-serif text-navy mb-12"
              style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              {content.duringVisit.headline}
            </h2>
          </ScrollReveal>
          <div className="space-y-0 max-w-[800px]">
            {content.duringVisit.steps.map((step, i) => (
              <div
                key={step.step}
                className="flex gap-6 pb-10 border-l-2 border-grey-100 pl-6 ml-4 relative"
              >
                {/* Step number dot */}
                <div
                  className="absolute -left-4 top-0 w-8 h-8 bg-red flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-white text-[11px] font-bold">
                    {step.step}
                  </span>
                </div>
                <div className="pt-0.5">
                  <h3 className="font-semibold text-navy text-[16px] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-grey-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After visit */}
      <section className="py-[80px] px-[5vw] bg-off-white">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal variant="fade-up">
            <SectionLabel text="Next Steps" className="mb-6" />
            <h2
              className="font-serif text-navy mb-8"
              style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              {content.afterVisit.headline}
            </h2>
            <ul className="space-y-3 max-w-[680px]">
              {content.afterVisit.items.map((item, i) => (
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
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        headline={content.ctaSection.headline}
        body={content.ctaSection.body}
        primaryCTA={content.ctaSection.primaryCTA}
        secondaryCTA={content.ctaSection.secondaryCTA}
        variant="red"
      />
    </>
  );
}
