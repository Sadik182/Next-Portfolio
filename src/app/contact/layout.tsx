import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Md Sadikur Rahman",
  description:
    "Get in touch with Md Sadikur Rahman, Junior Software Developer in Sydney. Available for projects, collaborations, and opportunities.",
  keywords: [
    "contact",
    "software developer",
    "Sydney",
    "Next.js",
    "TypeScript",
    "web development",
  ],
  openGraph: {
    title: "Contact — Md Sadikur Rahman",
    description:
      "Get in touch with Md Sadikur Rahman, Junior Software Developer in Sydney. Available for projects, collaborations, and opportunities.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
