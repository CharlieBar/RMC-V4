import type { TreatmentLink } from "@content/types/content";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

interface TreatmentsListSectionProps {
  headline: string;
  body?: string;
  items: TreatmentLink[];
}

export default function TreatmentsListSection({
  headline,
  body,
  items,
}: TreatmentsListSectionProps) {
  return (
    <section className="bg-off-white py-[100px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        <SectionLabel text="Treatments" className="mb-6" />
        <h2
          className="font-serif text-navy mb-4 max-w-[560px]"
          style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
        >
          {headline}
        </h2>
        {body && (
          <p className="text-[17px] leading-relaxed text-grey-700 max-w-[640px] mb-12">
            {body}
          </p>
        )}
        {!body && <div className="mb-12" />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-grey-100">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className="bg-white p-6 hover:bg-navy group transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-navy text-[15px] mb-1.5 group-hover:text-white transition-colors duration-200">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-grey-500 leading-relaxed group-hover:text-white/60 transition-colors duration-200">
                      {item.description}
                    </p>
                  )}
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-grey-300 group-hover:text-white/40 transition-colors duration-200 mt-0.5"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
