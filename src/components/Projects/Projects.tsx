"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Calendar, Code } from "lucide-react";

import image1 from "@/assets/images/1.jpg";
import image2 from "@/assets/images/2.jpg";
import image3 from "@/assets/images/3.jpg";
import image4 from "@/assets/images/4.jpg";
import image5 from "@/assets/images/5.jpg";
import image7 from "@/assets/images/7.jpg";

const projects = [
  {
    id: 1,
    title: "Red Store E-commerce",
    description:
      "A fully responsive e-commerce website featuring product catalog, shopping cart, and checkout functionality. Built with vanilla JavaScript for optimal performance and cross-browser compatibility.",
    image: image1,
    liveUrl: "https://sadik182.github.io/SR-Ecommerce-/",
    codeUrl: "https://github.com/Sadik182/SR-Ecommerce-.git",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design"],
    status: "Completed",
    year: "2023",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Checkout Process",
      "Responsive Design",
    ],
  },
  {
    id: 2,
    title: "MacBook Pro Store",
    description:
      "An interactive product showcase and purchase simulator for MacBook Pro. Features dynamic pricing, configuration options, and smooth animations to enhance user experience.",
    image: image2,
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
    id: 3,
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website built with Next.js 15 and TypeScript. Features dark/light mode, smooth animations, and optimized performance with server-side rendering.",
    image: image3,
    liveUrl: "https://next-portfolio-alpha-three.vercel.app/",
    codeUrl: "https://github.com/Sadik182/Next-Portfolio",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Completed",
    year: "2024",
    features: ["SSR/SSG", "Responsive Design", "Contact Form"],
  },
  {
    id: 4,
    title: "ToDoList App",
    description:
      "A modern task management application built with Next.js and TypeScript. Features task creation, editing, deletion, and local storage persistence for seamless user experience.",
    image: image4,
    liveUrl: "https://github.com/Sadik182/ToDoList",
    codeUrl: "https://github.com/Sadik182/ToDoList",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Local Storage"],
    status: "In Progress",
    year: "2024",
    features: [
      "Task Management",
      "Local Storage",
      "Responsive Design",
      "TypeScript",
    ],
  },
  {
    id: 5,
    title: "GoalFlow",
    description:
      "A goal tracking and productivity application designed to help users set, track, and achieve their objectives. Built with modern web technologies for optimal performance.",
    image: image5,
    liveUrl: "https://goal-flow-liard.vercel.app/",
    codeUrl: "https://github.com/Sadik182/GoalFlow",
    technologies: ["Next.js", "TypeScript", "Vercel", "Modern UI"],
    status: "In Progress",
    year: "2024",
    features: [
      "Goal Tracking",
      "Progress Monitoring",
      "User Dashboard",
      "Vercel Deployment",
    ],
  },
  {
    id: 6,
    title: "Expense Tracker ",
    description:
      "A expense tracking application designed to help users track their expenses. Built with modern web technologies for optimal performance.",
    image: image7,
    liveUrl: "https://expense-tracker-next-js.vercel.app/",
    codeUrl: "https://github.com/Sadik182/Expense-Tracker-Next-JS",
    technologies: ["Next.js", "TypeScript", "Vercel", "Modern UI"],
    status: "In Progress",
    year: "2025",
    features: ["Expense Tracking", "User Dashboard", "Vercel Deployment"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-800 dark:text-white px-2 py-12 top-20">
      <div className="px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development,
            from vanilla JavaScript to modern React applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col group"
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
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-1" />
                    {project.year}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Code size={16} className="mr-2 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Technologies
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Key Features
                  </div>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Link>
                  <Link
                    href={project.codeUrl}
                    target="_blank"
                    className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
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
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I&apos;m always excited to work on new projects and collaborate with
            fellow developers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
