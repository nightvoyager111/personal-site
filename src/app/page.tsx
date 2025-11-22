"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// --- Animation Variants for Staggered Entrance ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Staggers each child by 0.15s
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-teal-500/30">
      {/* BACKGROUND: The "Dot Grid" Effect (Pure Tailwind) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-teal-500 opacity-20 blur-[100px]"></div>
      </div>

      <Header />

      <main className="pt-24 pb-20 px-4 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* 1. HERO SECTION */}
          <motion.section id="hero" variants={itemVariants} className="flex flex-col gap-6 pt-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 w-fit text-xs font-medium text-teal-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Available for PEY May 2026
            </div>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500">emotionally intelligent</span> <br />
              AI for mental health.
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              I&apos;m Amelia, a Computer Engineering student at UofT. I bridge the gap between 
              <span className="text-slate-200 font-medium"> multimodal machine learning</span> and 
              <span className="text-slate-200 font-medium"> human psychology</span> to build safe, empathetic systems.
            </p>

            <div className="flex gap-4 mt-2">
              <a href="#projects" className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full bg-slate-50 px-8 font-medium text-slate-950 transition-all duration-300 hover:bg-teal-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-950">
                <span className="mr-2">View My Work</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
              <a href="/AmeliaZhang_CV.pdf" className="inline-flex h-11 items-center justify-center rounded-full border border-slate-700 px-8 font-medium text-slate-300 transition-all hover:bg-slate-800 hover:text-white">
                Download CV
              </a>
            </div>
          </motion.section>


          {/* 2. BENTO GRID (The "About" Section Refactored) */}
          <motion.section id="about" variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-teal-400">#</span> A Glimpse Into My World
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              
              {/* Card 1: Main Bio (Span 4) */}
              <BentoCard className="md:col-span-4 bg-gradient-to-br from-slate-900 to-slate-900/50">
                <h3 className="text-lg font-medium text-teal-300 mb-2">The Mission</h3>
                <p className="text-slate-400 leading-relaxed">
                  At UofT, I lead <strong className="text-slate-100">AURA</strong>, a 22-person team building personality-adaptive agents. 
                  {/* FIXED: Changed 'don't' to 'don&apos;t' */}
                  I don&apos;t just train models; I align them. My work focuses on RLAIF, multimodal perception (Text+Audio), 
                  and ensuring AI can handle the nuances of human mental health.
                </p>
              </BentoCard>

              {/* Card 2: Location/Status (Span 2) */}
              <BentoCard className="md:col-span-2 flex flex-col items-center justify-center text-center bg-slate-900/30">
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-teal-500 blur-xl opacity-20 rounded-full"></div>
                  <span className="relative text-4xl">🍁</span>
                </div>
                <h3 className="font-semibold text-slate-200">Toronto, ON</h3>
                {/* FIXED: Changed '27 to &apos;27 */}
                <p className="text-sm text-slate-500">UofT Engineering &apos;27</p>
              </BentoCard>

              {/* Card 3: Tech Stack (Span 3) */}
              <BentoCard className="md:col-span-3" title="Core Stack">
                <div className="flex flex-wrap gap-2">
                   <Tag>Python</Tag> <Tag>PyTorch</Tag> <Tag>Next.js</Tag> 
                   <Tag>FastAPI</Tag> <Tag>Supabase</Tag> <Tag>RLAIF</Tag>
                   <Tag>Multimodal</Tag> <Tag>Transformers</Tag>
                </div>
              </BentoCard>

              {/* Card 4: Algorithm Highlight (Span 3) */}
              <BentoCard className="md:col-span-3" title="Algorithm Chops">
                <p className="text-sm text-slate-400 mb-3">
                  {/* FIXED: Changed "The Traveller" to &quot;The Traveller&quot; */}
                  Built &quot;The Traveller&quot; routing engine in C++.
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 flex-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-teal-500 rounded-full"></div>
                  </div>
                  <span className="text-xs font-mono text-teal-400">Top 6% Speed</span>
                </div>
              </BentoCard>
            </div>
          </motion.section>


          {/* 3. PROJECTS (Refactored to Glass Cards) */}
          <motion.section id="projects" variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <span className="text-teal-400">#</span> Featured Work
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard 
                title="AURA" 
                category="Mental Health AI"
                description="A multimodal, personality-adaptive conversational agent. Leading 22 students to build perception stacks (RoBERTa/HuBERT) and aligned generation systems."
                tags={["Project Lead", "RLAIF", "Audio+Text"]}
              />
              <ProjectCard 
                title="Ask-TapeB" 
                category="Wellness Assistant"
                description="Full-stack mental health app combining mood tracking with a sentiment-aware chatbot. Built with Next.js, FastAPI, and Supabase."
                tags={["Full Stack", "React", "GenAI"]}
              />
            </div>
          </motion.section>


          {/* 4. EXPERIENCE (Clean List) */}
          <motion.section id="experience" variants={itemVariants}>
             <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <span className="text-teal-400">#</span> Experience
            </h2>
            <div className="space-y-4">
              <ExperienceItem 
                role="Machine Learning Project Lead" 
                company="UofT Machine Intelligence Team" 
                date="Aug 2025 – Present"
              />
              <ExperienceItem 
                role="Software Developer" 
                company="Ask-TapeB (Personal Project)" 
                date="Jun 2025 – Aug 2025"
              />
              <ExperienceItem 
                role="Routing Engineer & PM" 
                company="The Traveller (C++ Engine)" 
                date="Jan 2025 – Apr 2025"
              />
            </div>
          </motion.section>


          {/* 5. CONTACT */}
          <motion.section id="contact" variants={itemVariants} className="py-12 border-t border-slate-800/50 text-center">
            {/* FIXED: Changed Let's to Let&apos;s */}
            <h2 className="text-3xl font-bold mb-4">Let&apos;s build safe, empathetic AI.</h2>
            <p className="text-slate-400 mb-8">Always open to discussing mental health tech and multimodal systems.</p>
            <a href="mailto:your_email@example.com" className="text-teal-400 hover:text-teal-300 underline underline-offset-4 text-lg">
              Get in touch
            </a>
          </motion.section>

        </motion.div>
      </main>
    </div>
  );
}

