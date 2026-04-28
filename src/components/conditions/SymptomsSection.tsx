import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animations";

interface SymptomItem {
  text: string;
  detail?: string;
}

interface SymptomsSectionProps {
  headline: string;
  items: SymptomItem[];
}

function ActivityIcon() {
  return (
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
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

export default function SymptomsSection({ headline, items }: SymptomsSectionProps) {
  return (
    <section className="bg-off-white py-[100px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <SectionLabel text="Symptoms" className="mb-6" />
          <h2
            className="font-serif text-navy mb-12 max-w-[560px]"
            style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
          >
            {headline}
          </h2>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <StaggerItem key={index}>
              <div className="group relative bg-white border border-grey-100 hover:border-red/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_-24px_rgba(10,22,40,0.18)] overflow-hidden h-full">
                {/* Top accent bar */}
                <span
                  className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  aria-hidden="true"
                />

                <div className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-red/10 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white mb-4">
                    <ActivityIcon />
                  </span>

                  <p className="font-semibold text-navy text-[15px] mb-1">{item.text}</p>
                  {item.detail && (
                    <p className="text-sm text-grey-500 leading-relaxed">{item.detail}</p>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
