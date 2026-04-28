import { ScrollReveal } from "@/components/animations";

interface IntroSectionProps {
  headline: string;
  body: string;
}

export default function IntroSection({ headline, body }: IntroSectionProps) {
  const paragraphs = body.split("\n\n").filter(Boolean);

  return (
    <section className="bg-off-white py-[100px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
        {/* Left: headline */}
        <ScrollReveal variant="fade-right">
          <div className="w-16 h-0.5 bg-red mb-6" aria-hidden="true" />
          <h2
            className="font-serif text-navy leading-tight"
            style={{ fontSize: "clamp(32px, 3vw, 46px)" }}
          >
            {headline}
          </h2>
        </ScrollReveal>

        {/* Right: body paragraphs */}
        <ScrollReveal variant="fade-left" delay={0.2}>
          <div className="flex flex-col gap-5">
            {paragraphs.map((para, index) => (
              <p
                key={index}
                className={`leading-relaxed text-grey-700 ${
                  index === 0 ? "text-[18px]" : "text-[16px]"
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
