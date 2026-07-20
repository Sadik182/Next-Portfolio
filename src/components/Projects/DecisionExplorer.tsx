"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import type { StorySection } from "@/data/projects";

// Master–detail explorer for engineering decisions. No auto-play — the
// visitor drives it. Desktop: vertical list + detail panel. Mobile: accordion.
export default function DecisionExplorer({ items }: { items: StorySection[] }) {
  const [active, setActive] = useState(0);
  const item = items[active];

  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(260px,2fr)_3fr] gap-3 md:gap-6 items-start">
      {/* Decision list */}
      <div className="flex flex-col gap-2" role="tablist" aria-label="Engineering decisions">
        {items.map((it, i) => {
          const isActive = i === active;
          return (
            <div key={it.title}>
              <button
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-4 text-left rounded-xl border px-4 sm:px-5 py-4 transition-all duration-200 ${
                  isActive
                    ? "border-indigo-400/50 bg-indigo-400/10"
                    : "border-slate-700/60 bg-slate-800/30 hover:border-slate-500 hover:bg-slate-800/60"
                }`}
              >
                <span
                  className={`font-mono text-xs shrink-0 transition-colors ${
                    isActive ? "text-indigo-300" : "text-slate-500"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 text-sm font-medium leading-snug transition-colors ${
                    isActive ? "text-white" : "text-slate-400"
                  }`}
                >
                  {it.title}
                </span>
                <ChevronRight
                  size={15}
                  className={`shrink-0 transition-all duration-200 ${
                    isActive
                      ? "text-indigo-300 translate-x-0.5"
                      : "text-slate-600"
                  }`}
                />
              </button>

              {/* Mobile: detail expands under the active item */}
              {isActive && (
                <div className="md:hidden mt-2 rounded-xl border border-slate-700/60 bg-slate-800/40 p-5 animate-stage motion-reduce:animate-none">
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {it.detail}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Desktop: detail panel */}
      <div className="hidden md:block sticky top-28 rounded-2xl border border-slate-700/60 bg-slate-800/40 overflow-hidden min-h-[280px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_180px_at_85%_100%,rgba(99,102,241,0.10),transparent_70%)]" />
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-2 font-mono text-[7rem] font-bold leading-none text-slate-700/25 select-none"
        >
          {String(active + 1).padStart(2, "0")}
        </span>
        <div key={active} className="relative p-8 lg:p-10 animate-stage motion-reduce:animate-none">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-indigo-300 mb-3">
            Decision {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </p>
          <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-4 [text-wrap:balance] pr-16">
            {item.title}
          </h3>
          <p className="text-sm lg:text-base text-slate-300 leading-relaxed">
            {item.detail}
          </p>
        </div>
      </div>
    </div>
  );
}
