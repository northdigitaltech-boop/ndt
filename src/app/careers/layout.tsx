import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | NorthDigital Tech",
  description:
    "Join NorthDigital Tech — remote roles in design, video editing, and development with flexible hours and international clients.",
  alternates: { canonical: "/careers" },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
