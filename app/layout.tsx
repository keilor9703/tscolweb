import type { Metadata, Viewport } from "next";
import { Outfit, Work_Sans, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const heading = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.product} — ${site.tagline}`,
  description: `Presentación de ${site.product}, la plataforma de gestión en la nube para PYMEs colombianas, por ${site.company}.`,
};

export const viewport: Viewport = {
  themeColor: "#08090f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`dark ${heading.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-background">{children}</body>
    </html>
  );
}
