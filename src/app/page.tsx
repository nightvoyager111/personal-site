"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
// 1. IMPORT THE FONT
import { Plus_Jakarta_Sans } from "next/font/google";

// 2. CONFIGURE THE FONT
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
});

/* --- Animations --- */
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
    // 3. APPLY FONT CLASS & DARK THEME
    <div className={`min-h-screen bg-zinc-950 text-zinc-50 selection:bg-rose-500/30 ${jakarta.className}`}>
      
      {/* BACKGROUND: Aurora Effect (Dark Mode) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-rose-500/10 blur-[120px]"></div>
      </div>

      <Header />

      <main className="pt-32 pb-20 px-4 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* HERO SECTION: Dark Mode + New Typography */}
          <motion.section id="hero" variants={itemVariants} className="flex flex-col gap-8 pt-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-200/10 bg-rose-500/5 w-fit text-xs font-medium text-rose-200/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Open to 16 months PEY Co-op Internship (May 2026)
            </div>

            {/* TYPOGRAPHY CHANGE: font-medium + tracking-tighter */}
            <h1 className="font-medium tracking-tighter leading-[1.05] text-zinc-100">
              <span className="text-2xl md:text-4xl block mb-2"> 
                HELLO! I&apos;M
              </span>
              <span className="text-5xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-fuchsia-300 to-indigo-300">
                Amelia Zhang
              </span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-medium tracking-tight">
              A third-year Computer Engineering student at the University of Toronto, currently working on  
              <span className="text-zinc-200 font-semibold"> multimodal emotion recognition</span> and
              <span className="text-zinc-200 font-semibold"> personality-adaptive conversational agents.</span>
            </p>

            <div className="flex gap-4 mt-4">
              <a href="#projects" className="relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-zinc-100 px-8 text-lg font-medium text-zinc-900 transition-transform hover:scale-105 active:scale-95 tracking-tight">
                View My Work
              </a>
              <a href="/AmeliaZhang_CV.pdf" className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 px-8 text-lg font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white tracking-tight">
                Download CV
              </a>
            </div>
          </motion.section>


          {/* BENTO GRID (Dark Mode + New Font) */}
          <motion.section id="about" variants={itemVariants}>
            <h2 className="text-3xl font-semibold tracking-tight mb-8 flex items-center gap-2 text-zinc-100">
              <span className="text-rose-300">✦</span> A Glimpse Into My World
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              
              <BentoCard className="md:col-span-4 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-md">
                <h3 className="text-xl font-semibold text-indigo-300 mb-3 tracking-tight">The Mission</h3>
                <p className="text-zinc-400 leading-relaxed text-lg font-medium tracking-tight">
                  I am exploring how AI can be made more emotionally intelligent.
                  Not perfectly, but enough to respond with clarity, safety, and empathy.
                  That&apos;s the direction guiding everything I work on.
                </p>
              </BentoCard>

              <BentoCard className="md:col-span-2 flex flex-col items-center justify-center text-center bg-zinc-900/40">
                <div className="relative mb-4 p-4 rounded-full bg-zinc-800/50 border border-zinc-700/50">
                  <span className="text-3xl">🇨🇦</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-200 tracking-tight">Toronto, ON</h3>
                <p className="text-sm text-zinc-500 font-medium">UofT Engineering &apos;27 + PEY (16 months after third year)</p>
              </BentoCard>

              <BentoCard className="md:col-span-3" title="Core Stack">
                <div className="flex flex-wrap gap-2">
                   <Tag>Python</Tag> <Tag>PyTorch</Tag> <Tag>C/C++</Tag> <Tag>Next.js</Tag> 
                   <Tag>FastAPI</Tag> <Tag>Supabase</Tag> <Tag>Reinforcement Learning</Tag> <Tag>LLM</Tag> <Tag>RAG</Tag>
                   <Tag>Multimodal</Tag> <Tag>Transformers</Tag> <Tag>FPGA</Tag> <Tag>Verilog</Tag> <Tag>Assembly</Tag>
                </div>
              </BentoCard>

              <BentoCard className="md:col-span-3" title="Algorithm Chops">
                <p className="text-sm text-zinc-400 mb-4 font-medium tracking-tight">
                  Built &quot;The Traveller&quot; routing engine in C++.
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-rose-400 rounded-full shadow-[0_0_15px_rgba(251,113,133,0.4)]"></div>
                  </div>
                  <span className="text-xs font-bold text-rose-300 tracking-wider">6th place in the algorithm contest</span>
                </div>
              </BentoCard>
            </div>
          </motion.section>


          {/* PROJECTS */}
          <motion.section id="projects" variants={itemVariants}>
            <h2 className="text-3xl font-semibold tracking-tight mb-8 flex items-center gap-2 text-zinc-100">
              <span className="text-rose-300">✦</span> Featured Work
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard 
                title="AURA" 
                category="Mental Health AI"
                description="A multimodal, personality-adaptive conversational agent. Leading 22 students to build recognition stacks (RoBERTa/HuBERT) and aligned generation systems. Presented at IEEE MIT URTC in Oct. 2025."
                tags={["Project Lead", "Research", "Prosody Analysis", "RLAIF"]}
              />
              <ProjectCard 
                title="Ask-TapeB" 
                category="Wellness Assistant"
                description="Full-stack mental health app combining mood tracking with a sentiment-aware chatbot. Built with Next.js, FastAPI, and Supabase."
                tags={["Full Stack", "React", "GenAI"]}
              />
              <ProjectCard 
                title="The Traveller" 
                category="Interactive City Map with Routing Engine"
                description="Built a custom routing engine using A* and Ant Colony Optimization, optimized for bounded-time (<50s) delivery route search over a real street graph. Integrated with an EZGL/GTK UI for interactive visualization."
                tags={["A*", "Performance Optimization", "Graph Algo", "C++"]}
              />
              <ProjectCard 
                title="Monkeypox Case Prediction with Machine Learning" 
                category="Publication"
                description="Developed a time-series forecasting model using Python and Facebook Prophet to predict global Monkeypox infection trends.
                Co-authored a research paper."
                tags={["Python", "Time-Series Forecasting", "Prophet", "Research"]}
              />
            </div>
          </motion.section>


          {/* EXPERIENCE */}
          <motion.section id="experience" variants={itemVariants}>
             <h2 className="text-3xl font-semibold tracking-tight mb-8 flex items-center gap-2 text-zinc-100">
              <span className="text-rose-300">✦</span> Experience
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
          <motion.section id="contact" variants={itemVariants} className="py-12 border-t border-zinc-800/50 text-center">
            <h2 className="text-4xl font-bold mb-6 text-zinc-100 tracking-tighter">Get in touch</h2>
            {/*<p className="text-zinc-400 mb-8 text-lg font-medium tracking-tight">Feel free to send me </p> */}
            <a href="mailto:xianghan.zhang@mail.utoronto.ca" className="text-rose-300 hover:text-rose-200 underline underline-offset-8 decoration-2 text-xl font-medium tracking-tight transition-colors">
              Let&apos;s talk!
            </a>
          </motion.section>

        </motion.div>
      </main>
    </div>
  );
}

