import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
} from "lucide-react";
import FadeIn from "@/components/FadeIn/FadeIn";
import HeroCarousel from "@/components/Projects/HeroCarousel";
import CaseStudyNav, { type NavSection } from "@/components/Projects/CaseStudyNav";
import FeatureJourney from "@/components/Projects/FeatureJourney";
import DecisionExplorer from "@/components/Projects/DecisionExplorer";
import { getProject, projects, type Project } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Case Study | Md Sadikur Rahman`,
      description: project.tagline,
      images: [{ url: project.cover }],
      type: "article",
    },
  };
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const sections: NavSection[] = [
    { id: "problem", label: "The Problem", index: "01" },
    { id: "solution", label: "What It Does", index: "02" },
    { id: "build", label: "How I Built It", index: "03" },
    { id: "stack", label: "Tech Stack", index: "04" },
    ...(project.outcomes?.length
      ? [{ id: "outcomes", label: "Outcomes", index: "05" }]
      : []),
  ];

  const liveHost = project.liveUrl
    ? new URL(project.liveUrl).hostname.replace("www.", "")
    : null;

  return (
    <main className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(800px_400px_at_70%_-10%,rgba(99,102,241,0.16),transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(600px_300px_at_15%_0%,rgba(16,185,129,0.07),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.07)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent_45%)]" />
      </div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-16 py-10 sm:py-14">
        {/* Back */}
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-10 py-2"
          >
            <ArrowLeft size={15} /> All projects
          </Link>
        </FadeIn>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10">
          <FadeIn>
            <div>
              <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.16em] uppercase mb-5">
                <StatusBadge status={project.status} />
                <span className="text-slate-500">
                  {project.year} · {project.tags.join(" / ")}
                </span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 [text-wrap:balance]">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                {project.tagline}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-400 text-slate-900 rounded-lg hover:bg-indigo-300 hover:shadow-lg hover:shadow-indigo-500/20 transition-all font-semibold text-sm"
                  >
                    Visit live site <ExternalLink size={15} />
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all font-medium text-sm"
                  >
                    <Github size={15} /> Source code
                  </a>
                )}
              </div>
            </div>
          </FadeIn>

          {/* Cover + screenshots in a browser-framed carousel */}
          <FadeIn delay={0.15} direction="left">
            <HeroCarousel
              slides={[
                { src: project.cover, caption: "Overview" },
                ...project.gallery,
              ]}
              host={liveHost}
              title={project.title}
            />
          </FadeIn>
        </div>

        {/* ── At a glance ──────────────────────────────────────── */}
        <FadeIn>
          <dl className="grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-slate-700/60 bg-slate-800/40 backdrop-blur-sm divide-y md:divide-y-0 divide-x-0 md:divide-x divide-slate-700/60 mb-20 overflow-hidden">
            <Glance label="Year" value={project.year} />
            <Glance label="Status" value={project.status} accent={project.status === "Live"} />
            <Glance label="Type" value={project.tags.join(" · ")} />
            <Glance label="Core stack" value={project.stack.slice(0, 3).join(" · ")} mono />
          </dl>
        </FadeIn>

        {/* ── Body with sticky section nav ─────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-[200px_minmax(0,1fr)] gap-14">
          <CaseStudyNav sections={sections} />

          <div className="min-w-0">
            {/* 01 · The Problem */}
            <Section id="problem" index="01" title="The Problem">
              <div className="relative pl-6 sm:pl-8">
                <span className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-indigo-400 via-indigo-400/40 to-transparent" />
                {project.problem.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-lg sm:text-xl text-slate-200 leading-relaxed mb-5 [text-wrap:pretty]"
                        : "text-slate-400 leading-relaxed mb-5 last:mb-0"
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>
            </Section>

            {/* 02 · What It Does — interactive feature journey */}
            <Section id="solution" index="02" title="What It Does">
              <FeatureJourney items={project.solution} />
            </Section>

            {/* 03 · How I Built It — master–detail decision explorer */}
            <Section id="build" index="03" title="How I Built It">
              <DecisionExplorer items={project.buildStory} />
            </Section>

            {/* 04 · Tech Stack — card grid */}
            <Section id="stack" index="04" title="Tech Stack">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col gap-1.5 rounded-xl border border-slate-700/60 bg-slate-800/40 px-5 py-4 hover:border-indigo-400/40 hover:bg-slate-800/70 transition-colors"
                  >
                    <span className="font-mono text-sm text-indigo-200">
                      {tech.name}
                    </span>
                    <span className="text-sm text-slate-400 leading-relaxed">
                      {tech.purpose}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            {/* 05 · Outcomes */}
            {project.outcomes && project.outcomes.length > 0 && (
              <Section id="outcomes" index="05" title="Outcomes">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-6"
                    >
                      <CheckCircle2 size={20} className="text-emerald-400 mb-3" />
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            )}
          </div>
        </div>

        {/* ── Prev / Next ──────────────────────────────────────── */}
        <FadeIn>
          <nav
            aria-label="More case studies"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-12 border-t border-slate-700/50"
          >
            <PagerCard project={prev} direction="prev" />
            <PagerCard project={next} direction="next" />
          </nav>
        </FadeIn>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <FadeIn>
          <div className="relative rounded-3xl border border-slate-700/60 bg-slate-800/40 overflow-hidden text-center px-6 py-14 mt-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_200px_at_50%_120%,rgba(99,102,241,0.18),transparent_70%)]" />
            <h2 className="relative text-xl sm:text-2xl font-bold tracking-tight mb-3">
              Want something like this built?
            </h2>
            <p className="relative text-slate-400 mb-7">
              Let&apos;s talk about your project — I&apos;m open to freelance
              and full-time work.
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

// ── Pieces ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: Project["status"] }) {
  const isLive = status === "Live";
  const color =
    status === "Live"
      ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
      : status === "In Development"
        ? "text-amber-400 border-amber-400/30 bg-amber-400/10"
        : "text-sky-400 border-sky-400/30 bg-sky-400/10";
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border font-mono text-[11px] tracking-[0.12em] uppercase ${color}`}
    >
      {isLive && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
        </span>
      )}
      {status}
    </span>
  );
}

