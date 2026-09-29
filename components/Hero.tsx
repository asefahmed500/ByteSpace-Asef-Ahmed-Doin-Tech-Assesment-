import Image from "next/image";
import AvatarStack from "./AvatarStack";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-persian">
      {/* Blueprint grid */}
      <div className="bg-blueprint absolute inset-0" aria-hidden />

      {/* Lime ring rising behind the hero image (desktop) */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[582px] z-[1] hidden size-[1149px] -translate-x-1/2 rounded-full border-[320px] border-electric-500 xl:block"
      />

      {/* 3D ornament renders (desktop) — Figma "3d ornament" group, exact canvas coords */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 z-[2] hidden w-[1440px] -translate-x-1/2 xl:block"
      >
        {/* matcap 13 · lime blob, upper left */}
        <div className="absolute left-[-96px] top-[394px] h-[302px] w-[385px]">
          <Image src="/assets/ornament-left.png" alt="" fill className="object-cover" />
        </div>
        {/* matcap 13 flipped · white blob, mid left */}
        <div className="absolute left-[204px] top-[595px] h-[137px] w-[175px] -scale-x-100">
          <Image src="/assets/ornament-mid.png" alt="" fill className="object-cover" />
        </div>
        {/* matcap 21 · white cone, bottom left */}
        <div className="absolute left-[39px] top-[756px] h-[268px] w-[342px]">
          <Image src="/assets/cone-large.png" alt="" fill className="object-cover" />
        </div>
        {/* matcap 8 · lime cone, top right */}
        <div className="absolute left-[1252px] top-[394px] h-[290px] w-[370px]">
          <Image src="/assets/cone-topright.png" alt="" fill className="object-cover" />
        </div>
        {/* matcap 18 · white cone, mid right */}
        <div className="absolute left-[1127px] top-[585px] h-[147px] w-[188px]">
          <Image src="/assets/cone-small.png" alt="" fill className="object-cover" />
        </div>
        {/* matcap 12 · white blob, bottom right */}
        <div className="absolute left-[1148px] top-[747px] h-[259px] w-[330px]">
          <Image src="/assets/ornament-right.png" alt="" fill className="object-cover" />
        </div>
      </div>

      <div className="relative z-[3] mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pt-[120px] md:pt-[169px] xl:px-0">
        {/* Headline + search */}
        <div className="flex w-full max-w-[935px] flex-col items-center gap-8">
          <h1 className="text-center font-poppins text-[clamp(38px,6.2vw,72px)] leading-[1.2] font-semibold tracking-[-0.01em] text-white">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-[819px] text-center text-[16px] leading-[1.6] text-sg-100 sm:text-[18px]">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>

        <form action="#" className="mt-[48px] flex w-full max-w-[581px] items-start gap-4 md:mt-[60px]">
          <label className="flex h-[52px] w-full max-w-[461px] items-center gap-2 rounded-[24px] bg-white px-6">
            <Image
              src="/assets/icon-search.svg"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 shrink-0"
            />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full min-w-0 bg-transparent text-[16px] leading-[1.6] text-sg-950 outline-none placeholder:text-sg-400 sm:text-[18px]"
            />
          </label>
          <button
            type="submit"
            className="h-[46px] w-[104px] shrink-0 rounded-[24px] bg-electric text-[16px] leading-[1.2] font-medium text-sg-950 transition-transform hover:scale-[1.03] active:scale-[0.98] sm:text-[18px]"
          >
            Search
          </button>
        </form>

        {/* Hero visual */}
        <div className="relative mt-[48px] w-full max-w-[722px] pb-16 xl:mt-0 xl:h-[510px] xl:pb-0">
          <Image
            src="/assets/hero-main.png"
            alt="Student with headset holding a laptop"
            width={1100}
            height={785}
            priority
            className="img-drop mx-auto w-full max-w-[722px]"
          />

          {/* UI/UX Design card */}
          <div className="absolute -left-1 top-[46px] hidden w-[208px] rounded-2xl bg-white/95 p-4 backdrop-blur-[10px] lg:block xl:left-[-45px] xl:top-[125px]">
            <p className="text-[16px] leading-[1.2] font-medium text-sg-950">
              UI/UX Design
            </p>
            <p className="mt-2 text-[12px] leading-[1.6] text-sg-400">
              200 Courses <span className="mx-1">•</span> 1000+ Students
            </p>
          </div>

          {/* Learning Progress card */}
          <div className="absolute -right-2 top-[84px] hidden w-[232px] rounded-2xl bg-white/95 p-4 backdrop-blur-[10px] md:block xl:left-[483px] xl:right-auto xl:top-[137px]">
            <p className="text-[14px] leading-[1.2] font-medium text-sg-950">
              Learning Progress
            </p>
            <p className="mt-2 font-poppins text-[48px] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950">
              55%
            </p>
            <div className="mt-2 h-2 w-[200px] rounded-full bg-[#F6F6F6]">
              <div className="h-2 w-[112px] rounded-full bg-electric" />
            </div>
          </div>

          {/* Happy Students card */}
          <div className="absolute bottom-6 left-0 hidden w-[258px] rounded-2xl bg-white/95 p-4 backdrop-blur-[10px] sm:block xl:bottom-auto xl:left-[-31px] xl:top-[323px]">
            <p className="text-[16px] leading-[1.2] font-medium text-sg-950">
              Happy Students
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <Image
                src="/assets/icon-star.svg"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4"
              />
              <p className="text-[12px] leading-[1.6] text-sg-950">4.5 (240)</p>
            </div>
            <AvatarStack start={0} size={43} overlap={16} label="2K+" className="mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
