"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BookOpen, GitBranch, X } from "lucide-react";

// IDE-style skills explorer: each skill is a "file" — click one in the
// explorer and it opens as syntax-highlighted code, with a plain-English
// preview pane alongside so non-developers get the story too.
// Code lines are kept short (~35ch) so nothing scrolls on a phone.

type TokenType = "cm" | "kw" | "str" | "prop" | "punc" | "txt" | "tag" | "fn";
type Token = { t: TokenType; v: string };
type Line = Token[];

const cm = (v: string): Token => ({ t: "cm", v });
const kw = (v: string): Token => ({ t: "kw", v });
const str = (v: string): Token => ({ t: "str", v });
const prop = (v: string): Token => ({ t: "prop", v });
const punc = (v: string): Token => ({ t: "punc", v });
const txt = (v: string): Token => ({ t: "txt", v });
const tag = (v: string): Token => ({ t: "tag", v });
const fn = (v: string): Token => ({ t: "fn", v });

const TOKEN_CLASS: Record<TokenType, string> = {
  cm: "text-slate-500 italic",
  kw: "text-indigo-300",
  str: "text-emerald-300",
  prop: "text-sky-300",
  punc: "text-slate-500",
  txt: "text-slate-300",
  tag: "text-rose-300",
  fn: "text-amber-200",
};

interface SkillFile {
  id: string;
  name: string;
  dot: string;
  meta: string;
  code: Line[];
  preview: {
    title: string;
    body: string;
    chips: string[];
    proof: { label: string; href: string };
  };
}

