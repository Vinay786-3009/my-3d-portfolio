import React from 'react';
import { motion } from 'framer-motion';
import { problemSolvingPhilosophy } from '../data/portfolioData';
import { Sparkles, Target, Cpu, CheckSquare, RefreshCw, Compass } from 'lucide-react';

export default function Approach() {
  const icons = [
    <Target className="w-5 h-5 text-cyan-400" />,
    <Cpu className="w-5 h-5 text-sky-400" />,
    <CheckSquare className="w-5 h-5 text-indigo-400" />,
    <RefreshCw className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-[#030712] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20 border-b border-slate-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INDEX: 06 // PROBLEM-SOLVING METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Engineering <span className="text-gradient-cyan">Mindset</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-slate-400">
            FIRST PRINCIPLES // REPEATABLE PROTOCOL
          </div>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemSolvingPhilosophy.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-7 rounded-3xl glass-panel border border-slate-800/90 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {icons[idx]}
                  </div>
                  <span className="text-3xl font-display font-extrabold text-slate-400">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/60 text-[10px] font-mono text-cyan-400/80">
                Phase {idx + 1} of 4
              </div>
            </motion.div>
          ))}
        </div>

        {/* Career Focus Statement Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-r from-cyan-950/20 via-slate-900/70 to-indigo-950/20 max-w-5xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Compass className="w-4 h-4" />
                <span>CAREER OBJECTIVE // 2026-2027 TRAJECTORY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Preparing for Full-Stack &amp; Software Engineering Opportunities
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Ready to contribute clean algorithmic code, modern React frontends, and data science workflows to engineering teams building scalable, real-world products.
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
            >
              Get in Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
