import type { ConditionLink, CTA } from "@content/types/content";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/animations";

interface ConditionsGridProps {
  headline: string;
  subheadline?: string;
  conditions: ConditionLink[];
  cta?: CTA;
  background?: "navy" | "white";
}

export default function ConditionsGrid({
  headline,
  subheadline,
  conditions,
  cta,
  background = "navy",
}: ConditionsGridProps) {
  const isNavy = background === "navy";

  return (
    <section
      className={`py-20 px-[5vw] ${isNavy ? "bg-navy" : "bg-white"}`}
    >
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <SectionLabel text="Conditions" className="mb-4" />
          <div className="flex justify-between items-end mb-12 gap-8 flex-wrap">
            <h2
              className={`font-serif leading-tight ${isNavy ? "text-white" : "text-navy"}`}
              style={{ fontSize: "clamp(32px, 3vw, 46px)" }}
            >
              {headline}
            </h2>
            {subheadline && (
              <p
                className={`text-base max-w-[400px] ${isNavy ? "text-white/60" : "text-grey-500"}`}
              >
                {subheadline}
              </p>
            )}
          </div>
        </ScrollReveal>

        <StaggerChildren
          className={`grid grid-cols-2 md:grid-cols-4 gap-px ${isNavy ? "bg-white/[0.08]" : "bg-grey-100"}`}
        >
          {conditions.map((condition) => (
            <StaggerItem key={condition.slug}>
            <Link
              href={condition.href}
              className={`p-7 border-b-2 border-transparent transition-colors duration-200 ${
                isNavy
                  ? "bg-navy hover:bg-red/10 hover:border-red"
                  : "bg-white hover:bg-grey-100 hover:border-red"
              }`}
            >
              <h4
                className={`text-[15px] font-semibold mb-2 ${isNavy ? "text-white" : "text-navy"}`}
              >
                {condition.name}
              </h4>
              <span
                className={`text-[12px] font-bold uppercase tracking-wide flex items-center gap-1 ${
                  isNavy ? "text-white/40" : "text-grey-500"
                }`}
                aria-hidden="true"
              >
                Learn more
              </span>
            </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {cta && (
          <div className="mt-10 flex justify-center">
            <Link
              href={cta.href}
              className={`text-[13px] font-bold uppercase tracking-wide flex items-center gap-2 hover:gap-3.5 transition-all duration-200 ${
                isNavy ? "text-white" : "text-navy"
              }`}
            >
              {cta.text}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
