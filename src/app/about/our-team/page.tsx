import type { Metadata } from "next";
import Image from "next/image";
import * as content from "@content/content/pages/about-team";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  alternates: { canonical: content.seo.canonical },
};

export default function OurTeamPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Our Team" },
        ]}
      />

      <HeroSection variant="page" {...content.hero} />

      {/* Intro */}
      <section className="py-[100px] px-[5vw] bg-off-white">
        <div className="max-w-[1400px] mx-auto max-w-[760px]">
          <SectionLabel text="Our Team" className="mb-6" />
          <h2
            className="font-serif text-navy mb-8"
            style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
          >
            {content.intro.headline}
          </h2>
          <div className="space-y-5 max-w-[720px]">
            {content.intro.body.split("\n\n").map((para, i) => (
              <p key={i} className="text-[16px] leading-relaxed text-grey-700">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical environment photo */}
      <section className="px-[5vw] bg-off-white pb-[80px]">
        <div className="max-w-[1400px] mx-auto">
          <ScrollReveal variant="fade-up">
            <div className="relative overflow-hidden rounded-sm">
              <span className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red to-amber-400 z-10" aria-hidden="true" />
              <Image
                src="/images/facility/surgery-center.jpg"
                alt="Outpatient surgery center at Rand Medical Center in Arlington Heights, IL"
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

      {/* Team grid */}
      <section className="py-[80px] px-[5vw]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.team.map((member, i) => (
              <article key={i} className="border border-grey-100 overflow-hidden">
                <div className="relative w-full aspect-square overflow-hidden bg-grey-100">
                  {member.image ? (
                    <Image
                      src={member.image.src}
                      alt={member.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" aria-hidden="true">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-grey-300">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl text-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red text-[13px] font-semibold uppercase tracking-wide mb-3">
                    {member.role}
                  </p>

                  {member.credentials && (
                    <span className="inline-block bg-off-white text-grey-700 text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 mb-3">
                      {member.credentials}
                    </span>
                  )}

                  <p className="text-[14px] text-grey-700 leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {member.specialties && member.specialties.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="bg-grey-100 text-grey-700 text-[11px] font-medium px-2 py-0.5"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-[80px] px-[5vw] bg-off-white border-t border-grey-100">
        <div className="max-w-[1400px] mx-auto">
          <SectionLabel text="Departments" className="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-grey-100">
            {content.departments.map((dept) => (
              <div key={dept.name} className="bg-white p-8">
                <h3 className="font-semibold text-navy text-[15px] mb-3">
                  {dept.name}
                </h3>
                <p className="text-[14px] text-grey-700 leading-relaxed">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
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
