import { ChevronRight } from "lucide-react";

interface AudiencePricingCardProps {
  title: string;
  icon: React.ReactNode;
  rows: { label: string; price: string }[];
}

export function AudiencePricingCard({
  title,
  icon,
  rows,
}: AudiencePricingCardProps) {
  return (
    <div className="flex flex-col rounded-[10px] border border-[#E9ECEF] bg-white shadow-[0_3px_14px_rgba(17,30,42,.035)]">
      <div className="flex items-center gap-3 border-b border-[#E9ECEF] px-6 py-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF1F2] text-primary">
          {icon}
        </span>
        <h3 className="text-[16px] font-bold leading-5 text-[#17212B]">{title}</h3>
      </div>
      <div className="divide-y divide-[#E9ECEF]">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between px-6 py-4"
          >
            <span className="text-[13px] text-[#303A43]">{row.label}</span>
            <span className="text-[14px] font-bold text-primary">{row.price}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-[#E9ECEF] px-6 py-3">
        <span className="flex items-center gap-1 text-[12px] font-semibold text-primary">
          Voir le détail
          <ChevronRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}
