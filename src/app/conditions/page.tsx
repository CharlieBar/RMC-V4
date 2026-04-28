import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import * as content from "@content/content/hubs/conditions-index";

import Breadcrumb from "@/components/layout/Breadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  alternates: { canonical: content.seo.canonical },
};

export default function ConditionsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Conditions" },
        ]}
      />

      <HeroSection variant="page" {...content.hero} />

      {/* Intro */}
      <section className="py-16 px-[5vw]">
        <div className="max-w-[1400px] mx-auto">
          <h2
            className="font-serif text-navy mb-4 max-w-[640px]"
            style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
          >
            {content.intro.headline}
          </h2>
          <p className="text-[16px] text-grey-700 leading-relaxed max-w-[640px]">
            {content.intro.body}
          </p>
        </div>
      </section>

      {/* Category sections */}
      {content.categories.map((category) => (
        <section
          key={category.id}
          className="py-16 px-[5vw] border-t border-grey-100"
        >
          <div className="max-w-[1400px] mx-auto">
            {category.image && (
              <div className="relative w-full h-[200px] mb-8 overflow-hidden">
                <Image
                  src={category.image.src}
                  alt={category.image.alt}
                  fill
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy/40" />
                <div className="absolute inset-0 flex items-center px-[5vw]">
                  <h2 className="font-serif text-white text-shadow" style={{ fontSize: "clamp(24px, 3vw, 40px)" }}>
                    {category.name}
                  </h2>
                </div>
              </div>
            )}
            {!category.image && <SectionLabel text={category.name} className="mb-4" />}
            <div className="flex items-end justify-between gap-8 mb-8 flex-wrap">
              <p
                className="font-serif text-navy max-w-[560px]"
                style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
              >
                {category.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {category.items.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href}
                  className="border border-grey-100 p-5 hover:border-grey-300 hover:-translate-y-0.5 transition-all duration-200 group block"
                >
                  <div className="h-0.5 bg-red mb-4 w-8" aria-hidden="true" />
                  <h3 className="font-semibold text-navy text-[15px] mb-1 group-hover:text-red transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-xs text-grey-500 leading-relaxed">
                    {item.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

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
