import { Heart } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface HowWeHelpSectionProps {
  headline: string;
  body: string;
}

export default function HowWeHelpSection({ headline, body }: HowWeHelpSectionProps) {
  return (
    <section className="py-[100px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <SectionLabel text="How We Help" className="mb-6" />
          <h2
            className="font-serif text-navy mb-10 max-w-[760px]"
            style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
          >
            {headline}
          </h2>

          {/* Single bordered card with red→amber accent */}
          <div className="group relative bg-white border border-grey-100 overflow-hidden max-w-[70ch]">
            {/* Top accent bar */}
            <span
              className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber"
              aria-hidden="true"
            />

            <div className="p-9 lg:p-10">
              {/* Icon */}
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-red/10 text-red mb-6">
                <Heart size={22} aria-hidden="true" />
              </span>

              {/* Body prose */}
              {body.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[16px] text-grey-700 leading-relaxed mb-5 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
