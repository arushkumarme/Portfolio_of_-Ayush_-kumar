import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans, Gloock } from "next/font/google";
import "./globals.css";

const display = Gloock({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const mono = DM_Mono({ weight: "400", subsets: ["latin"], variable: "--font-mono" });

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const description =
  "Ayush Kumar is a Computer Science engineering student working on retrieval pipelines, LLM applications and Python backends.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ayush Kumar · Portfolio",
  description,
  openGraph: {
    title: "Ayush Kumar · Portfolio",
    description,
    type: "website",
    images: [{ url: "/images/ayush-hero.webp", width: 1001, height: 835, alt: "Portrait of Ayush Kumar" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#283d2b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
