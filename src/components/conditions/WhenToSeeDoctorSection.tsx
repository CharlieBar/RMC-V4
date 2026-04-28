import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animations";

interface WhenToSeeDoctorSectionProps {
  headline: string;
  body: string;
  redFlags?: string[];
}

function AlertIcon() {
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
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export default function WhenToSeeDoctorSection({
  headline,
  body,
  redFlags,
}: WhenToSeeDoctorSectionProps) {
  return (
    <section className="bg-navy py-[100px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <SectionLabel text="When to See a Doctor" className="mb-6" />
          <h2
            className="font-serif text-white mb-8 max-w-[760px]"
            style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
          >
            {headline}
          </h2>

          <div className="max-w-[760px]">
            {body.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-white/70 text-[16px] leading-relaxed mb-5 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {redFlags && redFlags.length > 0 && (
          <div className="mt-12">
            <p className="text-white/50 text-[13px] font-semibold uppercase tracking-wide mb-6">
              Seek prompt medical attention if you experience:
            </p>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {redFlags.map((flag, index) => (
                <StaggerItem key={index}>
                  <div className="group relative bg-white/[0.04] border border-white/10 hover:border-red/40 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full">
                    {/* Top accent bar */}
                    <span
                      className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                      aria-hidden="true"
                    />

                    <div className="p-5 flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-sm bg-red/10 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white shrink-0">
                        <AlertIcon />
                      </span>
                      <span className="text-white/80 text-[15px] leading-relaxed pt-1.5">{flag}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        )}
      </div>
    </section>
  );
}
