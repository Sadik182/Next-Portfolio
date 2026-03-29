import type { Metadata } from "next";
import ProjectsPage from "@/components/Projects/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Md Sadikur Rahman — full-stack web applications built with Next.js, TypeScript, and modern tools.",
};

export default function Page() {
  return <ProjectsPage />;
}
