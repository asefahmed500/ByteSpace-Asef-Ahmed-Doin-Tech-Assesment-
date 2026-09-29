import Image from "next/image";
import Link from "next/link";
import { sidebarLessons } from "@/lib/courses";

function FolderCodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 8a2 2 0 012-2h4.2l2 2.5H19a2 2 0 012 2V17a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
        stroke="#003BE2"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VideoCamIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="7" width="10.5" height="10" rx="2" stroke="#003BE2" strokeWidth="1.7" />
      <path
        d="M14.5 11l5-2.8v7.6l-5-2.8"
        stroke="#003BE2"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CertificateIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2.5" stroke="#003BE2" strokeWidth="1.7" />
      <circle cx="12" cy="10" r="2.2" stroke="#003BE2" strokeWidth="1.7" />
      <path
        d="M8 16.5c.6-1.8 2.2-2.7 4-2.7s3.4.9 4 2.7"
        stroke="#003BE2"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ConsultationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v7a2.5 2.5 0 01-2.5 2.5H9.5L5 19.5v-3.5H6.5A2.5 2.5 0 014 13.5v-7z"
        stroke="#003BE2"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M8.5 9.5h7M8.5 12.5h4.5" stroke="#003BE2" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

const includes = [
  { label: "Learning Resources", Icon: FolderCodeIcon },
  { label: "Quality Lesson Videos", Icon: VideoCamIcon },
  { label: "Certificate of Completion", Icon: CertificateIcon },
  { label: "Private Consultation", Icon: ConsultationIcon },
];

/**
 * 412px enroll card — starts at y=416 (level with the video) and overlaps
 * the blue hero into the white content section, per the Figma frames.
 */
export default function CourseSidebar() {
  return (
    <div className="flex flex-col rounded-[24px] border border-sg-200 bg-white p-6 sm:p-10">
      <div className="flex flex-col gap-6">
        <h2 className="font-poppins text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950">
          112 Lessons (24 hours)
        </h2>
        <ul className="flex flex-col gap-3">
          {sidebarLessons.map((lesson) => (
            <li key={lesson.n} className="flex items-start justify-between gap-4">
              <span className="flex items-start gap-2">
                <span className="w-6 shrink-0 text-[16px] leading-[1.2] font-medium text-sg-950">
                  {lesson.n}
                </span>
                <span className="max-w-[194px] text-[16px] leading-[1.2] font-medium text-sg-950">
                  {lesson.title}
                </span>
              </span>
              <span className="shrink-0 text-[16px] leading-[1.6] text-persian">
                {lesson.duration}
              </span>
            </li>
          ))}
          <li className="text-[16px] leading-[1.6] text-sg-700">99 more videos</li>
        </ul>

        <div className="h-px bg-[#D1D1D1]" />

        <p className="text-[16px] leading-[1.6] text-sg-700">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>
        <div className="flex items-end">
          <span className="font-poppins text-[36px] leading-[1.2] font-semibold tracking-[-0.01em] text-persian">
            $25
          </span>
          <span className="text-[16px] leading-[1.6] text-sg-700">/lifetime</span>
        </div>
        <button
          type="button"
          className="h-[46px] w-full rounded-[24px] bg-electric text-[18px] leading-[1.2] font-medium text-sg-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Enroll Now
        </button>

        <h2 className="font-poppins text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-sg-950">
          This course include
        </h2>
        <ul className="flex flex-col gap-3">
          {includes.map(({ label, Icon }) => (
            <li key={label} className="flex items-center gap-2">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                <Icon />
              </span>
              <span className="text-[16px] leading-[1.6] text-sg-700">{label}</span>
            </li>
          ))}
        </ul>

        <div className="h-px bg-[#D1D1D1]" />

        <div className="flex items-center gap-3">
          <Image
            src="/assets/avatars/avatar-4.png"
            alt="PurePearl Studio"
            width={52}
            height={52}
            className="size-[52px] rounded-full object-cover"
          />
          <div>
            <p className="text-[18px] leading-[1.2] font-medium text-sg-950">
              PurePearl Studio
            </p>
            <p className="text-[16px] leading-[1.6] text-sg-700">
              Professional Creator
            </p>
          </div>
        </div>
        <p className="text-[16px] leading-[1.6] text-sg-700">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>
        <Link
          href="/creators"
          className="flex h-[35px] w-fit items-center justify-center rounded-[24px] border border-sg-200 px-4 text-[16px] leading-[1.2] font-medium text-sg-700 transition-colors hover:border-sg-300"
        >
          See Full Profile
        </Link>
      </div>
    </div>
  );
}
