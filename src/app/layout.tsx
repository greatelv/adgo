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
  title: "Gamified Marketing Platform",
  description: "Crowdsourcing Marketing Platform",
};

import GlobalBackground from "../components/layout/GlobalBackground";
import { AuthProvider } from "../context/AuthContext";
import { ToastProvider } from "../context/ToastContext";

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
          <ToastProvider>
            <GlobalBackground />
            {children}
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
