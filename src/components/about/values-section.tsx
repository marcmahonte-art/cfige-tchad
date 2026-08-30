import { Target, Handshake, Lightbulb, Globe2, BadgeCheck, Link2 } from "lucide-react";
import { values } from "@/data/about";

const valueIcons: Record<string, React.ElementType> = {
  Target,
  Handshake,
  Lightbulb,
  Globe2,
  BadgeCheck,
  Link2,
};

export function ValuesSection() {
  return (
    <section
      className="cfige-section bg-white py-12 lg:py-16 border-b border-[#ECEEF0]"
      aria-labelledby="values-title"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#E30613]">
            CE QUI NOUS GUIDE
          </p>
          <h2
            id="values-title"
            className="mt-2 text-2xl sm:text-[28px] font-bold leading-[34px] tracking-[-0.025em] text-[#17212B]"
          >
            Nos valeurs
          </h2>
          <span className="mx-auto mt-3 block h-0.5 w-8 rounded-full bg-[#E30613]" />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {values.map((v) => {
            const Icon = valueIcons[v.icon] || Target;
            return (
              <div
                key={v.title}
                className="flex flex-col p-5 sm:p-6 rounded-xl border border-[#ECEEF0] bg-white shadow-[0_3px_14px_rgba(17,30,42,0.03)] transition-all hover:border-red-200 hover:shadow-[0_8px_24px_rgba(17,30,42,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF1F2] text-[#E30613] mb-4 shrink-0">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="text-[15px] font-bold leading-5 tracking-[-0.015em] text-[#17212B]">
                  {v.title}
                </h3>
                <p className="mt-2 text-[12px] leading-[1.65] text-[#414A53]">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
