import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yash Srivastava | Frontend Developer",
  description:
    "Frontend Developer with 3+ years of experience in building enterprise applications. Specializing in Angular, React.js, and modern web technologies.",
  keywords: [
    "Frontend Developer",
    "Angular",
    "React.js",
    "Next.js",
    "TypeScript",
    "UI Development",
    "Web Development",
    "Deloitte",
  ],
  authors: [{ name: "Yash Srivastava" }],
  openGraph: {
    title: "Yash Srivastava | Frontend Developer",
    description:
      "Frontend Developer with 3+ years of experience in building enterprise applications. Specializing in Angular, React.js, and modern web technologies.",
    type: "website",
    locale: "en_US",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
