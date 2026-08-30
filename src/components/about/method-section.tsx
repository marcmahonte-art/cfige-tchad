import { methods } from "@/data/about";
import { Card } from "@/components/ui/card";

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

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {methods.map((m) => (
            <article
              key={m.number}
              className="group relative rounded-[9px] border border-[#ECEEF0] bg-white p-[20px_16px_15px_84px] shadow-[0_4px_14px_rgba(17,30,42,.03)] transition-colors hover:border-red-200 hover:shadow-[0_14px_32px_rgba(17,30,42,.09)]"
            >
              <div
                className="absolute inset-0 overflow-hidden"
              >
                <div
                  className="float-left w-12 h-12 rounded-full bg-[#E10B1A] text-center text-white text-[11px] font-bold absolute top-[-13px] left-[25px]"
                >
                  {m.number}
                </div>
              </div>
              <div className="pt-3">
                <h3 className="text-[11px] font-bold">{m.title}</h3>
                <p className="mt-1 text-[9.5px] leading-[16px]">{m.description}</p>
              </div>
              <hr
                className="mt-4 border-t border-dashed border-red-200/50"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}