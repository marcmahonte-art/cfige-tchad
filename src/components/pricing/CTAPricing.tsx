import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function CTAPricing() {
  return (
    <section className="cfige-section bg-primary text-white" aria-labelledby="cta-pricing-title">
      <div className="cfige-container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-white/80">
              COMMENCEZ DÈS AUJOURD&apos;HUI
            </span>
            <h2 id="cta-pricing-title" className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Prêt à booster vos compétences ?
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/90 max-w-2xl">
              Contactez nos conseillers pédagogiques dès aujourd&apos;hui pour choisir la formation adaptée et bénéficier d&apos;un devis ou plan de paiement personnalisé.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch">
            <Button asChild size="lg" className="h-12 px-8 rounded-xl bg-white text-primary font-bold hover:bg-white/90 shadow-cfige-md">
              <a href="#contact" className="flex items-center justify-center gap-2">
                <span>Nous contacter</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 rounded-xl border-2 border-white/80 text-white font-bold hover:bg-white/10">
              <a
                href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent("Bonjour CFIGE, je souhaite obtenir des informations sur les tarifs et modalités d'inscription.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp direct</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
