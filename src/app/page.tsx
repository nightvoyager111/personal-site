"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Navi */}
      <Header />

      <main className="pt-20">
        {/* 1. Hero Section */}
        <motion.section
          id="hero"
          className="max-w-5xl mx-auto px-4 py-16 lg:py-28 flex flex-col gap-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <p className="text-sm font-medium text-sky-400 uppercase tracking-[0.2em]">
            Amelia Zhang · Emotional Intelligence AI
          </p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Building emotionally intelligent AI for mental health.
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-2xl">
            I&apos;m Amelia, a third-year Computer Engineering student at the
            University of Toronto, focusing on multimodal, emotionally
            intelligent AI systems and mental-health-aligned products.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-teal-400 px-5 py-2 text-base font-medium hover:bg-teal-400 hover:text-zinc-950 transition-all"
            >
              View my work
            </a>
            <a
              href="/AmeliaZhang_CV.pdf"
              className="inline-flex items-center rounded-full border border-slate-500 px-4 py-2 text-sm font-medium hover:bg-slate-800 transition"
            >
              Download CV
            </a>
          </div>
        </motion.section>

        {/* 2. About / Glimpse Section */}
        <section
          id="about"
          className="max-w-5xl mx-auto px-4 py-10 border-t border-slate-800"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            A glimpse into what I do
          </h2>
          <p className="text-slate-300 max-w-3xl">
            I&apos;m a machine learning project lead and builder working at the
            intersection of AI and mental health. At UofT, I lead{" "}
            <span className="font-semibold">AURA</span>, a 22-person project
            building a multimodal, personality-adaptive conversational agent
            for mental health support. I also design and ship full-stack AI
            tools like <span className="font-semibold">Ask-TapeB</span>, a
            wellness assistant that combines a chatbot, mood tracking, and
            analytics. Previously, I built routing engines and mapping systems
            in C++ and placed 6th in a 200+ stop traveling courier optimization
            contest.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <Tag>Multimodal emotion &amp; personality recognition</Tag>
            <Tag>Post-training alignment &amp; RLAIF</Tag>
            <Tag>Conversational AI for mental health</Tag>
            <Tag>Next.js · FastAPI · Supabase · Vercel</Tag>
          </div>
        </section>

        {/* 3. Featured Work */}
        <section
          id="projects"
          className="max-w-5xl mx-auto px-4 py-12 border-t border-slate-800"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Featured work
          </h2>

          <div className="flex flex-col gap-8">
            {/* AURA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard
                title="AURA – Multimodal Emotional-Intelligence Conversational Agent"
                role="Project Lead · UofT Machine Intelligence Team · 22-person team"
                period="Aug 2025 – Present"
              >
                <p className="text-sm text-slate-300 mb-3">
                  AURA is a multimodal, personality-adaptive conversational
                  agent designed for mental health support. I lead the team
                  building both the perception stack and the aligned generation
                  system.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                  <li>
                    Multimodal perception with RoBERTa + HuBERT/WavLM for
                    emotion and personality recognition over text–audio
                    signals.
                  </li>
                  <li>
                    Personality-conditioned generation with lightweight
                    RLAIF-style alignment for stable, safe, empathetic
                    responses.
                  </li>
                  <li>
                    Designing training &amp; evaluation pipelines with a clear
                    path from research prototype to real-world deployment.
                  </li>
                </ul>
              </ProjectCard>
            </motion.div>

            {/* Ask-TapeB Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard
                title="Ask-TapeB – Full-Stack Wellness Assistant"
                role="Personal Project"
                period="Summer 2025"
              >
                <p className="text-sm text-slate-300 mb-3">
                  Ask-TapeB is a full-stack AI application that combines a
                  conversational agent, mood tracking, and an analytics
                  dashboard to support users’ emotional well-being.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
                  <li>
                    Sentiment-aware conversational core that adapts to the
                    user&apos;s emotional state over time.
                  </li>
                  <li>
                    Backend built with FastAPI and Supabase, exposing clean APIs
                    for chat and mood analytics.
                  </li>
                  <li>
                    Responsive Next.js + Tailwind frontend, deployed on Vercel,
                    with smooth mood logging and visualisations.
                  </li>
                </ul>
              </ProjectCard>
            </motion.div>
          </div>
        </section>

        {/* 4. Algorithm Highlight – Traveller */}
        <motion.section
          id="traveller"
          className="max-w-5xl mx-auto px-4 py-12 border-t border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Algorithm highlight – The Traveller routing engine
          </h2>
          <p className="text-slate-300 max-w-3xl mb-3 text-sm">
            As part of an interactive mapping project, I built the routing
            engine behind The Traveller, a C++ application that visualizes city
            maps and computes delivery routes over 200+ stops using realistic
            travel times.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-300">
            <li>
              Implemented A* search and Ant Colony Optimization on a custom
              graph representation of city streets and intersections.
            </li>
            <li>
              Integrated the solver with a real-time EZGL + GTK GUI for
              interactive navigation and route visualization.
            </li>
            <li>
              Placed 6th in a performance contest, finding high-quality routes
              under a 50-second runtime constraint.
            </li>
          </ul>
        </motion.section>

        {/* 5. Experience & Research */}
        <motion.section
          id="experience"
          className="max-w-5xl mx-auto px-4 py-12 border-t border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Experience &amp; research
          </h2>

          <div className="flex flex-col gap-6">
            <ExperienceItem
              title="AURA – Machine Learning Project Lead"
              org="UofT Machine Intelligence Team"
              period="Aug 2025 – Present"
            >
              <p className="text-sm text-slate-300">
                Leading a 22-person team building a multimodal
                emotional-intelligence agent, overseeing perception models,
                aligned generation, and training &amp; evaluation pipelines.
              </p>
            </ExperienceItem>

            <ExperienceItem
              title="Ask-TapeB – Software Developer"
              org="Personal Project"
              period="Jun 2025 – Aug 2025"
            >
              <p className="text-sm text-slate-300">
                Designed and implemented a full-stack wellness assistant
                combining a chatbot, mood tracking, and analytics using Next.js,
                FastAPI and Supabase.
              </p>
            </ExperienceItem>

            <ExperienceItem
              title="The Traveller – Project Manager & Routing Engineer"
              org="University of Toronto"
              period="Jan 2025 – Apr 2025"
            >
              <p className="text-sm text-slate-300">
                Built C++ routing algorithms and an interactive map UI,
                achieving top-6 performance in a 200+ delivery optimization
                contest.
              </p>
            </ExperienceItem>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Publication</h3>
            <p className="text-sm text-slate-300">
              <span className="font-medium">
                Monkeypox Case Prediction with Machine Learning
              </span>{" "}
              – 2023 International Conference on Computer, Machine Learning and
              Artificial Intelligence (San Francisco). Built a time-series
              forecasting model in Python using Facebook Prophet to predict
              Monkeypox infection trends; co-authored a paper indexed by Google
              Scholar, CPC and Crossref.
            </p>
          </div>
        </motion.section>

        {/* 6. Toolkit */}
        <section
          id="toolkit"
          className="max-w-5xl mx-auto px-4 py-12 border-t border-slate-800"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Toolkit</h2>

          <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-300">
            <div>
              <h3 className="font-semibold mb-1">Languages</h3>
              <p>Python, C/C++, Java, JavaScript/TypeScript, Verilog, Assembly</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">ML &amp; AI</h3>
              <p>
                Supervised fine-tuning, multimodal fusion, prompt engineering,
                post-training alignment, evaluation pipelines
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Infrastructure</h3>
              <p>Git, CI/CD, Docker, Linux, data pipelines, model orchestration</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Product</h3>
              <p>
                React, Next.js, FastAPI, Node.js, SQL, Supabase, Vercel,
                Cloudflare
              </p>
            </div>
          </div>
        </section>

        {/* 7. Contact */}
        <section
          id="contact"
          className="max-w-5xl mx-auto px-4 py-12 border-t border-slate-800 mb-10"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-3">
            Let&apos;s build emotionally intelligent systems
          </h2>
          <p className="text-sm text-slate-300 mb-3 max-w-2xl">
            I&apos;m always interested in working on emotionally-aware AI
            systems, multimodal perception, and mental-health-aligned products.
            The best way to reach me is by email or LinkedIn.
          </p>
          <div className="flex flex-col gap-1 text-sm">
            <a
              href="mailto:your_email@example.com"
              className="underline underline-offset-2 hover:text-sky-300"
            >
              your_email@example.com
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin/"
              className="underline underline-offset-2 hover:text-sky-300"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

