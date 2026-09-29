import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/avatars/avatar-1.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/avatars/avatar-2.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/avatars/avatar-3.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
] as const;

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA]">
      {/* Ambient gradient blobs (desktop) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="blob-lime absolute left-[842px] -top-[241px] size-[1137px] blur-[20px]" />
        <div className="blob-lime-strong absolute left-[395px] -top-[138px] size-[672px] blur-[20px]" />
        <div className="blob-blue absolute -left-[442px] top-[149px] size-[1137px] blur-[20px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1204px] px-6 pt-[74px] pb-[117px]">
        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-[43px]">
          <h2 className="max-w-[577px] font-poppins text-[clamp(30px,4vw,44px)] leading-[1.2] font-semibold tracking-[-0.01em] text-black">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] text-[16px] leading-[1.6] text-ink sm:text-[18px]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[72px] grid grid-cols-1 gap-[41px] md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="mx-auto flex w-full max-w-[374px] flex-col gap-6 rounded-[24px] bg-white p-6"
            >
              <Image
                src={t.avatar}
                alt={`Portrait of ${t.name}`}
                width={80}
                height={80}
                className="size-20 rounded-full object-cover"
              />
              <div>
                <figcaption className="font-poppins text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-black">
                  {t.name}
                </figcaption>
                <p className="mt-1 text-[16px] leading-[1.6] text-persian sm:text-[18px]">
                  {t.role}
                </p>
              </div>
              <blockquote className="text-[16px] leading-[1.6] text-ink sm:text-[18px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
