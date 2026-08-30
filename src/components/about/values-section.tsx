import { values } from "@/data/about";

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

        <div className="mt-10 space-y-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="p-6 rounded-[8px] border border-[#ECEEF0] bg-white"
            >
              <h3 className="text-[14px] font-bold leading-5 tracking-[-0.02em] text-[#17212B]">
                {v.title}
              </h3>
              <p className="mt-2 text-[10.5px] leading-[17px] text-[#414A53]">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}