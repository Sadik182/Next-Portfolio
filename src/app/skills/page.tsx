// app/skills/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import FadeIn from "@/components/FadeIn/FadeIn";
import SkillsWorkbench from "@/components/Skills/SkillsWorkbench";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Skills of Md Sadikur Rahman — TypeScript, React, Next.js, Node.js, MongoDB and AWS, used daily in production as a full-stack developer in Sydney.",
};

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(800px_400px_at_70%_-10%,rgba(99,102,241,0.16),transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(600px_300px_at_15%_0%,rgba(16,185,129,0.07),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_45%)]" />
      </div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-16 py-12 sm:py-16">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <FadeIn>
          <div className="max-w-2xl mb-12 sm:mb-14">
            <p className="flex flex-wrap items-center font-mono text-[12px] sm:text-[13px] mb-6">
              <span className="text-emerald-400 mr-2">➜</span>
              <span className="text-indigo-300">~/skills</span>
              <span className="text-slate-600 ml-2">git:(</span>
              <span className="text-rose-300">main</span>
              <span className="text-slate-600">)</span>
              <span className="text-slate-400 ml-3">cat README.md</span>
              <span
                aria-hidden
                className="ml-1.5 inline-block w-[7px] h-[14px] translate-y-[2px] bg-slate-400/80 animate-pulse motion-reduce:animate-none"
              />
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 [text-wrap:balance]">
              Skills, shipped to{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                production.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:pretty] mb-7">
              Not a list of tutorials I&apos;ve watched — these are the tools
              I use every day building a fintech platform used across
              Australia and New Zealand. Open the files below and have a look
              around.
            </p>
            <p className="flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.16em] uppercase">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-emerald-400 border-emerald-400/30 bg-emerald-400/10">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                Used daily in production
              </span>
              <span className="text-slate-500">Full-stack · Sydney</span>
            </p>
          </div>
        </FadeIn>

        {/* ── The workbench ────────────────────────────────────── */}
        <FadeIn delay={0.1}>
          <SkillsWorkbench />
        </FadeIn>

        {/* ── Where to next ────────────────────────────────────── */}
        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-14 sm:mt-16">
            <Link
              href="/projects"
              className="group relative rounded-2xl border border-slate-700/60 bg-slate-800/40 overflow-hidden p-6 sm:p-7 hover:border-indigo-400/40 transition-colors"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(300px_120px_at_15%_0%,rgba(99,102,241,0.1),transparent_70%)]" />
              <p className="relative font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500 mb-2">
                See them in action
              </p>
              <p className="relative font-semibold text-lg mb-1 group-hover:text-indigo-200 transition-colors">
                Project case studies
              </p>
              <p className="relative text-sm text-slate-400 leading-relaxed">
                The problem, the build decisions and the tech behind every
                project.
              </p>
              <ArrowRight
                size={16}
                className="relative mt-4 text-slate-500 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all"
              />
            </Link>
            <Link
              href="/experiences"
              className="group relative rounded-2xl border border-slate-700/60 bg-slate-800/40 overflow-hidden p-6 sm:p-7 hover:border-indigo-400/40 transition-colors"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(300px_120px_at_15%_0%,rgba(99,102,241,0.1),transparent_70%)]" />
              <p className="relative font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500 mb-2">
                Where I used them
              </p>
              <p className="relative font-semibold text-lg mb-1 group-hover:text-indigo-200 transition-colors">
                Work experience
              </p>
              <p className="relative text-sm text-slate-400 leading-relaxed">
                Roles, internships and what I shipped at each one.
              </p>
              <Briefcase
                size={16}
                className="relative mt-4 text-slate-500 group-hover:text-indigo-300 transition-colors"
              />
            </Link>
          </div>
        </FadeIn>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <FadeIn>
          <div className="relative rounded-3xl border border-slate-700/60 bg-slate-800/40 overflow-hidden text-center px-6 py-14 mt-14 sm:mt-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_200px_at_50%_120%,rgba(99,102,241,0.18),transparent_70%)]" />
            <h2 className="relative text-xl sm:text-2xl font-bold tracking-tight mb-3">
              Need this stack on your team?
            </h2>
            <p className="relative text-slate-400 mb-7 max-w-xl mx-auto">
              I&apos;m based in Sydney, happy to work remote, and open to a
              conversation.
            </p>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-7 py-3 bg-indigo-400 text-slate-900 rounded-lg hover:bg-indigo-300 hover:shadow-lg hover:shadow-indigo-500/20 transition-all font-semibold text-sm"
            >
              Get in touch <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
