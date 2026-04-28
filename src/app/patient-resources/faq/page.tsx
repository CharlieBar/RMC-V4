import type { Metadata } from "next";
import * as content from "@content/content/pages/faq";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  alternates: { canonical: content.seo.canonical },
};

export default function FAQPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Patient Resources", href: "/patient-resources" },
          { label: "FAQ" },
        ]}
      />

      <HeroSection variant="page" {...content.hero} />

      {/* FAQ categories */}
      <section className="py-[80px] px-[5vw]">
        <div className="max-w-[1400px] mx-auto">
          <div className="space-y-16">
            {content.faqCategories.map((category) => (
              <ScrollReveal key={category.category} variant="fade-up">
                <SectionLabel text="FAQ" className="mb-4" />
                <h2
                  className="font-serif text-navy mb-8"
                  style={{ fontSize: "clamp(24px, 2.5vw, 36px)" }}
                >
                  {category.category}
                </h2>
                <div className="max-w-[800px]">
                  {category.faqs.map((item, i) => (
                    <details key={i} className="group">
                      <summary className="py-5 border-b border-grey-300 text-[15px] font-semibold text-navy cursor-pointer flex justify-between items-center list-none select-none hover:text-red transition-colors duration-200 focus-visible:outline-none focus-visible:text-red">
                        <span>{item.question}</span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </summary>
                      <div className="py-4 text-sm leading-relaxed text-grey-700">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
