import { ChevronRight } from "lucide-react";

interface AudiencePricingCardProps {
  title: string;
  icon: React.ReactNode;
  badge?: string;
  rows: { label: string; price: string }[];
}

export function AudiencePricingCard({
  title,
  icon,
  badge,
  rows,
}: AudiencePricingCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white shadow-cfige-sm overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-cfige-md">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 bg-gray-50/50">
        <div className="flex items-center gap-3.5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
            {icon}
          </span>
          <h3 className="text-base font-bold text-gray-900 leading-snug">
            {title}
          </h3>
        </div>
        {badge && (
          <span className="text-[11px] font-bold text-primary bg-primary-light px-2.5 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>

      <div className="divide-y divide-gray-100 flex-grow">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-gray-50/70"
          >
            <span className="text-sm font-medium text-gray-700">{row.label}</span>
            <div className="text-right">
              <span className="text-sm font-bold text-primary">{row.price}</span>
              <span className="text-[11px] text-gray-400 block -mt-0.5">FCFA</span>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 p-4 bg-gray-50/30">
        <a
          href="#contact"
          className="flex items-center justify-center gap-1.5 text-xs font-bold text-primary hover:underline"
        >
          <span>Consulter les disponibilités</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
