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
    role: "Assistant Academic Manager",
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
    employmentType: "Volunteer",
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
    <article className="group relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 mb-6">
      {/* Timeline indicator */}
      <div className="absolute left-0 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm -translate-x-2"></div>

      <div className="ml-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {exp.role}
            </h3>
            <p className="text-base font-semibold text-blue-600 mt-1">
              {exp.company}
              {exp.employmentType && (
                <span className="text-gray-500 font-normal">
                  {" "}
                  · {exp.employmentType}
                </span>
              )}
            </p>
          </div>

          {/* Duration badge */}
          <div className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            <Calendar className="h-4 w-4" />
            {exp.start} — {exp.end}
          </div>
        </div>

        {/* Location */}
        {exp.location && (
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span>{exp.location}</span>
          </div>
        )}

        {/* Description */}
        {exp.description && (
          <p className="text-gray-700 leading-relaxed mb-4 text-base">
            {exp.description}
          </p>
        )}

        {/* Skills */}
        {exp.skills && exp.skills.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Key Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full text-sm font-medium transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        {exp.links && exp.links.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {exp.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

// ---- Page -----------------------------------------------------------------

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey through my career, showcasing growth, skills, and
            contributions across various roles and organizations.
          </p>
        </header>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200"></div>

          {/* Experience Cards */}
          <section className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard
                key={`${exp.company}-${exp.role}-${i}`}
                exp={exp}
              />
            ))}
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center bg-white rounded-xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to work together?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I&apos;m always excited to take on new challenges and contribute to
            meaningful projects. Let&apos;s discuss how we can collaborate.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Get In Touch
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
