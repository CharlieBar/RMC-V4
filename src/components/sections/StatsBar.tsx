import type { Stat } from "@content/types/content";
import { ScrollReveal, CountUp } from "@/components/animations";

interface StatsBarProps {
  stats: Stat[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="bg-grey-100 py-4 px-[5vw]">
      <ScrollReveal variant="fade">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {stats.map((stat) => {
            const numericValue = parseFloat(stat.value);
            const isNumeric = !isNaN(numericValue);
            return (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl text-navy">
                  {isNumeric ? (
                    <CountUp value={numericValue} suffix={stat.suffix ?? ""} />
                  ) : (
                    <>
                      {stat.value}
                      {stat.suffix && <span>{stat.suffix}</span>}
                    </>
                  )}
                </div>
                <div className="text-xs font-medium tracking-wide uppercase text-grey-500 mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </div>
  );
}
