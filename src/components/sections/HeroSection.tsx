"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { Easing } from "framer-motion";
import type { HeroSection as HeroSectionType, Stat } from "@content/types/content";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import CountUp from "@/components/animations/CountUp";
import { iconMap } from "@/components/ui/IconMap";
import Link from "next/link";

interface SpecialtyCard {
  icon: string;
  title: string;
  description: string;
}

interface HeroSectionProps extends HeroSectionType {
  variant?: "split" | "page";
  stats?: Stat[];
  specialtyCards?: SpecialtyCard[];
  bottomCta?: { label: string; href: string };
}

// ── Animation variant definitions ────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.25, 0, 0, 1] as [number, number, number, number],
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.5, delay, ease: "easeOut" as Easing },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95, y: 12 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.25, 0, 0, 1] as [number, number, number, number],
    },
  }),
};

const slideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75,
      ease: [0.25, 0, 0, 1] as [number, number, number, number],
    },
  },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Parse the leading numeric portion from a stat value string.
 * e.g. "4,500" → { numeric: 4500, prefix: "", trailingSuffix: "" }
 * e.g. "$98"   → { numeric: 98, prefix: "$", trailingSuffix: "" }
 */
function parseStatValue(raw: string): {
  numeric: number;
  prefix: string;
  trailingSuffix: string;
} {
  const stripped = raw.replace(/,/g, "");
  const match = stripped.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { numeric: 0, prefix: "", trailingSuffix: raw };
  return {
    numeric: parseFloat(match[2]),
    prefix: match[1],
    trailingSuffix: match[3],
  };
}

// ── Sub-components ────────────────────────────────────────────────────────────

