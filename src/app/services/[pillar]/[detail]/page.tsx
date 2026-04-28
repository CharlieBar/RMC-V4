import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ServiceDetailContent } from "@content/types/content";
import { DETAIL_MAP } from "@/lib/service-map";
import { slugToTitle } from "@/lib/utils";

// Layout/SEO components
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
import OverviewSection from "@/components/services/OverviewSection";
import BenefitsSection from "@/components/services/BenefitsSection";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Workflow, ListChecks, AlertTriangle } from "lucide-react";

// ─── Helper to normalise partial module exports into ServiceDetailContent ─────
// Many detail files only export seo/hero/overview/whyChooseUs/ctaSection/faqs.
// Undefined optional fields are set to null; JSX guards against them below.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeDetail(m: Record<string, any>): ServiceDetailContent {
  return {
    seo: m.seo,
    hero: m.hero,
    overview: m.overview ?? { headline: '', body: '' },
    howItWorks: m.howItWorks ?? null,
    conditionsTreated: m.conditionsTreated ?? null,
    benefits: m.benefits ?? null,
    whatToExpect: m.whatToExpect ?? null,
    risks: m.risks ?? null,
    whyChooseUs: m.whyChooseUs,
    relatedTreatments: m.relatedTreatments ?? null,
    ctaSection: m.ctaSection,
    faqs: m.faqs ?? [],
  } as unknown as ServiceDetailContent;
}

// ─── Static import map (all entries explicitly — no template literals) ────────

