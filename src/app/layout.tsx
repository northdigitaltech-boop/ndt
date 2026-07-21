import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { LangProvider } from "@/lib/LangContext";
import { ContentProvider } from "@/lib/ContentContext";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://northdigitaltech.com";
const logoImage = "/ndt-logo.png";
const socialLogoImage = `${logoImage}?v=20260615`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NorthDigital Tech | Software House",
  description:
    "NorthDigital Tech – your partner for cutting-edge software, web, and digital solutions.",
  icons: {
    icon: logoImage,
    shortcut: logoImage,
    apple: logoImage,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "NorthDigital Tech | Software House",
    description:
      "NorthDigital Tech – your partner for cutting-edge software, web, and digital solutions.",
    siteName: "NorthDigital Tech",
    images: [
      {
        url: socialLogoImage,
        width: 500,
        height: 500,
        alt: "NorthDigital Tech logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthDigital Tech | Software House",
    description:
      "NorthDigital Tech – your partner for cutting-edge software, web, and digital solutions.",
    images: [socialLogoImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContentProvider>
          <LangProvider>
            {children}
            <WhatsAppFloat />
          </LangProvider>
        </ContentProvider>
      </body>
    </html>
  );
}
