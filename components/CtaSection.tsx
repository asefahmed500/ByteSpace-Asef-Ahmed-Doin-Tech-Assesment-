import Image from "next/image";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-persian">
      {/* Blueprint grid */}
      <div className="bg-blueprint absolute inset-0" aria-hidden />

      {/* 3D ornaments (desktop) */}
      <div aria-hidden className="hidden xl:block">
        <Image src="/assets/cone-small-lime.png" alt="" width={188} height={188} className="absolute left-[962px] top-[-162px] z-[1]" />
        <Image src="/assets/ornament-right-lime.png" alt="" width={330} height={330} className="absolute left-[992px] top-[127px] z-[1]" />
        <Image src="/assets/ornament-left.png" alt="" width={385} height={385} className="absolute left-[-236px] top-[-324px] z-[1]" />
        <Image src="/assets/ornament-mid.png" alt="" width={175} height={175} className="absolute left-[235px] top-[-157px] z-[1]" />
        <Image src="/assets/cone-plain.png" alt="" width={188} height={188} className="absolute left-[-166px] top-[63px] z-[1]" />
        <Image src="/assets/cone-large-lime.png" alt="" width={342} height={342} className="absolute left-[-98px] top-[137px] z-[1]" />
        <Image src="/assets/cone-topright-white.png" alt="" width={370} height={370} className="absolute left-[1108px] top-[-156px] z-[1]" />
      </div>

      {/* Content */}
      <div className="relative z-[2] mx-auto flex w-full max-w-[964px] flex-col items-center gap-10 px-6 py-[85px] lg:min-h-[488px] lg:py-[85px]">
        <h2 className="max-w-[710px] text-center font-poppins text-[clamp(30px,4vw,44px)] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-50">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-center text-[16px] leading-[1.6] text-sg-50 sm:text-[18px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <a
          href="#"
          className="flex h-[46px] w-[172px] items-center justify-center rounded-[24px] bg-electric text-[16px] leading-[1.2] font-medium text-sg-950 transition-transform hover:scale-[1.03] active:scale-[0.98] sm:text-[18px]"
        >
          Join as Creator
        </a>
      </div>
    </section>
  );
}
