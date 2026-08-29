import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

export function ServiceGrid() {
  return (
    <section
      className="cfige-section bg-white"
      aria-labelledby="services-title"
    >
      <div className="cfige-container">
        <div className="rounded-[10px] border border-[#F0F1F3] p-4 shadow-[0_2px_12px_rgba(17,30,42,.025)]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-[10px] border border-[#ECEEF0] bg-white shadow-[0_4px_16px_rgba(17,30,42,.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(17,30,42,.10)]"
              >
                <div className="relative">
                  <div className="relative aspect-[1.9/1] w-full">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 380px"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute left-2 top-1 z-10 grid size-12 place-items-center rounded-full bg-primary text-white">
                    <s.icon className="size-6" strokeWidth={1.8} />
                  </div>
                </div>
                <div className="px-[14px] pb-[14px] pt-3">
                  <h3 className="text-[18px] font-bold leading-6 tracking-[-0.02em] text-[#1A2733]">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-[11px] font-semibold leading-4 text-primary">
                    {s.category}
                  </p>
                  <p className="mt-2 text-[13px] leading-[18px] text-gray-500">
                    {s.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-3 h-[29px] rounded-[4px] px-3 text-[10px] font-medium hover:bg-primary-light"
                  >
                    <a href={s.href}>
                      <ChevronDown className="mr-1.5 size-3" />
                      Voir le détail
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
