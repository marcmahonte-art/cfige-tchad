import { BookOpen, BadgeCheck, Laptop, Headphones } from "lucide-react";

const advantages = [
  {
    icon: BookOpen,
    title: "Pédagogie active",
    description: "Des méthodes pratiques centrées sur la mise en situation.",
  },
  {
    icon: BadgeCheck,
    title: "Certification",
    description: "Des parcours valorisables et reconnus.",
  },
  {
    icon: Laptop,
    title: "Solutions modernes",
    description: "Des outils et technologies adaptés au marché.",
  },
  {
    icon: Headphones,
    title: "Accompagnement",
    description: "Un suivi personnalisé de votre projet.",
  },
];

export function AdvantagesSection() {
  return (
    <section
      className="cfige-section bg-[#FDFDFE]"
      aria-labelledby="advantages-title"
    >
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-primary">
            Ce qui nous distingue
          </p>
          <h2
            id="advantages-title"
            className="mt-3 text-[27px] font-bold leading-[33px] text-gray-900"
          >
            Nos Atouts
          </h2>
          <span className="mx-auto mt-2 block h-0.5 w-[22px] rounded-full bg-primary" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <div
              key={a.title}
              className="flex items-start gap-3.5 rounded-[9px] border border-[#EEF0F2] bg-white p-5 shadow-[0_4px_14px_rgba(17,30,42,.035)]"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-[8px] bg-primary-light text-primary">
                <a.icon className="size-6" strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-[14px] font-semibold leading-[18px] text-gray-900">
                  {a.title}
                </h3>
                <p className="mt-1 text-[12px] leading-[16px] text-gray-500">
                  {a.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
