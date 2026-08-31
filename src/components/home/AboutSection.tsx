import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="apropos" className="cfige-section bg-white" aria-labelledby="apropos-title">
      <div className="cfige-container grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative flex w-full items-center justify-center">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/logo.png"
                alt={`${site.name} — ${site.fullName}`}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            À propos du CFIGE
          </p>
          <h2
            id="apropos-title"
            className="mt-3 max-w-[560px] text-[30px] font-bold leading-[38px] text-gray-900 md:text-[40px] md:leading-[48px]"
          >
            Un partenaire pour vos compétences et votre transformation digitale
          </h2>
          <div className="mt-5 max-w-[560px] space-y-4 text-base leading-relaxed text-gray-600">
            <p>
              Au croisement des enjeux académiques et des réalités professionnelles, <span className="font-semibold text-gray-900">LE CFIGE</span> accompagne les ambitions des étudiants, des PME, des ONG et des administrations au Tchad et en Afrique centrale.
            </p>
            <p>
              Nous combinons <span className="font-semibold text-gray-900">rigueur fiscale</span>, <span className="font-semibold text-gray-900">excellence managériale</span> et <span className="font-semibold text-gray-900">solutions technologiques innovantes</span> afin de transformer vos défis quotidiens en véritables leviers de croissance et de performance.
            </p>
            <p className="text-sm font-medium text-primary">
              CONSEIL • FORMATION • DIGITAL • EXTERNALISATION
            </p>
          </div>
          <div className="mt-6">
            <Button asChild variant="outline">
              <a href="/a-propos">
                Découvrir le CFIGE
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
