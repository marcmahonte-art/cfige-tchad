import { ChevronRight } from "lucide-react";

interface FormatPriceCardProps {
  number: string;
  name: string;
  duration: string;
  price: string;
  recommended?: boolean;
}

export function FormatPriceCard({
  number,
  name,
  duration,
  price,
  recommended,
}: FormatPriceCardProps) {
  return (
    <div
      className={[
        "group relative flex flex-col rounded-[10px] border border-[#E9ECEF] bg-white p-6 shadow-[0_3px_14px_rgba(17,30,42,.035)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(17,30,42,.07)]",
        recommended ? "border-primary ring-1 ring-primary md:mt-[-8px]" : "",
      ].join(" ")}
    >
      {recommended && (
        <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-white">
          Recommandé
        </span>
      )}
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1F2] text-primary text-sm font-bold">
          {number}
        </span>
        <h3 className="text-[16px] font-bold leading-5 text-[#17212B]">{name}</h3>
      </div>
      <p className="text-[12px] leading-[1.5] text-[#69737D]">{duration}</p>
      <div className="mt-auto pt-6">
        <span className="text-[31px] font-extrabold leading-none text-primary">
          {price}
        </span>
        <span className="block text-[11px] font-medium text-[#69737D] mt-1">
          FCFA
        </span>
        <div className="mt-4 flex items-center gap-1 text-primary">
          <span className="text-[12px] font-semibold">Découvrir</span>
          <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}