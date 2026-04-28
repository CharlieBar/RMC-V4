import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations";

interface HoursRow {
  day: string;
  hours: string;
}

interface LocationSectionProps {
  headline: string;
  body: string;
  cta: {
    text: string;
    href: string;
  };
  address: string;
  phone: string;
  phoneHref: string;
  hours: HoursRow[];
}

const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getCurrentDay(): string {
  return DAYS_OF_WEEK[new Date().getDay()];
}

// Map-pin SVG icon
function MapPinIcon({ className }: { className?: string }) {
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
      className={className}
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.4 19.79 19.79 0 0 1 1.61 4.82 2 2 0 0 1 3.6 2.63h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.2a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.54 17.5l.38-.58z" />
    </svg>
  );
}

export default function LocationSection({
  headline,
  body,
  cta,
  address,
  phone,
  phoneHref,
  hours,
}: LocationSectionProps) {
  const today = getCurrentDay();

  return (
    <section className="py-[100px] px-[5vw]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left column */}
        <ScrollReveal variant="fade-right">
          <SectionLabel text="Visit Us" className="mb-4" />
          <h2
            className="font-serif text-navy leading-tight mb-5"
            style={{ fontSize: "clamp(32px, 3vw, 46px)" }}
          >
            {headline}
          </h2>
          <p className="text-grey-700 text-[16px] leading-relaxed mb-8">
            {body}
          </p>
          <Button text={cta.text} href={cta.href} variant="ghost" />
        </ScrollReveal>

        {/* Right column */}
        <ScrollReveal variant="fade-left" delay={0.2}>
        <div className="flex flex-col gap-8">
          {/* Address + Phone */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPinIcon className="text-red mt-0.5 shrink-0" />
              <address className="not-italic text-grey-700 text-[15px] leading-relaxed">
                {address}
              </address>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="text-red shrink-0" />
              <Link
                href={phoneHref}
                className="text-navy font-semibold text-[15px] hover:text-red transition-colors duration-200"
              >
                {phone}
              </Link>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[3px] uppercase text-grey-500 mb-4">
              Office Hours
            </h3>
            <div className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-2">
              {hours.map((row) => {
                const isToday = row.day === today;
                return (
                  <div
                    key={row.day}
                    className={`contents ${isToday ? "font-semibold" : ""}`}
                  >
                    <span
                      className={`text-sm ${
                        isToday ? "text-navy font-semibold" : "text-grey-500"
                      }`}
                    >
                      {isToday && (
                        <span className="inline-block w-1.5 h-1.5 bg-red rounded-full mr-2 align-middle" aria-hidden="true" />
                      )}
                      {row.day}
                    </span>
                    <span
                      className={`text-sm text-right ${
                        isToday ? "text-navy font-semibold" : "text-grey-500"
                      }`}
                    >
                      {row.hours}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Google Maps */}
          <div className="h-[240px] border border-grey-300 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.8!2d-87.98!3d42.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb0e5b5e5b5e5%3A0x0!2s1925+E+Rand+Rd%2C+Arlington+Heights%2C+IL+60004!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rand Medical Center location on Google Maps"
            />
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
