"use client";

import { Calendar, MapPin } from "lucide-react";

// ---- Data model -----------------------------------------------------------

type Experience = {
  company: string;
  role: string;
  employmentType?: string;
  start: string;
  end: string;
  location?: string;
  description?: string;
  skills?: string[];
  links?: { label: string; href: string }[];
};

// ---- Content --------------------------------------------------------------

const EXPERIENCES: Experience[] = [
  {
    company: "YouX Powered",
    role: "Junior Software Developer",
    employmentType: "Full-time",
    start: "Jul 2025",
    end: "Present",
    location: "Sydney, New South Wales, Australia · On-site",
    description:
      "I develop and maintain web applications using Next.js, TypeScript, and MongoDB—shipping features, fixing bugs, and improving performance for a smooth, user‑friendly experience.",
    skills: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind",
      "Git",
      "Jira",
      "Bitbucket",
    ],
  },
  {
    company: "YouX Powered",
    role: "Software Developer (Internship)",
    employmentType: "Internship",
    start: "Mar 2025",
    end: "Jul 2025",
    location: "Sydney, New South Wales, Australia · On-site",
    description:
      "Worked closely with senior developers on scalable, user‑friendly platforms in the asset‑finance domain, strengthening practical coding skills and modern frontend patterns.",
    skills: ["Next.js", "TypeScript", "MongoDB", "Git"],
  },
  {
    company: "Flair Group Bangladesh",
    role: "Junior Software Engineer",
    employmentType: "Full-time",
    start: "Jun 2022",
    end: "Dec 2022",
    location: "On-site",
    description:
      "Contributed to engineering tasks across the stack; collaborated with the team to deliver features on schedule and maintain code quality.",
    skills: ["Engineering", "Teamwork"],
  },
  {
    company: "Aurora IT-21",
    role: "Software Engineer (Trainee)",
    employmentType: "Internship",
    start: "Jan 2022",
    end: "Apr 2022",
    location: "Sector 10, Uttara Model Town, Dhaka-1230",
    description:
      "Hands‑on trainee role focusing on fundamentals of software engineering, code reviews, and delivery discipline.",
    skills: ["Software Engineering", "Problem Solving"],
    links: [
      {
        label: "Internship Certificate",
        href: "/docs/Internship_Certificate.pdf",
      },
    ],
  },
  {
    company: "IUBAT IT Society",
    role: "Mentor",
    employmentType: "Volunteer",
    start: "Jun 2021",
    end: "Jan 2022",
    description:
      "Mentored peers on technical topics and guided juniors through learning paths and projects.",
    skills: ["Mentoring", "Leadership"],
  },
  {
    company: "IUBAT",
    role: "Academic Mentor",
    employmentType: "Part-time",
    start: "May 2019",
    end: "Jan 2022",
    description:
      "Assisted and taught students under probation/suspension; conducted weekly two‑hour mentoring classes for freshers.",
    skills: ["Teaching", "Communication", "Student Support"],
    links: [
      {
        label: "Academic_Mentor_Certificate.pdf",
        href: "/docs/Academic_Mentor_Certificate.pdf",
      },
    ],
  },
  {
    company: "BASIS Student Forum – IUBAT Chapter",
    role: "Executive",
    employmentType: "Volunteer",
    start: "Mar 2019",
    end: "Jan 2022",
    description:
      "Organised student activities and tech events; helped connect students with industry resources.",
    skills: ["Community", "Organising"],
  },
  {
    company: "IUBAT IT Society",
    role: "Assistant Academic Manager",
    employmentType: "Volunteer",
    start: "Jun 2019",
    end: "Jun 2020",
    description:
      "Coordinated academic wing operations—scheduling mentoring classes and assisting students with academic issues.",
    skills: ["Coordination", "Leadership", "Operations"],
  },
];

// ---- UI -------------------------------------------------------------------

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article className="border-b pb-6 mb-6">
      <h3 className="text-base sm:text-lg font-semibold leading-snug">
        {exp.role}
      </h3>
      <p className="text-sm text-gray-700 mt-0.5">
        {exp.company}
        {exp.employmentType ? (
          <span className="text-gray-500"> · {exp.employmentType}</span>
        ) : null}
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-600">
        <span className="inline-flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" />
          {exp.start} — {exp.end}
        </span>
        {exp.location && (
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {exp.location}
          </span>
        )}
      </div>
      {exp.description && (
        <p className="mt-3 text-sm leading-relaxed text-gray-800">
          {exp.description}
        </p>
      )}
      {exp.skills && exp.skills.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {exp.skills.map((s) => (
            <span
              key={s}
              className="px-2 py-1 rounded-full border text-xs text-gray-700 bg-white/60"
            >
              {s}
            </span>
          ))}
        </div>
      )}
      {exp.links && exp.links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-3">
          {exp.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-1 text-sm underline underline-offset-2 hover:no-underline"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

// ---- Page -----------------------------------------------------------------

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 mt-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Experience
        </h1>
      </header>

      <section>
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard key={`${exp.company}-${exp.role}-${i}`} exp={exp} />
        ))}
      </section>
    </main>
  );
}
