import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/FadeIn/FadeIn";
import { featuredProject, projects } from "@/data/projects";

// Compact teaser for the home page — full details live on /projects and the
// per-project case-study pages.
export default function FeaturedProjects() {
  const highlights = [
    featuredProject,
    ...projects.filter((p) => p.slug !== featuredProject.slug).slice(0, 2),
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <FadeIn>
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] uppercase text-indigo-300 mb-3">
                Selected Work
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                Things I&apos;ve shipped
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-white transition-colors shrink-0 py-2"
            >
              All projects <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex flex-col h-full rounded-2xl border border-slate-700/60 bg-slate-800/50 hover:border-indigo-400/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="relative aspect-video overflow-hidden border-b border-slate-700/60">
                  <Image
                    src={project.cover}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-400"
                  />
                  {project.featured && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-500/90 text-[11px] font-semibold">
                      Live product
                    </span>
                  )}
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-semibold group-hover:text-indigo-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1.5 flex-1">
                    {project.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-indigo-300 mt-4">
                    Case study <ArrowUpRight size={12} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="sm:hidden text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-white transition-colors py-2"
            >
              All projects <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