const FILES: SkillFile[] = [
  {
    id: "typescript",
    name: "typescript.ts",
    dot: "bg-sky-400",
    meta: "TypeScript",
    code: [
      [cm("// The language everything")],
      [cm("// else here is written in.")],
      [],
      [kw("export const "), fn("typescript"), punc(" = {")],
      [txt("  "), prop("role"), punc(": "), str('"primary language"'), punc(",")],
      [txt("  "), prop("usedFor"), punc(": [")],
      [txt("    "), str('"React frontends"'), punc(",")],
      [txt("    "), str('"Node.js APIs"'), punc(",")],
      [txt("    "), str('"shared packages"'), punc(",")],
      [txt("  "), punc("],")],
      [txt("  "), prop("inProduction"), punc(":")],
      [txt("    "), str('"end-to-end — database to UI"'), punc(",")],
      [
        txt("  "),
        prop("alsoSpeaks"),
        punc(": ["),
        str('"JS"'),
        punc(", "),
        str('"C"'),
        punc(", "),
        str('"C++"'),
        punc("],"),
      ],
      [punc("};")],
    ],
    preview: {
      title: "My primary language",
      body: "Everything I ship — frontends, APIs and shared packages — is written in TypeScript, so whole categories of bugs are caught before the code ever runs. In production that means types flowing end to end, from the database to the screen.",
      chips: ["TypeScript", "JavaScript", "C", "C++"],
      proof: { label: "It runs through every case study", href: "/projects" },
    },
  },
  {
    id: "frontend",
    name: "frontend.tsx",
    dot: "bg-cyan-400",
    meta: "TypeScript React",
    code: [
      [cm("// Dashboards, kanban boards")],
      [cm("// and quote flows — used daily.")],
      [],
      [kw("export function "), fn("Frontend"), punc("() {")],
      [txt("  "), kw("return"), punc(" (")],
      [
        txt("    "),
        punc("<"),
        tag("NextJS"),
        prop(" router"),
        punc("="),
        str('"app"'),
        prop(" ssr"),
        prop(" isr"),
        punc(">"),
      ],
      [txt("      "), punc("<"), tag("UI")],
      [txt("        "), prop("css"), punc("="), str('"Tailwind"')],
      [txt("        "), prop("motion"), punc("="), str('"Framer Motion"')],
      [txt("        "), prop("state"), punc("="), str('"Redux"')],
      [txt("      "), punc("/>")],
      [
        txt("      "),
        punc("<"),
        tag("Docs"),
        prop(" library"),
        punc("="),
        str('"Storybook"'),
        punc(" />"),
      ],
      [txt("    "), punc("</"), tag("NextJS"), punc(">")],
      [txt("  "), punc(");")],
      [punc("}")],
    ],
    preview: {
      title: "Interfaces people work in all day",
      body: "I build the screens brokers and dealers use daily — dashboards, kanban boards and quote flows — with Next.js and React. Fast, responsive on any device, and built from shared components documented in Storybook so the whole product stays consistent.",
      chips: ["Next.js", "React", "Tailwind CSS", "Storybook", "Framer Motion", "Redux"],
      proof: { label: "See it in the SolarCRM case study", href: "/projects/solarcrm" },
    },
  },
  {
    id: "backend",
    name: "backend.ts",
    dot: "bg-emerald-400",
    meta: "TypeScript",
    code: [
      [cm("// The services behind a fintech")],
      [cm("// platform across AU & NZ.")],
      [],
      [kw("export const "), fn("backend"), punc(" = {")],
      [
        txt("  "),
        prop("runtime"),
        punc(": "),
        str('"Node.js + Express"'),
        punc(","),
      ],
      [txt("  "), prop("apis"), punc(": [")],
      [
        txt("    "),
        str('"REST"'),
        punc(", "),
        str('"Server-Sent Events"'),
        punc(","),
      ],
      [txt("  "), punc("],")],
      [
        txt("  "),
        prop("auth"),
        punc(": ["),
        str('"JWT"'),
        punc(", "),
        str('"OAuth 2.0"'),
        punc("],"),
      ],
      [txt("  "), prop("database"), punc(": "), str('"MongoDB"'), punc(",")],
      [txt("  "), prop("dataDesign"), punc(": [")],
      [
        txt("    "),
        str('"schemas"'),
        punc(", "),
        str('"aggregations"'),
        punc(","),
      ],
      [txt("    "), str('"tenant isolation"'), punc(",")],
      [txt("  "), punc("],")],
      [punc("};")],
    ],
    preview: {
      title: "The services behind the screen",
      body: "I design the APIs and data models that power the frontend — Node.js services with secure sign-in, real-time updates, and MongoDB structured so every customer's data stays strictly isolated from the next.",
      chips: ["Node.js", "Express", "REST APIs", "MongoDB", "JWT", "OAuth 2.0"],
      proof: { label: "See it in the SplitEven case study", href: "/projects/spliteven" },
    },
  },
  {
    id: "aws",
    name: "aws.yml",
    dot: "bg-purple-400",
    meta: "YAML",
    code: [
      [cm("# Production infrastructure —")],
      [cm("# not console-clicking.")],
      [],
      [prop("storage"), punc(": "), txt("S3, per environment")],
      [prop("security"), punc(": "), txt("KMS + IAM roles")],
      [prop("compute"), punc(": "), txt("Lambda + Amplify")],
      [prop("hosting"), punc(": "), txt("Vercel")],
      [],
      [prop("currently_learning"), punc(":")],
      [txt("  "), punc("- "), str("EC2")],
      [txt("  "), punc("- "), str("Docker")],
    ],
    preview: {
      title: "Cloud infrastructure, done properly",
      body: "I run production services on AWS with personal data encrypted, role-based access instead of hard-coded credentials, and environments kept strictly separate — security work I rolled out across 8 live microservices. Currently adding EC2 and Docker to the kit.",
      chips: ["AWS S3", "KMS", "IAM", "Lambda", "Amplify", "Vercel"],
      proof: { label: "The security story, at work", href: "/experiences" },
    },
  },
  {
    id: "testing",
    name: "testing.spec.ts",
    dot: "bg-amber-400",
    meta: "TypeScript · Jest",
    code: [
      [cm("// If it isn't tested,")],
      [cm("// it isn't done.")],
      [],
      [fn("describe"), punc("("), str('"how I ship"'), punc(", () => {")],
      [
        txt("  "),
        fn("it"),
        punc("("),
        str('"unit-tests: Jest + RTL"'),
        punc(");"),
      ],
      [
        txt("  "),
        fn("it"),
        punc("("),
        str('"e2e flows: Playwright"'),
        punc(");"),
      ],
      [
        txt("  "),
        fn("it"),
        punc("("),
        str('"every push: GitHub Actions"'),
        punc(");"),
      ],
      [punc("});")],
    ],
    preview: {
      title: "Shipping without breaking things",
      body: "Every feature ships with tests: unit tests for the small pieces, and Playwright tests that click through real user journeys like a customer would. All of it runs automatically on every push, so problems are caught before users ever see them.",
      chips: ["Jest", "React Testing Library", "Playwright", "GitHub Actions CI/CD"],
      proof: { label: "SolarCRM's full test setup", href: "/projects/solarcrm" },
    },
  },
  {
    id: "workflow",
    name: "workflow.md",
    dot: "bg-slate-400",
    meta: "Markdown",
    code: [
      [kw("# AI-assisted, human-reviewed")],
      [],
      [txt("Cursor and Claude are part of")],
      [txt("my daily loop — writing,")],
      [txt("refactoring and debugging.")],
      [],
      [punc("> "), cm("Everything still gets reviewed,")],
      [punc("> "), cm("line by line, before it ships.")],
      [],
      [txt("Also in the kit:")],
      [str("Git · Jira · Figma · code review")],
    ],
    preview: {
      title: "How I actually work",
      body: "I use AI tools like Cursor and Claude every day to write, refactor and debug faster — but nothing ships without a careful human review. Around that: Agile sprints, code reviews on every pull request, and Jira and Figma to stay close to the team and the design.",
      chips: ["Cursor", "Claude", "Git", "Jira", "Figma", "Code review", "Agile"],
      proof: { label: "What it's shipped — my experience", href: "/experiences" },
    },
  },
];

