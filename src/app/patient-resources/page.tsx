import type { Metadata } from "next";
import Link from "next/link";
import * as content from "@content/content/pages/patient-resources-index";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  alternates: { canonical: content.seo.canonical },
};

export default function PatientResourcesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Patient Resources" },
        ]}
      />

      <HeroSection variant="page" {...content.hero} />

      {/* Intro */}
      <section className="py-[100px] px-[5vw] bg-off-white">
        <div className="max-w-[1400px] mx-auto">
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
        </div>
      </section>

      {/* Resource cards */}
      <section className="py-[80px] px-[5vw]">
        <div className="max-w-[1400px] mx-auto">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.resourceCards.map((card) => (
              <StaggerItem key={card.href}>
                <Link
                  href={card.href}
                  className="group relative h-full bg-white border border-grey-100 hover:border-red/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_-24px_rgba(10,22,40,0.18)] overflow-hidden flex flex-col"
                >
                  <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden="true" />
                  <div className="p-8 flex flex-col h-full">
                    <h3 className="font-serif text-navy text-[18px] leading-snug mb-3 group-hover:text-red transition-colors duration-200">
                      {card.title}
                    </h3>
                    <p className="text-[14px] text-grey-700 leading-relaxed mb-4 flex-1">
                      {card.description}
                    </p>
                    <span
                      className="text-[12px] font-bold uppercase tracking-wide text-red flex items-center gap-1 mt-auto"
                      aria-hidden="true"
                    >
                      Learn More
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
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