/* --- COMPONENTS (Refined for the new font) --- */

function Header() {
  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center">
      <nav className="bg-zinc-950/70 backdrop-blur-xl border border-white/10 rounded-full px-6 h-12 flex items-center gap-6 text-sm font-medium tracking-tight shadow-2xl shadow-black/20">
        <a href="#hero" className="text-zinc-200 hover:text-rose-300 transition">Home</a>
        <a href="#about" className="text-zinc-400 hover:text-rose-300 transition">About</a>
        <a href="#projects" className="text-zinc-400 hover:text-rose-300 transition">Work</a>
      </nav>
    </header>
  );
}

function BentoCard({ children, className = "", title }: { children: React.ReactNode; className?: string; title?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/30 p-8 transition-all duration-300 hover:bg-zinc-900/50 hover:border-white/10 ${className}`}>
      {title && <h3 className="text-xl font-semibold tracking-tight text-zinc-200 mb-4">{title}</h3>}
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-xs font-semibold tracking-wide text-zinc-300 hover:bg-rose-500/10 hover:text-rose-200 hover:border-rose-500/20 transition-colors cursor-default">
      {children}
    </span>
  );
}

function ProjectCard({ title, category, description, tags }: { title: string; category: string; description: string; tags: string[] }) {
  return (
    <div className="group relative rounded-3xl border border-white/5 bg-zinc-900/20 p-1 transition-all hover:bg-zinc-900/40 hover:border-white/10 hover:scale-[1.01]">
      <div className="h-full rounded-[22px] bg-zinc-950/40 p-8 flex flex-col backdrop-blur-sm">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-100 group-hover:text-rose-300 transition-colors">{title}</h3>
            <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest mt-1">{category}</p>
          </div>
        </div>
        <p className="text-zinc-400 text-base font-medium tracking-tight leading-relaxed mb-6 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[11px] px-2 py-1 rounded-full bg-rose-500/5 text-rose-200/80 border border-rose-500/10 font-semibold tracking-wide">
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
    <div className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
      <div>
        <h3 className="text-lg font-semibold tracking-tight text-zinc-200">{role}</h3>
        <p className="text-sm font-medium text-indigo-300/80">{company}</p>
      </div>
      <p className="text-xs font-mono text-zinc-500 mt-2 md:mt-0">{date}</p>
    </div>
  );
}