"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import FadeIn from "@/components/FadeIn/FadeIn";
import { projects, featuredProject, allTags, type Project } from "@/data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");

  const gridProjects = projects.filter((p) => p.slug !== featuredProject.slug);
  const visible =
    filter === "All"
      ? gridProjects
      : gridProjects.filter((p) => p.tags.includes(filter));
  const featuredVisible =
    filter === "All" || featuredProject.tags.includes(filter);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] uppercase text-indigo-300 mb-3">
                Selected Work · 2025 — 2026
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Things I&apos;ve shipped
              </h1>
              <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
                Full-stack products built with Next.js and TypeScript — every
                project below has its own case study: the problem, how I built
                it, and what&apos;s under the hood.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              {["All", ...allTags].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setFilter(tag)}
                  aria-pressed={filter === tag}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wide border transition-colors min-h-[36px] ${
                    filter === tag
                      ? "bg-indigo-400 border-indigo-400 text-slate-900 font-semibold"
                      : "border-slate-700 text-slate-400 hover:text-white hover:border-slate-500"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Featured case study */}
        {featuredVisible && (
          <FadeIn>
            <Link
              href={`/projects/${featuredProject.slug}`}
              className="group relative block rounded-2xl border border-slate-700/60 bg-slate-800/50 hover:border-indigo-400/40 transition-colors overflow-hidden mb-14 sm:mb-16"
            >
              <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_85%_0%,rgba(99,102,241,0.10),transparent_70%)] pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-10">
                <div>
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-emerald-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    Live · Featured
                  </span>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-indigo-200 transition-colors">
                    {featuredProject.title}
                  </h2>
                  <p className="mt-3 text-slate-300 text-sm sm:text-base">
                    {featuredProject.tagline}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {featuredProject.solution.slice(0, 3).map((s) => (
                      <li key={s.title} className="flex gap-3 text-sm text-slate-300">
                        <span className="text-indigo-400 font-mono shrink-0">—</span>
                        {s.title}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-mono text-xs text-slate-500">
                    {featuredProject.stack.join(" · ")}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 group-hover:text-indigo-200 group-hover:gap-3 transition-all">
                    Read the case study <ArrowRight size={16} />
                  </span>
                </div>

                <div className="rounded-xl border border-slate-700/60 overflow-hidden shadow-2xl shadow-slate-950/50">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-900/80 border-b border-slate-700/60">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <span className="ml-2 font-mono text-[10px] text-slate-500 truncate">
                      solarjobflow.com
                    </span>
                  </div>
                  <Image
                    src={featuredProject.cover}
                    alt={`${featuredProject.title} screenshot`}
                    width={800}
                    height={450}
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
            </Link>
          </FadeIn>
        )}

        {/* Grid */}
        <FadeIn>
          <p className="flex items-center gap-4 font-mono text-xs tracking-[0.18em] uppercase text-slate-500 mb-6">
            More projects
            <span className="h-px flex-1 bg-slate-700/60" />
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {visible.map((project, i) => (
            <FadeIn key={project.slug} delay={Math.min(i * 0.08, 0.3)}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
          {visible.length === 0 && !featuredVisible && (
            <p className="text-slate-500 text-sm col-span-full">
              No projects with this tag yet.
            </p>
          )}
        </div>

        {/* CTA */}
        <FadeIn>
          <div className="text-center">
            <p className="text-slate-300 mb-5">
              <span className="font-semibold text-white">
                Have a project in mind?
              </span>{" "}
              I&apos;m open to freelance and full-time work.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-indigo-400 text-slate-900 rounded-lg hover:bg-indigo-300 transition-colors font-semibold text-sm"
            >
              Get in touch
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}

// ── Grid card ──────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group h-full flex flex-col rounded-2xl border border-slate-700/60 bg-slate-800/50 hover:border-indigo-400/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-video overflow-hidden border-b border-slate-700/60"
      >
        <Image
          src={project.cover}
          alt={`${project.title} screenshot`}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-400"
        />
      </Link>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-3 mb-2">
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-lg font-semibold group-hover:text-indigo-200 transition-colors">
              {project.title}
            </h3>
          </Link>
          <span className="font-mono text-xs text-slate-500">{project.year}</span>
        </div>

        <p className="text-sm text-slate-400 flex-1">{project.tagline}</p>

        <div className="flex items-center justify-between gap-3 mt-5 pt-4 border-t border-slate-700/50">
          <span className="font-mono text-[11px] text-slate-500 truncate">
            {project.stack.slice(0, 3).join(" · ")}
          </span>
          <span className="flex items-center gap-4 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 font-mono text-xs text-indigo-300 hover:text-white transition-colors py-2"
              >
                Live <ExternalLink size={11} />
              </a>
            )}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 font-mono text-xs text-indigo-300 hover:text-white transition-colors py-2"
            >
              Case study <ArrowUpRight size={12} />
            </Link>
          </span>
        </div>
      </div>
    </article>
  );
}
