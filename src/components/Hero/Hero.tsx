"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../../public/images/YOUX_profile.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDownload,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const roles = [
  "Software Developer",
  "Software Engineer",
  "Full Stack Developer",
  "Full Stack Engineer",
  "Next.js Developer",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      aria-labelledby="home-title"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Greeting */}
            <motion.div variants={itemVariants} className="space-y-1">
              <p className="text-blue-400 font-mono text-sm md:text-base tracking-wider">
                &lt;Hello World /&gt;
              </p>
              <h1
                id="home-title"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Md Sadikur Rahman
                </span>
              </h1>
            </motion.div>

            {/* Typing Role */}
            <motion.div
              variants={itemVariants}
              className="h-12 sm:h-14 md:h-16"
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300">
                {displayText}
                <span className="animate-pulse text-blue-400">|</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              A passionate <strong>Software Developer</strong> based in Sydney,
              crafting modern web applications with.{" "}
              <span className="text-blue-400 font-semibold">Next.js</span>,{" "}
              <span className="text-blue-400 font-semibold">TypeScript</span>,
              and <span className="text-blue-400 font-semibold">MongoDB</span>.I
              turn complex problems into simple, elegant solutions.
            </motion.p>

            {/* Location & Role Badge */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50">
                <FaMapMarkerAlt className="text-blue-400" size={16} />
                <span className="text-slate-300 text-sm">
                  Sydney, Australia
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50">
                <FaBriefcase className="text-purple-400" size={16} />
                <span className="text-slate-300 text-sm">YouX Powered</span>
              </div>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 justify-center lg:justify-start pt-2"
            >
              <p className="text-slate-500 text-sm mr-2">Tech Stack:</p>
              <div className="flex gap-3">
                <SiNextdotjs
                  className="text-slate-400 hover:text-white transition-colors"
                  size={28}
                  title="Next.js"
                />
                <SiTypescript
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                  size={28}
                  title="TypeScript"
                />
                <SiMongodb
                  className="text-slate-400 hover:text-green-400 transition-colors"
                  size={28}
                  title="MongoDB"
                />
                <SiTailwindcss
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                  size={28}
                  title="Tailwind CSS"
                />
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
            >
              <a
                href="/Resume.pdf"
                target="_blank"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                aria-label="Download CV as PDF"
              >
                <FaDownload size={18} />
                <span>Download Resume</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-slate-600 hover:border-blue-400 hover:bg-slate-800 transition-all duration-300"
                aria-label="Go to contact section"
              >
                <span>Get In Touch</span>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start pt-2"
              aria-label="Social links"
            >
              <a
                href="https://github.com/Sadik182"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 text-slate-400 hover:text-white hover:border-blue-400 hover:bg-slate-800 transition-all duration-300"
              >
                <FaGithub size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sadik182/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 text-slate-400 hover:text-blue-400 hover:border-blue-400 hover:bg-slate-800 transition-all duration-300"
              >
                <FaLinkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://www.facebook.com/Sadik1820/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 text-slate-400 hover:text-blue-500 hover:border-blue-400 hover:bg-slate-800 transition-all duration-300"
              >
                <FaFacebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl transform scale-110" />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/50 bg-slate-800/30 backdrop-blur-sm p-2 shadow-2xl">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-xl overflow-hidden">
                  <Image
                    src={profilePic}
                    alt="Portrait of Md Sadikur Rahman"
                    width={384}
                    height={384}
                    priority
                    className="h-full w-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-400/30 flex items-center justify-center"
              >
                <SiNextdotjs className="text-blue-400" size={32} />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-400/30 flex items-center justify-center"
              >
                <SiTypescript className="text-purple-400" size={32} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
