import type { Metadata } from "next";
import Image from "next/image";
import * as content from "@content/content/pages/personal-injury-hub";
import { site } from "@content/content/global/site";

import Breadcrumb from "@/components/layout/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd";

import HeroSection from "@/components/sections/HeroSection";
import ConditionsGrid from "@/components/sections/ConditionsGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import RelatedLinks from "@/components/sections/RelatedLinks";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import SectionLabel from "@/components/ui/SectionLabel";
import TreatmentsListSection from "@/components/services/TreatmentsListSection";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  alternates: { canonical: content.seo.canonical },
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    url: content.seo.canonical,
    images: content.seo.ogImage ? [{ url: content.seo.ogImage }] : undefined,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: site.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Personal Injury",
      item: `${site.url}/personal-injury`,
    },
  ],
};

const medicalSpecialtySchema = {
  "@context": "https://schema.org",
  "@type": "MedicalSpecialty",
  name: "Personal Injury Medical Care",
  alternateName: "Auto Accident & PI Medicine",
  description: content.seo.description,
  recognizingAuthority: {
    "@type": "MedicalClinic",
    name: site.name,
    url: site.url,
  },
  relevantSpecialty: [
    "Pain Management",
    "Orthopedics",
    "Physical Therapy",
    "Internal Medicine",
  ],
};

export default function PersonalInjuryHubPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Personal Injury" },
        ]}
      />

      <HeroSection variant="page" {...content.hero} />

      {/* Intro */}
      <section className="py-[100px] px-[5vw] bg-off-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel text="Personal Injury Hub" className="mb-6" />
            <h2
              className="font-serif text-navy mb-6"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
            >
              {content.intro.headline}
            </h2>
            {content.intro.body.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-[17px] leading-relaxed text-grey-700 mb-4 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>
          {content.intro.secondaryImage && (
            <div className="relative h-[400px] overflow-hidden hidden lg:block">
              <Image
                src={content.intro.secondaryImage.src}
                alt={content.intro.secondaryImage.alt}
                fill
                sizes="(max-width: 1024px) 0vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 60%, rgba(200,16,46,0.10) 100%)",
                }}
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </section>

      <TreatmentsListSection
        headline={content.treatments.headline}
        items={content.treatments.items}
      />

      <ConditionsGrid
        headline={content.conditionsTreated.headline}
        conditions={content.conditionsTreated.conditions}
        background="navy"
      />

      <ProcessSteps
        headline={content.process.headline}
        steps={content.process.steps}
      />

      <WhyChooseUs
        headline={content.whyChooseUs.headline}
        features={content.whyChooseUs.features}
      />

      <RelatedLinks
        headline={content.relatedServices.headline}
        items={content.relatedServices.services.map((s) => ({
          name: s.name,
          href: s.href,
        }))}
        columns={3}
      />

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
        variant="red"
      />

      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={medicalSpecialtySchema} />
    </>
  );
}
