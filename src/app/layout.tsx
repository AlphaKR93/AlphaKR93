import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";


const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return <html lang="ko">
    <body className={`${geist.variable} ${geistMono.variable}`}>
      {children}
    </body>
  </html>;
}

export const metadata: Metadata = {
  title: "AlphaKR93",
} as const;
