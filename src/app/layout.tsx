import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nomadical",
  description: "Nomadical is an offline survival companion app that provides a curated library of 1,000+ survival articles, an on-device AI assistant powered by Gemma 4, and a ",
  keywords: ["Nomadical", "mobile apps", "Australia", "FixerUppera", "StyleMySpace", "NovaSuperAgent"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
  },
  openGraph: {
    title: "Nomadical",
    description: "Smart apps built with AI. Practical tools for everyday life, crafted in Australia.",
    type: "website",
    url: "https://www.kangablue.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
