import Image from "next/image";
import Link from "next/link";
import AvatarStack from "./AvatarStack";
import SignalIcon from "./SignalIcon";
import { RatingStarIcon } from "./icons";

export type Course = {
  title: string;
  by: string;
  image: string;
  rating?: string;
  starClass?: string;
  avatarStart?: number;
  href?: string;
};

export const defaultCourseMeta = {
  by: "by purepearl studio",
  level: "Beginner",
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  learners: "26+",
  price: "$25",
  per: "/lifetime",
  rating: "4.5",
} as const;

export default function CourseCard({
  course,
  avatarStart = 0,
  starClass = "text-sg-200",
}: {
  course: Course;
  avatarStart?: number;
  starClass?: string;
}) {
  const card = (
    <article className="relative w-full max-w-[373px] rounded-[24px] border border-sg-200 bg-white p-4 transition-shadow hover:shadow-[0_24px_72px_rgba(4,8,25,0.10)]">
      {/* Cover */}
      <div className="relative h-[195px] overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={course.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 373px"
          className="object-cover p-4"
        />
        <div className="absolute bottom-[20px] left-[13px] flex gap-3">
          {[defaultCourseMeta.lessons, defaultCourseMeta.duration, defaultCourseMeta.comments].map(
            (label) => (
              <span
                key={label}
                className="rounded-[24px] bg-[#F6F6F6]/60 px-3 py-1.5 text-[12px] leading-[1.2] font-medium text-ink backdrop-blur-[4px]"
              >
                {label}
              </span>
            ),
          )}
        </div>
      </div>

      {/* Body */}
      <div className="mt-[21px]">
        <div className="pr-[64px]">
          <h3 className="font-poppins text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-black">
            {course.title}
          </h3>
          <p className="mt-1 text-[12px] leading-[1.6] text-ink">
            {course.by}
          </p>
        </div>

        <div className="mt-4 flex w-[237px] items-center justify-between">
          <span className="flex h-8 items-center gap-1 rounded-[24px] bg-sg-50 px-3">
            <SignalIcon />
            <span className="text-[12px] leading-[1.2] font-medium text-sg-700">
              {defaultCourseMeta.level}
            </span>
          </span>
          <AvatarStack start={avatarStart} size={32} overlap={8} label={defaultCourseMeta.learners} />
        </div>

        <div className="mt-4 flex items-end">
          <span className="font-poppins text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-persian">
            {defaultCourseMeta.price}
          </span>
          <span className="ml-0 text-[12px] leading-[1.6] text-ink">
            {defaultCourseMeta.per}
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="absolute right-4 top-[232px] flex items-center gap-1">
        <span className="text-[18px] leading-[1.6] text-ink">
          {course.rating ?? defaultCourseMeta.rating}
        </span>
        <RatingStarIcon className={`h-6 w-6 ${starClass}`} />
      </div>
    </article>
  );

  if (course.href) {
    return (
      <Link href={course.href} className="block w-full max-w-[373px]">
        {card}
      </Link>
    );
  }
  return card;
}
