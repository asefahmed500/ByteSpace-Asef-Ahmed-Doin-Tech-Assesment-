import Image from "next/image";

const avatars = [
  "/assets/avatars/avatar-1.png",
  "/assets/avatars/avatar-2.png",
  "/assets/avatars/avatar-3.png",
  "/assets/avatars/avatar-4.png",
  "/assets/avatars/avatar-5.png",
  "/assets/avatars/avatar-6.png",
  "/assets/avatars/avatar-7.png",
] as const;

/** Overlapping row of learner avatars followed by a lime "+N" chip. */
export default function AvatarStack({
  start = 0,
  size = 32,
  overlap = 8,
  label = "26+",
  dark = false,
  className = "",
}: {
  start?: number;
  size?: number;
  overlap?: number;
  label?: string;
  dark?: boolean;
  className?: string;
}) {
  const items = [0, 1, 2, 3].map((i) => avatars[(start + i) % avatars.length]);
  return (
    <div className={`flex items-center ${className}`}>
      {items.map((src, i) => (
        <Image
          key={src + i}
          src={src}
          alt=""
          width={size}
          height={size}
          style={{ marginLeft: i === 0 ? 0 : -overlap, width: size, height: size }}
          className="shrink-0 rounded-full"
        />
      ))}
      <span
        style={{ marginLeft: -overlap, width: size, height: size }}
        className={
          dark
            ? "flex shrink-0 items-center justify-center rounded-full bg-sg-950 text-[12px] leading-[1.2] font-bold text-sg-50"
            : "flex shrink-0 items-center justify-center rounded-full bg-electric text-[12px] leading-[1.2] font-medium text-sg-950"
        }
      >
        {label}
      </span>
    </div>
  );
}
