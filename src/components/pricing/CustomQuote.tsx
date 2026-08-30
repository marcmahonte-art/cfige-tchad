import { FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CustomQuote() {
  return (
    <section className="cfige-section bg-gray-900 border-b border-gray-800" aria-labelledby="custom-quote-title">
      <div className="cfige-container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-primary-light">
                SUR MESURE &amp; CONVENTIONS
              </span>
            </div>
            <h2 id="custom-quote-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Besoin d&apos;un programme sur mesure ?
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-300 max-w-2xl">
              Le CFIGE conçoit des modules spécifiques pour les entreprises, ONG et institutions publiques avec tarification négociée, calendrier adapté et reporting pédagogique dédié.
            </p>
          </div>
          <div className="flex flex-col items-stretch sm:items-start gap-4">
            <Button asChild size="lg" className="h-12 px-8 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark shadow-cfige-md">
              <a href="#contact" className="flex items-center gap-2">
                <span>Demander un devis personnalisé</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
