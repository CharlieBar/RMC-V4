import type { CTA } from "@content/types/content";
import Button from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations";

interface CTASectionProps {
  headline: string;
  subheadline?: string;
  body?: string;
  primaryCTA: CTA;
  secondaryCTA?: CTA;
  variant?: "red" | "navy";
}

export default function CTASection({
  headline,
  subheadline,
  body,
  primaryCTA,
  secondaryCTA,
  variant = "red",
}: CTASectionProps) {
  const isRed = variant === "red";

  return (
    <section className={`py-20 px-[5vw] ${isRed ? "bg-red" : "bg-navy"}`}>
      <ScrollReveal variant="scale-in">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-16">
        {/* Left: text */}
        <div>
          <h2
            className="font-serif text-white leading-tight mb-3"
            style={{ fontSize: "clamp(32px, 3vw, 48px)" }}
          >
            {headline}
          </h2>
          {subheadline && (
            <p className="text-white/80 text-lg font-medium">{subheadline}</p>
          )}
          {body && (
            <p className="text-white/75 text-base mt-2 max-w-[560px]">{body}</p>
          )}
        </div>

        {/* Right: CTAs */}
        <div className="flex flex-col gap-3.5 items-start lg:items-end">
          {isRed ? (
            <Button text={primaryCTA.text} href={primaryCTA.href} variant="white" />
          ) : (
            <Button text={primaryCTA.text} href={primaryCTA.href} variant="primary" />
          )}
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="font-serif text-2xl text-white hover:text-white/80 transition-colors duration-200"
            >
              {secondaryCTA.text}
            </a>
          )}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
