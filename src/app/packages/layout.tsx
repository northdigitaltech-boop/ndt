import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages & Pricing | NorthDigital Tech",
  description:
    "Transparent all-in-one monthly digital growth packages — web, social media, SEO, and marketing plans with no hidden fees.",
  alternates: { canonical: "/packages" },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
