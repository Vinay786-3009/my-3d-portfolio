import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { FileText, Download, Eye, Sparkles, X, ExternalLink } from 'lucide-react';

export default function ResumeBanner() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section className="py-12 bg-[var(--color-bg-base)] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#181C22] to-[#12151B] border border-[var(--color-accent)]/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative group hover:border-[var(--color-accent)] transition-all"
        >
          {/* Left Text */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101318] border border-[#2D3340] text-xs font-semibold text-[var(--color-accent)] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL CURRICULUM VITAE</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
              My Resume
            </h3>
            <p className="text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed">
              Detailed overview of my academic foundation, software engineering projects, internships, and verified certifications.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="px-6 py-3.5 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] font-bold text-sm hover:bg-[var(--color-accent)] hover:text-black transition-all flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Eye className="w-4 h-4" />
              <span>Preview CV</span>
            </button>

            <a
              href={personalInfo.resumeUrl}
              download="Bangalore_Vinay_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-[var(--color-accent)] text-black font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-[var(--color-accent)]/20 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Full Resume Preview Modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#14171E] border border-[var(--color-accent)] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#2C323D] bg-[#1C212B]">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[var(--color-accent)]" />
                  <span className="font-bold text-white text-base">Bangalore Vinay — Curriculum Vitae</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#14171E] transition-colors"
                    title="Open in new window"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="w-8 h-8 rounded-full text-gray-400 hover:text-black hover:bg-[var(--color-accent)] transition-all flex items-center justify-center cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Embedded PDF */}
              <div className="w-full h-[70vh] bg-[#0A0C10]">
                <iframe
                  src={`${personalInfo.resumeUrl}#toolbar=1&navpanes=0`}
                  title="Bangalore Vinay Resume"
                  className="w-full h-full border-none"
                />
              </div>

              {/* Footer Bar */}
              <div className="flex items-center justify-between px-6 py-3.5 border-t border-[#2C323D] bg-[#1C212B]">
                <a
                  href={personalInfo.resumeUrl}
                  download="Bangalore_Vinay_Resume.pdf"
                  className="px-5 py-2 rounded-full bg-[var(--color-accent)] text-black font-bold text-xs hover:opacity-90 transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </a>

                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="px-4 py-2 rounded-full border border-[#2C323D] hover:border-[var(--color-accent)] text-xs font-semibold text-gray-300 hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
