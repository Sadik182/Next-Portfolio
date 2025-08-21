// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// If you have this image already (you used it in Hero)
import profilePic from "../../../public/images/YOUX_profile.jpg";

export const metadata: Metadata = {
  title: "About — Md Sadikur Rahman",
  description: "About Md Sadikur Rahman — Junior Software Developer in Sydney.",
};

const highlights = [
  { label: "Role", value: "Junior Software Developer @ YouX Powered" },
  { label: "Location", value: "Sydney, Australia" },
  { label: "Stack", value: "Next.js, TypeScript, MongoDB, Tailwind" },
  { label: "Focus", value: "Performance, clean UI, maintainable code" },
];

const experience = [
  {
    title: "Junior Software Developer",
    company: "YouX Powered",
    location: "Sydney (On-site)",
    period: "Jul 2025 — Present",
    bullets: [
      "Build and maintain features in Next.js (App Router) with TypeScript and MongoDB.",
      "Fix bugs and improve performance for smoother UX.",
      "Collaborate with teammates using Git/Bitbucket and Jira.",
    ],
  },
  {
    title: "Software Developer (Intern)",
    company: "YouX Powered",
    location: "Sydney (On-site)",
    period: "Mar 2025 — Jul 2025",
    bullets: [
      "Learned production workflows and contributed to scalable components.",
      "Worked closely with senior devs to ship user-facing improvements.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Flair Group Bangladesh",
    location: "On-site",
    period: "Jun 2022 — Dec 2022",
    bullets: ["Hands-on engineering experience in a team environment."],
  },
  {
    title: "Software Engineer (Trainee)",
    company: "Aurora IT-21",
    location: "Dhaka",
    period: "Jan 2022 — Apr 2022",
    bullets: ["Built foundational skills and learned team code practices."],
  },
  {
    title: "Mentor",
    company: "IUBAT IT Society",
    location: "Dhaka",
    period: "Jun 2021 — Jan 2022",
    bullets: [
      "Guided juniors and helped them with programming basics and projects.",
    ],
  },
  {
    title: "Academic Mentor (Part-time)",
    company: "IUBAT",
    location: "Dhaka",
    period: "May 2019 — Jan 2022",
    bullets: [
      "Assisted probation students; ran weekly mentoring classes for freshers.",
    ],
  },
];

const education = [
  {
    school: "CQUniversity",
    degree: "Master of Information Technology",
    period: "Nov 2023 — Jul 2025",
  },
  {
    school:
      "International University of Business Agriculture and Technology (IUBAT)",
    degree: "BSc in Computer Science",
    period: "2018 — 2021",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <header className="mb-10 grid gap-6 md:grid-cols-[180px,1fr] md:items-center">
        <div className="relative h-40 w-40 overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5">
          <Image
            src={profilePic}
            alt="Md Sadikur Rahman"
            fill
            sizes="160px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">About</h1>
          <p className="mt-3 text-gray-600">
            I’m <strong>Md Sadikur Rahman</strong>, a Junior Software Developer
            based in Sydney. I build fast, accessible web apps using{" "}
            <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
            <strong>MongoDB</strong>. I care about clean code, helpful UI
            details, and performance that feels effortless. I’m always learning
            and enjoy turning real problems into simple, reliable solutions.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <Link
              href="/Sadikur_CV.pdf"
              download
              className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
            >
              Download CV
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border px-4 py-2 font-medium hover:bg-black/5"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </header>

      {/* Highlights */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">At a glance</h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-xl border p-4 bg-white shadow-sm"
            >
              <dt className="text-sm text-gray-500">{h.label}</dt>
              <dd className="text-base font-medium">{h.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <ol className="space-y-6">
          {experience.map((job) => (
            <li
              key={`${job.title}-${job.company}`}
              className="rounded-xl border p-5 bg-white shadow-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-semibold">
                    {job.title} ·{" "}
                    <span className="text-indigo-700">{job.company}</span>
                  </h3>
                  <p className="text-sm text-gray-500">{job.location}</p>
                </div>
                <span className="text-sm text-gray-600">{job.period}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <ul className="space-y-4">
          {education.map((ed) => (
            <li
              key={ed.degree}
              className="rounded-xl border p-5 bg-white shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{ed.school}</div>
                  <div className="text-sm text-gray-600">{ed.degree}</div>
                </div>
                <div className="text-sm text-gray-600">{ed.period}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Personal note */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Beyond the code</h2>
        <p className="text-gray-700">
          I like to keep things simple, ship iteratively, and document what I
          learn. Outside of work I enjoy exploring Sydney, learning new tech,
          and helping friends get unstuck with web dev problems. If you have a
          project in mind,{" "}
          <Link
            href="/contact"
            className="text-indigo-600 underline underline-offset-4"
          >
            let’s talk
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