/* --- Header / small components --- */

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between text-sm">
        <a href="#hero" className="font-semibold">
          Amelia Zhang
        </a>
        <div className="flex items-center gap-4 text-slate-300">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#traveller">Algorithms</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#toolkit">Toolkit</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="hover:text-sky-300 transition-colors"
    >
      {children}
    </a>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-600 px-3 py-1 text-[11px] text-slate-200">
      {children}
    </span>
  );
}

interface ProjectCardProps {
  title: string;
  role: string;
  period?: string;
  children: React.ReactNode;
}

function ProjectCard({ title, role, period, children }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 md:p-6 shadow-sm">
      <h3 className="text-lg md:text-xl font-semibold mb-1">{title}</h3>
      <p className="text-xs text-slate-400">
        {role}
        {period ? ` · ${period}` : null}
      </p>
      <div className="mt-3">{children}</div>
    </article>
  );
}

interface ExperienceItemProps {
  title: string;
  org: string;
  period: string;
  children: React.ReactNode;
}

function ExperienceItem({ title, org, period, children }: ExperienceItemProps) {
  return (
    <article>
      <h3 className="text-sm md:text-base font-semibold">{title}</h3>
      <p className="text-xs text-slate-400">
        {org} · {period}
      </p>
      <div className="mt-1.5">{children}</div>
    </article>
  );
}