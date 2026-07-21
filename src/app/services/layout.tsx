import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | NorthDigital Tech",
  description:
    "29 digital services under one roof — AI development, web & app development, SEO, digital marketing, design, video editing, and documentation services.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
