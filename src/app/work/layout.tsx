import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | NorthDigital Tech",
  description:
    "Selected projects and client work by NorthDigital Tech — websites, apps, branding, and digital campaigns.",
  alternates: { canonical: "/work" },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
