'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'

import image1 from '@/assets/images/1.jpg'
import image2 from '@/assets/images/2.jpg'
import image3 from '@/assets/images/3.jpg'

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio site built with Next.js and Tailwind CSS.',
    image: image1,
    liveUrl: 'https://your-portfolio.com',
    codeUrl: 'https://github.com/yourusername/portfolio',
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'A full-stack task manager app using Next.js and MongoDB.',
    image: image2,
    liveUrl: 'https://your-taskapp.com',
    codeUrl: 'https://github.com/yourusername/task-manager',
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'A Markdown-powered blog platform with dynamic routing.',
    image: image3,
    liveUrl: 'https://your-blog.com',
    codeUrl: 'https://github.com/yourusername/blog-platform',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A personal portfolio site built with Next.js and Tailwind CSS.',
    image: image1,
    liveUrl: 'https://your-portfolio.com',
    codeUrl: 'https://github.com/yourusername/portfolio',
  },
  {
    id: 5,
    title: 'Task Manager App',
    description: 'A full-stack task manager app using Next.js and MongoDB.',
    image: image2,
    liveUrl: 'https://your-taskapp.com',
    codeUrl: 'https://github.com/yourusername/task-manager',
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'A Markdown-powered blog platform with dynamic routing.',
    image: image3,
    liveUrl: 'https://your-blog.com',
    codeUrl: 'https://github.com/yourusername/blog-platform',
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black text-gray-800 dark:text-white px-2 py-12 top-20">
      <div className="px-8">
        <h1 className="text-3xl font-bold mb-8 text-center py-4">My Projects</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden flex flex-col">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="flex-grow text-sm mb-4">{project.description}</p>
                <div className="flex justify-between space-x-2">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                  >
                    <ExternalLink size={20} />
                  </Link>
                  <Link
                    href={project.codeUrl}
                    target="_blank"
                  >
                    <Github size={20} /> 
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
