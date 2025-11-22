"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

/* --- Animations (Unchanged) --- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    // 1. BACKGROUND: Soft Slate-50 (Not pure white, easier on eyes)
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-rose-200 selection:text-rose-900">
      
      {/* 2. AMBIENT BACKGROUND: Very subtle pastel blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grainy Texture (Subtle) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>
        
        {/* Top Left: Soft Indigo (Wisdom) */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-200/40 blur-[120px]"></div>
        
        {/* Bottom Right: Soft Rose (Empathy) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-rose-200/40 blur-[120px]"></div>
      </div>

      <Header />

      <main className="pt-32 pb-20 px-4 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* HERO SECTION */}
          <motion.section id="hero" variants={itemVariants} className="flex flex-col gap-6">
            {/* Status Pill: Light background, dark text */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-200 bg-white/60 backdrop-blur-sm w-fit text-xs font-medium text-rose-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Open to PEY (May 2026)
            </div>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500">emotionally intelligent</span> <br />
              AI for mental health.
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
              I&apos;m Amelia. I bridge the gap between 
              <span className="text-slate-900 font-semibold decoration-rose-300/50 underline underline-offset-2 decoration-2"> multimodal machine learning</span> and 
              <span className="text-slate-900 font-semibold decoration-indigo-300/50 underline underline-offset-2 decoration-2"> human psychology</span> to build AI that truly understands how we feel.
            </p>

            <div className="flex gap-4 mt-4">
              {/* Primary Button: Dark for contrast */}
              <a href="#projects" className="relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full bg-slate-900 px-8 font-medium text-white transition-transform hover:scale-105 hover:bg-slate-800 shadow-lg shadow-slate-900/20">
                View My Work
              </a>
              {/* Secondary Button: White with border */}
              <a href="/AmeliaZhang_CV.pdf" className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-8 font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 shadow-sm">
                Download CV
              </a>
            </div>
          </motion.section>


          {/* BENTO GRID - Light Mode Version */}
          <motion.section id="about" variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-900">
              <span className="text-rose-500">✦</span> A Glimpse Into My World
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              
              {/* Card 1: Bio (White Card) */}
              <BentoCard className="md:col-span-4 bg-white">
                <h3 className="text-lg font-bold text-indigo-600 mb-3">The Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  At UofT, I lead <strong className="text-slate-900">AURA</strong>, a 22-person team building personality-adaptive agents. 
                  I focus on <strong className="text-slate-900">Safety</strong> and <strong className="text-slate-900">Empathy</strong> alignment (RLAIF), ensuring our models support users rather than just generating text.
                </p>
              </BentoCard>

              {/* Card 2: Location */}
              <BentoCard className="md:col-span-2 flex flex-col items-center justify-center text-center bg-white">
                <div className="relative mb-3 p-4 rounded-full bg-slate-50 border border-slate-100">
                  <span className="text-3xl">🇨🇦</span>
                </div>
                <h3 className="font-bold text-slate-900">Toronto, ON</h3>
                <p className="text-sm text-slate-500 font-medium">UofT Engineering &apos;27</p>
              </BentoCard>

              {/* Card 3: Tech Stack */}
              <BentoCard className="md:col-span-3" title="Core Stack">
                <div className="flex flex-wrap gap-2">
                   <Tag>Python</Tag> <Tag>PyTorch</Tag> <Tag>Next.js</Tag> 
                   <Tag>FastAPI</Tag> <Tag>Supabase</Tag> <Tag>RLAIF</Tag>
                   <Tag>Multimodal</Tag> <Tag>Transformers</Tag>
                </div>
              </BentoCard>

              {/* Card 4: Stats */}
              <BentoCard className="md:col-span-3" title="Algorithm Chops">
                <p className="text-sm text-slate-500 mb-4 font-medium">
                  Built &quot;The Traveller&quot; routing engine in C++.
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    {/* Rose Color Bar */}
                    <div className="h-full w-[95%] bg-rose-400 rounded-full shadow-sm"></div>
                  </div>
                  <span className="text-xs font-bold text-rose-500">Top 6% Speed</span>
                </div>
              </BentoCard>
            </div>
          </motion.section>


          {/* PROJECTS */}
          <motion.section id="projects" variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-900">
              <span className="text-rose-500">✦</span> Featured Work
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


          {/* EXPERIENCE */}
          <motion.section id="experience" variants={itemVariants}>
             <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-slate-900">
              <span className="text-rose-500">✦</span> Experience
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


          {/* CONTACT */}
          <motion.section id="contact" variants={itemVariants} className="py-12 border-t border-slate-200 text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Let&apos;s build safe, empathetic AI.</h2>
            <p className="text-slate-500 mb-8 font-medium">Always open to discussing mental health tech and multimodal systems.</p>
            <a href="mailto:your_email@example.com" className="text-rose-500 hover:text-rose-600 font-bold underline underline-offset-4 text-lg transition-colors">
              Get in touch
            </a>
          </motion.section>

        </motion.div>
      </main>
    </div>
  );
}

/* --- LIGHT MODE COMPONENTS --- */

function Header() {
  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center">
      <nav className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-full px-6 h-12 flex items-center gap-8 text-sm font-medium shadow-lg shadow-slate-200/50">
        <a href="#hero" className="text-slate-900 hover:text-rose-500 transition-colors">Home</a>
        <a href="#about" className="text-slate-500 hover:text-rose-500 transition-colors">About</a>
        <a href="#projects" className="text-slate-500 hover:text-rose-500 transition-colors">Work</a>
      </nav>
    </header>
  );
}

function BentoCard({ children, className = "", title }: { children: React.ReactNode; className?: string; title?: string }) {
  return (
    // White cards on light grey background creates the "Physical Card" look
    <div className={`relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-rose-200 ${className}`}>
      {title && <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>}
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs text-slate-600 font-bold font-mono transition-colors hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 cursor-default">
      {children}
    </span>
  );
}

function ProjectCard({ title, category, description, tags }: { title: string; category: string; description: string; tags: string[] }) {
  return (
    <div className="group relative rounded-3xl border border-slate-200 bg-white p-1 transition-all hover:shadow-xl hover:shadow-rose-100/50 hover:border-rose-200 hover:scale-[1.01]">
      <div className="h-full rounded-[22px] bg-white p-8 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-rose-500 transition-colors">{title}</h3>
            <p className="text-xs font-bold text-indigo-500 uppercase tracking-wider mt-1">{category}</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-medium">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[11px] font-bold px-2 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-100">
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
    <div className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
      <div>
        <h3 className="text-base font-bold text-slate-900">{role}</h3>
        <p className="text-sm font-medium text-indigo-600">{company}</p>
      </div>
      <p className="text-xs font-mono font-medium text-slate-400 mt-2 md:mt-0">{date}</p>
    </div>
  );
}