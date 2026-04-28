import type { Metadata } from "next";
import * as content from "@content/content/pages/patient-portal";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  alternates: { canonical: content.seo.canonical },
};

export default function PatientPortalPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Patient Resources", href: "/patient-resources" },
          { label: "Patient Portal" },
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

      {/* Portal features */}
      <section className="py-[80px] px-[5vw] border-b border-grey-100">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal variant="fade-up">
            <SectionLabel text="Features" className="mb-6" />
            <h2
              className="font-serif text-navy mb-12"
              style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              What You Can Do in the Portal
            </h2>
          </ScrollReveal>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="group relative h-full bg-white border border-grey-100 hover:border-red/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_-24px_rgba(10,22,40,0.18)] overflow-hidden">
                  <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden="true" />
                  <div className="p-6">
                    <h3 className="font-semibold text-navy text-[15px] mb-2 group-hover:text-red transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-[14px] text-grey-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Getting started */}
      <section className="py-[80px] px-[5vw] bg-off-white">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal variant="fade-up">
            <SectionLabel text="Getting Started" className="mb-6" />
            <h2
              className="font-serif text-navy mb-8"
              style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              {content.gettingStarted.headline}
            </h2>
            <ol className="space-y-4 max-w-[640px]">
              {content.gettingStarted.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-7 h-7 bg-red text-white text-[12px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-[15px] text-grey-700 leading-relaxed pt-1">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </section>

      <FAQAccordion
        items={content.faqs}
        headline="Frequently Asked Questions"
        eyebrow="FAQ"
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
