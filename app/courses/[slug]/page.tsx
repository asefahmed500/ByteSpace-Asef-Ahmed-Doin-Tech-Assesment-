import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import CoursePageShell from "@/components/CoursePageShell";
import { CheckCircleIcon } from "@/components/icons";
import type { Course } from "@/components/CourseCard";
import CourseCard from "@/components/CourseCard";
import { catalog, aboutDescription, keyPoints } from "@/lib/courses";

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
    title: course ? `${course.title} — ByteSpace` : "Course — ByteSpace",
  };
}

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!catalog[slug]) notFound();

  const related: Course[] = Object.entries(catalog)
    .filter(([s]) => s !== slug)
    .slice(0, 3)
    .map(([s, c], i) => ({
      title: c.title,
      by: "by purepearl studio",
      image: c.image,
      avatarStart: i + 2,
      href: `/courses/${s}`,
    }));

  return (
    <main className="relative bg-white">
      <CoursePageShell slug={slug} tab="about">
        <div className="flex flex-col gap-6">
          <h2 className="font-poppins text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950">
            Description
          </h2>
          <p className="text-[16px] leading-[1.6] text-sg-700">
            {aboutDescription}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-poppins text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950">
            Sneak Peak
          </h2>
          <div className="flex flex-wrap gap-6 min-[1080px]:flex-nowrap min-[1080px]:justify-between min-[1080px]:gap-0">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="relative h-[125px] w-full overflow-hidden rounded-2xl bg-[#D9D9D9] sm:w-[167px] min-[1080px]:shrink-0"
              >
                <Image
                  src={`/assets/courses/course-art-${n}.png`}
                  alt=""
                  fill
                  sizes="167px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="font-poppins text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950">
            Key Points
          </h2>
          <ul className="flex max-w-[318px] flex-col gap-3">
            {keyPoints.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <CheckCircleIcon className="mt-0.5 h-6 w-6 shrink-0 text-persian" />
                <span className="text-[16px] leading-[1.6] text-sg-700">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CoursePageShell>

      {/* Related courses */}
      <section className="bg-white pb-[120px] pt-4">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <h2 className="mb-10 font-poppins text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950">
            More Courses You May Like
          </h2>
          <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c) => (
              <CourseCard key={c.title} course={c} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
