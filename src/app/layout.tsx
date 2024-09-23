import ResumeService from "./services/ResumeService";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const demographics = ResumeService.getDemographics();
export const metadata: Metadata = {
  title: `${demographics.firstName} ${demographics.lastName}'s Resume`,
  description: `Resume for ${demographics.firstName} ${demographics.lastName}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:text-white dark:bg-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
