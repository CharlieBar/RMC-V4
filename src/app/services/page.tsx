import type { Metadata } from "next";
import Link from "next/link";
import * as content from "@content/content/hubs/services-index";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  alternates: { canonical: content.seo.canonical },
};

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <HeroSection
        variant="page"
        {...content.hero}
      />

      {/* Intro */}
      <section className="py-[100px] px-[5vw] bg-off-white">
        <div className="max-w-[760px]">
          <ScrollReveal variant="fade-up">
            <SectionLabel text="Overview" className="mb-6" />
            <h2 className="font-serif text-navy text-[clamp(32px,3.5vw,48px)] mb-6">
              {content.intro.headline}
            </h2>
            <p className="text-[17px] leading-relaxed text-grey-700 max-w-[640px]">
              {content.intro.body}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service categories */}
      {content.categories.map((category) => (
        <section key={category.id} className="py-[80px] px-[5vw] border-b border-grey-100">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal variant="fade-up">
              <SectionLabel text={category.name} className="mb-4" />
              {category.description && (
                <p className="text-base text-grey-500 max-w-[600px] mb-10">
                  {category.description}
                </p>
              )}
            </ScrollReveal>

            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {category.items.map((item) => (
                <StaggerItem key={item.slug}>
                  <Link
                    href={item.href}
                    className="group relative flex flex-col h-full bg-white border border-grey-100 hover:border-red/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_-24px_rgba(10,22,40,0.18)] overflow-hidden"
                  >
                    {/* Top accent bar */}
                    <span
                      className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      aria-hidden="true"
                    />
                    <div className="p-7 flex flex-col h-full">
                      {/* Icon bubble */}
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-red/10 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white mb-5">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </span>
                      <h3 className="font-serif text-navy text-[18px] leading-snug mb-2 transition-colors duration-300 group-hover:text-red">
                        {item.name}
                      </h3>
                      <p className="text-[14px] text-grey-500 leading-relaxed flex-1">
                        {item.tagline}
                      </p>
                      <span
                        className="mt-5 text-[11px] font-bold uppercase tracking-wider text-navy group-hover:text-red flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300"
                        aria-hidden="true"
                      >
                        Learn more
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
      ))}

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
