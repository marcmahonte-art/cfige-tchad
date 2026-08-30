import {
  Calculator,
  ReceiptText,
  FileCheck2,
  ClipboardCheck,
  BriefcaseBusiness,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Check,
} from "lucide-react";
import { site } from "@/data/site";

const managementServices = [
  {
    title: "Comptabilité des entreprises",
    description:
      "Tenue et suivi de votre comptabilité, préparation des états financiers et accompagnement dans le suivi de vos opérations comptables.",
    icon: Calculator,
    href: "/services",
  },
  {
    title: "Fiscalité",
    description:
      "Optimisez votre gestion fiscale et bénéficiez d'un accompagnement dans vos obligations fiscales et réglementaires.",
    icon: ReceiptText,
    href: "/services",
  },
  {
    title: "Déclaration des impôts",
    description:
      "Nous vous accompagnons dans la préparation, le contrôle et le suivi de vos déclarations fiscales dans le respect des échéances.",
    icon: FileCheck2,
    href: "/services",
  },
  {
    title: "Audit",
    description:
      "Analysez votre organisation, identifiez les risques et améliorez la fiabilité de vos informations financières.",
    icon: ClipboardCheck,
    href: "/services",
  },
  {
    title: "Externalisation de la gestion",
    description:
      "Confiez certaines fonctions administratives, comptables et financières à nos experts pour gagner du temps et améliorer votre efficacité.",
    icon: BriefcaseBusiness,
    href: "/services",
  },
  {
    title: "Conseil en gestion",
    description:
      "Des conseils adaptés à vos besoins pour améliorer vos décisions, piloter votre activité et accompagner votre croissance.",
    icon: TrendingUp,
    href: "/services",
  },
];

export function ManagementServices() {
  const digits = site.whatsappNumber.replace(/[^0-9]/g, "");
  const advisorWhatsAppHref = `https://wa.me/${digits}?text=${encodeURIComponent(
    "Bonjour CFIGE, je souhaite échanger avec un conseiller concernant vos services en gestion d'entreprise."
  )}`;

  return (
    <section
      id="gestion"
      className="cfige-section bg-white border-b border-gray-100"
      aria-labelledby="management-services-title"
    >
      <div className="cfige-container">
        {/* Header de section */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
              NOS SERVICES EN GESTION
            </span>
            <span className="h-0.5 w-6 bg-primary" />
          </div>

          <h2
            id="management-services-title"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight"
          >
            Une gestion maîtrisée pour{" "}
            <span className="text-primary">une entreprise plus performante</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600">
            Nous accompagnons les entreprises dans leur comptabilité, leur fiscalité, leur audit et l&apos;externalisation de leurs fonctions de gestion afin de leur permettre de se concentrer sur leur activité.
          </p>
        </div>

        {/* Grille des 6 services (3x2 sur desktop, 2x3 sur tablette, 1 col sur mobile) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {managementServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-cfige-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-cfige-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary mb-4 shrink-0 transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>

                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600 flex-grow">
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bloc horizontal de mise en avant */}
        <div className="mt-10 rounded-2xl border border-red-100 bg-primary-light p-6 sm:p-8 shadow-cfige-sm">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-center">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                <ShieldCheck className="h-6 w-6" strokeWidth={2} />
              </span>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                  Un accompagnement fiable pour vos obligations
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-gray-700">
                  De la tenue comptable aux déclarations fiscales, en passant par l&apos;audit et le conseil, CFIGE vous accompagne avec une approche rigoureuse et adaptée aux réalités de votre entreprise.
                </p>
                <div className="mt-3.5 flex flex-wrap items-center gap-2.5 text-xs font-bold text-gray-800">
                  <span className="inline-flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-lg border border-red-200/60 shadow-xs">
                    <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
                    Comptabilité
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-lg border border-red-200/60 shadow-xs">
                    <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
                    Fiscalité
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-lg border border-red-200/60 shadow-xs">
                    <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
                    Gestion
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:justify-end gap-3 shrink-0">
              <a
                href={advisorWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-xs sm:text-sm font-bold text-white shadow-cfige-sm transition-all hover:bg-primary-dark hover:shadow-cfige-md active:translate-y-px"
              >
                <span>Parler à un conseiller</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 text-xs sm:text-sm font-bold text-gray-800 shadow-cfige-sm transition-all hover:bg-gray-50 active:translate-y-px"
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
