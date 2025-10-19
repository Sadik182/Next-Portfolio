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
    period: "2018 — 2022",
  },
  {
    school: "CCN Polytechnic Institute (Cumilla)",
    degree: "Diploma in Computer Technology",
    period: "2013 — 2017",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="relative h-48 w-48 mx-auto overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white">
              <Image
                src={profilePic}
                alt="Md Sadikur Rahman"
                fill
                sizes="192px"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I&apos;m <span className="text-blue-600">Sadik</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate <strong>Junior Software Developer</strong> based in
            Sydney, crafting modern web applications with{" "}
            <strong>Next.js</strong>, <strong>TypeScript</strong>, and{" "}
            <strong>MongoDB</strong>. I turn complex problems into simple,
            elegant solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Let&apos;s Connect
            </Link>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.label}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {index === 0 && "2+"}
                  {index === 1 && "Sydney"}
                  {index === 2 && "4+"}
                  {index === 3 && "100%"}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {highlight.label}
                </div>
                <div className="text-sm text-gray-600">{highlight.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* What I Do */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I specialize in building modern, scalable web applications with a
              focus on user experience and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Frontend Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Building responsive, interactive user interfaces with React,
                Next.js, and TypeScript. Focus on performance, accessibility,
                and modern design patterns.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Backend & Database
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Developing robust APIs and managing data with Node.js, MongoDB,
                and RESTful services. Ensuring scalability and data integrity.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <svg
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Problem Solving
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Analyzing complex requirements and breaking them down into
                manageable, maintainable solutions. Always learning and adapting
                to new technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My academic journey has shaped my technical foundation and
              problem-solving approach.
            </p>
          </div>

          <div className="space-y-6">
            {education.map((ed) => (
              <div
                key={ed.degree}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.083 12.083 0 01.665-6.479L12 14z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {ed.degree}
                      </h3>
                      <p className="text-lg text-blue-600 font-semibold">
                        {ed.school}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                    {ed.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Touch */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Beyond the Code</h2>
            <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
              When I&apos;m not coding, you&apos;ll find me exploring
              Sydney&apos;s vibrant tech scene, learning new technologies, or
              helping fellow developers solve problems. I believe in continuous
              learning and sharing knowledge with the community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">
                🏃‍♂️ Fitness Enthusiast
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                📚 Lifelong Learner
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                🌏 Sydney Explorer
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                🤝 Community Helper
              </span>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to work on new projects and collaborate
              with fellow developers. Let&apos;s discuss how we can bring your
              ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Start a Conversation
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                View My Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
