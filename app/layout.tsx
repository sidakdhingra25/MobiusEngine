import type { Metadata } from "next";
import {  DM_Sans } from "next/font/google";
import "./globals.css";



const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MobiusEngine",
  description: "AI-Powered Job seeker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${dmSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
