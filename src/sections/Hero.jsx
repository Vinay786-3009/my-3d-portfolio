import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import Scene3D from '../three/Scene3D';
import { ArrowRight, FileText, ChevronDown, Sparkles, Compass } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../components/Icons';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(Math.min(currentScroll / totalScroll, 1));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[96vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-[#030712]">
      {/* Background Atmosphere & Gradient Fog */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[750px] h-[750px] bg-cyan-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Viewport Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Editorial Headline & Identity Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left z-20"
          >
            {/* Identity Capsule — Uncollided & Clean */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800/90 text-xs text-slate-300 mb-6 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-cyan-300 font-semibold tracking-wider">
                BANGALORE VINAY
              </span>
              <span className="text-slate-600 font-light">/</span>
              <span className="text-slate-400 font-mono text-[11px] tracking-wide">
                FULL-STACK &amp; SOFTWARE DEVELOPER
              </span>
            </div>

            {/* Oversized Punchy Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.06] mb-6">
              Engineering ideas into{' '}
              <span className="text-gradient-cyan block sm:inline">
                digital experiences.
              </span>
            </h1>

            {/* Verified Supporting Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              Exploring software development, responsive web applications, and data-driven solutions through practical projects. B.Tech Artificial Intelligence and Data Science student at Mother Theresa Institute of Engineering and Technology (JNTUA).
            </p>

            {/* Strategic CTAs & Verified Profiles */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Discover My Story</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/40 text-slate-200 font-medium text-sm transition-all shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Resume PDF</span>
              </a>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer"
                  aria-label="GitHub Profile"
                  title="GitHub: Vinay786-3009"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-sky-400 transition-all cursor-pointer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-amber-400 transition-all cursor-pointer"
                  aria-label="LeetCode Profile"
                  title="LeetCode: B_vinay786"
                >
                  <LeetcodeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Architecture Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl pt-6 border-t border-slate-800/80">
              <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-xl font-display font-bold text-white">Full-Stack</div>
                <div className="text-[11px] font-mono text-slate-400">React &amp; Modern JS</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-xl font-display font-bold text-cyan-400">4+ Core</div>
                <div className="text-[11px] font-mono text-slate-400">Software Projects</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-xl font-display font-bold text-sky-400">86% Elite</div>
                <div className="text-[11px] font-mono text-slate-400">NPTEL IIOT Dist.</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/60">
                <div className="text-xl font-display font-bold text-indigo-400">DSA &amp; ML</div>
                <div className="text-[11px] font-mono text-slate-400">Python &amp; Java</div>
              </div>
            </div>
          </motion.div>

          {/* Unboxed Immersive 3D Spatial Centerpiece (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] sm:min-h-[540px]"
          >
            {/* Seamless Spatial Volume with NO arbitrary dark box borders */}
            <div className="relative w-full h-[460px] sm:h-[560px] flex items-center justify-center">
              
              {/* Radial Cyan Glow Spotlight directly behind 3D object */}
              <div className="absolute w-72 h-72 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

              {/* The 3D Scene */}
              <Scene3D scrollProgress={scrollProgress} />

              {/* Minimalist Floating Telemetry Tag */}
              <div className="absolute bottom-2 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-400 backdrop-blur-md pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>INTERACTIVE 3D COMPUTATIONAL SCULPTURE</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Bottom Scroll Cue pointing to About */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors z-20 text-xs font-mono"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] tracking-widest uppercase text-slate-400">Scroll to Story</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </a>
    </section>
  );
}
