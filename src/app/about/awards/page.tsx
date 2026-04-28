import type { Metadata } from "next";
import Image from "next/image";
import * as content from "@content/content/pages/about-awards";
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

export default function AwardsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Awards & Accreditations" },
        ]}
      />

      <HeroSection variant="page" {...content.hero} />

      {/* Intro */}
      <section className="py-[100px] px-[5vw] bg-off-white">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Standards" className="mb-6" />
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

      {/* Accreditations */}
      <section className="py-[80px] px-[5vw]">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Accreditations" className="mb-6" />
          <h2
            className="font-serif text-navy mb-12"
            style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
          >
            {content.accreditations.headline}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-grey-100">
            {content.accreditations.items.map((item, i) => (
              <div key={i} className="bg-white p-8">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-red flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-[16px] mb-2">
                      {item.name}
                    </h3>
                    <p className="text-[14px] text-grey-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility photo */}
      <section className="px-[5vw] pb-[80px]">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal variant="fade-up">
            <div className="relative overflow-hidden rounded-sm">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red to-amber-400 z-10" aria-hidden="true" />
              <Image
                src="/images/facility/pt-gym.jpg"
                alt="Fully equipped physical therapy gym at Rand Medical Center in Arlington Heights, IL"
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

      {/* Quality commitments */}
      <section className="py-[80px] px-[5vw] bg-off-white border-t border-grey-100">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Commitments" className="mb-6" />
          <h2
            className="font-serif text-navy mb-8"
            style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
          >
            {content.qualityCommitments.headline}
          </h2>
          <ul className="space-y-3 max-w-[680px]">
            {content.qualityCommitments.items.map((item, i) => (
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
        variant="red"
      />
    </>
  );
}
