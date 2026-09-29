import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import CourseCard, { type Course } from "@/components/CourseCard";
import AvatarStack from "@/components/AvatarStack";
import { RatingStarIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
};

const cardA: Course = {
  title: "the Power of Big Data",
  by: "by purepearl studio",
  image: "/assets/courses/course-art-3.png",
  href: "/courses/the-power-of-big-data",
};

const cardB: Course = {
  title: "Build Digital Asset",
  by: "by purepearl studio",
  image: "/assets/courses/course-art-2.png",
  href: "/courses/build-digital-asset",
};

/** Google "G" glyph (black, per the Figma vectors). */
function GoogleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21.35 11.1H12v2.96h5.34c-.23 1.4-1.71 4.1-5.34 4.1-3.21 0-5.83-2.66-5.83-5.93S8.79 6.3 12 6.3c1.83 0 3.05.78 3.75 1.45l2.56-2.46C16.81 3.86 14.62 3 12 3 7 3 3 7 3 12s4 9 9 9c5.2 0 8.65-3.65 8.65-8.8 0-.59-.06-1.03-.15-1.46z"
        fill="#000"
      />
    </svg>
  );
}

/** Apple glyph (black, per the Figma vectors). */
function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M16.7 12.6c0-2 1.6-3 1.7-3.1-.9-1.4-2.4-1.6-2.9-1.6-1.3-.1-2.5.7-3.1.7-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2-1.5 2.5-.4 6.2 1 8.2.7 1 1.5 2.1 2.6 2 1-.04 1.4-.65 2.6-.65 1.2 0 1.5.65 2.6.63 1.1-.02 1.8-1 2.4-2 .5-.9.9-1.9 1-2.1-.02-.01-2-.8-2.1-3.38zM14.8 6.2c.55-.7.93-1.6.8-2.6-.8.04-1.8.55-2.4 1.24-.5.6-1 1.6-.85 2.5.9.07 1.85-.46 2.4-1.15z"
        fill="#000"
      />
    </svg>
  );
}

export default function LoginPage() {
  return (
    <main className="relative min-h-screen bg-persian lg:min-h-[1024px]">
      {/* Blueprint grid */}
      <div className="bg-blueprint absolute inset-0" aria-hidden />

      <Header logoOnly />

      {/* Left: copy + overlapping course cards (desktop) */}
      <div className="relative z-[2] mx-auto hidden w-full max-w-[1440px] px-[122px] lg:block">
        <div className="absolute left-[122px] top-[120px] flex w-[475px] flex-col gap-4">
          <h2 className="font-poppins text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-50">
            Sign in with ease
          </h2>
          <p className="max-w-[475px] text-[18px] leading-[1.6] text-sg-50">
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
          </p>
        </div>
      </div>

      {/* Course card collage + lime stat card (desktop, fixed canvas) */}
      <div className="absolute left-0 top-0 z-[2] hidden h-[1024px] w-[720px] lg:block" aria-hidden={false}>
        {/* 3D ornaments */}
        <Image src="/assets/cone-large-lime.png" alt="" width={146} height={146} className="absolute left-[151px] top-[320px] z-[1]" />
        <Image src="/assets/ornament-mid.png" alt="" width={175} height={175} className="absolute left-[470px] top-[626px] z-[1]" />
        <Image src="/assets/cone-small-lime.png" alt="" width={188} height={188} className="absolute left-[97px] top-[702px] z-[1]" />

        {/* Overlapping course cards */}
        <div className="absolute left-[233px] top-[305px] z-[2]">
          <CourseCard course={cardA} avatarStart={2} />
        </div>
        <div className="absolute left-[122px] top-[394px] z-[3]">
          <CourseCard course={cardB} avatarStart={1} />
        </div>

        {/* Happy Students card (lime) */}
        <div className="absolute left-[348px] top-[740px] z-[4] w-[258px] rounded-2xl bg-electric p-4 backdrop-blur-[10px]">
          <p className="text-[16px] leading-6 font-medium text-sg-950">
            Happy Students
          </p>
          <div className="mt-1 flex items-center gap-1">
            <p className="text-[10px] leading-[1.5] font-bold text-sg-950">
              4.5 (240)
            </p>
            <RatingStarIcon className="h-4 w-4 text-persian" />
          </div>
          <AvatarStack start={3} size={43} overlap={16} label="2K+" dark className="mt-2" />
        </div>
      </div>

      {/* Register / sign-in card */}
      <div className="relative z-[5] mx-auto w-full max-w-[579px] px-6 pt-[120px] pb-16 lg:absolute lg:left-[741px] lg:top-[120px] lg:m-0 lg:w-[579px] lg:px-0 lg:pb-0">
        <div className="rounded-[24px] bg-white">
          <div className="mx-auto flex w-full max-w-[453px] flex-col justify-between px-6 py-[61px] lg:h-[784px] lg:gap-[122px] lg:px-0">
            {/* Top: heading + form */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col">
                  <Link
                    href="/login"
                    className="text-[18px] leading-[1.6] text-persian"
                  >
                    Sign In
                  </Link>
                  <h1 className="mt-1 font-poppins text-[clamp(32px,4vw,44px)] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950">
                    Welcome Back
                  </h1>
                </div>

                <form action="#" className="flex flex-col gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-[14px] leading-[1.2] font-medium text-sg-950">
                      Email
                    </span>
                    <input
                      type="email"
                      placeholder="designer@example.com"
                      className="h-[52px] w-full rounded-xl border border-sg-100 bg-white px-6 text-[16px] leading-[1.6] text-sg-950 outline-none placeholder:text-sg-400 focus:border-sg-300 sm:text-[18px]"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-[14px] leading-[1.2] font-medium text-sg-950">
                      Password
                    </span>
                    <input
                      type="password"
                      placeholder="********"
                      className="h-[52px] w-full rounded-xl border border-sg-100 bg-white px-6 text-[16px] leading-[1.6] text-sg-950 outline-none placeholder:text-sg-400 focus:border-sg-300 sm:text-[18px]"
                    />
                  </label>

                  <button
                    type="submit"
                    className="h-[46px] w-[104px] rounded-[24px] bg-electric text-[16px] leading-[1.2] font-medium text-sg-950 transition-transform hover:scale-[1.03] active:scale-[0.98] sm:text-[18px]"
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom: divider + social + new user */}
            <div className="mt-10 flex flex-col items-center gap-10 lg:mt-0">
              <div className="flex w-full items-center gap-[11px]">
                <span className="h-px flex-1 border-t border-[#D1D1D1]" />
                <span className="text-[18px] leading-[1.6] text-[#888]">or</span>
                <span className="h-px flex-1 border-t border-[#D1D1D1]" />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  aria-label="Continue with Google"
                  className="flex size-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] transition-colors hover:bg-sg-50"
                >
                  <GoogleIcon />
                </button>
                <button
                  type="button"
                  aria-label="Continue with Apple"
                  className="flex size-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] transition-colors hover:bg-sg-50"
                >
                  <AppleIcon />
                </button>
              </div>

              <p className="flex flex-wrap items-center justify-center gap-1 text-[16px] leading-[1.6]">
                <span className="text-[#888]">New user?</span>
                <Link href="/register" className="text-persian">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
