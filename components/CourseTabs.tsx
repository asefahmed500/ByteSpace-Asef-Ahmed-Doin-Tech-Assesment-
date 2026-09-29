import Link from "next/link";

const tabs = [
  { key: "about", label: "About", suffix: "" },
  { key: "lessons", label: "Lessons", suffix: "/lessons" },
  { key: "reviews", label: "Reviews", suffix: "/reviews" },
] as const;

export type CourseTab = (typeof tabs)[number]["key"];

/** About / Lessons / Reviews pill navigation — active pill is Electric Lime. */
export default function CourseTabs({
  slug,
  tab,
}: {
  slug: string;
  tab: CourseTab;
}) {
  return (
    <nav className="flex flex-wrap gap-4" aria-label="Course sections">
      {tabs.map((t) => {
        const active = t.key === tab;
        return (
          <Link
            key={t.key}
            href={`/courses/${slug}${t.suffix}`}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "rounded-[24px] bg-electric px-4 py-3 text-[16px] leading-[1.2] font-medium text-sg-950"
                : "rounded-[24px] bg-sg-50 px-4 py-3 text-[16px] leading-[1.2] font-medium text-sg-700 transition-colors hover:bg-sg-100"
            }
          >
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}
