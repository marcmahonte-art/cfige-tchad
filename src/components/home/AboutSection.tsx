import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="apropos" className="cfige-section bg-white" aria-labelledby="apropos-title">
      <div className="cfige-container grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[16px] border border-gray-200 shadow-cfige-sm">
            <Image
              src="/images/dev-web.jpg"
              alt="Apprenants en formation au CFIGE à N'Djaména"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
            />
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
          <p className="mt-5 max-w-[560px] text-base leading-6 text-gray-600">
            Le CFIGE accompagne les étudiants, professionnels, entreprises et
            organisations dans le développement de compétences pratiques et dans
            l&apos;adoption de solutions numériques adaptées à leurs besoins.
          </p>
          <div className="mt-6">
            <Button asChild variant="outline">
              <a href="#apropos">
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
