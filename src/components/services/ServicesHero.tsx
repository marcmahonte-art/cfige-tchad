import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesHero() {
  return (
    <section className="bg-gradient-to-b from-primary-light/40 to-white">
      <div className="cfige-container py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            Solutions IT & Conseil
          </p>
          <h1 className="mt-3 text-[36px] font-bold leading-[44px] text-gray-900 md:text-[52px] md:leading-[60px]">
            Des services numériques pour votre organisation
          </h1>
          <p className="mt-4 text-lg leading-7 text-gray-600">
            Du développement web à la transformation digitale, le CFIGE conçoit,
            déploie et accompagne vos projets technologiques au Tchad.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href="#contact">
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/formations">
                Voir nos formations
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
