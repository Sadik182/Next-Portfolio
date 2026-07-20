"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { StorySection } from "@/data/projects";

const AUTO_ADVANCE_MS = 5000;

// Full-width interactive walkthrough: features presented as stages on a
// journey track. Auto-plays until the visitor interacts; keyboard accessible.
export default function FeatureJourney({ items }: { items: StorySection[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const manualRef = useRef(false);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  // Auto-advance until the visitor takes control.
  useEffect(() => {
    if (paused || manualRef.current || reducedRef.current) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % items.length),
      AUTO_ADVANCE_MS
    );
    return () => clearInterval(t);
  }, [paused, items.length]);

  const select = useCallback((i: number) => {
    manualRef.current = true;
    setActive(i);
  }, []);

  const item = items[active];
  const progress = items.length > 1 ? (active / (items.length - 1)) * 100 : 0;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Track */}
      <div className="relative mb-10 hidden sm:block" role="tablist" aria-label="Feature stages">
        {/* base line + progress fill */}
        <div className="absolute left-0 right-0 top-[15px] h-px bg-slate-700/70" />
        <div
          className="absolute left-0 top-[15px] h-px bg-gradient-to-r from-indigo-400 to-indigo-300 shadow-[0_0_8px_rgba(129,140,248,0.6)] transition-all duration-500 motion-reduce:transition-none"
          style={{ width: `${progress}%` }}
        />
        <div className="relative flex justify-between">
          {items.map((it, i) => {
            const isActive = i === active;
            const isPast = i < active;
            return (
              <button
                key={it.title}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => select(i)}
                className="group flex flex-col items-center gap-3 max-w-[140px] lg:max-w-[180px] cursor-pointer"
              >
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full border font-mono text-[11px] transition-all duration-300 ${
                    isActive
                      ? "border-indigo-400 bg-indigo-400 text-slate-900 font-bold shadow-[0_0_16px_rgba(129,140,248,0.55)] scale-110"
                      : isPast
                        ? "border-indigo-400/50 bg-slate-900 text-indigo-300"
                        : "border-slate-600 bg-slate-900 text-slate-500 group-hover:border-slate-400 group-hover:text-slate-300"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-[11px] lg:text-xs text-center leading-snug transition-colors duration-300 line-clamp-2 ${
                    isActive
                      ? "text-white font-medium"
                      : "text-slate-500 group-hover:text-slate-300"
                  }`}
                >
                  {it.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile: numbered chips */}
      <div className="flex sm:hidden gap-2 mb-6 overflow-x-auto pb-1" role="tablist" aria-label="Feature stages">
        {items.map((it, i) => (
          <button
            key={it.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => select(i)}
            className={`shrink-0 w-9 h-9 rounded-full border font-mono text-[11px] transition-colors ${
              i === active
                ? "border-indigo-400 bg-indigo-400 text-slate-900 font-bold"
                : "border-slate-600 text-slate-400"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
      </div>

      {/* Stage detail */}
      <div className="relative rounded-2xl border border-slate-700/60 bg-slate-800/40 overflow-hidden min-h-[200px] sm:min-h-[190px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_180px_at_15%_0%,rgba(99,102,241,0.12),transparent_70%)]" />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-4 -bottom-10 font-mono text-[10rem] sm:text-[12rem] font-bold leading-none text-slate-700/25 select-none"
        >
          {String(active + 1).padStart(2, "0")}
        </span>

        <div
          key={active}
          className="relative p-7 sm:p-10 animate-stage motion-reduce:animate-none"
        >
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-indigo-300 mb-3">
            Stage {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </p>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 [text-wrap:balance]">
            {item.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {item.detail}
          </p>
        </div>

        {/* auto-play progress bar */}
        {!manualRef.current && !paused && (
          <span
            key={`bar-${active}`}
            className="absolute bottom-0 left-0 h-0.5 bg-indigo-400/70 animate-stagebar motion-reduce:hidden"
          />
        )}
      </div>
    </div>
  );
}
