import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({
  quote,
  name,
  role,
  initials,
}: (typeof testimonials)[number]) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7">
      <Quote className="h-8 w-8 text-primary" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-[16px] leading-[26px] text-gray-700">
        {quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <div className="text-sm font-semibold text-gray-900">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="cfige-section bg-gray-50" aria-labelledby="testi-title">
      <div className="cfige-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            Témoignages
          </p>
          <h2
            id="testi-title"
            className="mt-3 text-[30px] font-bold leading-[38px] text-gray-900 md:text-[40px] md:leading-[48px]"
          >
            Ils nous font confiance
          </h2>
        </div>

        {/* Mobile : carousel horizontal */}
        <div className="mt-12 lg:hidden">
          <Carousel
            opts={{ align: "start", loop: false }}
            className="mx-auto max-w-sm"
          >
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <TestimonialCard {...t} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Desktop : grille 3 colonnes */}
        <div className="mt-12 hidden grid-cols-3 gap-6 lg:grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
