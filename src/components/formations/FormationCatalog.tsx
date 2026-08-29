"use client";

import * as React from "react";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Search,
  ArrowRight,
  Clock,
  BarChart3,
  Tag,
  ChevronLeft,
  ChevronRight,
  SearchX,
  SlidersHorizontal,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { formations } from "@/data/formations";

const PAGE_SIZE = 6;

const LEVELS = ["Tous", "Débutant", "Intermédiaire", "Avancé"];
const MODES = ["Tous", "Présentiel", "Hybride", "En ligne"];

const selectClass =
  "h-12 rounded-[8px] border border-gray-300 bg-white px-3.5 text-[15px] text-gray-900 focus-visible:border-primary focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)] focus-visible:outline-none";

function FormationSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="h-[180px] w-full animate-pulse bg-gray-200" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="h-4 w-24 animate-pulse rounded-full bg-gray-200" />
        <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
        <div className="h-3 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-3 w-5/6 animate-pulse rounded bg-gray-200" />
        <div className="mt-2 flex gap-4">
          <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
        </div>
        <div className="h-5 w-24 animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
      </div>
    </div>
  );
}

export function FormationCatalog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = React.useState(searchParams.get("q") ?? "");
  const [category, setCategory] = React.useState(
    searchParams.get("category") ?? "Toutes"
  );
  const [level, setLevel] = React.useState(searchParams.get("level") ?? "Tous");
  const [mode, setMode] = React.useState(searchParams.get("mode") ?? "Tous");
  const [page, setPage] = React.useState(
    Number(searchParams.get("page") ?? "1")
  );
  const [loading, setLoading] = React.useState(true);

  const categories = React.useMemo(
    () => ["Toutes", ...Array.from(new Set(formations.map((f) => f.category)))],
    []
  );

  // Synchronise l'état -> URL (partage, historique, réutilisation des filtres)
  React.useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category !== "Toutes") params.set("category", category);
    if (level !== "Tous") params.set("level", level);
    if (mode !== "Tous") params.set("mode", mode);
    if (page !== 1) params.set("page", String(page));
    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [query, category, level, mode, page, pathname, router]);

  // Synchronise URL -> état (retour/avance navigateur, lien partagé)
  React.useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
    setCategory(searchParams.get("category") ?? "Toutes");
    setLevel(searchParams.get("level") ?? "Tous");
    setMode(searchParams.get("mode") ?? "Tous");
    setPage(Number(searchParams.get("page") ?? "1"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return formations.filter((f) => {
      const matchQ =
        !q ||
        f.title.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q);
      const matchC = category === "Toutes" || f.category === category;
      const matchL = level === "Tous" || f.level === level;
      const matchM = mode === "Tous" || f.mode === mode;
      return matchQ && matchC && matchL && matchM;
    });
  }, [query, category, level, mode]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  // Retour à la page 1 lorsqu'un filtre change
  const mounted = React.useRef(false);
  React.useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    setPage(1);
  }, [query, category, level, mode]);

  // État de chargement (skeleton) lors des changements de filtres / pagination
  React.useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [category, level, mode, page]);

  const start = (page - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  const resetFilters = () => {
    setQuery("");
    setCategory("Toutes");
    setLevel("Tous");
    setMode("Tous");
    setPage(1);
  };

  const filtersNode = (
    <>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Filtrer par catégorie"
        className={selectClass}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c === "Toutes" ? "Toutes les catégories" : c}
          </option>
        ))}
      </select>
      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        aria-label="Filtrer par niveau"
        className={selectClass}
      >
        {LEVELS.map((l) => (
          <option key={l} value={l}>
            {l === "Tous" ? "Tous niveaux" : l}
          </option>
        ))}
      </select>
      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        aria-label="Filtrer par mode"
        className={selectClass}
      >
        {MODES.map((m) => (
          <option key={m} value={m}>
            {m === "Tous" ? "Tous modes" : m}
          </option>
        ))}
      </select>
    </>
  );

  return (
    <section className="cfige-section bg-gray-50" aria-labelledby="catalog-title">
      <div className="cfige-container">
        {/* En-tête */}
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
            Recherchez, filtrez et trouvez la formation adaptée à votre projet
            professionnel.
          </p>
        </div>

        {/* Filtres */}
        <div className="mt-8 rounded-[12px] border border-gray-200 bg-white p-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
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
            <div className="hidden gap-3 lg:flex">{filtersNode}</div>
            <button
              type="button"
              onClick={() => setPage(1)}
              className="inline-flex h-12 items-center justify-center rounded-[10px] bg-primary px-6 text-[15px] font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)]"
            >
              Filtrer
            </button>
            {/* Mobile : bouton ouvrant le Sheet de filtres */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filtres
                </Button>
              </SheetTrigger>
              <SheetContent className="p-6">
                <SheetTitle>Filtres</SheetTitle>
                <div className="mt-6 flex flex-col gap-4">
                  <label className="text-sm font-medium text-gray-700">
                    Catégorie
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className={`mt-1.5 w-full ${selectClass}`}
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c === "Toutes" ? "Toutes les catégories" : c}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="text-sm font-medium text-gray-700">
                    Niveau
                    <select
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      className={`mt-1.5 w-full ${selectClass}`}
                    >
                      {LEVELS.map((l) => (
                        <option key={l} value={l}>
                          {l === "Tous" ? "Tous niveaux" : l}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="text-sm font-medium text-gray-700">
                    Mode
                    <select
                      value={mode}
                      onChange={(e) => setMode(e.target.value)}
                      className={`mt-1.5 w-full ${selectClass}`}
                    >
                      {MODES.map((m) => (
                        <option key={m} value={m}>
                          {m === "Tous" ? "Tous modes" : m}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="mt-8 flex gap-3">
                  <Button
                    variant="ghost"
                    className="flex-1"
                    onClick={resetFilters}
                  >
                    Réinitialiser
                  </Button>
                  <SheetClose asChild>
                    <Button className="flex-1">Appliquer</Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Catégories (onglets) */}
          <div className="mt-4 flex gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={[
                    "shrink-0 rounded-[8px] border px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(227,6,19,.12)]",
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
        </div>

        {/* Grille / Skeleton / Vide */}
        {loading ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <FormationSkeleton key={i} />
            ))}
          </div>
        ) : visible.length === 0 ? (
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center">
            <SearchX className="h-10 w-10 text-gray-400" aria-hidden="true" />
            <div>
              <p className="text-lg font-semibold text-gray-900">
                Aucune formation trouvée
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Essayez d'ajuster votre recherche ou vos filtres.
              </p>
            </div>
            <Button variant="outline" onClick={resetFilters}>
              Réinitialiser les filtres
            </Button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
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
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {f.mode}
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
        {!loading && totalPages > 1 && (
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
