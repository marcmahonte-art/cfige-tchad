import { Percent } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function DiscountSection() {
  return (
    <section className="cfige-section bg-white" aria-labelledby="discount-title">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            RÉDUCTIONS —
          </p>
          <h2 id="discount-title" className="mt-3 text-[28px] font-bold tracking-[-0.025em] text-[#17212B]">
            Politique de Remises
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Étudiants */}
          <div className="rounded-[10px] border border-[#E9ECEF] bg-white p-6 shadow-[0_3px_14px_rgba(17,30,42,.035)]">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1F2] text-primary">
                <Percent className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="text-[16px] font-bold text-[#17212B]">Étudiants</h3>
            </div>
            <p className="text-[28px] font-extrabold text-primary">10 %</p>
            <p className="text-[12px] text-[#69737D]">à 20 %</p>
            <p className="mt-1 text-[11px] text-[#69737D]">selon programme</p>
          </div>

          {/* Groupes */}
          <div className="rounded-[10px] border border-[#E9ECEF] bg-white p-6 shadow-[0_3px_14px_rgba(17,30,42,.035)]">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1F2] text-primary">
                <Percent className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="text-[16px] font-bold text-[#17212B]">Groupes</h3>
            </div>
            <div className="divide-y divide-[#E9ECEF]">
              {[
                { qty: "3–5 personnes", rate: "5 %" },
                { qty: "6–10 personnes", rate: "10 %" },
                { qty: "11–20 personnes", rate: "15 %" },
                { qty: "+20 personnes", rate: "Négociable" },
              ].map((row, i) => (
                <div key={row.qty} className="flex items-center justify-between py-3">
                  <span className="text-[12px] text-[#303A43]">{row.qty}</span>
                  <span className={row.rate === "Négociable" ? "text-primary font-bold" : "text-[13px] font-semibold text-[#17212B]"}>
                    {row.rate}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Partenaires */}
          <div className="rounded-[10px] border border-[#E9ECEF] bg-white p-6 shadow-[0_3px_14px_rgba(17,30,42,.035)]">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF1F2] text-primary">
                <Percent className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="text-[16px] font-bold text-[#17212B]">Partenaires institutionnels</h3>
            </div>
            <p className="text-[28px] font-extrabold text-primary">10 %</p>
            <p className="text-[12px] text-[#69737D]">à 30 %</p>
            <p className="mt-1 text-[11px] text-[#69737D]">
              selon volume annuel et convention
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}