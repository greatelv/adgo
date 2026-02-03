import type { Metadata } from "next";
import { Spline_Sans } from "next/font/google";
import "./globals.css";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-spline-sans",
});

export const metadata: Metadata = {
  title: "Adgo - Gamified Marketing",
  description: "Crowdsourcing Marketing Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={splineSans.variable}>{children}</body>
    </html>
  );
}
