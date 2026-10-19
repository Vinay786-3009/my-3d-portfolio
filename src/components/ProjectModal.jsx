import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Code2, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-[#14171E] border border-[var(--color-accent)]/50 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#2C323D] bg-[#1C212B]">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#14171E] border border-[#2C323D] text-xs font-semibold text-[var(--color-accent)]">
                {project.category}
              </span>
              <span className="text-xs text-gray-400 font-medium">
                {project.badge}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full text-gray-400 hover:text-black hover:bg-[var(--color-accent)] transition-all flex items-center justify-center cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Title & Summary */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#1C212B] border border-[#2C323D]">
                <div className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  <span>The Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1C212B] border border-[#2C323D]">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>The Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Deliverables & Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
                  <span>Key Architectural Deliverables</span>
                </h4>
                <div className="space-y-2.5">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Stack */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[var(--color-accent)]" />
                <span>Technologies &amp; Libraries</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#1C212B] border border-[#2C323D] text-xs font-mono text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#2C323D] bg-[#1C212B]">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-accent)] text-black hover:opacity-90 font-bold text-xs transition-all shadow-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-[#2C323D] hover:border-[var(--color-accent)] text-xs font-semibold text-gray-300 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
