import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Ordinateurs Portables",
    price: "À partir de 250 000 FCFA",
    image: "/images/apps-1.jpg",
  },
  {
    title: "Ordinateurs de Bureau",
    price: "À partir de 180 000 FCFA",
    image: "/images/apps-2.jpg",
  },
  {
    title: "Imprimantes",
    price: "À partir de 75 000 FCFA",
    image: "/images/apps-3.jpg",
  },
  {
    title: "Équipements Réseaux",
    price: "À partir de 45 000 FCFA",
    image: "/images/dev-web.jpg",
  },
];

export function ProductsSection() {
  return (
    <section
      className="cfige-section bg-white"
      aria-labelledby="products-title"
    >
      <div className="cfige-container">
        <div className="grid gap-8 lg:grid-cols-[285px_1fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-primary">
              Nos Produits
            </p>
            <h2
              id="products-title"
              className="mt-3 text-[28px] font-bold leading-[34px] text-gray-900"
            >
              Vente de Matériels
            </h2>
            <p className="mt-3 max-w-[270px] text-[13px] leading-[18px] text-gray-500">
              Équipez votre organisation avec du matériel informatique fiable,
              sélectionné et livré par le CFIGE.
            </p>
            <Button
              asChild
              className="mt-5 h-[30px] rounded-[4px] px-4 text-[11px]"
            >
              <a href="#contact">
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {products.map((p) => (
              <article
                key={p.title}
                className="overflow-hidden rounded-[8px] border border-[#EEF0F2] bg-white shadow-[0_3px_13px_rgba(17,30,42,.035)]"
              >
                <div className="relative h-[100px] w-full bg-gray-50 p-3">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 767px) 45vw, 200px"
                    className="object-contain"
                  />
                </div>
                <div className="px-3 pb-3 pt-2">
                  <h3 className="text-[13px] font-semibold leading-tight text-gray-900">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[12px] text-gray-500">{p.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
