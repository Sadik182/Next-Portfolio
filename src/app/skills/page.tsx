// app/skills/page.tsx
import type { Metadata } from "next";

type Level = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type Skill = { name: string; level: Level; note?: string };
type Group = { title: string; skills: Skill[] };

const groups: Group[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "Next.js (App Router)",
        level: "Advanced",
        note: "SSR, ISR, routing",
      },
      { name: "React", level: "Advanced", note: "Hooks, context" },
      {
        name: "TypeScript",
        level: "Advanced",
        note: "Typesafe components/APIs",
      },
      {
        name: "Tailwind CSS",
        level: "Advanced",
        note: "Responsive UI, design systems",
      },
      {
        name: "Framer Motion",
        level: "Intermediate",
        note: "Micro-interactions",
      },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: "Intermediate", note: "API routes" },
      {
        name: "MongoDB (Atlas/Compass)",
        level: "Advanced",
        note: "Schema design, indexes",
      },
      { name: "REST APIs", level: "Intermediate", note: "Routing, validation" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & Bitbucket", level: "Advanced", note: "PRs, reviews" },
      { name: "Jira", level: "Intermediate", note: "Scrum/Kanban" },
      { name: "Docker (basics)", level: "Beginner" },
    ],
  },
  {
    title: "Professional",
    skills: [
      { name: "Team Collaboration", level: "Advanced" },
      { name: "Mentoring", level: "Advanced", note: "IUBAT IT Society" },
      {
        name: "Problem Solving",
        level: "Advanced",
        note: "Debugging, perf wins",
      },
      { name: "Communication", level: "Advanced" },
    ],
  },
];

const chip =
  "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium text-gray-600 border-gray-200";

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Skills</h1>
      <p className="mt-3 text-gray-600">
        A concise snapshot of the technologies and practices I use most.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {groups.map((g) => (
          <section key={g.title}>
            <h2 className="text-xl font-semibold mb-4">{g.title}</h2>
            <ul className="space-y-4">
              {g.skills.map((s) => (
                <li
                  key={s.name}
                  className="flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="font-medium">{s.name}</div>
                    {s.note && (
                      <p className="text-sm text-gray-600">{s.note}</p>
                    )}
                  </div>
                  <span className={chip}>{s.level}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-12 text-sm text-gray-500">
        <span className="font-medium">Core stack:</span> Next.js · TypeScript ·
        MongoDB · Tailwind
      </div>
    </main>
  );
}
