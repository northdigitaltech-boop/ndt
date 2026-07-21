import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | NorthDigital Tech",
  description:
    "Get in touch with NorthDigital Tech — request a quote or start your project via our contact form or WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
