import type { Metadata } from "next";
import { Bellefair, Lato } from "next/font/google";
import "./globals.css";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Legale CoLegal",
  description: "Studio Legale CoLegal - Assistenza e consulenza legale in diritto d'impresa, commerciale, e delle persone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${bellefair.variable} ${lato.variable}`}>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
