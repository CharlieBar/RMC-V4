import type { KeyFact } from "@content/types/content";
import SectionLabel from "@/components/ui/SectionLabel";
import KeyFactsPanel from "@/components/sections/KeyFactsPanel";

interface OverviewSectionProps {
  headline: string;
  body: string;
  keyFacts?: KeyFact[];
}

export default function OverviewSection({
  headline,
  body,
  keyFacts,
}: OverviewSectionProps) {
  return (
    <section className="py-[100px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        <div
          className={
            keyFacts && keyFacts.length > 0
              ? "grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16"
              : undefined
          }
        >
          {/* Left: text */}
          <div>
            <SectionLabel text="Overview" className="mb-6" />
            <h2
              className="font-serif text-navy mb-6 max-w-[640px]"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
            >
              {headline}
            </h2>
            <p className="text-[17px] leading-relaxed text-grey-700 max-w-[640px]">
              {body}
            </p>
          </div>

          {/* Right: key facts panel */}
          {keyFacts && keyFacts.length > 0 && (
            <div className="lg:pt-20">
              <KeyFactsPanel facts={keyFacts} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
