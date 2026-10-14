import React from 'react';
import { motion } from 'framer-motion';
import { experienceTimeline } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-[#030712] border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20 border-b border-slate-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INDEX: 04 // APPLIED WORK &amp; INTERNSHIPS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Professional <span className="text-gradient-cyan">Work Experience</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-slate-400">
            2 VERIFIED INTERNSHIPS // ML &amp; SOFTWARE
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500/50 via-sky-500/20 to-transparent" />

          <div className="space-y-12">
            {experienceTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] z-10 shrink-0 mt-1">
                    <Briefcase className="w-4 h-4" />
                  </div>

                  {/* Card Container */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="p-7 rounded-3xl glass-panel border border-slate-800/90 hover:border-cyan-500/40 transition-all shadow-xl hover:shadow-cyan-950/20">
                      
                      {/* Role & Company Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-[11px] font-mono text-cyan-300">
                          {item.type}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {item.location}
                        </span>
                      </div>

                      <h3 className="text-xl font-display font-bold text-white">
                        {item.role}
                      </h3>

                      <div className="text-sm font-semibold text-cyan-400 mb-3">
                        {item.company}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                        {item.description}
                      </p>

                      {/* Key Deliverables */}
                      <div className="space-y-2.5 mb-5">
                        {item.contributions.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
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
