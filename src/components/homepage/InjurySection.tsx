import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/animations";

interface InjuryCard {
  title: string;
  description: string;
  bullets: string[];
  cta: {
    text: string;
    href: string;
    variant?: string;
  };
}

interface CardVisual {
  src: string;
  alt: string;
  badge: string; // e.g. "Same-Day · Workers' Comp"
}

interface InjurySectionProps {
  headline: string;
  body?: string;
  cards: InjuryCard[];
  cardVisuals?: CardVisual[]; // optional design-side imagery, one per card
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

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 mt-[3px] text-amber"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function InjurySection({
  headline,
  body,
  cards,
  cardVisuals,
}: InjurySectionProps) {
  return (
    <section className="relative bg-navy py-[100px] px-[5vw] overflow-hidden bg-grain">
      {/* Ambient background effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 80% 0%, rgba(200,16,46,0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 10% 100%, rgba(244,183,106,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <ScrollReveal className="mb-14 max-w-[760px]">
          <SectionLabel
            text="Injury Care · Hub Services"
            className="mb-5"
            tone="onDark"
          />
          <h2
            className="font-serif text-white leading-[1.05] mb-5"
            style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
          >
            {headline}
          </h2>
          {body && (
            <p className="text-white/65 text-[16px] md:text-[17px] leading-relaxed max-w-[640px]">
              {body}
            </p>
          )}
        </ScrollReveal>

        {/* Cards */}
        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const visual = cardVisuals?.[idx];
            return (
              <StaggerItem key={card.title}>
                <article className="group relative h-full bg-white/[0.04] border border-white/10 hover:border-red/40 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06] overflow-hidden">
                  {/* Top accent bar */}
                  <span
                    className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red via-red to-amber transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    aria-hidden="true"
                  />

                  {/* Imagery — top section */}
                  {visual && (
                    <div className="relative h-[200px] md:h-[240px] overflow-hidden border-b border-white/5">
                      <Image
                        src={visual.src}
                        alt={visual.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(7,20,35,0.20) 0%, rgba(7,20,35,0.65) 100%)",
                        }}
                        aria-hidden="true"
                      />
                      {/* Urgency badge */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-navy/80 backdrop-blur-sm border border-amber/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[2px] text-amber">
                        <span className="relative inline-flex h-1.5 w-1.5">
                          <span
                            className="absolute inline-flex h-full w-full rounded-full bg-amber opacity-70"
                            style={{
                              animation:
                                "ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
                            }}
                            aria-hidden="true"
                          />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber" />
                        </span>
                        {visual.badge}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-9 lg:p-10">
                    <h3 className="font-serif text-[26px] md:text-[30px] leading-tight text-white mb-4">
                      {card.title}
                    </h3>
                    <p className="text-[15px] text-white/65 leading-relaxed mb-7">
                      {card.description}
                    </p>

                    <ul
                      className="flex flex-col gap-3 mb-9"
                      aria-label={`${card.title} key benefits`}
                    >
                      {card.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[14px] text-white/80"
                        >
                          <CheckIcon />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={card.cta.href}
                      className="inline-flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[2px] text-white border-b-2 border-red pb-2 hover:gap-4 hover:border-amber transition-all duration-200"
                    >
                      {card.cta.text}
                      <ArrowIcon />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
