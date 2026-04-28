import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ConditionPageContent } from "@content/types/content";
import { CONDITION_MAP } from "@/lib/condition-map";
import { slugToTitle } from "@/lib/utils";

import Breadcrumb from "@/components/layout/Breadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import RelatedLinks from "@/components/sections/RelatedLinks";
import JsonLd from "@/components/seo/JsonLd";

import DefinitionSection from "@/components/conditions/DefinitionSection";
import SymptomsSection from "@/components/conditions/SymptomsSection";
import CausesSection from "@/components/conditions/CausesSection";
import WhenToSeeDoctorSection from "@/components/conditions/WhenToSeeDoctorSection";
import HowWeHelpSection from "@/components/conditions/HowWeHelpSection";

// ─── Explicit static import map (no template literals) ────────────────────────

const conditionImports: Record<string, () => Promise<ConditionPageContent>> = {
  'spine/back-pain': () => import('@content/content/conditions/spine/back-pain') as Promise<ConditionPageContent>,
  'spine/neck-pain': () => import('@content/content/conditions/spine/neck-pain') as Promise<ConditionPageContent>,
  'spine/sciatica': () => import('@content/content/conditions/spine/sciatica') as Promise<ConditionPageContent>,
  'spine/herniated-disc': () => import('@content/content/conditions/spine/herniated-disc') as Promise<ConditionPageContent>,
  'spine/spinal-stenosis': () => import('@content/content/conditions/spine/spinal-stenosis') as Promise<ConditionPageContent>,
  'spine/degenerative-disc-disease': () => import('@content/content/conditions/spine/degenerative-disc-disease') as Promise<ConditionPageContent>,
  'spine/scoliosis': () => import('@content/content/conditions/spine/scoliosis') as Promise<ConditionPageContent>,
  'spine/facet-syndrome': () => import('@content/content/conditions/spine/facet-syndrome') as Promise<ConditionPageContent>,
  'spine/radiculopathy': () => import('@content/content/conditions/spine/radiculopathy') as Promise<ConditionPageContent>,
  'spine/failed-back-surgery': () => import('@content/content/conditions/spine/failed-back-surgery') as Promise<ConditionPageContent>,
  'spine/lumbar-sprain': () => import('@content/content/conditions/spine/lumbar-sprain') as Promise<ConditionPageContent>,
  'spine/vertebral-compression': () => import('@content/content/conditions/spine/vertebral-compression') as Promise<ConditionPageContent>,
  'spine/coccydynia': () => import('@content/content/conditions/spine/coccydynia') as Promise<ConditionPageContent>,
  'spine/si-joint-pain': () => import('@content/content/conditions/spine/si-joint-pain') as Promise<ConditionPageContent>,
  'joints/knee-pain': () => import('@content/content/conditions/joints/knee-pain') as Promise<ConditionPageContent>,
  'joints/hip-pain': () => import('@content/content/conditions/joints/hip-pain') as Promise<ConditionPageContent>,
  'joints/shoulder-pain': () => import('@content/content/conditions/joints/shoulder-pain') as Promise<ConditionPageContent>,
  'joints/arthritis': () => import('@content/content/conditions/joints/arthritis') as Promise<ConditionPageContent>,
  'joints/osteoarthritis': () => import('@content/content/conditions/joints/osteoarthritis') as Promise<ConditionPageContent>,
  'joints/elbow-hand-pain': () => import('@content/content/conditions/joints/elbow-hand-pain') as Promise<ConditionPageContent>,
  'joints/foot-ankle-pain': () => import('@content/content/conditions/joints/foot-ankle-pain') as Promise<ConditionPageContent>,
  'nerves/neuropathy': () => import('@content/content/conditions/nerves/neuropathy') as Promise<ConditionPageContent>,
  'nerves/carpal-tunnel': () => import('@content/content/conditions/nerves/carpal-tunnel') as Promise<ConditionPageContent>,
  'nerves/diabetic-neuropathy': () => import('@content/content/conditions/nerves/diabetic-neuropathy') as Promise<ConditionPageContent>,
  'nerves/occipital-neuralgia': () => import('@content/content/conditions/nerves/occipital-neuralgia') as Promise<ConditionPageContent>,
  'nerves/trigeminal-neuralgia': () => import('@content/content/conditions/nerves/trigeminal-neuralgia') as Promise<ConditionPageContent>,
  'nerves/complex-regional-pain-syndrome': () => import('@content/content/conditions/nerves/complex-regional-pain-syndrome') as Promise<ConditionPageContent>,
  'nerves/nerve-entrapment': () => import('@content/content/conditions/nerves/nerve-entrapment') as Promise<ConditionPageContent>,
  'nerves/phantom-limb-pain': () => import('@content/content/conditions/nerves/phantom-limb-pain') as Promise<ConditionPageContent>,
  'muscle/myofascial-pain': () => import('@content/content/conditions/muscle/myofascial-pain') as Promise<ConditionPageContent>,
  'muscle/fibromyalgia': () => import('@content/content/conditions/muscle/fibromyalgia') as Promise<ConditionPageContent>,
  'muscle/piriformis-syndrome': () => import('@content/content/conditions/muscle/piriformis-syndrome') as Promise<ConditionPageContent>,
  'muscle/muscle-spasms': () => import('@content/content/conditions/muscle/muscle-spasms') as Promise<ConditionPageContent>,
  'muscle/muscle-strain': () => import('@content/content/conditions/muscle/muscle-strain') as Promise<ConditionPageContent>,
  'pain-syndromes/chronic-pain': () => import('@content/content/conditions/pain-syndromes/chronic-pain') as Promise<ConditionPageContent>,
  'pain-syndromes/cancer-pain': () => import('@content/content/conditions/pain-syndromes/cancer-pain') as Promise<ConditionPageContent>,
  'pain-syndromes/post-operative-pain': () => import('@content/content/conditions/pain-syndromes/post-operative-pain') as Promise<ConditionPageContent>,
  'pain-syndromes/pelvic-pain': () => import('@content/content/conditions/pain-syndromes/pelvic-pain') as Promise<ConditionPageContent>,
  'pain-syndromes/abdominal-pain': () => import('@content/content/conditions/pain-syndromes/abdominal-pain') as Promise<ConditionPageContent>,
  'pain-syndromes/post-stroke-pain': () => import('@content/content/conditions/pain-syndromes/post-stroke-pain') as Promise<ConditionPageContent>,
  'other/headaches': () => import('@content/content/conditions/other/headaches') as Promise<ConditionPageContent>,
  'other/sports-injury': () => import('@content/content/conditions/other/sports-injury') as Promise<ConditionPageContent>,
  'other/chest-pain': () => import('@content/content/conditions/other/chest-pain') as Promise<ConditionPageContent>,
  'other/auto-injury': () => import('@content/content/conditions/other/auto-injury') as Promise<ConditionPageContent>,
  'other/workplace-injury': () => import('@content/content/conditions/other/workplace-injury') as Promise<ConditionPageContent>,
};

