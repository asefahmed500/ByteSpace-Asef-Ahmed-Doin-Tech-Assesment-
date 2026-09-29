import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import CourseCard, { type Course } from "@/components/CourseCard";
import AvatarStack from "@/components/AvatarStack";
import { RatingStarIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Create an Account — ByteSpace",
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

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen bg-persian lg:min-h-[1024px]">
      {/* Blueprint grid */}
      <div className="bg-blueprint absolute inset-0" aria-hidden />

      <Header logoOnly />

      {/* Left: copy (desktop) */}
      <div className="absolute left-[122px] top-[120px] z-[2] hidden w-[475px] flex-col gap-4 lg:flex">
        <h2 className="font-poppins text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-50">
          Sign up and come in
        </h2>
        <p className="max-w-[475px] text-[18px] leading-[1.6] text-sg-50">
          The registration process is straightforward, uncomplicated, and
          efficient, allowing users to sign up quickly, easily, and at no cost
        </p>
      </div>

      {/* Course card collage + lime stat card (desktop, fixed canvas) */}
      <div className="absolute left-0 top-0 z-[2] hidden h-[1024px] w-[720px] lg:block">
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

      {/* Register card */}
      <div className="relative z-[5] mx-auto w-full max-w-[579px] px-6 pt-[120px] pb-16 lg:absolute lg:left-[741px] lg:top-[120px] lg:m-0 lg:w-[579px] lg:px-0 lg:pb-0">
        <div className="rounded-[24px] bg-white">
          <div className="mx-auto flex w-full max-w-[453px] flex-col justify-between gap-10 px-6 py-[61px] lg:h-[784px] lg:gap-[122px] lg:px-0">
            {/* Top: heading + form */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col">
                <Link
                  href="/register"
                  className="text-[18px] leading-[1.6] text-persian"
                >
                  Create an Account
                </Link>
                <h1 className="mt-1 font-poppins text-[clamp(32px,4vw,44px)] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950">
                  Welcome to ByteSpace
                </h1>
              </div>

              <form action="#" className="flex flex-col gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-[14px] leading-[1.2] font-medium text-sg-950">
                    Full Name
                  </span>
                  <input
                    type="text"
                    placeholder="Jamie Davis"
                    className="h-[52px] w-full rounded-xl border border-sg-100 bg-white px-6 text-[16px] leading-[1.6] text-sg-950 outline-none placeholder:text-sg-400 focus:border-sg-300 sm:text-[18px]"
                  />
                </label>

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
                  className="h-[46px] w-[123px] rounded-[24px] bg-electric text-[16px] leading-[1.2] font-medium text-sg-950 transition-transform hover:scale-[1.03] active:scale-[0.98] sm:text-[18px]"
                >
                  Continue
                </button>
              </form>
            </div>

            {/* Bottom: login link */}
            <p className="flex flex-wrap items-center justify-center gap-1 text-center text-[16px] leading-[1.6] lg:justify-start">
              <span className="text-sg-700">Already have an account?</span>
              <Link href="/login" className="text-persian">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
