import { methods } from "@/data/about";
import { UserRoundCheck, BookOpen, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const methodIcons: Record<string, React.ElementType> = {
  "01": UserRoundCheck,
  "02": BookOpen,
  "03": ShieldCheck,
};

export function MethodSection() {
  return (
    <section
      className="cfige-section bg-white"
      aria-labelledby="method-title"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            NOTRE MÉTHODE
          </p>
          <h2
            id="method-title"
            className="mt-3 text-[25px] font-bold leading-[31px] text-center text-gray-900"
          >
            Comment nous travaillons
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {methods.map((m) => {
            const Icon = methodIcons[m.number];
            return (
              <article
                key={m.number}
                className="group relative rounded-[9px] border border-[#ECEEF0] bg-white p-[20px_16px_15px_84px] shadow-[0_4px_14px_rgba(17,30,42,.03)] transition-colors hover:border-red-200 hover:shadow-[0_14px_32px_rgba(17,30,42,.09)]"
              >
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ borderTop: "1px dashed rgba(225,11,26,.55)" }}
                />
                <span
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#E10B1A] text-[11px] font-bold text-white"
                  aria-hidden="true"
                >
                  {m.number}
                </span>
                {Icon && (
                  <span className="absolute bottom-[-13px] left-[25px] z-20 grid size-12 place-items-center rounded-full bg-[#FFF1F2] text-[#E10B1A]">
                    <Icon className="size-6" strokeWidth={1.8} />
                  </span>
                )}
                <div className="pt-3">
                  <h3 className="text-[11px] font-bold">{m.title}</h3>
                  <p className="mt-1 text-[9.5px] leading-[16px]">
                    {m.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}