// ─── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  const params: { category: string; condition: string }[] = [];
  for (const [category, conditions] of Object.entries(CONDITION_MAP)) {
    for (const condition of conditions) {
      params.push({ category, condition });
    }
  }
  return params;
}

// ─── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; condition: string }>;
}): Promise<Metadata> {
  const { category, condition } = await params;
  const key = `${category}/${condition}`;
  const loader = conditionImports[key];
  if (!loader) return {};

  const content = await loader();
  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
    alternates: { canonical: content.seo.canonical },
  };
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ category: string; condition: string }>;
}) {
  const { category, condition } = await params;
  const key = `${category}/${condition}`;
  const loader = conditionImports[key];

  if (!loader) {
    notFound();
  }

  const content = await loader();

  const medicalConditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: content.hero.headline,
    description: content.seo.description,
    possibleTreatment: content.treatmentOptions.treatments.map((t) => t.name),
    signOrSymptom: content.symptoms.items.map((s) => s.text),
  };

  const categoryLabel = slugToTitle(category);
  const conditionLabel = slugToTitle(condition);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Conditions", href: "/conditions" },
          { label: categoryLabel, href: `/conditions/${category}` },
          { label: conditionLabel },
        ]}
      />

      <HeroSection variant="page" {...content.hero} />

      <DefinitionSection
        headline={content.definition.headline}
        body={content.definition.body}
      />

      <SymptomsSection
        headline={content.symptoms.headline}
        items={content.symptoms.items}
      />

      <CausesSection
        headline={content.causes.headline}
        items={content.causes.items}
      />

      <WhenToSeeDoctorSection
        headline={content.whenToSeeDoctor.headline}
        body={content.whenToSeeDoctor.body}
        redFlags={content.whenToSeeDoctor.redFlags}
      />

      <HowWeHelpSection
        headline={content.howWeHelp.headline}
        body={content.howWeHelp.body}
      />

      {/* Treatment Options */}
      <RelatedLinks
        headline={content.treatmentOptions.headline}
        items={content.treatmentOptions.treatments.map((t) => ({
          name: t.name,
          slug: t.slug,
          href: t.href,
          description: t.description,
        }))}
        columns={3}
      />

      <WhyChooseUs
        headline={content.whyChooseUs.headline}
        features={content.whyChooseUs.features}
      />

      {/* Related Conditions */}
      {content.relatedConditions.conditions.length > 0 && (
        <RelatedLinks
          headline={content.relatedConditions.headline}
          items={content.relatedConditions.conditions.map((c) => ({
            name: c.name,
            slug: c.slug,
            href: c.href,
          }))}
          columns={3}
        />
      )}

      {/* Related Services */}
      {content.relatedServices.services.length > 0 && (
        <RelatedLinks
          headline={content.relatedServices.headline}
          items={content.relatedServices.services.map((s) => ({
            name: s.name,
            slug: s.slug,
            href: s.href,
            description: s.description,
          }))}
          columns={4}
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

      <JsonLd data={medicalConditionSchema} />
    </>
  );
}
