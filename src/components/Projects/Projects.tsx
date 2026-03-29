"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Calendar, Code, Sparkles } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────
type ProjectStatus = "Completed" | "In Progress" | "Coming Soon";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  codeUrl?: string;
  technologies: string[];
  status: ProjectStatus;
  year: string;
  features: string[];
  highlight?: boolean; // featured / flagship project
}

// ── Project Data ───────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: 1,
    title: "Amazon Clone",
    description:
      "A full-featured e-commerce platform clone of Amazon built with Next.js. Features include user authentication, product catalog, shopping cart with Redux state management, secure payment processing with Stripe, and webhook integration for order management.",
    image: "/images/amazon.png",
    liveUrl: "https://amazon-clone-gamma-livid.vercel.app/",
    codeUrl: "https://github.com/Sadik182/Amazon-Clone",
    technologies: ["Next.js", "Redux", "Stripe", "Webhooks", "TypeScript"],
    status: "Completed",
    year: "2026",
    features: [
      "User Authentication",
      "Payment Processing",
      "Order Management",
      "Webhook Integration",
    ],
    highlight: true,
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "A expense tracking application designed to help users track their expenses. Built with Next.js and TypeScript with a clean dashboard to view spending by category, add new entries, and monitor monthly budgets.",
    image: "/images/7.jpg",
    liveUrl: "https://expense-tracker-next-js.vercel.app/",
    codeUrl: "https://github.com/Sadik182/Expense-Tracker-Next-JS",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Completed",
    year: "2025",
    features: [
      "Expense Tracking",
      "Category Breakdown",
      "User Dashboard",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    title: "GoalFlow",
    description:
      "A goal tracking and productivity application designed to help users set, track, and achieve their objectives. Features a user dashboard with progress monitoring and clean UI for managing daily and long-term goals.",
    image: "/images/5.jpg",
    liveUrl: "https://goal-flow-liard.vercel.app/",
    codeUrl: "https://github.com/Sadik182/GoalFlow",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Completed",
    year: "2025",
    features: [
      "Goal Tracking",
      "Progress Monitoring",
      "User Dashboard",
      "Responsive Design",
    ],
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website built with Next.js 15 and TypeScript. Features dark mode, smooth animations with Framer Motion, and a working contact form powered by Resend for email delivery.",
    image: "/images/portfolio.png",
    liveUrl: "https://sadik1820.vercel.app/",
    codeUrl: "https://github.com/Sadik182/Next-Portfolio",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    status: "Completed",
    year: "2025",
    features: [
      "SSR/SSG",
      "Responsive Design",
      "Contact Form",
      "Framer Motion Animations",
    ],
  },
  {
    id: 5,
    title: "AI Document Chat",
    description:
      "A full-stack app where users can upload PDFs and chat with them using the Claude API. Built with RAG to pull relevant context from documents before generating answers. Uses vector embeddings for semantic search.",
    image: "",
    technologies: [
      "Next.js 15",
      "Claude API",
      "Pinecone",
      "TypeScript",
      "PostgreSQL",
    ],
    status: "Coming Soon",
    year: "2026",
    features: [
      "Chat with PDF",
      "Claude API Integration",
      "Vector Search with Pinecone",
      "Document Summarisation",
    ],
  },
];

// ── Status Badge Styles ────────────────────────────────────────────────
function statusClasses(status: ProjectStatus): string {
  switch (status) {
    case "Completed":
      return "bg-green-500/20 text-green-300 border border-green-500/30";
    case "In Progress":
      return "bg-blue-500/20 text-blue-300 border border-blue-500/30";
    case "Coming Soon":
      return "bg-amber-500/20 text-amber-300 border border-amber-500/30";
  }
}

// ── Component ──────────────────────────────────────────────────────────
export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-2 py-12 top-20">
      <div className="px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack
            development, from e-commerce platforms to AI-powered applications.
          </p>
        </div>

        {/* Completed Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Code size={22} className="text-green-400" />
            <span>Shipped</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {projects
              .filter((p) => p.status === "Completed")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>

        {/* AI-Era Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            <Sparkles size={22} className="text-amber-400" />
            <span>What I&apos;m Building Next</span>
          </h2>
          <p className="text-slate-400 mb-6 max-w-2xl">
            Currently working on AI-focused projects using the Claude API
            and modern full-stack tools. Stay tuned for updates.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects
              .filter((p) => p.status === "Coming Soon")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            Interested in working together?
          </h2>
          <p className="text-slate-300 mb-6">
            I&apos;m always excited to work on new projects and collaborate
            with fellow developers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  );
}

// ── Project Card ───────────────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  const isComingSoon = project.status === "Coming Soon";

  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border ${
        project.highlight
          ? "border-blue-500/40 ring-1 ring-blue-500/20"
          : "border-slate-700/50 hover:border-blue-500/30"
      } ${isComingSoon ? "opacity-90" : ""}`}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        {isComingSoon ? (
          <div className="w-full h-48 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-700 flex items-center justify-center">
            <Sparkles size={40} className="text-amber-400/60" />
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={300}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${statusClasses(project.status)}`}
          >
            {project.status}
          </span>
        </div>
        {project.highlight && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <div className="flex items-center text-sm text-slate-400">
            <Calendar size={16} className="mr-1" />
            {project.year}
          </div>
        </div>

        <p className="text-slate-300 text-sm mb-4 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Code size={16} className="mr-2 text-gray-500" />
            <span className="text-sm font-medium text-slate-300">
              Technologies
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-slate-700/50 text-xs rounded-md text-slate-300 border border-slate-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="text-sm font-medium text-slate-300 mb-2">
            Key Features
          </div>
          <ul className="text-xs text-slate-400 space-y-1">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
          {isComingSoon ? (
            <span className="text-sm text-slate-500 italic">
              In development — check back soon
            </span>
          ) : (
            <>
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm font-medium"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Link>
              )}
              {project.codeUrl && (
                <Link
                  href={project.codeUrl}
                  target="_blank"
                  className="flex items-center px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 text-sm font-medium"
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
