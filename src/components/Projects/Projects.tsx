"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Calendar, Code } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website built with Next.js 15 and TypeScript. Features dark/light mode, smooth animations, and optimized performance with server-side rendering.",
    image: "/images/3.jpg",
    liveUrl: "https://sadik1820.vercel.app/",
    codeUrl: "https://github.com/Sadik182/Next-Portfolio",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Completed",
    year: "2025",
    features: ["SSR/SSG", "Responsive Design", "Contact Form"],
  },
  {
    id: 2,
    title: "ToDoList App",
    description:
      "A modern task management application built with Next.js and TypeScript. Features task creation, editing, deletion, and local storage persistence for seamless user experience.",
    image: "/images/4.jpg",
    liveUrl: "https://to-do-list-theta-gray.vercel.app/",
    codeUrl: "https://github.com/Sadik182/ToDoList",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Local Storage"],
    status: "In Progress",
    year: "2025",
    features: [
      "Task Management",
      "Local Storage",
      "Responsive Design",
      "TypeScript",
    ],
  },
  {
    id: 3,
    title: "GoalFlow",
    description:
      "A goal tracking and productivity application designed to help users set, track, and achieve their objectives. Built with modern web technologies for optimal performance.",
    image: "/images/5.jpg",
    liveUrl: "https://goal-flow-liard.vercel.app/",
    codeUrl: "https://github.com/Sadik182/GoalFlow",
    technologies: ["Next.js", "TypeScript", "Vercel", "Modern UI"],
    status: "In Progress",
    year: "2025",
    features: [
      "Goal Tracking",
      "Progress Monitoring",
      "User Dashboard",
      "Vercel Deployment",
    ],
  },
  {
    id: 4,
    title: "Expense Tracker ",
    description:
      "A expense tracking application designed to help users track their expenses. Built with modern web technologies for optimal performance.",
    image: "/images/7.jpg",
    liveUrl: "https://expense-tracker-next-js.vercel.app/",
    codeUrl: "https://github.com/Sadik182/Expense-Tracker-Next-JS",
    technologies: ["Next.js", "TypeScript", "Vercel", "Modern UI"],
    status: "In Progress",
    year: "2025",
    features: ["Expense Tracking", "User Dashboard", "Vercel Deployment"],
  },
  {
    id: 5,
    title: "Red Store E-commerce",
    description:
      "A fully responsive e-commerce website featuring product catalog, shopping cart, and checkout functionality. Built with vanilla JavaScript for optimal performance and cross-browser compatibility.",
    image: "/images/1.jpg",
    liveUrl: "https://sadik182.github.io/SR-Ecommerce-/",
    codeUrl: "https://github.com/Sadik182/SR-Ecommerce-.git",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    status: "Completed",
    year: "2022",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Checkout Process",
      "Responsive Design",
    ],
  },
  {
    id: 6,
    title: "MacBook Pro Store",
    description:
      "An interactive product showcase and purchase simulator for MacBook Pro. Features dynamic pricing, configuration options, and smooth animations to enhance user experience.",
    image: "/images/2.jpg",
    liveUrl: "https://sadik182.github.io/Buy-Mack-Book-Pro-Simple-JavaScript/",
    codeUrl:
      "https://github.com/Sadik182/Buy-Mack-Book-Pro-Simple-JavaScript.git",
    technologies: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    status: "Completed",
    year: "2023",
    features: [
      "Product Configuration",
      "Dynamic Pricing",
      "Interactive UI",
      "Smooth Animations",
    ],
  },
  {
    id: 7,
    title: "Amazon Clone",
    description:
      "A full-featured e-commerce platform clone of Amazon built with Next.js. Features include user authentication, product catalog, shopping cart with Redux state management, secure payment processing with Stripe, and webhook integration for order management.",
    image: "/images/amazon.png",
    liveUrl: "https://amazon-clone-gamma-livid.vercel.app/",
    codeUrl: "https://github.com/Sadik182/Amazon-Clone",
    technologies: ["Next.js", "Redux", "Stripe", "Webhooks", "TypeScript"],
    status: "Completed",
    year: "2026",
    features: [
      "User Authentication",
      "Payment Processing",
      "Order Management",
      "Webhook Integration",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-2 py-12 top-20">
      <div className="px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development,
            from vanilla JavaScript to modern React applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-slate-700/50 hover:border-blue-500/30"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Completed"
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <div className="flex items-center text-sm text-slate-400">
                    <Calendar size={16} className="mr-1" />
                    {project.year}
                  </div>
                </div>

                <p className="text-slate-300 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Code size={16} className="mr-2 text-gray-500" />
                    <span className="text-sm font-medium text-slate-300">
                      Technologies
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-700/50 text-xs rounded-md text-slate-300 border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-slate-300 mb-2">
                    Key Features
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Link>
                  <Link
                    href={project.codeUrl}
                    target="_blank"
                    className="flex items-center px-4 py-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 text-sm font-medium"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            Interested in working together?
          </h2>
          <p className="text-slate-300 mb-6">
            I&apos;m always excited to work on new projects and collaborate with
            fellow developers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
