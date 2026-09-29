import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="relative bg-white">
      <Header />

      <section className="relative h-[957px] overflow-hidden bg-persian">
        {/* Blueprint grid */}
        <div className="bg-blueprint absolute inset-0" aria-hidden />

        {/* Giant gradient 404 */}
        <div
          aria-hidden
          className="absolute left-1/2 top-[160px] w-[920px] -translate-x-1/2 select-none text-center font-poppins text-[480px] leading-none font-semibold tracking-[-0.01em] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background-clip:text]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          404
        </div>

        {/* Copy */}
        <div className="absolute inset-x-0 top-[521px] z-[2] mx-auto flex w-full max-w-[935px] flex-col items-center gap-8 px-6">
          <h1 className="text-center font-poppins text-[clamp(34px,6vw,72px)] leading-[1.2] font-semibold tracking-[-0.01em] text-white">
            The page you are looking for doesn&rsquo;t exist
          </h1>
          <p className="max-w-[486px] text-center text-[16px] leading-[1.6] text-sg-100 sm:text-[18px]">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link
            href="/"
            className="flex h-[46px] w-[163px] items-center justify-center rounded-[24px] bg-electric text-[16px] leading-[1.2] font-medium text-sg-950 transition-transform hover:scale-[1.03] active:scale-[0.98] sm:text-[18px]"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
