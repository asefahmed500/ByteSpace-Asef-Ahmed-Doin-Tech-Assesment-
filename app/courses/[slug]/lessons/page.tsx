import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import CoursePageShell from "@/components/CoursePageShell";
import { catalog, modules } from "@/lib/courses";

export function generateStaticParams() {
  return Object.keys(catalog).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = catalog[slug];
  return {
    title: course ? `${course.title} Lessons — ByteSpace` : "Course Lessons — ByteSpace",
  };
}

function ModuleCameraIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="6.5" width="12.5" height="11" rx="2.5" stroke="#242528" strokeWidth="1.7" />
      <path
        d="M16 10.7l5-3.2v9l-5-3.2"
        stroke="#242528"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const heading =
  "font-poppins text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950";

export default async function CourseLessonsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!catalog[slug]) notFound();

  return (
    <main className="relative bg-white">
      <CoursePageShell slug={slug} tab="lessons">
        <h2 className={heading}>Explore the Modules</h2>
        <p className="text-[16px] leading-[1.6] text-sg-700">
          Immerse yourself in the course content as we break down each module
          into comprehensive lessons, providing practical insights and hands-on
          experiences.
        </p>

        <h2 className={heading}>Lesson List</h2>
        {modules.map((m) => (
          <div key={m.title} className="flex items-center gap-[13px]">
            <span className="flex size-[72px] shrink-0 items-center justify-center rounded-[24px] bg-electric">
              <ModuleCameraIcon />
            </span>
            <div className="flex min-w-0 flex-col gap-1">
              <p className="text-[16px] leading-[1.2] font-medium text-sg-950">
                {m.title}
              </p>
              <p className="text-[16px] leading-[1.6] text-sg-700">{m.desc}</p>
            </div>
          </div>
        ))}

        <h2 className={heading}>Lesson Content</h2>
        <p className="text-[16px] leading-[1.6] text-sg-700">
          Engage with each lesson through captivating video content, detailed
          textual explanations, and interactive elements. Download resources,
          complete assignments, and test your understanding with quizzes.
        </p>

        <h2 className={heading}>Lesson Progress Tracking</h2>
        <p className="text-[16px] leading-[1.6] text-sg-700">
          Witness your growth as you complete lessons, with an intuitive
          progress tracking feature guiding you through your learning journey.
        </p>

        {/* Learning Progress card */}
        <div className="flex flex-col gap-2 rounded-2xl border border-sg-200 bg-white p-4 backdrop-blur-[10px]">
          <p className="text-[14px] leading-[1.2] font-medium text-sg-950">
            Learning Progress
          </p>
          <p className="font-poppins text-[36px] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950">
            55%
          </p>
          <div className="h-2 w-full rounded-[24px] bg-sg-100">
            <div className="h-2 w-[56%] rounded-[24px] bg-electric" />
          </div>
        </div>
      </CoursePageShell>

      <Footer />
    </main>
  );
}
