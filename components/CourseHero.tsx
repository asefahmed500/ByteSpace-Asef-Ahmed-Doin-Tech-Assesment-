import Image from "next/image";
import SignalIcon from "@/components/SignalIcon";
import { RatingStarIcon } from "@/components/icons";
import type { CatalogCourse } from "@/lib/courses";

/**
 * Blue 1440×957 hero shared by the course About / Lessons / Reviews pages:
 * title stack at (122,172), meta pills row, 720×479 video at (125,416).
 * At ≥1080px the blue backdrop comes from the shell's full-width band.
 */
export default function CourseHero({ course }: { course: CatalogCourse }) {
  return (
    <section className="relative -mx-6 bg-persian px-6 pb-14 pt-[120px] min-[1080px]:h-[957px] min-[1080px]:pb-0 min-[1080px]:pt-[172px] min-[1440px]:-mx-[120px] min-[1440px]:px-[120px]">
      <div className="bg-blueprint absolute inset-0" aria-hidden />

      <div className="relative z-[2] flex max-w-[820px] flex-col gap-6 min-[1080px]:-mr-[63px]">
        <div className="flex flex-col gap-2">
          <h1 className="font-poppins text-[clamp(24px,3.4vw,34px)] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-50 min-[1080px]:whitespace-nowrap min-[1440px]:text-[36px]">
            {course.title}
          </h1>
          <p className="font-poppins text-[clamp(17px,1.8vw,20px)] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-50">
            {course.subtitle}
          </p>
        </div>
        <p className="text-[16px] leading-[1.2] font-medium text-[#F1F4FE] sm:text-[18px]">
          by purepearl studio
        </p>

        {/* Meta pills */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex h-10 items-center gap-2 rounded-[24px] bg-white px-6 backdrop-blur-[20px]">
            <SignalIcon className="text-persian" />
            <span className="text-[16px] leading-[1.2] font-medium text-sg-950">
              Intermediate
            </span>
          </span>
          <span className="flex h-10 items-center gap-2 rounded-[24px] bg-white px-6 backdrop-blur-[20px]">
            <RatingStarIcon className="h-6 w-6 text-persian" />
            <span className="text-[16px] leading-[1.2] font-medium text-sg-950">
              4.8 (172 reviews)
            </span>
          </span>
          <span className="flex h-10 items-center gap-2 rounded-[24px] bg-white px-6 backdrop-blur-[20px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="9" cy="8" r="3.2" stroke="#003BE2" strokeWidth="1.8" />
              <path
                d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5"
                stroke="#003BE2"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="16.5" cy="9" r="2.6" stroke="#003BE2" strokeWidth="1.8" />
              <path
                d="M15.5 14.2c2.6.2 5 2 5 4.8"
                stroke="#003BE2"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[16px] leading-[1.2] font-medium text-sg-950">
              199 Students
            </span>
          </span>
          <button
            type="button"
            className="flex h-10 items-center gap-2 rounded-[24px] bg-electric px-6 backdrop-blur-[20px] transition-transform hover:scale-[1.03]"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="18" cy="5" r="2.5" stroke="#242528" strokeWidth="1.8" />
              <circle cx="6" cy="12" r="2.5" stroke="#242528" strokeWidth="1.8" />
              <circle cx="18" cy="19" r="2.5" stroke="#242528" strokeWidth="1.8" />
              <path
                d="M15.6 6.3L8.4 10.7M8.4 13.3l7.2 4.4"
                stroke="#242528"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-[16px] leading-6 font-medium text-sg-950">
              Share
            </span>
          </button>
        </div>
      </div>

      {/* Video preview — 720×479, 59px below the pills */}
      <div className="relative z-[2] mt-8 h-0 w-full max-w-[720px] overflow-hidden rounded-[24px] bg-[#443131] pt-[66.5%] min-[1080px]:mt-[59px]">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover opacity-90"
        />
        <button
          type="button"
          aria-label="Play course preview"
          className="absolute left-1/2 top-1/2 flex size-[104px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[24px] border border-ink bg-[#3D3D3D]/25 backdrop-blur-[20px] transition-transform hover:scale-105"
        >
          <span className="flex size-[72px] items-center justify-center rounded-[18px] bg-[#F5F2FF]">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
              <path d="M10 7L21 14L10 21V7Z" fill="#7F30F7" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
