import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--nf-poppins",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "./fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/satoshi-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--nf-satoshi",
  display: "swap",
});

const clashDisplay = localFont({
  src: [{ path: "./fonts/clash-display-700.woff2", weight: "700", style: "normal" }],
  variable: "--nf-clash",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace — Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-sg-950 font-satoshi overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
