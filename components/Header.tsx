import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
] as const;

export default function Header({ logoOnly = false }: { logoOnly?: boolean }) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[120px] w-full max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-16 xl:px-[120px]">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-start gap-2">
          <Image
            src="/assets/logo-mark.svg"
            alt=""
            width={29}
            height={32}
            className="mt-[3px]"
          />
          <span className="font-clash text-[24px] leading-[30px] font-bold tracking-[0.01em] text-sg-50">
            ByteSpace
          </span>
        </Link>

        {/* Center nav */}
        {logoOnly ? null : (
          <nav className="hidden items-start gap-6 md:flex">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  i === 0
                    ? "text-[16px] leading-[19px] font-medium text-sg-50 transition-colors hover:text-electric"
                    : "text-[16px] leading-[26px] text-sg-50 transition-colors hover:text-electric"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Right menu */}
        {logoOnly ? null : (
          <div className="flex shrink-0 items-center gap-4 sm:gap-6">
            <Link
              href="/login"
              className="hidden text-[16px] leading-6 text-sg-50 transition-colors hover:text-electric sm:block"
            >
              Sign In
            </Link>
            <Link
              href="/login"
              className="text-[16px] leading-6 text-sg-50 transition-colors hover:text-electric"
            >
              Join Us
            </Link>
            <button type="button" aria-label="Cart" className="text-sg-50">
              <Image
                src="/assets/icon-bag.svg"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
