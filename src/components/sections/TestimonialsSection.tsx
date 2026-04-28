import type { TestimonialItem } from "@content/types/content";
import SectionLabel from "@/components/ui/SectionLabel";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/animations";

interface TestimonialsSectionProps {
  eyebrow?: string;
  headline: string;
  testimonials: TestimonialItem[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          className="text-red"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection({
  eyebrow,
  headline,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="bg-off-white py-[100px] px-[5vw]">
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

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
            <figure
              className="bg-white p-8 border border-grey-100 h-full"
            >
              {testimonial.rating !== undefined && (
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
              )}
              <blockquote className="text-sm text-grey-700 leading-relaxed italic mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption>
                <div className="font-semibold text-navy text-[15px]">
                  {testimonial.author}
                </div>
                {(testimonial.role || testimonial.location) && (
                  <div className="text-grey-500 text-sm mt-0.5">
                    {testimonial.role}
                    {testimonial.role && testimonial.location && " · "}
                    {testimonial.location}
                  </div>
                )}
              </figcaption>
            </figure>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