function Glance({
  label,
  value,
  accent = false,
  mono = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
  mono?: boolean;
}) {
  return (
    <div className="px-5 sm:px-6 py-4 sm:py-5">
      <dt className="font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500 mb-1.5">
        {label}
      </dt>
      <dd
        className={`text-sm font-medium truncate ${
          accent ? "text-emerald-400" : mono ? "font-mono text-slate-300" : "text-slate-200"
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <FadeIn>
      <section id={id} className="mb-20 scroll-mt-28">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs text-indigo-400">{index}</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {title}
          </h2>
          <span className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
        </div>
        {children}
      </section>
    </FadeIn>
  );
}

function PagerCard({
  project,
  direction,
}: {
  project: Project;
  direction: "prev" | "next";
}) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex items-center gap-5 rounded-2xl border border-slate-700/60 bg-slate-800/40 hover:border-indigo-400/40 transition-colors p-4 sm:p-5 overflow-hidden ${
        isNext ? "sm:flex-row-reverse sm:text-right" : ""
      }`}
    >
      <div className="relative w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden border border-slate-700/60 shrink-0">
        <Image
          src={project.cover}
          alt=""
          fill
          sizes="96px"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="min-w-0">
        <span
          className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500 mb-1 ${
            isNext ? "sm:flex-row-reverse" : ""
          }`}
        >
          {isNext ? (
            <>
              Next <ArrowRight size={11} />
            </>
          ) : (
            <>
              <ArrowLeft size={11} /> Previous
            </>
          )}
        </span>
        <p className="font-semibold truncate group-hover:text-indigo-200 transition-colors">
          {project.title}
        </p>
        <p className="text-xs text-slate-500 truncate mt-0.5">
          {project.tagline}
        </p>
      </div>
    </Link>
  );
}
