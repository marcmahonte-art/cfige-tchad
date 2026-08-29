import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EnterpriseCTA() {
  return (
    <section className="cfige-section bg-white" aria-labelledby="cta-title">
      <div className="cfige-container">
        <div className="relative overflow-hidden rounded-2xl bg-gray-50 px-6 py-16 text-center md:px-16 md:py-20">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/[0.06]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/[0.06]"
          />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
              Entreprises &amp; particuliers
            </p>
            <h2
              id="cta-title"
              className="mx-auto mt-3 max-w-2xl text-[30px] font-bold leading-[38px] text-gray-900 md:text-[40px] md:leading-[48px]"
            >
              Prêt à développer vos compétences ou votre activité ?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-6 text-gray-600">
              Parlons de votre projet.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12">
                <a href="#contact">
                  S&apos;inscrire
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12">
                <a href="#contact">
                  <FileText className="h-5 w-5" />
                  Demander un devis
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
