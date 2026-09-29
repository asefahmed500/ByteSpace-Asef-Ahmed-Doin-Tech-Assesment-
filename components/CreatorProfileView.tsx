import Image from "next/image";
import CourseCard, { type Course } from "./CourseCard";
import SignalIcon from "./SignalIcon";

export type Creator = {
  name: string;
  role: string;
  avatar: string;
  products: string;
  followers: string;
};

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

const courses: Course[] = courseTitles.map((title, i) => ({
  title,
  by: "by purepearl studio",
  image: `/assets/courses/course-art-${i + 1}.png`,
  avatarStart: i,
  href: `/courses/${courseSlugs[i]}`,
}));

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
      <rect x="14" y="14" width="7" height="7" stroke="#242528" strokeWidth="2" />
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

/** The Creator Profile page body — shared by /creators and /creators/[slug]. */
export default function CreatorProfileView({ creator }: { creator: Creator }) {
  return (
    <main className="relative bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-persian pb-20">
        <div className="bg-blueprint absolute inset-0" aria-hidden />
        <div className="relative z-[2] mx-auto w-full max-w-[1198px] px-6 pt-[172px]">
          <div className="flex max-w-[902px] flex-col gap-10">
            {/* Identity */}
            <div className="flex flex-wrap items-center gap-6">
              <Image
                src={creator.avatar}
                alt={creator.name}
                width={96}
                height={96}
                className="size-24 rounded-3xl object-cover"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="font-poppins text-[clamp(26px,3.4vw,36px)] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-50">
                    {creator.name}
                  </h1>
                  <span className="rounded-[24px] bg-electric px-6 py-2 text-[16px] leading-[1.2] font-medium text-sg-950 backdrop-blur-[20px]">
                    Creator
                  </span>
                </div>
                <p className="text-[16px] leading-[1.6] text-sg-50 sm:text-[18px]">
                  {creator.role}
                </p>
              </div>
            </div>

            {/* Bio */}
            <p className="max-w-[1197px] text-[16px] leading-[1.6] text-sg-50 sm:text-[18px]">
              Welcome to the creative world of {creator.name}. Here, you&rsquo;ll
              discover the passion, expertise, and inspiration that drive my
              creative journey. Let&rsquo;s explore and learn together! Dive into
              my creative portfolio, showcasing a glimpse of my artistic
              endeavors. From digital designs to multimedia projects, each piece
              tells a unique story. Explore the world of creativity with me.
            </p>

            {/* Stats + follow */}
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex h-[46px] items-center gap-2 rounded-[24px] bg-white px-6 backdrop-blur-[20px]">
                  <span className="text-[18px] leading-[1.2] font-medium text-persian">
                    {creator.products}
                  </span>
                  <span className="text-[18px] leading-[1.2] font-medium text-sg-950">
                    Products
                  </span>
                </span>
                <span className="flex h-[46px] items-center gap-2 rounded-[24px] bg-white px-6 backdrop-blur-[20px]">
                  <span className="text-[18px] leading-[1.2] font-medium text-persian">
                    {creator.followers}
                  </span>
                  <span className="text-[18px] leading-[1.2] font-medium text-sg-950">
                    Followers
                  </span>
                </span>
              </div>
              <button
                type="button"
                className="h-[46px] rounded-[24px] bg-electric px-6 text-[18px] leading-[1.2] font-medium text-vulcan transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + courses */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1201px] px-6 py-16">
          <div className="flex flex-wrap items-center justify-between gap-3">
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

          <div className="mt-12 grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <CourseCard key={course.title} course={course} avatarStart={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
