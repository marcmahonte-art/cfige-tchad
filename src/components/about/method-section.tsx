import { UserRoundCheck, BookOpen, ShieldCheck } from "lucide-react";
import { methods } from "@/data/about";

const methodIcons: Record<string, React.ElementType> = {
  UserRoundCheck,
  BookOpen,
  ShieldCheck,
};

export function MethodSection() {
  return (
    <section
      className="cfige-section bg-white py-12 lg:py-16 border-b border-[#ECEEF0]"
      aria-labelledby="method-title"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#E30613]">
            NOTRE MÉTHODE
          </p>
          <h2
            id="method-title"
            className="mt-2 text-2xl sm:text-[28px] font-bold leading-[34px] tracking-[-0.025em] text-[#17212B]"
          >
            Comment nous travaillons
          </h2>
          <span className="mx-auto mt-3 block h-0.5 w-8 rounded-full bg-[#E30613]" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-5">
          {methods.map((m) => {
            const Icon = methodIcons[m.icon] || UserRoundCheck;
            return (
              <article
                key={m.number}
                className="group relative flex flex-col rounded-xl border border-[#ECEEF0] bg-white p-6 pt-7 shadow-[0_3px_14px_rgba(17,30,42,0.035)] transition-all hover:border-red-200 hover:shadow-[0_10px_26px_rgba(17,30,42,0.07)]"
              >
                {/* Floating number badge */}
                <span
                  className="absolute -top-3.5 left-6 flex h-7 w-7 items-center justify-center rounded-full bg-[#E30613] text-[11px] font-bold text-white shadow-sm ring-4 ring-white"
                  aria-hidden="true"
                >
                  {m.number}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF1F2] text-[#E30613] mb-4">
                  <Icon className="h-5 w-5" strokeWidth={1.9} />
                </div>

                <h3 className="text-[15px] font-bold tracking-[-0.015em] text-[#17212B]">
                  {m.title}
                </h3>
                <p className="mt-2 text-[12px] leading-[1.65] text-[#414A53]">
                  {m.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
