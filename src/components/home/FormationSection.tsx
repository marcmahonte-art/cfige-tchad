import Image from "next/image";
import { ArrowRight, Clock, BarChart3, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formations } from "@/data/formations";

export function FormationSection() {
  return (
    <section id="formations" className="cfige-section bg-gray-50" aria-labelledby="formations-title">
      <div className="cfige-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
              Nos formations
            </p>
            <h2
              id="formations-title"
              className="mt-3 text-[30px] font-bold leading-[38px] text-gray-900 md:text-[40px] md:leading-[48px]"
            >
              Des formations pensées pour le monde professionnel
            </h2>
            <p className="mt-3 text-base leading-6 text-gray-600">
              Développez les compétences dont vous avez besoin pour évoluer dans
              votre carrière ou votre entreprise.
            </p>
          </div>
          <a
            href="#formations"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Toutes les formations
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {formations.map((f) => (
            <article
              key={f.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cfige-md"
            >
              <div className="relative h-[180px] w-full overflow-hidden">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 290px"
                  className="object-cover"
                />
                <Badge variant="primary" className="absolute left-3 top-3">
                  {f.category}
                </Badge>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[18px] font-semibold leading-6 text-gray-900">
                  {f.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-5 text-gray-600">
                  {f.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {f.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <BarChart3 className="h-3.5 w-3.5" />
                    {f.level}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[18px] font-bold text-gray-900">
                  <Tag className="h-4 w-4 text-primary" />
                  {f.price}
                </div>

                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                >
                  Voir la formation
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