function StatItem({ stat, animDelay }: { stat: Stat; animDelay: number }) {
  const { numeric, prefix, trailingSuffix } = parseStatValue(stat.value);
  const hasAnimation = numeric > 0;

  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={animDelay}>
      <div className="font-serif text-4xl text-navy">
        {prefix && <span>{prefix}</span>}
        {hasAnimation ? (
          <CountUp value={numeric} suffix={trailingSuffix + (stat.suffix ?? "")} />
        ) : (
          <span>
            {stat.value}
            {stat.suffix && <span>{stat.suffix}</span>}
          </span>
        )}
      </div>
      <div className="text-xs font-medium tracking-wide uppercase text-grey-500 mt-1">
        {stat.label}
      </div>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function HeroSection({
  variant = "page",
  eyebrow,
  headline,
  body,
  primaryCTA,
  secondaryCTA,
  stats,
  specialtyCards,
  bottomCta,
}: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  // When reduced motion is preferred, skip initial/animate props entirely so
  // elements are visible at rest without any transition.
  const motionProps = (delay: number) =>
    prefersReducedMotion
      ? {}
      : { variants: fadeUp, initial: "hidden" as const, animate: "visible" as const, custom: delay };

  const fadeInProps = (delay: number) =>
    prefersReducedMotion
      ? {}
      : { variants: fadeIn, initial: "hidden" as const, animate: "visible" as const, custom: delay };

  if (variant === "split") {
    return (
      <section className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* ── Left panel ── */}
        <div className="pt-[140px] pb-20 px-[5vw] flex flex-col justify-center bg-white">
          {/* Urgency amber badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 self-start mb-7 px-3.5 py-1.5 bg-amber/15 border border-amber/40 text-[11px] font-bold uppercase tracking-[2px] text-amber-dark"
            {...motionProps(0)}
          >
            <span className="relative inline-flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-amber opacity-70"
                style={{
                  animation: "ping 1.8s cubic-bezier(0,0,0.2,1) infinite",
                }}
                aria-hidden="true"
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
            </span>
            Same-Day Appointments Available
          </motion.div>

          {eyebrow && (
            <motion.div className="mb-6" {...motionProps(0.05)}>
              <SectionLabel text={eyebrow} />
            </motion.div>
          )}

          {/* Headline — clip-path reveal */}
          <div className="overflow-hidden mb-7">
            <motion.h1
              className="font-serif leading-none text-navy"
              style={{ fontSize: "clamp(48px, 5.5vw, 80px)" }}
              initial={prefersReducedMotion ? false : { clipPath: "inset(0 100% 0 0)", opacity: 1 }}
              animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0, 0, 1] }}
            >
              {headline}
            </motion.h1>
          </div>

          {body && (
            <motion.p
              className="text-[17px] leading-relaxed text-grey-700 max-w-[480px] mb-12"
              {...motionProps(0.35)}
            >
              {body}
            </motion.p>
          )}

          <motion.div className="flex gap-4 items-center flex-wrap" {...motionProps(0.5)}>
            <Button text={primaryCTA.text} href={primaryCTA.href} variant="primary" />
            {secondaryCTA && (
              <Button text={secondaryCTA.text} href={secondaryCTA.href} variant="ghost" />
            )}
          </motion.div>

          {stats && stats.length > 0 && (
            <motion.div
              className="mt-16 pt-10 border-t border-grey-100"
              {...fadeInProps(0.6)}
            >
              <div className="flex gap-12 flex-wrap">
                {stats.map((stat, i) => (
                  <StatItem key={stat.label} stat={stat} animDelay={0.65 + i * 0.12} />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* ── Right panel — hidden on mobile ── */}
        <div className="hidden lg:flex bg-navy relative overflow-hidden flex-col">
          {/* Red radial glow — always rendered, no motion needed */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 50% 48%, rgba(200,16,46,0.18) 0%, transparent 70%)",
            }}
          />

          {/* Grid overlay — fades in */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(200,16,46,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(200,16,46,0.08) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
            {...fadeInProps(0.2)}
          />

          {/* Specialty cards — staggered scale-in */}
          {specialtyCards && specialtyCards.length > 0 && (
            <div className="relative z-10 flex-1 flex flex-col justify-center px-12 py-20">
              {/* Hub indicator */}
              <motion.div
                className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2.5px] text-amber"
                {...fadeInProps(0.25)}
              >
                <span className="w-8 h-px bg-amber/60" aria-hidden="true" />
                Our Specialties
              </motion.div>

              <div className="grid grid-cols-2 gap-3 w-full">
                {specialtyCards.map((card, i) => {
                  const Icon = card.icon ? iconMap[card.icon] : null;
                  const isPrimary = i < 2;
                  return (
                    <motion.div
                      key={card.title}
                      className={`group relative bg-white/[0.05] border p-6 transition-all duration-300 ${
                        isPrimary
                          ? "border-amber/30 hover:border-red/60 hover:bg-red/15"
                          : "border-white/10 hover:border-red/40 hover:bg-red/10"
                      }`}
                      variants={prefersReducedMotion ? undefined : scaleIn}
                      initial={prefersReducedMotion ? undefined : "hidden"}
                      animate={prefersReducedMotion ? undefined : "visible"}
                      custom={0.3 + i * 0.1}
                    >
                      {/* Top accent bar for primary hubs */}
                      {isPrimary && (
                        <span
                          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red to-amber"
                          aria-hidden="true"
                        />
                      )}

                      <div className="flex items-start gap-3">
                        {Icon && (
                          <span
                            className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-sm transition-colors duration-300 ${
                              isPrimary
                                ? "bg-red text-white group-hover:bg-amber group-hover:text-navy"
                                : "bg-white/10 text-white/80 group-hover:bg-white/20"
                            }`}
                          >
                            <Icon />
                          </span>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-semibold text-[14px] leading-tight mb-1">
                            {card.title}
                          </div>
                          <div className="text-white/55 text-[12px] leading-relaxed">
                            {card.description}
                          </div>
                        </div>
                      </div>

                      {isPrimary && (
                        <span
                          className="absolute top-2 right-2 text-[9px] font-bold uppercase tracking-[1.5px] text-amber/80"
                          aria-hidden="true"
                        >
                          Hub
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom CTA strip — slides up */}
          {bottomCta && (
            <motion.div
              className="relative z-10 bg-red py-5 px-6 flex justify-between items-center"
              variants={prefersReducedMotion ? undefined : slideUp}
              initial={prefersReducedMotion ? undefined : "hidden"}
              animate={prefersReducedMotion ? undefined : "visible"}
            >
              <span className="text-white font-semibold text-[15px]">{bottomCta.label}</span>
              <Link
                href={bottomCta.href}
                className="text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2 hover:gap-3 transition-all duration-200"
              >
                Get Started
                <svg
                  width="16"
                  height="16"
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
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    );
  }

  // ── Page variant — staggered fade-up ─────────────────────────────────────
  return (
    <section className="pt-[120px] pb-16 px-[5vw]">
      <div className="max-w-[1400px] mx-auto">
        {eyebrow && (
          <motion.div className="mb-6" {...motionProps(0)}>
            <SectionLabel text={eyebrow} />
          </motion.div>
        )}

        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-serif leading-tight text-navy max-w-[760px]"
            style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
            initial={prefersReducedMotion ? false : { clipPath: "inset(0 100% 0 0)", opacity: 1 }}
            animate={{ clipPath: "inset(0 0% 0 0)", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0, 0, 1] }}
          >
            {headline}
          </motion.h1>
        </div>

        {body && (
          <motion.p
            className="text-[17px] leading-relaxed text-grey-700 max-w-[560px] mb-10"
            {...motionProps(0.3)}
          >
            {body}
          </motion.p>
        )}

        <motion.div className="flex gap-4 items-center flex-wrap" {...motionProps(0.45)}>
          <Button text={primaryCTA.text} href={primaryCTA.href} variant="primary" />
          {secondaryCTA && (
            <Button text={secondaryCTA.text} href={secondaryCTA.href} variant="ghost" />
          )}
        </motion.div>
      </div>
    </section>
  );
}
