"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Clock, BarChart3, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formations } from "@/data/formations";

export function FormationSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

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
          <div className="flex shrink-0 items-center gap-2">
            <a
              href="#formations"
              className="mr-2 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Toutes les formations
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Formations précédentes"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Formations suivantes"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:thin]"
        >
          {formations.map((f) => (
            <article
              key={f.slug}
              className="group flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cfige-md"
            >
              <div className="relative h-[180px] w-full overflow-hidden">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  sizes="300px"
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
