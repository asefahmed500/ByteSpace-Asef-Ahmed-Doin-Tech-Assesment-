import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard, { type Course } from "@/components/CourseCard";
import SignalIcon from "@/components/SignalIcon";

export const metadata: Metadata = {
  title: "Find Your Next Course — ByteSpace",
};

/* ---------- data ---------- */

const courseTitles = [
  "Learn Figma from Basic",
  "Build Digital Asset",
  "the Power of Big Data",
  "Balancing Productivity and Self-Care",
  "Mastering Money Management",
  "From Idea to Startup Success",
];

const courseSlugs = [
  "learn-figma-from-basic",
  "build-digital-asset",
  "the-power-of-big-data",
  "balancing-productivity-and-self-care",
  "mastering-money-management",
  "from-idea-to-startup-success",
];

const courses: Course[] = Array.from({ length: 24 }, (_, i) => ({
  title: courseTitles[i % courseTitles.length],
  by: "by purepearl studio",
  image: `/assets/courses/course-art-${(i % 6) + 1}.png`,
  avatarStart: i % 7,
  href: `/courses/${courseSlugs[i % courseSlugs.length]}`,
}));

const tabs = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

/* ---------- small UI glyphs (geometric, drawn to spec) ---------- */

function FunnelIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 4H21L14.5 12V19L9.5 21V12L3 4Z"
        stroke="#242528"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CategoryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="4" stroke="#242528" strokeWidth="2" />
      <rect
        x="14"
        y="14"
        width="7"
        height="7"
        stroke="#242528"
        strokeWidth="2"
      />
      <path d="M14 4L21 11H14V4Z" fill="#242528" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6H20M4 12H20M4 18H14"
        stroke="#242528"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon({ dir }: { dir: "left" | "right" | "down" }) {
  const rot = dir === "left" ? "rotate(180deg)" : dir === "down" ? "rotate(90deg)" : "";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      style={{ transform: rot }}
    >
      <path
        d="M9 5L16 12L9 19"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------- page ---------- */

export default function CoursesPage() {
  return (
    <main className="relative bg-white">
      <Header />

      {/* Hero */}
      <section className="relative h-[360px] overflow-hidden bg-persian">
        <div className="bg-blueprint absolute inset-0" aria-hidden />
        {/* Left-edge 3D ornament */}
        <Image
          aria-hidden
          src="/assets/ornament-left.png"
          alt=""
          width={332}
          height={332}
          className="absolute left-[-97px] top-[149px] z-[1] hidden xl:block"
        />

        <div className="relative z-[2] mx-auto flex w-full max-w-[624px] flex-col items-center gap-8 px-6 pt-[164px]">
          <h1 className="text-center font-poppins text-[clamp(26px,3.4vw,36px)] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-50">
            Find Your Next Course
          </h1>
          <form action="#" className="flex w-full items-start gap-4">
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
                placeholder="Search"
                className="w-full min-w-0 bg-transparent text-[16px] leading-[1.6] text-sg-950 outline-none placeholder:text-sg-400 sm:text-[18px]"
              />
            </label>
            <button
              type="submit"
              className="flex h-[48px] w-[147px] shrink-0 items-center justify-center gap-2 rounded-[24px] bg-electric text-[18px] leading-[1.2] font-medium text-sg-950 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Courses
              <span className="text-sg-950">
                <ChevronIcon dir="down" />
              </span>
            </button>
          </form>
        </div>
      </section>

      {/* Filter + sort row */}
      <div className="mx-auto mt-[72px] flex w-full max-w-[1201px] flex-wrap items-center justify-between gap-3 px-6">
        <div className="flex flex-wrap items-center gap-4">
          {[
            { label: "Filter", icon: <FunnelIcon /> },
            { label: "Level", icon: <SignalIcon className="text-sg-950" /> },
            { label: "Category", icon: <CategoryIcon /> },
          ].map((pill) => (
            <button
              key={pill.label}
              type="button"
              className="flex h-12 items-center gap-1 rounded-[24px] border border-sg-200 bg-white px-4 text-[16px] leading-[1.2] font-medium text-sg-700 transition-colors hover:border-sg-300"
            >
              {pill.icon}
              {pill.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="flex h-12 items-center gap-1 rounded-[24px] border border-sg-200 bg-white px-4 text-[16px] leading-[1.2] font-medium text-sg-700 transition-colors hover:border-sg-300"
        >
          <ListIcon />
          Most relevant
        </button>
      </div>

      {/* Category tabs (single spread row) */}
      <div className="mx-auto mt-8 hidden w-full max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 lg:flex">
        {tabs.map((label, i) => (
          <span
            key={label}
            className={
              i === 0
                ? "rounded-[24px] bg-electric px-4 py-3 text-[16px] leading-[1.2] font-medium text-sg-950"
                : "rounded-[24px] bg-sg-50 px-4 py-3 text-[16px] leading-[1.2] font-medium text-sg-700 transition-colors hover:bg-sg-100"
            }
          >
            {label}
          </span>
        ))}
      </div>
      <div className="mx-auto mt-8 flex w-full max-w-[1200px] flex-wrap justify-center gap-4 px-6 lg:hidden">
        {tabs.map((label, i) => (
          <span
            key={label}
            className={
              i === 0
                ? "shrink-0 rounded-[24px] bg-electric px-4 py-3 text-[16px] leading-[1.2] font-medium text-sg-950"
                : "shrink-0 rounded-[24px] bg-sg-50 px-4 py-3 text-[16px] leading-[1.2] font-medium text-sg-700"
            }
          >
            {label}
          </span>
        ))}
      </div>

      {/* Course grid — 24 cards */}
      <div className="mx-auto mt-[48px] grid w-full max-w-[1199px] grid-cols-1 justify-items-center gap-10 px-6 pb-[104px] sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, i) => (
          <CourseCard key={`${course.title}-${i}`} course={course} avatarStart={i} />
        ))}
      </div>

      {/* Pagination */}
      <nav className="mx-auto flex w-full max-w-[314px] flex-wrap items-center justify-center gap-6 px-6 pb-[120px]">
        <a
          href="#"
          aria-label="Previous page"
          className="flex h-12 w-14 items-center justify-center rounded-[24px] border border-sg-200 bg-white text-sg-700 transition-colors hover:border-sg-300"
        >
          <ChevronIcon dir="left" />
        </a>
        <span className="flex items-center gap-6">
          <span className="font-poppins text-[20px] leading-[1.4] font-semibold tracking-[-0.01em] text-sg-200">
            1
          </span>
          {[2, 3, 4, 5].map((n) => (
            <a
              key={n}
              href="#"
              className="font-poppins text-[20px] leading-[1.4] font-semibold tracking-[-0.01em] text-sg-950 transition-colors hover:text-persian"
            >
              {n}
            </a>
          ))}
        </span>
        <a
          href="#"
          aria-label="Next page"
          className="flex h-12 w-14 items-center justify-center rounded-[24px] border border-sg-200 bg-white text-sg-950 transition-colors hover:border-sg-300"
        >
          <ChevronIcon dir="right" />
        </a>
      </nav>

      <Footer />
    </main>
  );
}
