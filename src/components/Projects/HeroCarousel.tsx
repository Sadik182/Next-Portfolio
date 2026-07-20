"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/data/projects";

const AUTO_ADVANCE_MS = 4500;

interface HeroCarouselProps {
  slides: GalleryImage[];
  host?: string | null;
  title: string;
}

// Browser-framed hero carousel — cycles through the project's screenshots.
export default function HeroCarousel({ slides, host, title }: HeroCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    if (slides.length < 2 || paused || reducedRef.current) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % slides.length),
      AUTO_ADVANCE_MS
    );
    return () => clearInterval(t);
  }, [paused, slides.length]);

  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((a) => (a + dir + slides.length) % slides.length),
    [slides.length]
  );

  const hasMany = slides.length > 1;

  return (
    <div
      className="relative group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="absolute -inset-6 bg-indigo-500/15 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500 motion-reduce:transition-none" />

      <div
        className="relative rounded-xl border border-slate-700/70 bg-slate-950 overflow-hidden shadow-2xl shadow-slate-950/70 group-hover:border-indigo-400/40 group-hover:shadow-indigo-500/10 transition-all duration-500 motion-reduce:transition-none"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${title} screenshots`}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-slate-900/90 border-b border-slate-700/60">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
          {host && (
            <span className="ml-3 px-2.5 py-0.5 rounded-md bg-slate-800 font-mono text-[10px] text-slate-400 truncate">
              {host}
            </span>
          )}
          {hasMany && (
            <span className="ml-auto font-mono text-[10px] text-slate-500 tabular-nums">
              {active + 1} / {slides.length}
            </span>
          )}
        </div>

        {/* Slides */}
        <div className="relative aspect-video">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 motion-reduce:duration-0 ${
                i === active ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              aria-hidden={i !== active}
            >
              <Image
                src={slide.src}
                alt={`${title} — ${slide.caption}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i === 0}
                unoptimized={slide.src.endsWith(".svg")}
                className="object-cover object-top"
              />
            </div>
          ))}

          {/* Caption */}
          {hasMany && slides[active].caption && (
            <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent pt-10 pb-3 px-4">
              <p
                key={active}
                className="text-xs sm:text-[13px] text-slate-200 animate-stage motion-reduce:animate-none"
              >
                {slides[active].caption}
              </p>
            </div>
          )}

          {/* Arrows */}
          {hasMany && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-slate-950/60 backdrop-blur-sm border border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-900 hover:border-indigo-400/40 transition-all opacity-0 group-hover:opacity-100 focus-visible:opacity-100 motion-reduce:opacity-100"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-slate-950/60 backdrop-blur-sm border border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-900 hover:border-indigo-400/40 transition-all opacity-0 group-hover:opacity-100 focus-visible:opacity-100 motion-reduce:opacity-100"
              >
                <ChevronRight size={17} />
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {hasMany && (
          <div className="flex items-center justify-center gap-2 py-2.5 bg-slate-900/90 border-t border-slate-700/60">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                aria-current={i === active}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-indigo-400"
                    : "w-1.5 bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
