import Image from "next/image";

const partnerLogos = [
  "/assets/partners/logo-1.svg",
  "/assets/partners/logo-2.svg",
  "/assets/partners/logo-3.svg",
  "/assets/partners/logo-4.svg",
  "/assets/partners/logo-5.svg",
] as const;

export default function Partners() {
  return (
    <section className="relative bg-sg-50">
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-center gap-x-[72px] gap-y-6 px-6 py-[64px] lg:py-[80px]">
        {partnerLogos.map((src) => (
          <div key={src} className="flex h-[42px] items-center">
            <Image
              src={src}
              alt=""
              width={170}
              height={42}
              style={{ width: "auto", height: 41 }}
              className="max-w-[170px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
