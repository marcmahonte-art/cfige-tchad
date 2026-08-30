import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export function PricingIntro() {
  return (
    <section className="cfige-section bg-white" aria-labelledby="pricing-intro-title">
      <div className="container-site">
        <Card className="border border-[#E9ECEF] p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF1F2] text-primary">
              <BookOpen className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div>
              <h2
                id="pricing-intro-title"
                className="text-[25px] font-bold leading-[31px] text-[#17212B]"
              >
                Politique d&apos;investissement Formation CFIGE
              </h2>
              <p className="mt-3 text-[13px] leading-[1.7] text-[#303A43]">
                Le CFIGE adopte une politique tarifaire compétitive visant à
                rendre les formations professionnelles accessibles tout en
                garantissant une qualité d&apos;exécution élevée.
              </p>
              <p className="mt-2 text-[12px] leading-[1.6] text-[#69737D]">
                Les coûts indiqués constituent des fourchettes d&apos;investissement
                et peuvent être ajustés selon le niveau, la durée, le format et
                les besoins spécifiques du client.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
