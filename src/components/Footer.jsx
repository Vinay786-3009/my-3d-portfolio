import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-[#0A0C10] border-t border-[#1C2028] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#1C2028]">
          
          {/* Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#181C22] border-2 border-[var(--color-accent)] flex items-center justify-center font-bold text-sm text-[var(--color-accent)] shadow-md">
              {personalInfo.monogram}
            </div>
            <div>
              <div className="font-bold text-base text-white">
                {personalInfo.name}
              </div>
              <div className="text-xs text-gray-400">
                {personalInfo.roleBadge}
              </div>
            </div>
          </div>

          {/* Navigation Links in Footer */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-gray-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Quick social links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#181C22] hover:bg-[#252A34] border border-[#2D3340] hover:border-[var(--color-accent)] text-gray-300 hover:text-[var(--color-accent)] flex items-center justify-center transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#181C22] hover:bg-[#252A34] border border-[#2D3340] hover:border-[var(--color-accent)] text-gray-300 hover:text-[var(--color-accent)] flex items-center justify-center transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#181C22] hover:bg-[#252A34] border border-[#2D3340] hover:border-[var(--color-accent)] text-gray-300 hover:text-[var(--color-accent)] flex items-center justify-center transition-all"
              aria-label="LeetCode Profile"
            >
              <LeetcodeIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#181C22] hover:bg-[var(--color-accent)] border border-[#2D3340] hover:border-[var(--color-accent)] text-gray-300 hover:text-black flex items-center justify-center transition-all cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <div>
            &copy; {new Date().getFullYear()} Bangalore Vinay. Designed with craftsmanship &amp; precision.
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Built with React, Tailwind CSS, Web Speech AI &amp; Data Science</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
