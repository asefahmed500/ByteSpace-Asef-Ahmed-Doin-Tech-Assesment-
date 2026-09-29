import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import CoursePageShell from "@/components/CoursePageShell";
import { RatingStarIcon } from "@/components/icons";
import { catalog, ratingRows, reviews } from "@/lib/courses";

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
    title: course ? `${course.title} Reviews — ByteSpace` : "Course Reviews — ByteSpace",
  };
}

const heading =
  "font-poppins text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950";

function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`flex shrink-0 gap-1 ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <RatingStarIcon key={i} className="h-6 w-6 text-sg-700" />
      ))}
    </span>
  );
}

export default async function CourseReviewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!catalog[slug]) notFound();

  return (
    <main className="relative bg-white">
      <CoursePageShell slug={slug} tab="reviews">
        <h2 className={heading}>What Learners Are Saying</h2>
        <p className="text-[16px] leading-[1.6] text-sg-700">
          Discover what our learners have to say about their experience with
          &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews
          and ratings from individuals who have embarked on the transformative
          journey of mastering digital asset creation.
        </p>

        {/* Ratings summary card */}
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-sg-200 bg-white p-10 backdrop-blur-[10px] sm:flex-row">
          <div className="flex w-[129px] shrink-0 flex-col items-center rounded-lg bg-electric px-2 py-10 backdrop-blur-[20px]">
            <span className="text-[14px] leading-[1.2] font-medium text-sg-950">
              Ratings
            </span>
            <span className="font-poppins text-[36px] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950">
              4.7
            </span>
          </div>
          <div className="flex w-full min-w-0 flex-1 flex-col gap-1">
            {ratingRows.map((row) => (
              <div key={row.stars} className="flex items-center gap-4">
                <div className="h-2 max-w-[282px] flex-1 rounded-[24px] bg-sg-100">
                  <div
                    className="h-2 rounded-[24px] bg-electric"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <Stars />
                <span className="w-10 shrink-0 text-right text-[16px] leading-[1.6] text-sg-700">
                  {row.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <h2 className={heading}>Individual Reviews:</h2>

        {/* Rating filters */}
        <div className="flex flex-wrap gap-4">
          <span className="flex items-center rounded-[24px] bg-electric px-4 py-3 text-[16px] leading-[1.2] font-medium text-sg-950">
            All rating
          </span>
          {[5, 4, 3, 2, 1].map((n) => (
            <span
              key={n}
              className="flex items-center gap-1 rounded-[24px] bg-sg-50 px-4 py-3"
            >
              <RatingStarIcon className="h-6 w-6 text-sg-700" />
              <span className="text-[16px] leading-[1.2] font-medium text-sg-700">
                {n}
              </span>
            </span>
          ))}
        </div>

        {/* Review cards */}
        {reviews.map((review) => (
          <article
            key={review.name}
            className="flex flex-col gap-6 rounded-[24px] border border-sg-200 bg-white p-10"
          >
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <Image
                    src={review.avatar}
                    alt=""
                    width={52}
                    height={52}
                    className="size-[52px] rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[18px] leading-[1.2] font-medium text-sg-950">
                      {review.name}
                    </p>
                    <p className="text-[16px] leading-[1.6] text-sg-700">
                      {review.role}
                    </p>
                  </div>
                </div>
                <Stars />
              </div>
              <span className="text-[16px] leading-[1.6] text-sg-700">
                a year ago
              </span>
            </div>
            <p className="max-w-[643px] text-[16px] leading-[1.6] text-sg-700">
              {review.text}
            </p>
          </article>
        ))}
      </CoursePageShell>

      <Footer />
    </main>
  );
}
