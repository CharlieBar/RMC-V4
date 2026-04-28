import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "white";
}

export default function Button({
  text,
  href,
  variant = "primary",
}: ButtonProps) {
  const isInternal = href.startsWith("/");

  const classMap: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "inline-flex items-center bg-red text-white px-9 py-4 font-sans font-bold text-[15px] tracking-wide border-none hover:bg-red-dark hover:-translate-y-px hover:shadow-lg hover:shadow-[0_4px_20px_rgba(200,16,46,0.3)] transition-all duration-200 cursor-pointer",
    ghost:
      "inline-flex items-center gap-2 text-navy font-semibold text-sm no-underline hover:gap-3.5 transition-all duration-200",
    outline:
      "inline-flex items-center border-2 border-navy text-navy px-9 py-4 font-bold hover:bg-navy hover:text-white transition-colors duration-200",
    white:
      "inline-flex items-center bg-white text-red px-9 py-4 font-bold hover:-translate-y-0.5 transition-all duration-200",
    secondary:
      "inline-flex items-center bg-navy text-white px-6 py-2.5 text-sm font-semibold hover:bg-red transition-colors duration-200",
  };

  const className = classMap[variant];

  const inner =
    variant === "ghost" ? (
      <>
        {text}
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
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </>
    ) : (
      text
    );

  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {inner}
    </a>
  );
}
