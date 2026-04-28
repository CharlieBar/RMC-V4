interface SectionLabelProps {
  text: string;
  className?: string;
  tone?: "default" | "onDark" | "amber";
}

export default function SectionLabel({
  text,
  className,
  tone = "default",
}: SectionLabelProps) {
  const dotClass =
    tone === "amber"
      ? "bg-amber"
      : tone === "onDark"
        ? "bg-red"
        : "bg-red";
  const textClass =
    tone === "amber"
      ? "text-amber"
      : tone === "onDark"
        ? "text-red-light"
        : "text-red";

  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <span
        className={`w-6 h-0.5 transition-all duration-300 ${dotClass}`}
        aria-hidden="true"
      />
      <span
        className={`text-[11px] font-bold tracking-[3px] uppercase ${textClass}`}
      >
        {text}
      </span>
    </div>
  );
}
