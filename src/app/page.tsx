"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
// 如果你安装了 react-icons，请取消下面这行的注释并使用图标
// import { LuArrowRight, LuMapPin, LuDownload } from "react-icons/lu";

/* --- 动画配置 (保持不变，因为那种顺滑感很好) --- */
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
    // 1. 背景基调：使用 Zinc (中性灰) 代替 Slate (冷蓝灰)，更温润
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-rose-500/30">
      
      {/* 2. 背景光效：极光氛围 (Aurora Effect) - 心理健康的标志性视觉 */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* 颗粒纹理，增加纸质感 */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
        
        {/* 左上角：治愈的蓝紫色 */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[120px]"></div>
        
        {/* 右下角：温暖的玫瑰粉 */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-rose-500/10 blur-[120px]"></div>
      </div>

      <Header />

      <main className="pt-28 pb-20 px-4 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* HERO SECTION */}
          <motion.section id="hero" variants={itemVariants} className="flex flex-col gap-6 pt-4">
            {/* 状态标签：从“科技感”变为“柔和胶囊” */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-200/10 bg-rose-500/5 w-fit text-xs font-medium text-rose-200/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Open to PEY (May 2026)
            </div>

            <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-100">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-fuchsia-300 to-indigo-300">emotionally intelligent</span> <br />
              AI for mental health.
            </h1>

            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
              I&apos;m Amelia. I bridge the gap between 
              <span className="text-zinc-200 font-medium"> multimodal machine learning</span> and 
              <span className="text-zinc-200 font-medium"> human psychology</span> to build AI that truly understands how we feel.
            </p>

            <div className="flex gap-4 mt-4">
              {/* 按钮：柔和的渐变边框 */}
              <a href="#projects" className="relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full bg-zinc-100 px-8 font-medium text-zinc-900 transition-transform hover:scale-105 active:scale-95">
                View My Work
              </a>
              <a href="/AmeliaZhang_CV.pdf" className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 px-8 font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white">
                Download CV
              </a>
            </div>
          </motion.section>


          {/* BENTO GRID - 柔和版 */}
          <motion.section id="about" variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-zinc-100">
              <span className="text-rose-300">✦</span> A Glimpse Into My World
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              
              {/* Card 1: Bio (更深的玻璃态) */}
              <BentoCard className="md:col-span-4 bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-md">
                <h3 className="text-lg font-medium text-indigo-300 mb-2">The Mission</h3>
                <p className="text-zinc-400 leading-relaxed">
                  At UofT, I lead <strong className="text-zinc-100">AURA</strong>, a 22-person team building personality-adaptive agents. 
                  I focus on <strong>Safety</strong> and <strong>Empathy</strong> alignment (RLAIF), ensuring our models support users rather than just generating text.
                </p>
              </BentoCard>

              {/* Card 2: Location (更柔和的图标) */}
              <BentoCard className="md:col-span-2 flex flex-col items-center justify-center text-center bg-zinc-900/40">
                <div className="relative mb-3 p-4 rounded-full bg-zinc-800/50 border border-zinc-700/50">
                  <span className="text-3xl">🇨🇦</span>
                </div>
                <h3 className="font-semibold text-zinc-200">Toronto, ON</h3>
                <p className="text-sm text-zinc-500">UofT Engineering &apos;27</p>
              </BentoCard>

              {/* Card 3: Tech Stack (胶囊标签风格) */}
              <BentoCard className="md:col-span-3" title="Core Stack">
                <div className="flex flex-wrap gap-2">
                   <Tag>Python</Tag> <Tag>PyTorch</Tag> <Tag>Next.js</Tag> 
                   <Tag>FastAPI</Tag> <Tag>Supabase</Tag> <Tag>RLAIF</Tag>
                   <Tag>Multimodal</Tag> <Tag>Transformers</Tag>
                </div>
              </BentoCard>

              {/* Card 4: Stats (玫瑰色进度条) */}
              <BentoCard className="md:col-span-3" title="Algorithm Chops">
                <p className="text-sm text-zinc-400 mb-3">
                  Built &quot;The Traveller&quot; routing engine in C++.
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                    {/* 这里的颜色换成了 Rose (粉/红)，更有温度 */}
                    <div className="h-full w-[95%] bg-rose-400 rounded-full shadow-[0_0_10px_rgba(251,113,133,0.5)]"></div>
                  </div>
                  <span className="text-xs font-mono text-rose-300">Top 6% Speed</span>
                </div>
              </BentoCard>
            </div>
          </motion.section>


          {/* PROJECTS (卡片光效微调) */}
          <motion.section id="projects" variants={itemVariants}>
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-zinc-100">
              <span className="text-rose-300">✦</span> Featured Work
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
             <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2 text-zinc-100">
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
            <h2 className="text-3xl font-bold mb-4 text-zinc-100">Let&apos;s build safe, empathetic AI.</h2>
            <p className="text-zinc-400 mb-8">Always open to discussing mental health tech and multimodal systems.</p>
            <a href="mailto:your_email@example.com" className="text-rose-300 hover:text-rose-200 underline underline-offset-4 text-lg transition-colors">
              Get in touch
            </a>
          </motion.section>

        </motion.div>
      </main>
    </div>
  );
}

/* --- COMPONENTS (Updated for Soft/Bento Style) --- */

function Header() {
  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center">
      <nav className="bg-zinc-950/70 backdrop-blur-xl border border-white/10 rounded-full px-6 h-12 flex items-center gap-6 text-sm font-medium shadow-2xl shadow-black/20">
        <a href="#hero" className="text-zinc-200 hover:text-rose-300 transition">Home</a>
        <a href="#about" className="text-zinc-400 hover:text-rose-300 transition">About</a>
        <a href="#projects" className="text-zinc-400 hover:text-rose-300 transition">Work</a>
      </nav>
    </header>
  );
}

function BentoCard({ children, className = "", title }: { children: React.ReactNode; className?: string; title?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/30 p-6 transition-all duration-300 hover:bg-zinc-900/50 hover:border-white/10 ${className}`}>
      {title && <h3 className="text-lg font-semibold text-zinc-200 mb-4">{title}</h3>}
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-xs text-zinc-300 font-mono hover:bg-rose-500/10 hover:text-rose-200 hover:border-rose-500/20 transition-colors cursor-default">
      {children}
    </span>
  );
}

function ProjectCard({ title, category, description, tags }: { title: string; category: string; description: string; tags: string[] }) {
  return (
    <div className="group relative rounded-3xl border border-white/5 bg-zinc-900/20 p-1 transition-all hover:bg-zinc-900/40 hover:border-white/10 hover:scale-[1.01]">
      <div className="h-full rounded-[22px] bg-zinc-950/40 p-6 md:p-8 flex flex-col backdrop-blur-sm">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-rose-300 transition-colors">{title}</h3>
            <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mt-1">{category}</p>
          </div>
        </div>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[11px] px-2 py-1 rounded-full bg-rose-500/5 text-rose-200/80 border border-rose-500/10">
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
    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
      <div>
        <h3 className="text-base font-semibold text-zinc-200">{role}</h3>
        <p className="text-sm text-indigo-300/80">{company}</p>
      </div>
      <p className="text-xs font-mono text-zinc-500 mt-2 md:mt-0">{date}</p>
    </div>
  );
}