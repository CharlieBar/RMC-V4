import type { ServiceCard, CTA } from "@content/types/content";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { iconMap } from "@/components/ui/IconMap";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/animations";

interface ServiceGridProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  services: ServiceCard[];
  cta?: CTA;
}

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
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
);

export default function ServiceGrid({
  eyebrow,
  headline,
  subheadline,
  services,
  cta,
}: ServiceGridProps) {
  return (
    <section className="py-[100px] px-[5vw] bg-grey-100/40">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <ScrollReveal className="flex justify-between items-end mb-16 gap-8 flex-wrap">
          <div>
            {eyebrow && <SectionLabel text={eyebrow} className="mb-4" />}
            <h2
              className="font-serif text-navy leading-tight"
              style={{ fontSize: "clamp(36px, 3.5vw, 52px)" }}
            >
              {headline}
            </h2>
            {subheadline && (
              <p className="text-grey-700 text-base mt-3 max-w-[520px] leading-relaxed">
                {subheadline}
              </p>
            )}
          </div>
          {cta && (
            <Link
              href={cta.href}
              className="text-[13px] font-bold text-navy uppercase tracking-wide flex items-center gap-2 hover:gap-3.5 transition-all duration-200 shrink-0 group"
            >
              {cta.text}
              <span className="text-red transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </Link>
          )}
        </ScrollReveal>

        {/* Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComp = service.icon ? iconMap[service.icon] : null;
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={service.cta.href}
                  className="group relative block h-full bg-white border border-grey-100 hover:border-red/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_-24px_rgba(10,22,40,0.18)] overflow-hidden"
                >
                  {/* Top accent bar — red→amber, scales on hover */}
                  <span
                    className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    aria-hidden="true"
                  />

                  <div className="p-9 lg:p-10 flex flex-col h-full">
                    {/* Header row: icon + index */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="relative inline-flex items-center justify-center w-12 h-12 rounded-sm bg-red/10 text-red transition-all duration-300 group-hover:bg-red group-hover:text-white">
                        {IconComp ? <IconComp /> : null}
                      </span>
                      <span className="font-serif text-[13px] text-grey-300 tracking-wide">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[24px] leading-tight text-navy mb-3 transition-colors duration-300 group-hover:text-red">
                      {service.name}
                    </h3>

                    {/* Tagline */}
                    {service.tagline && (
                      <p className="text-[12px] font-semibold uppercase tracking-wide text-amber-dark mb-3">
                        {service.tagline}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-[14px] leading-relaxed text-grey-700 mb-6 flex-1">
                      {service.description}
                    </p>

                    {/* Highlights — small bullet list */}
                    {service.highlights && service.highlights.length > 0 && (
                      <ul className="flex flex-col gap-2 mb-7" aria-label="Service highlights">
                        {service.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-[13px] text-grey-700">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="shrink-0 mt-[3px] text-red"
                              aria-hidden="true"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA */}
                    <span className="text-[12px] font-bold text-navy group-hover:text-red uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all duration-300 mt-auto">
                      {service.cta.text}
                      <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
