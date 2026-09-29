import CourseCard, { type Course } from "./CourseCard";

const tabRow1 = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
];
const tabRow2 = [
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
];
const tabRow3 = [
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const courses: Course[] = [
  { title: "Learn Figma from Basic", by: "by purepearl studio", image: "/assets/courses/course-art-1.png", avatarStart: 0, href: "/courses/learn-figma-from-basic" },
  { title: "Build Digital Asset", by: "by purepearl studio", image: "/assets/courses/course-art-2.png", avatarStart: 1, href: "/courses/build-digital-asset" },
  { title: "the Power of Big Data", by: "by purepearl studio", image: "/assets/courses/course-art-3.png", avatarStart: 2, href: "/courses/the-power-of-big-data" },
  { title: "Balancing Productivity and Self-Care", by: "by purepearl studio", image: "/assets/courses/course-art-4.png", avatarStart: 3, href: "/courses/balancing-productivity-and-self-care" },
  { title: "Mastering Money Management", by: "by purepearl studio", image: "/assets/courses/course-art-5.png", avatarStart: 4, href: "/courses/mastering-money-management" },
  { title: "From Idea to Startup Success", by: "by purepearl studio", image: "/assets/courses/course-art-6.png", avatarStart: 5, href: "/courses/from-idea-to-startup-success" },
];

function Tab({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <span
      className={
        active
          ? "shrink-0 rounded-[24px] bg-electric px-4 py-3 text-[16px] leading-[1.2] font-medium text-sg-950"
          : "shrink-0 rounded-[24px] bg-sg-50 px-4 py-3 text-[16px] leading-[1.2] font-medium text-sg-700 transition-colors hover:bg-sg-100"
      }
    >
      {label}
    </span>
  );
}

export default function CoursesSection() {
  return (
    <section className="bg-white pt-[72px]">
      {/* Section heading */}
      <div className="mx-auto flex w-full max-w-[917px] flex-col items-center gap-4 px-6 text-center">
        <h2 className="font-poppins text-[clamp(30px,4vw,44px)] leading-[1.2] font-semibold tracking-[-0.01em] text-vulcan">
          Discover Your Passion, Build Your Skills
        </h2>
        <p className="text-[16px] leading-[1.6] text-sg-400 sm:text-[18px]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>

      {/* Category tabs */}
      <div className="mx-auto mt-[42px] flex w-full max-w-[1200px] flex-col items-center gap-[21px] px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {tabRow1.map((label, i) => (
            <Tab key={label} label={label} active={i === 0} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {tabRow2.map((label) => (
            <Tab key={label} label={label} />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {tabRow3.map((label) => (
            <Tab key={label} label={label} />
          ))}
          <span className="px-1 text-[16px] leading-[1.2] font-medium text-persian">
            + More
          </span>
        </div>
      </div>

      {/* Course grid */}
      <div className="mx-auto mt-[77px] grid w-full max-w-[1199px] grid-cols-1 justify-items-center gap-10 px-6 pb-[120px] sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, i) => (
          <CourseCard key={course.title} course={course} avatarStart={i} />
        ))}
      </div>
    </section>
  );
}