const detailImports: Record<string, () => Promise<ServiceDetailContent>> = {
  // pain-management (13)
  'pain-management/epidural-steroid-injections': () =>
    import('@content/content/services/pain-management/epidural-steroid-injections').then(normalizeDetail),
  'pain-management/facet-joint-blocks': () =>
    import('@content/content/services/pain-management/facet-joint-blocks').then(normalizeDetail),
  'pain-management/nerve-blocks': () =>
    import('@content/content/services/pain-management/nerve-blocks').then(normalizeDetail),
  'pain-management/trigger-point-injections': () =>
    import('@content/content/services/pain-management/trigger-point-injections').then(normalizeDetail),
  'pain-management/radiofrequency-ablation': () =>
    import('@content/content/services/pain-management/radiofrequency-ablation').then(normalizeDetail),
  'pain-management/joint-injections': () =>
    import('@content/content/services/pain-management/joint-injections').then(normalizeDetail),
  'pain-management/bursa-injections': () =>
    import('@content/content/services/pain-management/bursa-injections').then(normalizeDetail),
  'pain-management/sacroiliac-joint-injections': () =>
    import('@content/content/services/pain-management/sacroiliac-joint-injections').then(normalizeDetail),
  'pain-management/spinal-cord-stimulation': () =>
    import('@content/content/services/pain-management/spinal-cord-stimulation').then(normalizeDetail),
  'pain-management/transforaminal-epidural-injections': () =>
    import('@content/content/services/pain-management/transforaminal-epidural-injections').then(normalizeDetail),
  'pain-management/selective-nerve-root-blocks': () =>
    import('@content/content/services/pain-management/selective-nerve-root-blocks').then(normalizeDetail),
  'pain-management/intercostal-nerve-blocks': () =>
    import('@content/content/services/pain-management/intercostal-nerve-blocks').then(normalizeDetail),
  'pain-management/stellate-ganglion-block': () =>
    import('@content/content/services/pain-management/stellate-ganglion-block').then(normalizeDetail),

  // orthopedics (6)
  'orthopedics/joint-replacement': () =>
    import('@content/content/services/orthopedics/joint-replacement').then(normalizeDetail),
  'orthopedics/spine-surgery': () =>
    import('@content/content/services/orthopedics/spine-surgery').then(normalizeDetail),
  'orthopedics/fracture-care': () =>
    import('@content/content/services/orthopedics/fracture-care').then(normalizeDetail),
  'orthopedics/sports-medicine': () =>
    import('@content/content/services/orthopedics/sports-medicine').then(normalizeDetail),
  'orthopedics/arthroscopic-surgery': () =>
    import('@content/content/services/orthopedics/arthroscopic-surgery').then(normalizeDetail),
  'orthopedics/fracture-clinic': () =>
    import('@content/content/services/orthopedics/fracture-clinic').then(normalizeDetail),

  // physical-therapy (6)
  'physical-therapy/orthopedic-rehab': () =>
    import('@content/content/services/physical-therapy/orthopedic-rehab').then(normalizeDetail),
  'physical-therapy/work-injury-rehab': () =>
    import('@content/content/services/physical-therapy/work-injury-rehab').then(normalizeDetail),
  'physical-therapy/auto-injury-rehab': () =>
    import('@content/content/services/physical-therapy/auto-injury-rehab').then(normalizeDetail),
  'physical-therapy/post-surgical-rehab': () =>
    import('@content/content/services/physical-therapy/post-surgical-rehab').then(normalizeDetail),
  'physical-therapy/sports-rehab': () =>
    import('@content/content/services/physical-therapy/sports-rehab').then(normalizeDetail),
  'physical-therapy/balance-and-strength-programs': () =>
    import('@content/content/services/physical-therapy/balance-and-strength-programs').then(normalizeDetail),

  // immediate-care (5)
  'immediate-care/walk-in-clinic': () =>
    import('@content/content/services/immediate-care/walk-in-clinic').then(normalizeDetail),
  'immediate-care/minor-injuries': () =>
    import('@content/content/services/immediate-care/minor-injuries').then(normalizeDetail),
  'immediate-care/minor-illnesses': () =>
    import('@content/content/services/immediate-care/minor-illnesses').then(normalizeDetail),
  'immediate-care/work-injury-urgent-care': () =>
    import('@content/content/services/immediate-care/work-injury-urgent-care').then(normalizeDetail),
  'immediate-care/on-site-medications': () =>
    import('@content/content/services/immediate-care/on-site-medications').then(normalizeDetail),

  // internal-medicine (5)
  'internal-medicine/primary-care': () =>
    import('@content/content/services/internal-medicine/primary-care').then(normalizeDetail),
  'internal-medicine/chronic-disease-management': () =>
    import('@content/content/services/internal-medicine/chronic-disease-management').then(normalizeDetail),
  'internal-medicine/annual-physicals': () =>
    import('@content/content/services/internal-medicine/annual-physicals').then(normalizeDetail),
  'internal-medicine/preventive-care': () =>
    import('@content/content/services/internal-medicine/preventive-care').then(normalizeDetail),
  'internal-medicine/preoperative-clearance': () =>
    import('@content/content/services/internal-medicine/preoperative-clearance').then(normalizeDetail),

  // injury-services (4)
  'injury-services/motor-vehicle-accidents': () =>
    import('@content/content/services/injury-services/motor-vehicle-accidents').then(normalizeDetail),
  'injury-services/personal-injury': () =>
    import('@content/content/services/injury-services/personal-injury').then(normalizeDetail),
  'injury-services/workers-compensation': () =>
    import('@content/content/services/injury-services/workers-compensation').then(normalizeDetail),
  'injury-services/workplace-injuries': () =>
    import('@content/content/services/injury-services/workplace-injuries').then(normalizeDetail),

  // diagnostic-surgical-services (11)
  'diagnostic-surgical-services/diagnostic-imaging': () =>
    import('@content/content/services/diagnostic-surgical-services/diagnostic-imaging').then(normalizeDetail),
  'diagnostic-surgical-services/x-rays': () =>
    import('@content/content/services/diagnostic-surgical-services/x-rays').then(normalizeDetail),
  'diagnostic-surgical-services/mri-referrals': () =>
    import('@content/content/services/diagnostic-surgical-services/mri-referrals').then(normalizeDetail),
  'diagnostic-surgical-services/in-house-lab': () =>
    import('@content/content/services/diagnostic-surgical-services/in-house-lab').then(normalizeDetail),
  'diagnostic-surgical-services/blood-work': () =>
    import('@content/content/services/diagnostic-surgical-services/blood-work').then(normalizeDetail),
  'diagnostic-surgical-services/outpatient-surgery-center': () =>
    import('@content/content/services/diagnostic-surgical-services/outpatient-surgery-center').then(normalizeDetail),
  'diagnostic-surgical-services/same-day-procedures': () =>
    import('@content/content/services/diagnostic-surgical-services/same-day-procedures').then(normalizeDetail),
  'diagnostic-surgical-services/pain-management-procedures': () =>
    import('@content/content/services/diagnostic-surgical-services/pain-management-procedures').then(normalizeDetail),
  'diagnostic-surgical-services/orthopedic-procedures': () =>
    import('@content/content/services/diagnostic-surgical-services/orthopedic-procedures').then(normalizeDetail),
  'diagnostic-surgical-services/neurological-procedures': () =>
    import('@content/content/services/diagnostic-surgical-services/neurological-procedures').then(normalizeDetail),
  'diagnostic-surgical-services/general-surgery': () =>
    import('@content/content/services/diagnostic-surgical-services/general-surgery').then(normalizeDetail),
};

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  const params: { pillar: string; detail: string }[] = [];
  for (const [pillar, details] of Object.entries(DETAIL_MAP)) {
    for (const detail of details) {
      params.push({ pillar, detail });
    }
  }
  return params;
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pillar: string; detail: string }>;
}): Promise<Metadata> {
  const { pillar, detail } = await params;
  const key = `${pillar}/${detail}`;
  const loader = detailImports[key];
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

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ pillar: string; detail: string }>;
}) {
  const { pillar, detail } = await params;
  const key = `${pillar}/${detail}`;
  const loader = detailImports[key];
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
          { label: slugToTitle(pillar), href: `/services/${pillar}` },
          { label: slugToTitle(detail) },
        ]}
      />

      <HeroSection variant="page" {...content.hero} />

      <OverviewSection
        headline={content.overview.headline}
        body={content.overview.body}
        keyFacts={content.overview.keyFacts}
      />

      {/* How It Works — optional section */}
      {content.howItWorks && (
        <section className="py-[100px] px-[5vw] bg-off-white">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal>
              <SectionLabel text="How It Works" className="mb-6" />
              <h2
                className="font-serif text-navy mb-10 max-w-[640px]"
                style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
              >
                {content.howItWorks.headline}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="group relative bg-white border border-grey-100 overflow-hidden max-w-[780px]">
                <span
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber"
                  aria-hidden="true"
                />
                <div className="p-9 lg:p-10 flex gap-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-red/10 text-red shrink-0">
                    <Workflow className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <p className="text-[17px] leading-relaxed text-grey-700 pt-1.5">
                    {content.howItWorks.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {content.howItWorks?.steps && content.howItWorks.steps.length > 0 && (
        <ProcessSteps
          headline="Step-by-Step Process"
          steps={content.howItWorks.steps}
        />
      )}

      {content.conditionsTreated && content.conditionsTreated.conditions.length > 0 && (
        <ConditionsGrid
          headline={content.conditionsTreated.headline}
          conditions={content.conditionsTreated.conditions}
          background="white"
        />
      )}

      {content.benefits && content.benefits.items.length > 0 && (
        <BenefitsSection
          headline={content.benefits.headline}
          items={content.benefits.items}
        />
      )}

      {/* What to Expect — optional section */}
      {content.whatToExpect && (
        <section className="py-[100px] px-[5vw]">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal>
              <SectionLabel text="What to Expect" className="mb-6" />
              <h2
                className="font-serif text-navy mb-10 max-w-[640px]"
                style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
              >
                {content.whatToExpect.headline}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="group relative bg-white border border-grey-100 overflow-hidden max-w-[780px]">
                <span
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber"
                  aria-hidden="true"
                />
                <div className="p-9 lg:p-10 flex gap-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-red/10 text-red shrink-0">
                    <ListChecks className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <p className="text-[17px] leading-relaxed text-grey-700 pt-1.5">
                    {content.whatToExpect.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Risks — conditional */}
      {content.risks && (
        <section className="py-[100px] px-[5vw] bg-off-white">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal>
              <SectionLabel text="Risks & Considerations" className="mb-6" />
              <h2
                className="font-serif text-navy mb-10 max-w-[640px]"
                style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
              >
                {content.risks.headline}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="group relative bg-white border border-grey-100 overflow-hidden max-w-[780px]">
                <span
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber"
                  aria-hidden="true"
                />
                <div className="p-9 lg:p-10 flex gap-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-amber/10 text-amber shrink-0">
                    <AlertTriangle className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <p className="text-[17px] leading-relaxed text-grey-700 pt-1.5">
                    {content.risks.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <WhyChooseUs
        headline={content.whyChooseUs.headline}
        features={content.whyChooseUs.features}
      />

      {content.relatedTreatments && content.relatedTreatments.items.length > 0 && (
        <RelatedLinks
          headline={content.relatedTreatments.headline}
          items={content.relatedTreatments.items.map((t) => ({
            name: t.name,
            href: t.href,
            description: t.description,
          }))}
          columns={3}
        />
      )}

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
