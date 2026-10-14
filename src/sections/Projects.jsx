import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { featuredProjects } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import { ExternalLink, Sparkles, ArrowUpRight, Info, CheckCircle2, Layers, Cpu, Terminal, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const smartCampus = featuredProjects.find(p => p.id === 'smart-campus');
  const ecommerce = featuredProjects.find(p => p.id === 'vinay-ecommerce');
  const accidentAnalyzer = featuredProjects.find(p => p.id === 'traffic-accident-analyzer');
  const studentPrediction = featuredProjects.find(p => p.id === 'student-prediction-system');
  const arduino = featuredProjects.find(p => p.id === 'arduino-traffic-system');

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-[#030712] border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[750px] h-[750px] bg-cyan-600/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Telemetry Index */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 border-b border-slate-900 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INDEX: 02 // SIGNATURE SHOWCASES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Selected <span className="text-gradient-cyan">Engineering Projects</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
              Practical web platforms, data analysis pipelines, and machine learning models backed by authentic code repositories.
            </p>
          </div>

          <a
            href="https://github.com/Vinay786-3009"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all self-start md:self-auto shadow-sm cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 text-cyan-400" />
            <span>Explore 40+ Repos on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* =========================================================================
            SHOWCASE 1: SMART CAMPUS (Heroic Wide-Format Showcase)
           ========================================================================= */}
        {smartCampus && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24 rounded-3xl glass-panel border border-slate-800/90 overflow-hidden shadow-2xl relative group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Left Column: Editorial Information & Deliverables */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between z-10 bg-slate-950/60">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                      01 // FLAGSHIP ARCHITECTURE
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-[11px] font-mono text-cyan-300">
                      {smartCampus.badge}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(smartCampus)}
                    className="text-2xl sm:text-4xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {smartCampus.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-normal">
                    {smartCampus.summary}
                  </p>

                  {/* Problem & Approach Callout */}
                  <div className="mt-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1.5">
                    <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>THE PROBLEM CONTEXT</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {smartCampus.problemStatement}
                    </p>
                  </div>

                  {/* Verified Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {smartCampus.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(smartCampus)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <Info className="w-4 h-4" />
                    <span>View Architecture &amp; Solution</span>
                  </button>

                  <a
                    href={smartCampus.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code (GitHub)</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Layered Live Preview with Mockup Frame */}
              <div
                onClick={() => setSelectedProject(smartCampus)}
                className="lg:col-span-6 relative min-h-[340px] sm:min-h-[460px] bg-slate-950 overflow-hidden cursor-pointer"
              >
                <img
                  src={smartCampus.image}
                  alt={`${smartCampus.title} Interface`}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-cyan-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>CAMPUS_PORTAL_CORE</span>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* =========================================================================
            SHOWCASE 2: VINAY E-COMMERCE (Reverse Split Layout)
           ========================================================================= */}
        {ecommerce && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24 rounded-3xl glass-panel border border-slate-800/90 overflow-hidden shadow-2xl relative group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              
              {/* Left Column: Image Preview */}
              <div
                onClick={() => setSelectedProject(ecommerce)}
                className="lg:col-span-6 relative min-h-[340px] sm:min-h-[460px] bg-slate-950 overflow-hidden cursor-pointer order-2 lg:order-1"
              >
                <img
                  src={ecommerce.image}
                  alt={`${ecommerce.title} Interface`}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-cyan-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span>RESPONSIVE_STOREFRONT</span>
                </div>
              </div>

              {/* Right Column: Information & Deliverables */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between z-10 bg-slate-950/60 order-1 lg:order-2">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                      02 // STOREFRONT ARCHITECTURE
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-950/80 border border-sky-800/60 text-[11px] font-mono text-sky-300">
                      {ecommerce.badge}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedProject(ecommerce)}
                    className="text-2xl sm:text-4xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {ecommerce.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-normal">
                    {ecommerce.summary}
                  </p>

                  <div className="mt-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1.5">
                    <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      <span>THE PROBLEM CONTEXT</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {ecommerce.problemStatement}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {ecommerce.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(ecommerce)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <Info className="w-4 h-4" />
                    <span>View Architecture &amp; Solution</span>
                  </button>

                  <a
                    href={ecommerce.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code (GitHub)</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* =========================================================================
            DATA SCIENCE & ML DUO: Traffic Analyzer & Student Prediction
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          
          {/* Project 3: Traffic Accident Hotspot Analyzer */}
          {accidentAnalyzer && (
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl glass-panel border border-slate-800/90 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-cyan-500/40 transition-all"
            >
              <div>
                <div
                  onClick={() => setSelectedProject(accidentAnalyzer)}
                  className="relative aspect-video bg-slate-950 overflow-hidden cursor-pointer"
                >
                  <img
                    src={accidentAnalyzer.image}
                    alt={accidentAnalyzer.title}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-[10px] font-mono text-cyan-400">
                      03 // DATA SCIENCE &amp; ANALYTICS
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-300">
                      {accidentAnalyzer.badge}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3
                    onClick={() => setSelectedProject(accidentAnalyzer)}
                    className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {accidentAnalyzer.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {accidentAnalyzer.summary}
                  </p>

                  <div className="mt-4 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/70 text-xs text-slate-400 leading-relaxed">
                    <span className="text-cyan-400 font-mono text-[11px] block mb-1">
                      Problem Context:
                    </span>
                    {accidentAnalyzer.problemStatement}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {accidentAnalyzer.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 flex items-center justify-between border-t border-slate-800/60 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedProject(accidentAnalyzer)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Case Details</span>
                </button>

                <a
                  href={accidentAnalyzer.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-200 transition-all cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.article>
          )}

          {/* Project 4: Student Prediction System */}
          {studentPrediction && (
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-3xl glass-panel border border-slate-800/90 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-cyan-500/40 transition-all"
            >
              <div>
                <div
                  onClick={() => setSelectedProject(studentPrediction)}
                  className="relative aspect-video bg-slate-950 overflow-hidden cursor-pointer"
                >
                  <img
                    src={studentPrediction.image}
                    alt={studentPrediction.title}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-[10px] font-mono text-cyan-400">
                      04 // MACHINE LEARNING
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-300">
                      {studentPrediction.badge}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3
                    onClick={() => setSelectedProject(studentPrediction)}
                    className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    {studentPrediction.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {studentPrediction.summary}
                  </p>

                  <div className="mt-4 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/70 text-xs text-slate-400 leading-relaxed">
                    <span className="text-cyan-400 font-mono text-[11px] block mb-1">
                      Problem Context:
                    </span>
                    {studentPrediction.problemStatement}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {studentPrediction.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 flex items-center justify-between border-t border-slate-800/60 pt-4">
                <button
                  type="button"
                  onClick={() => setSelectedProject(studentPrediction)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Case Details</span>
                </button>

                <a
                  href={studentPrediction.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-200 transition-all cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Source Code</span>
                </a>
              </div>
            </motion.article>
          )}

        </div>

        {/* =========================================================================
            ACADEMIC EMBEDDED PROJECT: Arduino Traffic Light System
           ========================================================================= */}
        {arduino && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 sm:p-9 rounded-3xl glass-panel border border-slate-800/90 bg-gradient-to-r from-slate-900/80 via-slate-950/90 to-slate-900/80 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-800">
                <img
                  src={arduino.image}
                  alt={arduino.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-mono text-cyan-400">
                    HARDWARE // EMBEDDED LOGIC
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-900 text-[10px] font-mono text-slate-400">
                    {arduino.badge}
                  </span>
                </div>
                <h4 className="text-lg font-display font-bold text-white">
                  {arduino.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  {arduino.summary}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
              <button
                type="button"
                onClick={() => setSelectedProject(arduino)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 transition-colors cursor-pointer"
              >
                Hardware Specs
              </button>
              <a
                href={arduino.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold transition-all cursor-pointer"
              >
                Source Repo
              </a>
            </div>
          </motion.div>
        )}

      </div>

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
