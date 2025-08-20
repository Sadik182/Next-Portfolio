"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../../public/images/YOUX_profile.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden"
      aria-labelledby="home-title"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700 via-purple-600 to-pink-600 opacity-90 animate-[hueShift_16s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white">
        {/* Profile Image (fixed size wrapper, NOT fill) */}
        <motion.div
          {...fadeUp(0.2)}
          className="mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/15"
          style={{ width: 192, height: 192 }} // 12rem = 192px; adjust if you like
        >
          <Image
            src={profilePic}
            alt="Portrait of Md Sadikur Rahman"
            width={192}
            height={192}
            priority
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.35)}
          id="home-title"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-3"
        >
          Hi, I&apos;m <span className="text-white/90">Md Sadikur Rahman</span>
        </motion.h1>

        {/* Value prop */}
        <motion.p
          {...fadeUp(0.45)}
          className="text-lg sm:text-xl md:text-2xl mb-5 font-medium text-white/90"
        >
          I build fast, accessible web apps with <strong>Next.js</strong>,{" "}
          <strong>TypeScript</strong>, and <strong>MongoDB</strong>.
        </motion.p>

        {/* Proof strip */}
        <motion.ul
          {...fadeUp(0.55)}
          className="flex flex-wrap items-center justify-center gap-2 mb-7 text-sm"
          aria-label="Quick facts"
        >
          <li className="rounded-full bg-white/15 px-3 py-1">Sydney, AU</li>
          <li className="rounded-full bg-white/15 px-3 py-1">
            Junior Software Developer @ YouX Powered
          </li>
          <li className="rounded-full bg-white/15 px-3 py-1">
            Next.js • TS • MongoDB • Tailwind
          </li>
        </motion.ul>

        {/* Socials */}
        <motion.div
          {...fadeUp(0.65)}
          className="flex justify-center gap-5 mb-7"
          aria-label="Social links"
        >
          <a
            href="https://github.com/sadikur"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition"
          >
            <FaGithub size={28} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sadikur"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition"
          >
            <FaLinkedin size={28} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/sadikur"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition"
          >
            <FaTwitter size={28} />
            <span className="sr-only">Twitter</span>
          </a>
        </motion.div>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.75)}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-indigo-700 bg-white rounded-lg shadow hover:shadow-md hover:bg-gray-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label="Download CV as PDF"
          >
            Download CV
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label="Go to contact section"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* keyframes */}
      <style jsx global>{`
        @keyframes hueShift {
          0% {
            filter: hue-rotate(0deg) saturate(110%);
          }
          100% {
            filter: hue-rotate(25deg) saturate(130%);
          }
        }
      `}</style>
    </section>
  );
}
