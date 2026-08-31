import Image from "next/image";

export function FormationsHero() {
  return (
    <section
      aria-labelledby="formations-hero-title"
      className="relative mx-auto mt-[10px] h-[230px] w-[calc(100%-36px)] overflow-hidden rounded-[3px] sm:h-[270px] sm:w-[calc(100%-40px)] md:mt-[12px] md:h-[350px] md:w-[calc(100%-64px)] lg:mt-[15px] lg:h-[377px] lg:w-[calc(100%-96px)] lg:max-w-[1180px]"
    >
      <Image
        src="/images/hero/hero-formations.png"
        alt="Formations CFIGE"
        fill
        priority
        quality={88}
        sizes="(max-width: 639px) calc(100vw - 36px), (max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), calc(100vw - 96px)"
        className="object-cover object-[50%_46%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-black/30"
      />
      <div className="absolute inset-0 z-[2] flex items-end justify-start pb-[34px] pl-[22px] sm:pb-[42px] sm:pl-[28px] md:pb-[58px] md:pl-[38px] lg:pb-[72px] lg:pl-[51px]">
        <h1
          id="formations-hero-title"
          className="m-0 max-w-[90%] text-[30px] font-medium leading-[1.05] tracking-[-0.025em] text-white sm:text-[34px] md:text-[42px] lg:text-[48px]"
        >
          NOS FORMATIONS
        </h1>
      </div>
    </section>
  );
}
