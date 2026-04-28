import type { ProcessStep } from "@content/types/content";
import SectionLabel from "@/components/ui/SectionLabel";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/animations";

interface ProcessStepsProps {
  headline: string;
  eyebrow?: string;
  steps: ProcessStep[];
}

export default function ProcessSteps({
  headline,
  eyebrow,
  steps,
}: ProcessStepsProps) {
  return (
    <section className="py-[100px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          {eyebrow && <SectionLabel text={eyebrow} className="mb-4" />}
          <h2
            className="font-serif text-navy mb-16 max-w-[600px]"
            style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
          >
            {headline}
          </h2>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="group relative h-full bg-white border border-grey-100 hover:border-red/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_-24px_rgba(10,22,40,0.18)] overflow-hidden">
                <span
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  aria-hidden="true"
                />
                <div className="p-7 flex flex-col h-full">
                  <div className="font-serif text-5xl text-red/20 mb-4 leading-none transition-colors duration-300 group-hover:text-red/40">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-navy text-[17px] mb-3 transition-colors duration-300 group-hover:text-red">
                    {step.title}
                  </h3>
                  <p className="text-sm text-grey-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
