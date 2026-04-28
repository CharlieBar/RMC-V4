import type { FAQItem } from "@content/types/content";
import SectionLabel from "@/components/ui/SectionLabel";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/animations";

interface FAQAccordionProps {
  items: FAQItem[];
  headline?: string;
  eyebrow?: string;
}

export default function FAQAccordion({
  items,
  headline,
  eyebrow,
}: FAQAccordionProps) {
  return (
    <section className="py-[100px] px-[5vw] bg-off-white">
      <div className="max-w-[800px] mx-auto">
        <ScrollReveal>
          {eyebrow && <SectionLabel text={eyebrow} className="mb-4" />}
          {headline && (
            <h2
              className="font-serif text-navy mb-12"
              style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              {headline}
            </h2>
          )}
        </ScrollReveal>

        <StaggerChildren>
          {items.map((item, index) => (
            <StaggerItem key={index}>
            <details className="group">
              <summary className="py-5 border-b border-grey-300 text-[15px] font-semibold text-navy cursor-pointer flex justify-between items-center list-none select-none hover:text-red transition-colors duration-200">
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
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