/* --- COMPONENTS (Refactored for Bento Style) --- */

function Header() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center">
      <nav className="bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-full px-6 h-12 flex items-center gap-6 text-sm font-medium shadow-xl shadow-black/20">
        <a href="#hero" className="text-slate-100 hover:text-teal-400 transition">Home</a>
        <a href="#about" className="text-slate-400 hover:text-teal-400 transition">About</a>
        <a href="#projects" className="text-slate-400 hover:text-teal-400 transition">Work</a>
        <a href="#experience" className="text-slate-400 hover:text-teal-400 transition">Experience</a>
      </nav>
    </header>
  );
}

function BentoCard({ children, className = "", title }: { children: React.ReactNode; className?: string; title?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/50 p-6 hover:border-slate-700 transition-colors duration-300 ${className}`}>
      {title && <h3 className="text-lg font-semibold text-slate-200 mb-4">{title}</h3>}
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
      {children}
    </span>
  );
}

function ProjectCard({ title, category, description, tags }: { title: string; category: string; description: string; tags: string[] }) {
  return (
    <div className="group relative rounded-3xl border border-slate-800 bg-slate-900/20 p-1 transition-all hover:bg-slate-800/40 hover:scale-[1.01]">
      <div className="h-full rounded-[22px] bg-slate-950/80 p-6 md:p-8 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">{title}</h3>
            <p className="text-xs font-semibold text-teal-500/80 uppercase tracking-wider mt-1">{category}</p>
          </div>
          <svg className="w-5 h-5 text-slate-600 group-hover:text-teal-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[11px] px-2 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceItem({ role, company, date }: { role: string; company: string; date: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-2xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
      <div>
        <h3 className="text-base font-semibold text-slate-200">{role}</h3>
        <p className="text-sm text-teal-500/70">{company}</p>
      </div>
      <p className="text-xs font-mono text-slate-500 mt-2 md:mt-0">{date}</p>
    </div>
  );
}