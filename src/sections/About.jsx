import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, Compass, Sparkles, ArrowRight, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#030712] border-t border-slate-900">
      {/* Background atmospheric ambient glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Refined Indexing */}
        <div className="mb-20 border-b border-slate-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INDEX: 01 // EDITORIAL IDENTITY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Curious by nature. <span className="text-gradient-cyan">Building by practice.</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-slate-400">
            LOCATED: PALAMANER, AP // JNTUA 2027
          </div>
        </div>

        {/* 2-Column Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait with Architectural Depth (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-md w-full">
              {/* Outer Atmospheric Aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-indigo-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition duration-700" />
              
              {/* Smoked Architectural Frame */}
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-slate-800/90 p-3 shadow-2xl">
                
                {/* HUD Camera Reticle Header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/80 mb-3 text-[10px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>PORTRAIT_REF: VINAY_B</span>
                  </div>
                  <span>FOCAL: 50MM // AP: 13.28° N</span>
                </div>

                {/* Portrait Photo Viewport */}
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-950">
                  <img
                    src={personalInfo.portraitUrl}
                    alt="Portrait of Bangalore Vinay, B.Tech AI & Data Science Student"
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-102 transition duration-700"
                    loading="lazy"
                  />
                  
                  {/* Subtle Precision Corner Crosshairs */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400/60 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-400/60 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-400/60 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-400/60 pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                </div>

                {/* Status Footer Pill */}
                <div className="mt-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold text-white">Bangalore Vinay</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400 font-medium">B.Tech AI&amp;DS</span>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Credentials (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Lead Editorial Pull Quote */}
            <blockquote className="text-lg sm:text-2xl text-slate-100 font-normal leading-relaxed border-l-2 border-cyan-400 pl-6 italic">
              "{personalInfo.aboutEditorial}"
            </blockquote>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              My engineering approach is grounded in first principles: understanding constraints, writing modular and reusable code, testing with real-world edge cases, and continuous refinement. Whether developing modern client-side architectures in React or tuning supervised machine learning models in Python, I prioritize reliability, clean design, and practical utility.
            </p>

            {/* Structured Facts Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl glass-panel border border-slate-800/90">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>DEGREE &amp; INSTITUTION</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  B.Tech — Artificial Intelligence &amp; Data Science
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Mother Theresa Institute of Engineering and Technology (JNTUA)
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-slate-800/90">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>EXPECTED COMPLETION</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  2027 (Pre-Final Year)
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  75% Academic Track
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-slate-800/90">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1.5">
                  <Compass className="w-4 h-4" />
                  <span>CORE FOCUS</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Full-Stack &amp; Software Development
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  React web apps, Python ML pipelines, Java DSA
                </div>
              </div>

              <div className="p-5 rounded-2xl glass-panel border border-slate-800/90">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>LOCATION &amp; MOBILITY</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  Palamaner, Andhra Pradesh, India
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Open to relocation &amp; remote engineering roles
                </div>
              </div>
            </div>

            {/* Seamless Transition Link directly into Projects */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                <span>Full Resume PDF</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
