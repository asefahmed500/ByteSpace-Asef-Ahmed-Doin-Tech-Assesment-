import { notFound } from "next/navigation";
import Header from "@/components/Header";
import CourseHero from "@/components/CourseHero";
import CourseTabs, { type CourseTab } from "@/components/CourseTabs";
import CourseSidebar from "@/components/CourseSidebar";
import { catalog } from "@/lib/courses";

/**
 * Shared skeleton for the course About / Lessons / Reviews pages.
 * The 412px enroll card anchors at page y=416 — level with the video —
 * and spans from the blue hero into the white body section, exactly as
 * in the Figma frames (card at left 908, top 416, height 959).
 */
export default function CoursePageShell({
  slug,
  tab,
  children,
}: {
  slug: string;
  tab: CourseTab;
  children: React.ReactNode;
}) {
  const course = catalog[slug];
  if (!course) notFound();

  return (
    <>
      {/* Full-width blue hero backdrop (0–957) */}
      <div className="absolute inset-x-0 top-0 hidden h-[957px] bg-persian min-[1080px]:block" aria-hidden>
        <div className="bg-blueprint absolute inset-0" />
      </div>

      <Header />

      <div className="relative z-[1] mx-auto w-full max-w-[1440px] px-6 min-[1440px]:px-[120px]">
        <div className="grid grid-cols-1 min-[1080px]:grid-cols-[minmax(0,723px)_minmax(340px,412px)] min-[1080px]:gap-[63px]">
          {/* Left column: hero + tabbed content */}
          <div className="min-w-0">
            <CourseHero course={course} />
            <section className="bg-white pb-16 pt-14 min-[1080px]:pt-[62px]">
              <CourseTabs slug={slug} tab={tab} />
              <div className="mt-10 flex flex-col gap-6">{children}</div>
            </section>
          </div>

          {/* Right column: enroll card from y=416, spanning hero → body */}
          <aside className="relative mt-12 min-[1080px]:mt-0 min-[1080px]:pt-[416px]">
            <CourseSidebar />
          </aside>
        </div>
      </div>
    </>
  );
}
