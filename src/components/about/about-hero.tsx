import Image from "next/image";
import { UsersRound, GraduationCap, CalendarDays, Star } from "lucide-react";

export function AboutHero() {
  return (
    <section
      className="relative pt-6 pb-12 overflow-hidden"
      aria-labelledby="about-hero-title"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-[.92fr_1.25fr] lg:gap-8 md:gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">À PROPOS —</p>
            <h1
              id="about-hero-title"
              className="mt-2 text-[36px] font-bold leading-[1.12] tracking-[-0.035em] text-white"
            >
              Qui <span className="text-primary">sommes-nous ?</span>
            </h1>
            <p className="mt-4 max-w-[335px] text-[11px] leading-[1.8] text-[#303B45]">
              CFIGE (Centre de Formation Informatique et de Gestion) accompagne
              étudiants, professionnels, entreprises et organisations dans le
              développement de compétences pratiques, numériques et managériales
              adaptées aux exigences du marché.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/images/apropos/apropos.png"
              alt="Portrait de l'équipe CFIGE au bureau"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 540px"
            />
            <div
              className="absolute inset-0 bg-black/30 z-10 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}