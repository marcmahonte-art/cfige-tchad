import { Users, BookOpen, CalendarClock, Smile } from "lucide-react";

const stats = [
  { value: "200+", label: "Apprenants formés", icon: Users },
  { value: "12+", label: "Formations", icon: BookOpen },
  { value: "5", label: "Années d'expérience", icon: CalendarClock },
  { value: "95%", label: "Satisfaction", icon: Smile },
];

export function Stats() {
  return (
    <section aria-label="Chiffres clés" className="border-y border-gray-200 bg-white">
      <div className="cfige-container py-12">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:divide-x lg:divide-gray-200">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-4 px-0 lg:px-6 [&:not(:first-child)]:lg:px-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-[32px] font-bold leading-10 text-gray-900">
                  {s.value}
                </dt>
                <dd className="text-sm leading-5 text-gray-500">{s.label}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
