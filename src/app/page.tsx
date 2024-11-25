'use client'
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react"
import React from "react";

function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">

<header className="flex justify-between p-5 max-w-7*7 mx-1 bg-[#16325B] text-white">
            {/* logo */}
            <div>
                <h2 className="text-3xl font-semibold">MS.</h2>
            </div>

            {/* hamburger menu */}
            <button 
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg 
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* links */}
            <nav className={`${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-[#16325B] md:relative md:top-0 md:block`}>
                <ul className="flex flex-col md:flex-row gap-8 font-semibold p-5 md:p-0">
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='#about'>About</a>
                    </li>             
                    <li>
                        <Link href='#skills'>Skills</Link>
                    </li>
                    <li>
                        <Link href='#projects'>Projects</Link>
                    </li>
                    <li>
                        <Link href='#contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>

      {/* hero section */}
      <section className="container mx-auto px-4 py-10 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-[#16325B]">
              Hello, I'm Muhammad Shoaib
            </h1>
            <p className="mt-4 text-xl text-gray-600">A passionate web developer</p>
          </motion.div>
          
          <motion.img 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 lg:w-60 lg:h-60 object-cover rounded-full shadow-2xl border-4 border-[#16325B] hover:scale-105 transition-transform"
            src="/m.shoaib.jpeg.png" 
            alt="m.shoaib"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center lg:text-left"
        >
          <a 
            href="https://mileston-01-one.vercel.app/"
            target="_blank"
            className="inline-block bg-[#16325B] text-white font-bold py-3 px-8 rounded-full hover:bg-green-500 transform hover:scale-105 transition-all shadow-lg"
          >
            View CV
          </a>
        </motion.div>
      </section>

      <main className="container mx-auto px-4">
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-[#16325B]" id="about">About Me</h2>
            <p className="text-lg text-[#16325B] mt-4 max-w-2xl mx-auto">
              Hi, I'm <span className="text-indigo-600">Muhammad Shoaib</span>, a passionate web developer specializing in modern, responsive websites using Next.js and Tailwind CSS.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="/shoaib.2.jpeg.jpg"
              alt="Muhammad Shoaib"
              className="w-48 h-48 mx-auto object-cover rounded-full shadow-xl border-4 border-[#16325B] hover:scale-105 transition-transform"
            />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-[#16325B] mb-6">A little about me</h3>
              <p className="text-lg text-[#16325B] mb-6">
                I am a full-stack web developer focused on building fast, user-friendly applications. My expertise includes:
              </p>
              <ul className="space-y-3 text-[#16325B]">
                {['Next.js', 'Tailwind CSS', 'Full-stack Development', 'API Integration'].map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-indigo-600">•</span>
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Skills section with animations */}
        <section className="py-20" id="skills">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-extrabold text-center text-[#16325B] mb-12"
          >
            My Skills
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" >
            {['HTML', 'CSS', 'Python', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'JavaScript', 'Git & GitHub'].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-medium text-indigo-600 text-center">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects section */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-[#16325B]" id="projects">My Projects</h2>
            <p className="text-lg text-[#16325B] mt-4 max-w-2xl mx-auto">
              Featured projects showcasing my development skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Dynamic Resume Builder",
                description: "Create professional resumes with this Next.js and Tailwind CSS builder",
                link: "https://milestons-05app/"
              },
              {
                title: "Digital Clock",
                description: "A simple yet elegant clock built with HTML, CSS, and JavaScript",
                link: "https://github.com/M-Shoaib7/Node_projects_with_typescript/tree/main/simple_clock"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold text-[#16325B]">{project.title}</h3>
                <p className="mt-4 text-[#16325B]">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-6 inline-block text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact section */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-4xl font-extrabold text-[#16325B] mb-8" id="contact">Contact Me</h2>
            <p className="text-lg text-[#16325B]">
              Email me at{" "}
              <Link href="mailto:mshoaibmshoaib117@gmail.com" className="text-blue-500 hover:underline">
                mshoaib117@gmail.com
                </Link>
            </p>
            <p className="mt-4 text-lg text-[#16325B]">
              Available for exciting web development projects!
            </p>
          </motion.div>
        </section>
        <div className="mt-10 bg-slate-300 h-10 w-100 items-center p-p">
            <footer className="mt-10 text-center">
            <p className="text-[#16325B]">© {new Date().getFullYear()} Muhammad Shoaib. All rights reserved.</p>

            <Link href={"https://github.com/mshoaib"}></Link>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default Home;