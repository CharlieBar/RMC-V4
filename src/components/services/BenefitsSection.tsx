import { CheckCircle } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

interface BenefitsSectionProps {
  headline: string;
  items: string[];
}

export default function BenefitsSection({ headline, items }: BenefitsSectionProps) {
  return (
    <section className="bg-off-white py-[100px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <SectionLabel text="Benefits" className="mb-6" />
          <h2
            className="font-serif text-navy mb-12 max-w-[560px]"
            style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
          >
            {headline}
          </h2>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <StaggerItem key={index}>
              <div className="group relative h-full bg-white border border-grey-100 hover:border-red/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_-24px_rgba(10,22,40,0.18)] overflow-hidden">
                <span
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  aria-hidden="true"
                />
                <div className="p-6 flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-red/10 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white shrink-0">
                    <CheckCircle className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span className="text-grey-700 text-[15px] leading-relaxed pt-1.5">
                    {item}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
