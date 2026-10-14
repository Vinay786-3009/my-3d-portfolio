import React from 'react';
import { motion } from 'framer-motion';
import { educationHistory, certifications, achievements } from '../data/portfolioData';
import { GraduationCap, Award, Trophy, Code2, Sparkles, CheckCircle2, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden bg-[#030712] border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20 border-b border-slate-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INDEX: 05 // CREDENTIALS &amp; DISTINCTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Education &amp; <span className="text-gradient-cyan">Certifications</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-slate-400">
            NPTEL ELITE 86% // EDUSKILLS COHORTS
          </div>
        </div>

        {/* 2-Column Split: Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Education (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <h3 className="font-display font-bold text-xl text-white">
                Academic Degrees &amp; Foundation
              </h3>
            </div>

            <div className="space-y-4">
              {educationHistory.map((item, idx) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-3xl glass-panel border border-slate-800/90 hover:border-slate-700/80 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400 font-medium">
                      {item.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-400">
                      Score: {item.score}
                    </span>
                  </div>

                  <h4 className="text-lg font-display font-bold text-white">
                    {item.degree}
                  </h4>

                  <div className="text-xs sm:text-sm text-slate-300 mt-1">
                    {item.institution}
                  </div>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {item.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Learning (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <Award className="w-5 h-5 text-sky-400" />
              <h3 className="font-display font-bold text-xl text-white">
                Recognized Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl glass-panel border border-slate-800/90 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                      <span>{cert.issuer}</span>
                      <span className="text-cyan-400">{cert.category}</span>
                    </div>

                    <h4 className="text-sm font-semibold text-white">
                      {cert.title}
                    </h4>

                    <div className="text-xs font-medium text-emerald-400 mt-1">
                      {cert.credential}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{cert.highlight}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Achievements Row */}
        <div className="mt-20 pt-12 border-t border-slate-900">
          <div className="flex items-center gap-2.5 mb-8 justify-center">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="font-display font-bold text-xl text-white">
              Notable Achievements &amp; Coding Practice
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 rounded-3xl glass-panel border border-slate-800/90 hover:border-amber-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                  {idx === 0 ? (
                    <Trophy className="w-5 h-5" />
                  ) : idx === 1 ? (
                    <Code2 className="w-5 h-5" />
                  ) : (
                    <BookOpen className="w-5 h-5" />
                  )}
                </div>

                <h4 className="text-base font-display font-bold text-white mb-2">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
