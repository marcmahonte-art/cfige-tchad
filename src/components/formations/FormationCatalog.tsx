"use client";

import * as React from "react";
import Image from "next/image";
import { Search, ArrowRight, Clock, BarChart3, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formations } from "@/data/formations";

const PAGE_SIZE = 6;

export function FormationCatalog() {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("Toutes");
  const [page, setPage] = React.useState(1);

  const categories = React.useMemo(
    () => ["Toutes", ...Array.from(new Set(formations.map((f) => f.category)))],
    []
  );

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return formations.filter((f) => {
      const matchQ =
        !q ||
        f.title.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q);
      const matchC = category === "Toutes" || f.category === category;
      return matchQ && matchC;
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  React.useEffect(() => {
    setPage(1);
  }, [query, category]);

  const start = (page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  return (
    <section className="cfige-section bg-gray-50" aria-labelledby="catalog-title">
      <div className="cfige-container">
        {/* En-tête + recherche + filtres */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
              Catalogue
            </p>
            <h2
              id="catalog-title"
              className="mt-3 text-[30px] font-bold leading-[38px] text-gray-900 md:text-[40px] md:leading-[48px]"
            >
              Toutes nos formations
            </h2>
            <p className="mt-3 text-base leading-6 text-gray-600">
              Recherchez, filtrez et trouvez la formation adaptée à votre
              projet professionnel.
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher une formation…"
                aria-label="Rechercher une formation"
                className="pl-10"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Filtrer par catégorie"
              className="h-12 rounded-[8px] border border-gray-300 bg-white px-3.5 text-[16px] text-gray-900 focus-visible:border-primary focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)] focus-visible:outline-none"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Catégories */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)]",
                  active
                    ? "border-primary bg-primary text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-primary hover:text-primary",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Grille */}
        {visible.length === 0 ? (
          <p className="mt-12 text-center text-gray-500">
            Aucune formation ne correspond à votre recherche.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((f) => (
              <article
                key={f.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cfige-md"
              >
                <div className="relative h-[180px] w-full overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
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
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              aria-label="Page précédente"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-100 disabled:opacity-40 focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                aria-label={`Page ${p}`}
                aria-current={p === page ? "page" : undefined}
                className={[
                  "inline-flex h-11 min-w-11 items-center justify-center rounded-full border px-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)]",
                  p === page
                    ? "border-primary bg-primary text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-primary hover:text-primary",
                ].join(" ")}
              >
                {p}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              aria-label="Page suivante"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-100 disabled:opacity-40 focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