export default function SkillsWorkbench() {
  const [activeId, setActiveId] = useState(FILES[0].id);
  const active = FILES.find((f) => f.id === activeId) ?? FILES[0];

  return (
    <div className="relative group">
      <div className="absolute -inset-6 bg-indigo-500/10 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 motion-reduce:transition-none" />

      <div className="relative rounded-xl border border-slate-700/70 bg-slate-950 overflow-hidden shadow-2xl shadow-slate-950/70">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-900/90 border-b border-slate-700/60">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <span className="ml-3 px-2.5 py-0.5 rounded-md bg-slate-800 font-mono text-[10px] text-slate-400 truncate">
            sadik — ~/skills
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[210px_minmax(0,1fr)]">
          {/* Explorer (desktop) */}
          <aside
            className="hidden md:block border-r border-slate-800 bg-slate-900/50 py-3"
            aria-label="Skill files"
          >
            <p className="px-4 mb-2 font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500">
              Explorer
            </p>
            <p className="px-4 py-1 font-mono text-[12px] text-slate-300">
              <span className="text-slate-500 mr-1.5">▾</span>skills
            </p>
            <ul>
              {FILES.map((file) => {
                const isActive = file.id === activeId;
                return (
                  <li key={file.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(file.id)}
                      aria-current={isActive}
                      className={`flex w-full items-center gap-2.5 pl-8 pr-4 py-1.5 font-mono text-[12.5px] border-l-2 transition-colors cursor-pointer ${
                        isActive
                          ? "border-indigo-400 bg-indigo-400/10 text-white"
                          : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-[3px] shrink-0 ${file.dot} ${
                          isActive ? "" : "opacity-60"
                        }`}
                      />
                      {file.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="min-w-0 flex flex-col">
            {/* Tab bar (desktop) */}
            <div className="hidden md:flex items-center justify-between border-b border-slate-800 bg-slate-900/40">
              <span className="flex items-center gap-2.5 px-4 py-2 font-mono text-[12px] text-slate-200 bg-slate-950 border-r border-slate-800 border-t-2 border-t-indigo-400">
                <span className={`h-2 w-2 rounded-[3px] ${active.dot}`} />
                {active.name}
                <X size={12} className="text-slate-600" />
              </span>
              <span className="hidden lg:flex items-center gap-1.5 px-4 font-mono text-[10px] tracking-[0.14em] uppercase text-slate-500">
                <BookOpen size={11} /> Preview
              </span>
            </div>

            {/* File picker (mobile) */}
            <div
              className="flex md:hidden gap-2 overflow-x-auto px-3 py-3 border-b border-slate-800 bg-slate-900/40 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Skill files"
            >
              {FILES.map((file) => {
                const isActive = file.id === activeId;
                return (
                  <button
                    key={file.id}
                    type="button"
                    onClick={() => setActiveId(file.id)}
                    aria-current={isActive}
                    className={`shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-md border font-mono text-[11.5px] transition-colors ${
                      isActive
                        ? "border-indigo-400/60 bg-indigo-400/10 text-white"
                        : "border-slate-700/70 text-slate-400"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-[2px] ${file.dot}`} />
                    {file.name}
                  </button>
                );
              })}
            </div>

            {/* Code + preview split */}
            <div
              key={active.id}
              className="flex-1 grid grid-cols-1 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)]"
            >
              {/* Code */}
              <div className="min-w-0 overflow-x-auto px-4 sm:px-5 py-5 sm:py-6 min-h-[260px]">
                <div className="font-mono text-[12.5px] sm:text-[13px] leading-[1.9]">
                  {active.code.map((line, i) => (
                    <div
                      key={i}
                      className="flex animate-stage motion-reduce:animate-none"
                      style={{ animationDelay: `${i * 45}ms` }}
                    >
                      <span className="w-7 shrink-0 select-none text-right pr-4 text-slate-700">
                        {i + 1}
                      </span>
                      <span className="whitespace-pre">
                        {line.map((token, j) => (
                          <span key={j} className={TOKEN_CLASS[token.t]}>
                            {token.v}
                          </span>
                        ))}
                        {i === active.code.length - 1 && (
                          <span
                            aria-hidden
                            className="ml-1 inline-block w-[7px] h-[15px] translate-y-[3px] bg-indigo-400/80 animate-pulse motion-reduce:animate-none"
                          />
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview — the plain-English version */}
              <div className="relative min-w-0 border-t lg:border-t-0 lg:border-l border-slate-800 bg-slate-900/40 px-5 sm:px-6 py-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(300px_140px_at_85%_0%,rgba(99,102,241,0.08),transparent_70%)]" />
                <div
                  className="relative animate-stage motion-reduce:animate-none"
                  style={{ animationDelay: "120ms" }}
                >
                  <p className="flex lg:hidden items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] uppercase text-slate-500 mb-3">
                    <BookOpen size={11} /> In plain English
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-3 [text-wrap:balance]">
                    {active.preview.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5 [text-wrap:pretty]">
                    {active.preview.body}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {active.preview.chips.map((chip) => (
                      <span
                        key={chip}
                        className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 font-mono text-[11px] text-slate-400"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={active.preview.proof.href}
                    className="group/link inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors"
                  >
                    {active.preview.proof.label}
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between gap-4 px-4 py-1.5 bg-slate-900/70 border-t border-slate-800 font-mono text-[10px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <GitBranch size={11} className="text-indigo-400" /> main
                <span className="hidden sm:inline text-slate-600 ml-2">
                  {FILES.findIndex((f) => f.id === activeId) + 1} of{" "}
                  {FILES.length} files
                </span>
              </span>
              <span className="truncate">
                {active.meta} · UTF-8 ·{" "}
                <span className="text-emerald-400">✓ in production</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
