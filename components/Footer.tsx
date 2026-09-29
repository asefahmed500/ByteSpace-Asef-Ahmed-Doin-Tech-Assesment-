import Image from "next/image";
import Link from "next/link";

const browseLinks = [
  "Featured Courses",
  "Featured Categories",
  "Business",
  "IT",
  "Design",
] as const;

const topicLinks = [
  "Development",
  "Marketing",
  "Photography",
  "Finance",
  "Sport",
] as const;

const platformLinks = [
  "Become a Creator",
  "Affiliate Program",
  "Contact",
  "Help",
  "About",
] as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-sg-200 bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-[71px] pb-[48px]">
        {/* Top area */}
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-[92px]">
          {/* Newsletter */}
          <div className="flex w-[528px] flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-start gap-2">
                <Image
                  src="/assets/logo-mark.svg"
                  alt=""
                  width={29}
                  height={32}
                  className="mt-[3px]"
                />
                <span className="font-clash text-[24px] leading-[30px] font-bold text-sg-950">
                  ByteSpace
                </span>
              </Link>
              <p className="text-[14px] leading-[1.6] text-sg-950">
                Stay Up to date with our latest features and releases by
                joining our newsletter.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <form action="#" className="flex items-start gap-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-[52px] w-full max-w-[376px] rounded-full border border-sg-200 bg-white px-6 text-[16px] leading-[1.6] text-sg-950 outline-none placeholder:text-sg-950 focus:border-sg-300"
                />
                <button
                  type="submit"
                  className="h-[46px] w-[104px] rounded-[24px] bg-electric text-[18px] leading-[1.2] font-medium text-sg-950 transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  Search
                </button>
              </form>
              <p className="text-[12px] leading-[1.6] text-sg-950">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap items-end gap-10">
            <div className="flex w-[167px] flex-col gap-6">
              <h3 className="text-[16px] leading-6 text-sg-950">Browse</h3>
              <ul className="flex flex-col gap-4">
                {browseLinks.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-[14px] leading-[1.6] text-sg-950 transition-colors hover:text-persian"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-[167px] flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {topicLinks.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-[14px] leading-[1.6] text-sg-950 transition-colors hover:text-persian"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-[167px] flex-col gap-6">
              <h3 className="text-[16px] leading-6 text-sg-950">Platform</h3>
              <ul className="flex flex-col gap-4">
                {platformLinks.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-[14px] leading-[1.6] text-sg-950 transition-colors hover:text-persian"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-[96px] flex flex-col gap-4 border-t border-sg-200 pt-6 sm:flex-row sm:items-start sm:justify-between">
          <p className="text-[12px] leading-[1.6] text-sg-950">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <div className="flex items-start gap-6">
            <a href="#" className="text-[12px] leading-[1.6] text-sg-950 transition-colors hover:text-persian">
              Privacy Policy
            </a>
            <a href="#" className="text-[12px] leading-[1.6] text-sg-950 transition-colors hover:text-persian">
              Terms of Service
            </a>
            <a href="#" className="text-[12px] leading-[1.6] text-sg-950 transition-colors hover:text-persian">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
