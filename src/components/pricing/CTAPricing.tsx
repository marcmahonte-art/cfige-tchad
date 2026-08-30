import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTAPricing() {
  return (
    <section className="cfige-section bg-[#E30613]" aria-labelledby="cta-pricing-title">
      <div className="container-site">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div className="relative">
            <h2 id="cta-pricing-title" className="text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-white">
              Prêt à investir dans votre avenir ?
            </h2>
            <p className="mt-4 text-[14px] leading-[1.7] text-white/90">
              Contactez-nous dès aujourd&apos;hui pour obtenir un devis personnalisé.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="h-[44px] px-8 bg-white text-primary hover:bg-white/90">
              <a href="#contact">Nous contacter</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-[44px] px-8 border-white text-white hover:bg-white/10">
              <a href={`https://wa.me/23566910296`}>WhatsApp</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}