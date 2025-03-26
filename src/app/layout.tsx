import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import GNB from "@/components/GNB";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Focus Timer",
  description: "A simple Pomodoro Timer",
  openGraph: {
    title: "Focus Timer 🍅",
    description: "Simple pomodoro timer",
    url: "https://focus-timer-eight.vercel.app/",
    siteName: "Focus Timer",
    images: {
      url: process.env.NEXT_PUBLIC_BASE_URL + "images/ogimage.png",
      width: "",
      height: "",
      alt: "Focus Timer - Pomodoro Timer",
    },
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#C27373]`}
      >
        <GNB />
        {children}
        <Footer />
      </body>
    </html>
  );
}
