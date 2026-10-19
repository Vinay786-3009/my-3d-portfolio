import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Sparkles, MapPin, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '../components/Icons';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00F5D4', '#ffffff', '#10B981']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formName || 'Recruiter/Peer'}`);
    const body = encodeURIComponent(
      `Hello Vinay,\n\n${formMessage}\n\nSender: ${formName} (${formEmail})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00F5D4', '#10B981', '#ffffff']
    });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[var(--color-bg-base)] border-t border-[#252A34]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181C22] border border-[#2D3340] text-xs font-semibold text-[var(--color-accent)] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Get In <span className="text-[var(--color-accent)]">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-normal">
            Whether you have an internship opportunity, project collaboration, or just want to say hi.
          </p>
        </div>

        {/* Split Card Layout */}
        <div className="max-w-5xl mx-auto bg-[#181C22] border border-[#2D3340] rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-2xl">
          
          {/* Left Column: Contact Info & Social Handles */}
          <div className="flex-1 p-8 sm:p-12 md:p-14 border-b md:border-b-0 md:border-r border-[#2D3340] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
              
              <div className="space-y-5 mb-10">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#101318] border border-[#2D3340]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#181C22] border border-[#2D3340] flex items-center justify-center text-[var(--color-accent)]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] text-gray-500 block uppercase font-mono">Email</span>
                      <a
                        href={personalInfo.links.emailMailto}
                        className="text-xs sm:text-sm font-semibold text-gray-200 hover:text-[var(--color-accent)] transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#181C22] hover:bg-[#252B38] text-gray-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#101318] border border-[#2D3340]">
                  <div className="w-9 h-9 rounded-lg bg-[#181C22] border border-[#2D3340] flex items-center justify-center text-[var(--color-accent)]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-500 block uppercase font-mono">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* Status Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#101318] border border-[#2D3340]">
                  <div className="w-9 h-9 rounded-lg bg-[#181C22] border border-[#2D3340] flex items-center justify-center text-[var(--color-accent)]">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-500 block uppercase font-mono">Availability</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-200">
                      {personalInfo.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Handles */}
              <h3 className="text-xl font-bold text-white mb-4">Social Handles</h3>
              <div className="space-y-3">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#101318] border border-[#2D3340] hover:border-[var(--color-accent)] text-gray-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-xs sm:text-sm font-semibold">GitHub</span>
                  </div>
                  <span className="text-xs text-gray-500 group-hover:text-[var(--color-accent)] font-mono">Vinay786-3009</span>
                </a>

                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#101318] border border-[#2D3340] hover:border-[var(--color-accent)] text-gray-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-xs sm:text-sm font-semibold">LinkedIn</span>
                  </div>
                  <span className="text-xs text-gray-500 group-hover:text-[var(--color-accent)] font-mono">bangalore-vinay</span>
                </a>

                <a
                  href={personalInfo.links.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#101318] border border-[#2D3340] hover:border-[var(--color-accent)] text-gray-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LeetcodeIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-xs sm:text-sm font-semibold">LeetCode</span>
                  </div>
                  <span className="text-xs text-gray-500 group-hover:text-[var(--color-accent)] font-mono">B_vinay786</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="flex-1 p-8 sm:p-12 md:p-14 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Fill in the form below to initiate direct communication.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase font-mono">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Alex Johnson"
                    className="w-full bg-[#101318] border border-[#2D3340] rounded-xl p-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase font-mono">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full bg-[#101318] border border-[#2D3340] rounded-xl p-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase font-mono">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Tell me about your team, role, or project..."
                    className="w-full bg-[#101318] border border-[#2D3340] rounded-xl p-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-8 rounded-full bg-[var(--color-accent)] text-black font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-accent)]/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitted ? 'Message Ready!' : 'Send Message'}</span>
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
