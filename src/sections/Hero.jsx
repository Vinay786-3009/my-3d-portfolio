import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, FileText, ChevronDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../components/Icons';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-[var(--color-bg-base)]">
      {/* Ambient background light */}
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] ambient-accent-glow blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Viewport Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction & Identity (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left z-20"
          >
            {/* Greeting */}
            <div className="text-lg md:text-xl font-medium text-gray-300 mb-2">
              Hi, My Name Is
            </div>

            {/* Oversized Signature Name with Dynamic Accent */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-[var(--color-accent)] leading-tight tracking-tight mb-4">
              {personalInfo.name}
            </h1>

            {/* Role Capsule Badge */}
            <div className="inline-block px-5 py-2 border border-[#2D3340] rounded-full text-gray-300 text-xs sm:text-sm font-medium mb-6 bg-[#181C22]/80">
              {personalInfo.title}
            </div>

            {/* Headline Subtitle */}
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mb-4 font-normal">
              {personalInfo.subheadline}
            </p>

            {/* "Learn More About Me" Accent Underline Link */}
            <div className="pt-1 mb-8">
              <a
                href="#about"
                className="text-white underline underline-offset-8 decoration-[var(--color-accent)] decoration-2 hover:text-[var(--color-accent)] transition-colors font-medium text-sm sm:text-base inline-flex items-center gap-1.5 group"
              >
                <span>Learn More About Me</span>
                <ArrowRight className="w-4 h-4 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Action Buttons & Quick Links */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-accent)] text-black font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-[var(--color-accent)]/20 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black font-bold text-sm transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Resume PDF</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#181C22] border border-[#2D3340] hover:border-[var(--color-accent)] text-white font-semibold text-sm transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[var(--color-accent)]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl pt-6 border-t border-[#252A34]">
              <div className="p-3.5 rounded-xl bg-[#181C22] border border-[#2D3340] text-left hover:border-[var(--color-accent)]/50 transition-colors">
                <div className="text-xl font-bold text-white">Full-Stack</div>
                <div className="text-[11px] text-gray-400">React &amp; Modern JS</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#181C22] border border-[#2D3340] text-left hover:border-[var(--color-accent)]/50 transition-colors">
                <div className="text-xl font-bold text-[var(--color-accent)]">4+ Core</div>
                <div className="text-[11px] text-gray-400">Software Projects</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#181C22] border border-[#2D3340] text-left hover:border-[var(--color-accent)]/50 transition-colors">
                <div className="text-xl font-bold text-[var(--color-accent)]">86% Elite</div>
                <div className="text-[11px] text-gray-400">NPTEL IIOT Dist.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#181C22] border border-[#2D3340] text-left hover:border-[var(--color-accent)]/50 transition-colors">
                <div className="text-xl font-bold text-white">DSA &amp; ML</div>
                <div className="text-[11px] text-gray-400">Python &amp; Java</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Signature Circular Portrait Avatar with Dynamic Accent Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center z-10"
          >
            {/* Circular Portrait with Dynamic Accent Glow Border */}
            <div className="relative group">
              {/* Outer decorative ambient glow ring */}
              <div className="absolute -inset-2 rounded-full bg-[var(--color-accent)]/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Main Avatar Circle */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-[#181C22] border-4 border-[var(--color-accent)] glow-border overflow-hidden flex items-center justify-center shadow-2xl">
                <img
                  src={personalInfo.portraitUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = `<span class="text-6xl font-bold text-[var(--color-accent)] tracking-wider">${personalInfo.monogram}</span>`;
                  }}
                />
              </div>

              {/* Floating Verified Student & Developer Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full bg-[#12151B] border border-[var(--color-accent)] text-xs font-semibold text-[var(--color-accent)] shadow-xl flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <span>B.Tech AIDS @ JNTUA</span>
              </div>
            </div>

            {/* Social Connection Handles under Profile */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#181C22] border border-[#2D3340] hover:border-[var(--color-accent)] text-gray-300 hover:text-[var(--color-accent)] flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1"
                aria-label="GitHub Profile"
                title="GitHub: Vinay786-3009"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#181C22] border border-[#2D3340] hover:border-[var(--color-accent)] text-gray-300 hover:text-[var(--color-accent)] flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#181C22] border border-[#2D3340] hover:border-[var(--color-accent)] text-gray-300 hover:text-[var(--color-accent)] flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1"
                aria-label="LeetCode Profile"
                title="LeetCode: B_vinay786"
              >
                <LeetcodeIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.links.emailMailto}
                className="w-11 h-11 rounded-full bg-[#181C22] border border-[#2D3340] hover:border-[var(--color-accent)] text-gray-300 hover:text-[var(--color-accent)] flex items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1"
                aria-label="Email Vinay"
                title="Email: vinay76b@gmail.com"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-[var(--color-accent)] transition-colors z-20 text-xs"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] tracking-widest uppercase text-gray-400">Discover More</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[var(--color-accent)]" />
      </a>
    </section>
  );
}
