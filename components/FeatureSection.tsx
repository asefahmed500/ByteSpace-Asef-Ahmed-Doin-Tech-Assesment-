import Image from "next/image";
import CourseCard from "./CourseCard";
import AvatarStack from "./AvatarStack";
import { CheckCircleIcon } from "./icons";

const perks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
] as const;

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
] as const;

export default function FeatureSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA]">
      {/* Ambient gradient blobs (desktop) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="blob-blue-soft absolute -left-[1016px] -top-[283px] size-[1137px] blur-[20px]" />
        <div className="blob-lime absolute -left-[660px] -top-[932px] size-[1137px] blur-[20px]" />
        <div className="blob-blue-faint absolute left-[303px] -top-[924px] size-[1137px] blur-[20px]" />
        <div className="blob-blue absolute left-[214px] top-[322px] size-[1137px] blur-[20px]" />
        <div className="blob-lime-strong absolute -left-[287px] top-[946px] size-[672px] blur-[20px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1258px] px-6 pt-[80px] pb-[130px] lg:pt-[120px]">
        {/* Row 1 — copy left, course showcase right */}
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-[63px]">
          <div className="flex w-full flex-col gap-10 lg:w-[574px] lg:shrink-0">
            <h2 className="font-poppins text-[clamp(30px,4vw,44px)] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[477px] text-[16px] leading-[1.6] text-sg-700 sm:text-[18px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="flex flex-wrap items-end gap-10 lg:gap-14">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-poppins text-[36px] leading-[1.22] font-medium tracking-[-0.01em] text-persian">
                    {stat.value}
                  </span>
                  <span className="text-[16px] leading-[1.6] text-sg-700 sm:text-[18px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Showcase */}
          <div className="relative h-[552px] w-full max-w-[621px]">
            <div className="absolute left-0 top-0 hidden lg:block">
              <CourseCard
                course={{
                  title: "Learn Figma from Basic",
                  by: "by purepearl studio",
                  image: "/assets/courses/course-art-1.png",
                }}
                avatarStart={0}
                starClass="text-electric"
              />
            </div>
            <Image
              src="/assets/feature-image-1.png"
              alt="Creator holding a laptop"
              width={900}
              height={881}
              className="img-drop absolute left-0 top-3 z-[1] w-full max-w-[577px]"
            />
            {/* Learning Progress glass card */}
            <div className="absolute right-0 top-[213px] z-[2] w-[232px] rounded-2xl bg-white/95 p-4 backdrop-blur-[10px] lg:right-auto lg:left-[345px]">
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
            <Image
              aria-hidden
              src="/assets/feature-matcap-1.png"
              alt=""
              width={430}
              height={430}
              className="absolute right-0 top-[67px] z-[3] size-[215px] lg:right-auto lg:left-[406px]"
            />
          </div>
        </div>

        {/* Row 2 — dashboard showcase left, copy right */}
        <div className="mt-[72px] flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-[79px]">
          <div className="relative order-2 h-[596px] w-full max-w-[541px] lg:order-1">
            {/* Total Revenue card */}
            <div className="absolute left-0 top-[44px] z-[2] w-[232px] rounded-2xl bg-persian p-4 backdrop-blur-[10px]">
              <p className="text-[16px] leading-[1.2] font-medium text-sg-50">
                Total Revenue
              </p>
              <p className="mt-0.5 text-[10px] leading-[1.2] text-sg-50">
                July 1-28
              </p>
              <div className="mt-1.5 flex w-[200px] items-center justify-between">
                <span className="font-poppins text-[24px] leading-[1.33] font-semibold tracking-[-0.01em] text-sg-50">
                  $120.29
                </span>
                <span className="flex h-6 w-[38px] items-center justify-center rounded-[24px] bg-electric-500 text-[10px] leading-[1.2] font-medium text-sg-950">
                  +12$
                </span>
              </div>
              <div className="mt-2 h-2 w-[200px] rounded-full bg-white">
                <div className="h-2 w-[112px] rounded-full bg-electric" />
              </div>
            </div>

            {/* Year to Date card */}
            <div className="absolute left-0 top-[194px] z-[2] w-[134px] rounded-2xl bg-persian p-4 backdrop-blur-[10px]">
              <p className="text-[16px] leading-[1.2] font-medium text-sg-50">
                Year to Date
              </p>
              <p className="mt-0.5 text-[10px] leading-[1.2] text-sg-50">2023</p>
              <p className="mt-1.5 font-poppins text-[24px] leading-[1.33] font-semibold tracking-[-0.01em] text-sg-50">
                $1,200.38
              </p>
              <span className="mt-2 flex h-6 w-[38px] items-center justify-center rounded-[24px] bg-electric-500 text-[10px] leading-[1.2] font-medium text-sg-950">
                +12$
              </span>
            </div>

            <Image
              src="/assets/feature-image-2.png"
              alt="Creator reviewing the course dashboard"
              width={900}
              height={1091}
              className="img-drop absolute left-0 top-0 z-[1] h-[596px] w-full max-w-[435px] object-cover lg:left-[28px]"
            />

            {/* Happy Students glass card */}
            <div className="absolute bottom-0 right-0 z-[2] w-[258px] rounded-2xl bg-white/95 p-4 backdrop-blur-[10px] lg:bottom-auto lg:left-[283px] lg:top-[413px]">
              <p className="text-[16px] leading-[1.5] font-medium text-sg-950">
                Happy Students
              </p>
              <div className="mt-1 flex items-center gap-1">
                <Image
                  src="/assets/icon-star.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                <p className="text-[10px] leading-[1.5] font-bold text-sg-950">
                  4.5 (240)
                </p>
              </div>
              <AvatarStack
                start={2}
                size={43}
                overlap={16}
                label="2K+"
                className="mt-2"
              />
            </div>

            <Image
              aria-hidden
              src="/assets/feature-matcap-2.png"
              alt=""
              width={430}
              height={430}
              className="absolute right-0 top-[114px] z-[3] size-[215px] lg:right-auto lg:left-[305px]"
            />
          </div>

          <div className="order-1 flex w-full flex-col gap-10 lg:order-2 lg:w-[580px]">
            <h2 className="max-w-[391px] font-poppins text-[clamp(30px,4vw,44px)] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="max-w-[574px] text-[16px] leading-[1.56] font-bold text-sg-950 sm:text-[18px]">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-6 w-6 shrink-0 text-persian" />
                  <span className="text-[16px] leading-[1.2] font-medium text-sg-950 sm:text-[18px]">
                    {perk}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
