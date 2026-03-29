import type { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Md Sadikur Rahman — Software Developer",
    template: "%s | Md Sadikur Rahman",
  },
  description:
    "Software Developer based in Sydney, building modern web applications with Next.js, TypeScript, and MongoDB.",
  keywords: [
    "software developer",
    "web developer",
    "Next.js",
    "TypeScript",
    "React",
    "Sydney",
    "full stack developer",
  ],
  authors: [{ name: "Md Sadikur Rahman" }],
  openGraph: {
    title: "Md Sadikur Rahman — Software Developer",
    description:
      "Software Developer based in Sydney, building modern web applications with Next.js, TypeScript, and MongoDB.",
    url: "https://sadik1820.vercel.app",
    siteName: "Md Sadikur Rahman",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://sadik1820.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 text-white" suppressHydrationWarning>
        <Navbar />
        <div className="pt-20 min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
