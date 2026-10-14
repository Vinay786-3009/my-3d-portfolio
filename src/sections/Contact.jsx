import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, FileText, Send, Sparkles, ExternalLink, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../components/Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#06b6d4', '#6366f1']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDirectMailto = (e) => {
    e.preventDefault();
    const subjectEncoded = encodeURIComponent(
      formSubject || `Engineering Opportunity / Inquiry for ${personalInfo.name}`
    );
    const bodyEncoded = encodeURIComponent(
      `Hi Vinay,\n\n${formMessage || 'I reviewed your portfolio and would like to discuss software engineering opportunities with you.'}\n\nBest regards,\n${formName || 'Hiring Team / Recruiter'}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#030712] border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20 border-b border-slate-900 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INDEX: 07 // DIRECT COMMUNICATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Ready to contribute to <span className="text-gradient-cyan">your engineering team.</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-slate-400">
            RESPONSE TIME &lt; 24H // OPEN TO RELOCATION
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Communication & Profile Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card with Copy button */}
            <div className="p-7 rounded-3xl glass-panel border border-slate-800/90 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400">
                  <Mail className="w-4 h-4" />
                  <span>DIRECT EMAIL ACCESS</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={personalInfo.links.emailMailto}
                className="text-lg sm:text-xl font-display font-bold text-white hover:text-cyan-300 transition-colors block break-all"
              >
                {personalInfo.email}
              </a>

              <p className="text-xs text-slate-400 mt-2">
                Click to open your default email app, or copy directly to your clipboard.
              </p>
            </div>

            {/* Official Coding & Social Profiles */}
            <div className="p-7 rounded-3xl glass-panel border border-slate-800/90 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Verified Developer Profiles
              </div>

              {/* GitHub */}
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/60 hover:border-slate-700 text-slate-300 hover:text-white transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-white">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      GitHub
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      github.com/Vinay786-3009
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/60 hover:border-slate-700 text-slate-300 hover:text-white transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-950/80 text-sky-400">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors">
                      LinkedIn
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      in/bangalore-vinay-4762512a6
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-400 transition-colors" />
              </a>

              {/* LeetCode */}
              <a
                href={personalInfo.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/60 hover:border-slate-700 text-slate-300 hover:text-white transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-950/80 text-amber-400">
                    <LeetcodeIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors">
                      LeetCode
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      leetcode.com/u/B_vinay786
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-colors" />
              </a>
            </div>

            {/* Resume Download CTA */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-cyan-950/30 to-slate-900/80 border border-cyan-500/30 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-mono text-cyan-400 font-medium">
                  OFFICIAL CURRICULUM VITAE
                </div>
                <div className="text-sm font-semibold text-white">
                  Download Verified Resume (PDF)
                </div>
                <div className="text-[11px] text-slate-400">
                  Comprehensive 2-page academic &amp; technical PDF
                </div>
              </div>

              <a
                href={personalInfo.resumeUrl}
                download="Bangalore_Vinay_Resume.pdf"
                className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-md cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>

          </div>

          {/* Right Column: Pre-filled Mailto Quick Message Composer (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800/90 shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-white">
                  Compose Quick Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Draft your message below to immediately launch your default mail client with pre-filled recipient and subject line.
                </p>
              </div>

              <form onSubmit={handleDirectMailto} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                      YOUR NAME / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Talent Acquisition, TCS / Infosys"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      placeholder="e.g. Software Engineer Role Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    MESSAGE INQUIRY
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Describe your internship opportunity, engineering role, or technical interview inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Based in Palamaner, AP • Willing to relocate</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Launch Email Client</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
