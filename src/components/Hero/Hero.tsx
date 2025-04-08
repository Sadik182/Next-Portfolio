'use client'

import { motion } from "framer-motion"
import Image from 'next/image'
import profilePic from '../../../public/images/YOUX_profile.jpg'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


export default function Hero() {
    return (
        <section id="home" className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 dark:from-blue-900 dark:via-purple-800 dark:to-pink-900">
            <div className="absolute inset-0 bg-black opacity-40"></div> {/* Background overlay for readability */}

            <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white">
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mx-auto mb-6 w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                    <Image src={profilePic} alt="Sadikur Rahman" width={290} height={290} className="object-cover" />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
                >
                    Hi, I'm <span className="text-blue-200">Md Sadikur Rahman</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="text-lg sm:text-xl md:text-2xl mb-6 font-medium"
                >
                    A passionate web developer specializing in React, Next.js, and MongoDB.
                </motion.p>

                {/* Social Media Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.75 }}
                    className="flex justify-center space-x-6 mb-6"
                >
                    <a href="https://github.com/sadikur" className="text-white hover:text-blue-200">
                        <FaGithub size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/sadikur" className="text-white hover:text-blue-200">
                        <FaLinkedin size={32} />
                    </a>
                    <a href="https://twitter.com/sadikur" className="text-white hover:text-blue-200">
                        <FaTwitter size={32} />
                    </a>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex justify-center space-x-6"
                >
                    <a href="/Sadikur_CV.pdf" download className="inline-block px-8 py-3 text-lg font-semibold text-blue-600 bg-white rounded-lg shadow-lg hover:bg-gray-100 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-600 transition">
                        Download CV
                    </a>
                    <a href="#contact" className="inline-block px-8 py-3 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-black transition">
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    )
}