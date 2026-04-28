import type { FeatureItem } from "@content/types/content";
import SectionLabel from "@/components/ui/SectionLabel";
import { iconMap } from "@/components/ui/IconMap";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/animations";

interface WhyChooseUsProps {
  eyebrow?: string;
  headline: string;
  features: FeatureItem[];
}

export default function WhyChooseUs({
  eyebrow,
  headline,
  features,
}: WhyChooseUsProps) {
  return (
    <section className="py-[100px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          {eyebrow && <SectionLabel text={eyebrow} className="mb-4" />}
          <h2
            className="font-serif text-navy mb-16 max-w-[560px]"
            style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
          >
            {headline}
          </h2>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const IconComponent =
              feature.icon ? iconMap[feature.icon] : undefined;
            return (
              <StaggerItem key={feature.title}>
                <div className="group relative h-full bg-white border border-grey-100 hover:border-red/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_-24px_rgba(10,22,40,0.18)] overflow-hidden">
                  <span
                    className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    aria-hidden="true"
                  />
                  <div className="p-7 flex gap-5">
                    <span
                      className="inline-flex items-center justify-center w-11 h-11 rounded-sm bg-red/10 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white shrink-0"
                      aria-hidden="true"
                    >
                      {IconComponent ? (
                        <IconComponent className="w-5 h-5" />
                      ) : (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy text-[16px] mb-2 transition-colors duration-300 group-hover:text-red">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-grey-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
