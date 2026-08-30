import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CustomQuote() {
  return (
    <section className="cfige-section bg-[#192A37]" aria-labelledby="custom-quote-title">
      <div className="container-site">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 id="custom-quote-title" className="text-[28px] font-bold tracking-[-0.025em] text-white">
              Des offres personnalisées, sur devis.
            </h2>
            <p className="mt-3 text-[13px] leading-[1.7] text-gray-300">
              Le CFIGE peut accorder des conditions préférentielles selon le
              volume, le partenariat ou l&apos;impact stratégique de votre projet.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6">
            <Button asChild size="lg" className="h-[44px] px-8">
              <a href="#contact">
                Demander un devis
                <FileText className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
