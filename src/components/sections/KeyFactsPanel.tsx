import type { KeyFact } from "@content/types/content";

interface KeyFactsPanelProps {
  facts: KeyFact[];
}

export default function KeyFactsPanel({ facts }: KeyFactsPanelProps) {
  return (
    <div className="bg-navy-mid p-10">
      <div className="space-y-0">
        {facts.map((fact) => (
          <div key={fact.label} className="border-l-2 border-red pl-4 py-3">
            <div className="text-[11px] uppercase tracking-wider text-grey-500 mb-0.5">
              {fact.label}
            </div>
            <div className="text-white font-semibold text-[15px]">
              {fact.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
