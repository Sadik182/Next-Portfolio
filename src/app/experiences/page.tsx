import type { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";
import FadeIn from "@/components/FadeIn/FadeIn";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Md Sadikur Rahman — Software Developer roles, internships, and volunteer work.",
};

// ---- Data model -----------------------------------------------------------

type Experience = {
  company: string;
  role: string;
  employmentType?: string;
  start: string;
  end: string;
  location?: string;
  description?: string;
  highlights?: string[];
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
      "Full‑stack developer on Manage 2.0, the core platform behind DriveIQ — an asset‑finance product used by brokers, dealers and lenders across Australia and New Zealand. I take features from first discussion through to deployment across the React frontend, Node.js services and AWS infrastructure.",
    highlights: [
      "Built large parts of Manage 2.0 — dashboard, worklist, kanban board, Quick Quote flow and user/organisation management — with Next.js, React, TypeScript, Node.js APIs and MongoDB.",
      "Shipped an automated user‑agreement feature end to end: an admin template editor with dynamic fields, organisation assignment and draft/published/archived version control, live across all production instances.",
      "Built a runtime privacy‑document generator that merges organisation and lender forms with application data into a single filled PDF, replacing a manual process.",
      "Published a shared AWS KMS encryption and logging package to a private Verdaccio registry and rolled it out across 8 microservices, and moved services onto IAM‑role auth with environment‑isolated S3 buckets.",
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "AWS",
      "Storybook",
      "Tailwind",
      "Git",
      "Jira",
    ],
  },
  {
    company: "YouX Powered",
    role: "Software Developer (Internship)",
    employmentType: "Internship",
    start: "Mar 2025",
    end: "Jun 2025",
    location: "Sydney, New South Wales, Australia · On-site",
    description:
      "Joined the DriveIQ team from the first sprint, working on Manage 2.0 across Next.js, React, TypeScript, Node.js and MongoDB. Moved into a full‑time role after four months.",
    highlights: [
      "Shipped production fixes across the Quick Quote flows, user and organisation management, and document workflows.",
      "Worked with QA and Support to resolve customer‑reported issues in the asset‑finance platform.",
    ],
    skills: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Git"],
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
    start: "Jun 2019",
    end: "Jan 2022",
    description:
      "Mentored peers on technical topics, guided juniors through learning paths, and coordinated academic wing operations including scheduling mentoring classes.",
    skills: ["Mentoring", "Leadership", "Coordination"],
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
];

// ---- UI -------------------------------------------------------------------

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all duration-300 p-6 mb-6">
      {/* Timeline indicator */}
      <div className="absolute left-0 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900 shadow-sm -translate-x-2"></div>

      <div className="ml-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {exp.role}
            </h3>
            <p className="text-base font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-1">
              {exp.company}
              {exp.employmentType && (
                <span className="text-slate-400 font-normal">
                  {" "}
                  · {exp.employmentType}
                </span>
              )}
            </p>
          </div>

          {/* Duration badge */}
          <div className="flex items-center gap-1 px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium">
            <Calendar className="h-4 w-4" />
            {exp.start} — {exp.end}
          </div>
        </div>

        {/* Location */}
        {exp.location && (
          <div className="flex items-center gap-2 text-sm text-slate-300 mb-4">
            <MapPin className="h-4 w-4 text-slate-400" />
            <span>{exp.location}</span>
          </div>
        )}

        {/* Description */}
        {exp.description && (
          <p className="text-slate-300 leading-relaxed mb-4 text-base">
            {exp.description}
          </p>
        )}

        {/* Highlights */}
        {exp.highlights && exp.highlights.length > 0 && (
          <ul className="space-y-2 mb-4">
            {exp.highlights.map((item, idx) => (
              <li
                key={idx}
                className="flex gap-2.5 text-slate-300 leading-relaxed text-sm sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Skills */}
        {exp.skills && exp.skills.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">
              Key Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-700/50 hover:bg-blue-500/20 text-slate-300 hover:text-blue-300 rounded-full text-sm font-medium transition-colors cursor-default border border-slate-600/50 hover:border-blue-500/30"
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg text-sm font-medium transition-all"
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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
        {/* Header Section */}
        <FadeIn>
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A journey through my career, showcasing growth, skills, and
            contributions across various roles and organizations.
          </p>
        </header>
        </FadeIn>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50"></div>

          {/* Experience Cards */}
          <section className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <FadeIn key={`${exp.company}-${exp.role}-${i}`} delay={i * 0.05}>
                <ExperienceCard exp={exp} />
              </FadeIn>
            ))}
          </section>
        </div>

        {/* Footer CTA */}
        <FadeIn delay={0.1}>
        <div className="mt-16 text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            I&apos;m always excited to take on new challenges and contribute to
            meaningful projects. Let&apos;s discuss how we can collaborate.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-semibold transition-all"
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
        </FadeIn>
      </div>
    </main>
  );
}
