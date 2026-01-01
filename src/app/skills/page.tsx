// app/skills/page.tsx

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
      { name: "Postman", level: "Advanced", note: "API testing, collections" },
      {
        name: "Chrome DevTools",
        level: "Advanced",
        note: "Performance, debugging",
      },
      { name: "Vercel", level: "Advanced", note: "Deployment, analytics" },

      {
        name: "GitHub Actions",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Professional",
    skills: [
      { name: "Team Collaboration", level: "Advanced" },
      { name: "Mentoring", level: "Advanced", note: "IUBAT IT Society" },
      {
        name: "Problem Solving",
        level: "Intermediate",
      },
      { name: "Communication", level: "Advanced" },
    ],
  },
];

export default function SkillsPage() {
  const getLevelColor = (level: Level) => {
    switch (level) {
      case "Expert":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Advanced":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Beginner":
        return "bg-slate-700/50 text-slate-300 border-slate-600/50";
      default:
        return "bg-slate-700/50 text-slate-300 border-slate-600/50";
    }
  };

  const getLevelIcon = (level: Level) => {
    switch (level) {
      case "Expert":
        return "⭐";
      case "Advanced":
        return "🚀";
      case "Intermediate":
        return "💪";
      case "Beginner":
        return "🌱";
      default:
        return "📚";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional
            capabilities across different domains.
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
          {groups.map((group, groupIndex) => (
            <div
              key={group.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700/50 hover:border-blue-500/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">
                    {groupIndex === 0 && "💻"}
                    {groupIndex === 1 && "⚙️"}
                    {groupIndex === 2 && "🛠️"}
                    {groupIndex === 3 && "👥"}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {group.title}
                </h2>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-white text-lg">
                            {skill.name}
                          </h3>
                          <span className="text-lg">
                            {getLevelIcon(skill.level)}
                          </span>
                        </div>
                        {skill.note && (
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {skill.note}
                          </p>
                        )}
                      </div>
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Stack Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-700/50 mb-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              Core Technology Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Next.js",
                "TypeScript",
                "MongoDB",
                "Tailwind CSS",
                "React",
                "Node.js",
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-700/50 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Skill Development Journey
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Foundation Building
                </h3>
                <p className="text-sm text-slate-300">
                  Started with core web technologies and programming
                  fundamentals
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Framework Mastery
                </h3>
                <p className="text-sm text-slate-300">
                  Deep dive into React, Next.js, and modern development
                  practices
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/30">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Professional Growth
                </h3>
                <p className="text-sm text-slate-300">
                  Applied skills in real-world projects and team environments
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            I&apos;m always excited to take on new challenges and learn new
            technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-slate-800 border border-slate-700/50 transition-all"
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
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all"
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
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
