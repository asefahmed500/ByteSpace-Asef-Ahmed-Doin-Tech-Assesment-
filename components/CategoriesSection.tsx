import Image from "next/image";

const categories = [
  { label: "Design", icon: "/assets/icon-design.svg" },
  { label: "Development", icon: "/assets/icon-development.svg" },
  { label: "IT & Software", icon: "/assets/icon-it.svg" },
  { label: "Business", icon: "/assets/icon-business.svg" },
  { label: "Marketing", icon: "/assets/icon-marketing.svg" },
  { label: "Photography", icon: "/assets/icon-photography.svg" },
] as const;

export default function CategoriesSection() {
  return (
    <section className="bg-white">
      {/* Heading */}
      <div className="mx-auto flex w-full max-w-[917px] flex-col items-center gap-4 px-6 text-center">
        <h2 className="font-poppins text-[clamp(26px,3.4vw,36px)] leading-[1.2] font-semibold tracking-[-0.01em] text-vulcan">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="text-[16px] leading-[1.6] text-sg-400 sm:text-[18px]">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there&apos;s
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </div>

      {/* Category cards */}
      <div className="mx-auto mt-[68px] grid w-full max-w-[1202px] grid-cols-2 gap-10 px-6 pb-[120px] sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <button
            key={category.label}
            type="button"
            className="flex h-[167px] w-full max-w-[167px] flex-col items-center justify-center gap-3 rounded-[24px] border border-sg-200 bg-white transition-colors hover:border-sg-300"
          >
            <span className="flex size-[60px] shrink-0 items-center justify-center rounded-full bg-electric">
              <Image
                src={category.icon}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
            </span>
            <span className="text-center text-[18px] leading-[1.2] font-medium text-sg-950 lg:text-[20px]">
              {category.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
