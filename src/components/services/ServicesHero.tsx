import Image from "next/image";
import { Home, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProofStrip } from "./ProofStrip";

export function ServicesHero() {
  return (
    <section className="bg-[#FDFDFE]">
      <div className="cfige-container">
        {/* Breadcrumb */}
        <nav
          aria-label="Fil d'Ariane"
          className="flex items-center gap-2 pt-6 text-[11px] text-gray-500"
        >
          <a href="/" className="inline-flex items-center gap-1 hover:text-primary">
            <Home className="h-3.5 w-3.5" />
            Accueil
          </a>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="font-semibold text-gray-700">
            Services &amp; Produits
          </span>
        </nav>

        {/* Hero */}
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[55fr_45fr]">
          <div>
            <p className="text-[28px] font-medium leading-[34px] text-primary">
              CFIGE —
            </p>
            <h1 className="mt-2 text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-[#1A2733] md:text-[47px]">
              Services &amp; Produits
            </h1>
            <span className="mt-3 block h-[3px] w-10 rounded-full bg-primary" />
            <p className="mt-5 text-[19px] font-medium leading-7 text-gray-700">
              Nous ne vous donnons pas seulement des conseils, nous implémentons des solutions.
            </p>
            <p className="mt-3 max-w-[520px] text-[14px] leading-relaxed text-gray-600">
              Du développement web aux tableaux de bord décisionnels (Power BI, Excel), en passant par la maintenance IT, les diagnostics de performance pour PME/PMI et l&apos;externalisation de gestion, le CFIGE conçoit et déploie des solutions technologiques et managériales adaptées à vos réalités.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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

          <div className="relative">
            <div className="overflow-hidden rounded-[46%_0_0_46%] border-l-[10px] border-primary">
              <div className="relative aspect-[454/374] w-full">
                <Image
                  src="/images/hero.png"
                  alt="Équipe du CFIGE devant le bâtiment"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 540px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <ProofStrip />
      </div>
    </section>
  );
}
