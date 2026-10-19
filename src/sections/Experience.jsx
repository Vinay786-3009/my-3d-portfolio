import React from 'react';
import { motion } from 'framer-motion';
import { experienceTimeline, educationHistory } from '../data/portfolioData';
import { Briefcase, GraduationCap, MapPin, Sparkles, CheckCircle2, FileText } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[var(--color-bg-base)] border-t border-[#252A34]">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181C22] border border-[#2D3340] text-xs font-semibold text-[var(--color-accent)] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>JOURNEY &amp; MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Experience &amp; <span className="text-[var(--color-accent)]">Education</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-normal">
            My academic foundation and hands-on professional internship experience.
          </p>
        </div>

        {/* 2-Column Split: Experience (Left) & Education (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Internships & Work Experience (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2A313E]">
              <div className="w-10 h-10 rounded-xl bg-[#181C22] border border-[#2D3340] flex items-center justify-center text-[var(--color-accent)]">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Work Experience</h3>
                <span className="text-xs text-gray-400">Practical software &amp; machine learning roles</span>
              </div>
            </div>

            <div className="space-y-6">
              {experienceTimeline.map((item, idx) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#181C22] border border-[#2D3340] rounded-2xl p-6 sm:p-7 hover:border-[var(--color-accent)] transition-all duration-300 shadow-xl group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#101318] border border-[#2D3340] text-xs font-semibold text-[var(--color-accent)]">
                      {item.type}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      {item.location}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors mt-2">
                    {item.role}
                  </h4>

                  <div className="text-sm font-semibold text-[var(--color-accent)] mb-3">
                    {item.company}
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Contributions */}
                  <div className="space-y-2 mb-5">
                    {item.contributions.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills badges & Verified Certificate */}
                  <div className="pt-4 border-t border-[#252A34] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-[#101318] border border-[#2D3340] text-[11px] text-gray-300 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {item.certificateAvailable && item.pdfUrl && (
                      <a
                        href={item.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#101318] border border-[var(--color-accent)] text-xs text-[var(--color-accent)] font-semibold hover:bg-[var(--color-accent)] hover:text-black transition-colors shadow-sm"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Certificate PDF</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Academic Education (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2A313E]">
              <div className="w-10 h-10 rounded-xl bg-[#181C22] border border-[#2D3340] flex items-center justify-center text-[var(--color-accent)]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">Academic Journey</h3>
                <span className="text-xs text-gray-400">Formal engineering degrees &amp; schooling</span>
              </div>
            </div>

            <div className="space-y-6">
              {educationHistory.map((item, idx) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#181C22] border border-[#2D3340] rounded-2xl p-6 sm:p-7 hover:border-[var(--color-accent)] transition-all duration-300 shadow-xl group"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#101318] border border-[#2D3340] text-xs font-semibold text-[var(--color-accent)]">
                      {item.badge}
                    </span>
                    <span className="text-xs font-semibold text-gray-300">
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors mt-2">
                    {item.degree}
                  </h4>

                  <div className="text-sm font-medium text-gray-300 mt-1 mb-2">
                    {item.institution}
                  </div>

                  <div className="inline-block px-3 py-1 rounded-md bg-[#101318] border border-[#2D3340] text-xs font-bold text-[var(--color-accent)] mb-3">
                    {item.score}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
