interface MarqueeBarProps {
  items: string[];
}

export default function MarqueeBar({ items }: MarqueeBarProps) {
  // Duplicate items to create a seamless loop
  const allItems = [...items, ...items];

  return (
    <div className="bg-grey-100 py-3.5 overflow-hidden border-y border-grey-300 relative group">
      {/* Gradient fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-grey-100 to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-grey-100 to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <div
        className="flex gap-16 whitespace-nowrap group-hover:[animation-play-state:paused]"
        style={{ animation: "marquee 30s linear infinite" }}
        aria-hidden="true"
      >
        {allItems.map((item, index) => (
          <span
            key={index}
            className="text-[11px] font-bold tracking-[2.5px] uppercase text-grey-500 inline-flex items-center gap-4"
          >
            {item}
            <span className="text-red">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
