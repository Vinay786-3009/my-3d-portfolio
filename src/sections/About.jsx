import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, coreServices } from '../data/portfolioData';
import { Sparkles, Code2, Database, Brain, Layers, Globe } from 'lucide-react';

export default function About() {
  const techChips = [
    { name: "React.js", category: "frontend" },
    { name: "Python", category: "ai" },
    { name: "Java", category: "core" },
    { name: "JavaScript (ES6+)", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Scikit-learn", category: "ai" },
    { name: "Pandas & NumPy", category: "ai" },
    { name: "SQL (MySQL)", category: "data" },
    { name: "MongoDB", category: "data" },
    { name: "Firebase", category: "data" },
    { name: "Machine Learning", category: "ai" },
    { name: "Data Structures (DSA)", category: "core" }
  ];

  const buildTools = [
    { name: "Git & GitHub", desc: "Version control & collaboration", icon: "🐙" },
    { name: "VS Code", desc: "Primary IDE & Extensions", icon: "💻" },
    { name: "Jupyter Notebook", desc: "Interactive data workflows", icon: "📓" },
    { name: "Vercel", desc: "Continuous deployment & hosting", icon: "▲" },
    { name: "MySQL Workbench", desc: "Relational modeling & queries", icon: "🐬" },
    { name: "Arduino Uno", desc: "Hardware & microcontroller logic", icon: "⚡" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[var(--color-bg-base)] border-t border-[#252A34]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181C22] border border-[#2D3340] text-xs font-semibold text-[var(--color-accent)] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Building intelligent software with{' '}
            <span className="text-[var(--color-accent)]">precision &amp; craftsmanship.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-normal">
            {personalInfo.aboutEditorial}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          
          {/* Bento Card 1: Core Tech Stack with Interactive Drag/Hover Chips (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#181C22] border border-[#2D3340] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[var(--color-accent)]/60 transition-all shadow-xl group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#101318] border border-[#2D3340] flex items-center justify-center text-[var(--color-accent)]">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Core Tech Stack</h3>
                </div>
                <span className="text-xs font-mono text-[var(--color-accent)] bg-[#101318] px-3 py-1 rounded-full border border-[#2D3340]">
                  (Grab &amp; drag the chips)
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Primary languages, frameworks, and libraries utilized across full-stack applications and machine learning pipelines.
              </p>
            </div>

            {/* Draggable & Floating interactive chips */}
            <div className="flex flex-wrap gap-2.5 pt-2 min-h-[140px] items-center p-3 rounded-xl bg-[#101318]/70 border border-[#252A34]">
              {techChips.map((chip) => (
                <motion.div
                  key={chip.name}
                  drag
                  dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
                  whileHover={{ scale: 1.08, borderColor: "var(--color-accent)", cursor: "grab" }}
                  whileTap={{ scale: 0.95, cursor: "grabbing" }}
                  className="px-3.5 py-2 rounded-full bg-[#181C22] border border-[#303746] text-xs font-medium text-gray-200 hover:text-white shadow-sm flex items-center gap-1.5 transition-colors select-none"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span>{chip.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 2: Data & Build Tools (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 bg-[#181C22] border border-[#2D3340] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[var(--color-accent)]/60 transition-all shadow-xl"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#101318] border border-[#2D3340] flex items-center justify-center text-[var(--color-accent)]">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Data &amp; Build Tools</h3>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Development environments, version control, and production deployment platforms.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {buildTools.map((tool) => (
                <div
                  key={tool.name}
                  className="p-3 rounded-xl bg-[#101318] border border-[#2D3340] hover:border-[var(--color-accent)]/40 transition-colors flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-base">{tool.icon}</span>
                    <span className="text-xs font-bold text-white">{tool.name}</span>
                  </div>
                  <span className="text-[11px] text-gray-400 line-clamp-1">{tool.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* My Domains & Services Section */}
        <div className="mt-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">My Focus Areas</h3>
            <p className="text-gray-400 text-sm">
              Delivering high-impact solutions across multiple engineering domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreServices.map((service, index) => {
              const IconComponent = service.icon === "Layout" ? Globe : service.icon === "Brain" ? Brain : Database;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#181C22] border border-[#2D3340] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all duration-300 shadow-lg group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#101318] border border-[#2D3340] group-hover:border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] mb-5 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider block mb-2">
                      {service.badge}
                    </span>
                    <h4 className="text-lg font-bold text-white group-hover:text-[var(--color-accent)] transition-colors mb-3">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
