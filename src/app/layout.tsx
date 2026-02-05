import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Back to Poppins for soft look
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adgo - Gamified Marketing",
  description: "Crowdsourcing Marketing Platform",
};

import GlobalBackground from "../components/layout/GlobalBackground";
import { AuthProvider } from "../context/AuthContext";

// ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.variable}>
        <AuthProvider>
          <GlobalBackground />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
