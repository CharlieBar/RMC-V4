import type { ResourcePageContent } from "@content/types/content";
import HeroSection from "@/components/sections/HeroSection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ResourcePageTemplateProps {
  content: ResourcePageContent;
  breadcrumbs: BreadcrumbItem[];
}

export default function ResourcePageTemplate({
  content,
  breadcrumbs,
}: ResourcePageTemplateProps) {
  return (
    <>
      <Breadcrumb items={breadcrumbs} />

      <HeroSection variant="page" {...content.hero} />

      {/* Intro */}
      <section className="py-[100px] px-[5vw] bg-off-white">
        <div className="max-w-[1400px] mx-auto max-w-[760px]">
          <ScrollReveal variant="fade-up">
            <SectionLabel text="Overview" className="mb-6" />
            <h2
              className="font-serif text-navy mb-6"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
            >
              {content.intro.headline}
            </h2>
            <p className="text-[17px] leading-relaxed text-grey-700 max-w-[640px]">
              {content.intro.body}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sections */}
      {content.sections.map((section) => (
        <section
          key={section.id}
          className="py-16 px-[5vw] border-b border-grey-100"
        >
          <div className="max-w-[1400px] mx-auto max-w-[800px]">
            <ScrollReveal variant="fade-up">
              <h2
                className="font-serif text-navy mb-5"
                style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
              >
                {section.headline}
              </h2>
              <p className="text-[16px] leading-relaxed text-grey-700 mb-6">
                {section.body}
              </p>
              {section.items && section.items.length > 0 && (
                <ul className="space-y-2.5 mb-6">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[15px] text-grey-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              {section.cta && (
                <Button
                  text={section.cta.text}
                  href={section.cta.href}
                  variant={section.cta.variant ?? "primary"}
                />
              )}
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* FAQs */}
      {content.faqs && content.faqs.length > 0 && (
        <FAQAccordion
          items={content.faqs}
          headline="Frequently Asked Questions"
          eyebrow="FAQ"
        />
      )}

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
