import type { Metadata } from "next";
import {
  Gentium_Plus,
  Inter,
  JetBrains_Mono,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const gentium = Gentium_Plus({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ipa",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cognate",
  description:
    "A concept-first visual explorer for etymological word relationships across European languages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${inter.variable} ${gentium.variable} ${jetBrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}