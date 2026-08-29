import Image from "next/image";
import { ArrowRight, GraduationCap, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-white"
      aria-labelledby="hero-title"
    >
      <div className="cfige-container grid grid-cols-1 items-center gap-10 py-14 md:py-16 lg:grid-cols-12 lg:gap-12">
        {/* Colonne gauche : 5 colonnes */}
        <div className="lg:col-span-5">
          <div
            className="cfige-reveal"
            style={{ animationDelay: "0ms" }}
          >
            <Badge variant="primary" className="h-7 px-2.5 text-xs">
              Centre de formation &amp; solutions IT
            </Badge>
          </div>

          <h1
            id="hero-title"
            className="cfige-reveal mt-5 text-[36px] font-bold leading-[44px] tracking-[-0.02em] text-gray-900 md:text-[56px] md:leading-[64px]"
            style={{ animationDelay: "60ms" }}
          >
            Développez vos compétences.
            <br />
            <span className="text-primary">Transformez votre avenir.</span>
          </h1>

          <p
            className="cfige-reveal mt-6 max-w-[520px] text-[18px] leading-7 text-gray-600"
            style={{ animationDelay: "120ms" }}
          >
            Formations professionnelles, solutions numériques et accompagnement
            des entreprises à N&apos;Djaména et partout au Tchad.
          </p>

          <div
            className="cfige-reveal mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "180ms" }}
          >
            <Button asChild size="lg" className="h-12 w-full sm:w-auto">
              <a href="#formations">
                Découvrir les formations
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full sm:w-auto"
            >
              <a href="#services">
                <Cpu className="h-5 w-5" />
                Nos solutions IT
              </a>
            </Button>
          </div>

          <p
            className="cfige-reveal mt-5 text-sm font-medium text-gray-500"
            style={{ animationDelay: "240ms" }}
          >
            Formation • Technologie • Conseil
          </p>
        </div>

        {/* Colonne droite : 7 colonnes */}
        <div className="cfige-reveal lg:col-span-7" style={{ animationDelay: "180ms" }}>
          <div className="relative">
            {/* Décorations (z-5, non interactives) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-4 -z-0 h-40 w-40 rounded-2xl border-2 border-primary/25"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 h-32 w-40 rounded-2xl bg-primary/[0.06]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-2 grid grid-cols-4 gap-1.5 opacity-[0.25]"
            >
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-primary" />
              ))}
            </div>

            {/* Image (z-10) */}
            <div className="relative z-10 aspect-[16/10] w-full overflow-hidden rounded-[20px] border border-gray-200 shadow-cfige-md">
              <Image
                src="/images/hero.png"
                alt="Apprenants en formation informatique au CFIGE à N'Djaména"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover"
              />
            </div>

            {/* Label flottant */}
            <div className="absolute -bottom-4 left-6 z-20 flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-4 py-2.5 shadow-cfige-md">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-light text-primary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-gray-900">
                Apprenants accompagnés
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
