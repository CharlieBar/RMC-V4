import type { Metadata } from "next";
import * as content from "@content/content/pages/home";
import { site } from "@content/content/global/site";

// Section components
import HeroSection from "@/components/sections/HeroSection";
import MarqueeBar from "@/components/sections/MarqueeBar";
import ServiceGrid from "@/components/sections/ServiceGrid";
import ConditionsGrid from "@/components/sections/ConditionsGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

// Homepage-specific components
import IntroSection from "@/components/homepage/IntroSection";
import InjurySection from "@/components/homepage/InjurySection";
import BlogPreviewSection from "@/components/homepage/BlogPreviewSection";
import LocationSection from "@/components/homepage/LocationSection";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  alternates: { canonical: content.seo.canonical },
};

const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.coordinates.lat,
    longitude: site.coordinates.lng,
  },
  openingHoursSpecification: site.hours
    .filter((h) => h.hours !== "Closed")
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: "08:00",
      closes: "17:00",
    })),
  medicalSpecialty: site.medicalSpecialties,
};

export default function HomePage() {
  return (
    <>
      <HeroSection
        variant="split"
        {...content.hero}
        stats={content.trustStats}
        specialtyCards={[
          {
            icon: "hard-hat",
            title: "Work Injury",
            description: "Same-day workers' comp care",
          },
          {
            icon: "car",
            title: "Personal Injury",
            description: "Auto accident & injury treatment",
          },
          {
            icon: "activity",
            title: "Pain Management",
            description: "Advanced chronic pain procedures",
          },
          {
            icon: "bone",
            title: "Orthopedics",
            description: "Bone, joint & sports injury care",
          },
        ]}
        bottomCta={{
          label: "OUTPATIENT SURGERY AVAILABLE",
          href: "/services/diagnostic-surgical-services",
        }}
      />

      <MarqueeBar items={site.medicalSpecialties} />

      <InjurySection
        {...content.injurySection}
        cardVisuals={[
          {
            src: "/images/hero/work-injury.png",
            alt: "Workers' compensation evaluation at Rand Medical Center in Arlington Heights, IL",
            badge: "Same-Day · Workers' Comp",
          },
          {
            src: "/images/hero/physician-exam.png",
            alt: "Auto accident injury exam at Rand Medical Center in Arlington Heights, IL",
            badge: "Auto Accident · Personal Injury",
          },
        ]}
      />

      <IntroSection
        headline={content.intro.headline}
        body={content.intro.body}
      />

      <ServiceGrid {...content.servicesSection} />

      <ConditionsGrid {...content.conditionsSection} background="navy" />

      <WhyChooseUs {...content.whyUsSection} />

      <TestimonialsSection {...content.testimonialsSection} />

      <BlogPreviewSection {...content.blogSection} />

      <LocationSection
        {...content.locationSection}
        address={site.address.full}
        phone={site.phone}
        phoneHref={site.phoneLink}
        hours={site.hours}
      />

      <FAQAccordion
        items={content.faqs}
        headline="Frequently Asked Questions"
        eyebrow="FAQ"
      />

      <CTASection
        headline={content.ctaSection.headline}
        subheadline={content.ctaSection.subheadline}
        primaryCTA={content.ctaSection.primaryCTA}
        secondaryCTA={content.ctaSection.secondaryCTA}
        variant="red"
      />

      <JsonLd data={medicalClinicSchema} />
    </>
  );
}
