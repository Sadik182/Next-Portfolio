"use client";

import { useEffect, useState } from "react";

export interface NavSection {
  id: string;
  label: string;
  index: string;
}

// Sticky table of contents with scroll-spy — desktop only.
export default function CaseStudyNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Sections" className="hidden xl:block">
      <ul className="sticky top-32 space-y-1 border-l border-slate-700/50">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`group flex items-baseline gap-3 -ml-px border-l-2 py-2 pl-5 text-sm transition-all ${
                  isActive
                    ? "border-indigo-400 text-white"
                    : "border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-500"
                }`}
              >
                <span
                  className={`font-mono text-[10px] transition-colors ${
                    isActive ? "text-indigo-400" : "text-slate-600 group-hover:text-slate-400"
                  }`}
                >
                  {section.index}
                </span>
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
