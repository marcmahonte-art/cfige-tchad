import { ChevronRight, Zap, Flame, GraduationCap, Award } from "lucide-react";

interface FormatPriceCardProps {
  number: string;
  name: string;
  duration: string;
  price: string;
  recommended?: boolean;
}

const formatIcons: Record<string, React.ElementType> = {
  "01": Zap,
  "02": Flame,
  "03": GraduationCap,
  "04": Award,
};

export function FormatPriceCard({
  number,
  name,
  duration,
  price,
  recommended,
}: FormatPriceCardProps) {
  const Icon = formatIcons[number] || Zap;

  return (
    <div
      className={`group relative flex flex-col rounded-2xl border bg-white p-6 sm:p-7 shadow-cfige-sm transition-all duration-300 hover:border-primary hover:shadow-cfige-lg hover:-translate-y-1 ${
        recommended
          ? "border-primary ring-2 ring-primary/20 shadow-cfige-md lg:-translate-y-2"
          : "border-gray-200"
      }`}
    >
      {recommended && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3.5 py-1 text-xs font-bold text-white shadow-sm">
          Le plus populaire
        </span>
      )}

      <div className="flex items-center justify-between gap-3 mb-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
          Format {number}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 leading-snug">
        {name}
      </h3>
      <p className="mt-1 text-xs sm:text-sm text-gray-500 font-medium">
        Durée : {duration}
      </p>

      <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col">
        <span className="text-xs font-medium text-gray-500">
          À partir de
        </span>
        <div className="mt-1 flex items-baseline gap-1">
          <span className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
            {price}
          </span>
          <span className="text-xs font-bold text-gray-500">
            FCFA
          </span>
        </div>

        <a
          href="#contact"
          className="mt-5 flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl text-xs sm:text-sm font-bold text-primary bg-primary-light transition-colors group-hover:bg-primary group-hover:text-white"
        >
          <span>S&apos;inscrire</span>
          <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
