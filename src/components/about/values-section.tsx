import { values } from "@/data/about";
import { Card, CardContent } from "@/components/ui/card";

export function ValuesSection() {
  return (
    <section
      className="cfige-section bg-white"
      aria-labelledby="values-title"
    >
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
            CE QUI NOUS GUIDE
          </p>
          <h2
            id="values-title"
            className="mt-3 text-[25px] font-bold leading-[31px] text-gray-900"
          >
            Nos valeurs
          </h2>
          <span className="mx-auto mt-2 block h-0.5 w-[22px] rounded-full bg-primary" />
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {values.map((v) => {
            const Icon = v.icon as React.ElementType;
            return (
              <Card
                key={v.title}
                className="
                  rounded-[8px]
                  border-[#ECEEF0]
                  bg-white
                  p-0
                  shadow-[0_4px_14px_rgba(17,30,42,.03)]
                  transition-all duration-200
                  hover:-translate-y-[3px]
                  hover:border-red-200
                  hover:shadow-[0_14px_32px_rgba(17,30,42,.09)]
                "
              >
                <CardContent className="p-[17px]">
                  <div className="grid size-[52px] place-items-center rounded-full bg-[#FFF1F2] text-[#E10B1A]">
                    <Icon className="size-[25px] stroke-[1.8]" />
                  </div>
                  <h3 className="mt-[9px] text-[14px] font-bold leading-5 tracking-[-0.02em] text-[#17212B]">
                    {v.title}
                  </h3>
                  <p className="mt-[5px] text-[10.5px] leading-[17px] text-[#414A53]">
                    {v.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}