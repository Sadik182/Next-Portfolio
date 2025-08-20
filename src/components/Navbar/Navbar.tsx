"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-sm dark:bg-black/70">
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
          SR
        </h1>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
