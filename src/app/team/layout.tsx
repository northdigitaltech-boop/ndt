import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | NorthDigital Tech",
  description:
    "Meet the NorthDigital Tech team — the experts behind our software, design, and digital marketing work.",
  alternates: { canonical: "/team" },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
