import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ServicePillarContent } from "@content/types/content";
import { PILLAR_SLUGS } from "@/lib/service-map";
import { slugToTitle } from "@/lib/utils";

// Layout/SEO components
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd";

// Section components
import HeroSection from "@/components/sections/HeroSection";
import ConditionsGrid from "@/components/sections/ConditionsGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import RelatedLinks from "@/components/sections/RelatedLinks";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import SectionLabel from "@/components/ui/SectionLabel";
import TreatmentsListSection from "@/components/services/TreatmentsListSection";
import ScrollReveal from "@/components/animations/ScrollReveal";

// ─── Static import map (no template literals in import paths) ────────────────

const pillarImports: Record<string, () => Promise<ServicePillarContent>> = {
  'pain-management': () =>
    import('@content/content/services/pain-management/index').then((m) => ({
      seo: m.seo,
      hero: m.hero,
      intro: m.intro,
      conditionsTreated: m.conditionsTreated,
      treatments: m.treatments,
      approach: m.approach,
      process: m.process,
      whyChooseUs: m.whyChooseUs,
      relatedServices: m.relatedServices,
      relatedBlogPosts: m.relatedBlogPosts,
      ctaSection: m.ctaSection,
      faqs: m.faqs,
    })),
  'orthopedics': () =>
    import('@content/content/services/orthopedics/index').then((m) => ({
      seo: m.seo,
      hero: m.hero,
      intro: m.intro,
      conditionsTreated: m.conditionsTreated,
      treatments: m.treatments,
      approach: m.approach,
      process: m.process,
      whyChooseUs: m.whyChooseUs,
      relatedServices: m.relatedServices,
      relatedBlogPosts: m.relatedBlogPosts,
      ctaSection: m.ctaSection,
      faqs: m.faqs,
    })),
  'physical-therapy': () =>
    import('@content/content/services/physical-therapy/index').then((m) => ({
      seo: m.seo,
      hero: m.hero,
      intro: m.intro,
      conditionsTreated: m.conditionsTreated,
      treatments: m.treatments,
      approach: m.approach,
      process: m.process,
      whyChooseUs: m.whyChooseUs,
      relatedServices: m.relatedServices,
      relatedBlogPosts: m.relatedBlogPosts,
      ctaSection: m.ctaSection,
      faqs: m.faqs,
    })),
  'immediate-care': () =>
    import('@content/content/services/immediate-care/index').then((m) => ({
      seo: m.seo,
      hero: m.hero,
      intro: m.intro,
      conditionsTreated: m.conditionsTreated,
      treatments: m.treatments,
      approach: { headline: '', body: '' },
      process: m.process,
      whyChooseUs: m.whyChooseUs,
      relatedServices: m.relatedServices,
      relatedBlogPosts: { headline: '', posts: [] },
      ctaSection: m.ctaSection,
      faqs: m.faqs,
    } as ServicePillarContent)),
  'internal-medicine': () =>
    import('@content/content/services/internal-medicine/index').then((m) => ({
      seo: m.seo,
      hero: m.hero,
      intro: m.intro,
      conditionsTreated: { headline: '', body: undefined, conditions: [] },
      treatments: m.treatments,
      approach: { headline: '', body: '' },
      process: m.process,
      whyChooseUs: m.whyChooseUs,
      relatedServices: m.relatedServices,
      relatedBlogPosts: { headline: '', posts: [] },
      ctaSection: m.ctaSection,
      faqs: m.faqs,
    } as ServicePillarContent)),
  'injury-services': () =>
    import('@content/content/services/injury-services/index').then((m) => ({
      seo: m.seo,
      hero: m.hero,
      intro: m.intro,
      conditionsTreated: m.conditionsTreated,
      treatments: m.treatments,
      approach: m.approach,
      process: { headline: '', steps: [] },
      whyChooseUs: m.whyChooseUs,
      relatedServices: m.relatedServices,
      relatedBlogPosts: m.relatedBlogPosts,
      ctaSection: m.ctaSection,
      faqs: m.faqs,
    } as ServicePillarContent)),
  'diagnostic-surgical-services': () =>
    import('@content/content/services/diagnostic-surgical-services/index').then((m) => ({
      seo: m.seo,
      hero: m.hero,
      intro: m.intro,
      conditionsTreated: { headline: '', body: undefined, conditions: [] },
      treatments: m.treatments,
      approach: { headline: '', body: '' },
      process: { headline: '', steps: [] },
      whyChooseUs: m.whyChooseUs,
      relatedServices: m.relatedServices,
      relatedBlogPosts: { headline: '', posts: [] },
      ctaSection: m.ctaSection,
      faqs: m.faqs,
    } as ServicePillarContent)),
};

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return PILLAR_SLUGS.map((pillar) => ({ pillar }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pillar: string }>;
}): Promise<Metadata> {
  const { pillar } = await params;
  const loader = pillarImports[pillar];
  if (!loader) return {};
  const content = await loader();
  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
    alternates: { canonical: content.seo.canonical },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ServicePillarPage({
  params,
}: {
  params: Promise<{ pillar: string }>;
}) {
  const { pillar } = await params;
  const loader = pillarImports[pillar];
  if (!loader) notFound();

  const content = await loader();

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: content.hero.headline,
    description: content.seo.description,
    provider: {
      "@type": "MedicalClinic",
      name: "Rand Medical Center",
      url: "https://www.randmedicalcenter.com",
      telephone: "(224) 735-3522",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1802 N Arlington Heights Rd",
        addressLocality: "Arlington Heights",
        addressRegion: "IL",
        postalCode: "60004",
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: slugToTitle(pillar) },
        ]}
      />

      <HeroSection variant="page" {...content.hero} />

      {/* Intro */}
      <section className="py-[100px] px-[5vw] bg-off-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant="fade-up">
            <div className="border-l-2 border-red/40 pl-8 py-2">
              <SectionLabel text="About This Service" className="mb-6" />
              <h2 className="font-serif text-navy text-[clamp(32px,3.5vw,48px)] mb-6">
                {content.intro.headline}
              </h2>
              <p className="text-[17px] leading-relaxed text-grey-700">
                {content.intro.body}
              </p>
            </div>
          </ScrollReveal>
          {content.intro.secondaryImage && (
            <ScrollReveal variant="fade-left" delay={0.15} className="hidden lg:block">
              <div className="relative h-[420px] overflow-hidden rounded-sm group">
                <Image
                  src={content.intro.secondaryImage.src}
                  alt={content.intro.secondaryImage.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 1024px) 0vw, 50vw"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {content.conditionsTreated.conditions.length > 0 && (
        <ConditionsGrid
          headline={content.conditionsTreated.headline}
          subheadline={content.conditionsTreated.body}
          conditions={content.conditionsTreated.conditions}
          background="navy"
        />
      )}

      <TreatmentsListSection
        headline={content.treatments.headline}
        body={content.treatments.body}
        items={content.treatments.items}
      />

      {content.process.steps.length > 0 && (
        <ProcessSteps
          headline={content.process.headline}
          steps={content.process.steps}
        />
      )}

      <WhyChooseUs
        headline={content.whyChooseUs.headline}
        features={content.whyChooseUs.features}
      />

      <RelatedLinks
        headline={content.relatedServices.headline}
        items={content.relatedServices.services.map((s) => ({
          name: s.name,
          href: s.href,
          description: s.description,
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

      <JsonLd data={schema} />
    </>
  );
}
