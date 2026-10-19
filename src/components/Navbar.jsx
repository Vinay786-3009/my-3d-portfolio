import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../hooks/useTheme';
import { Menu, X, FileText, Palette, Check } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, changeTheme, themes } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'experience', 'projects', 'certifications', 'contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#12151B]/90 backdrop-blur-md border-b border-[#2A313E] shadow-xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Bangalore Vinay Portfolio"
          >
            <div className="w-10 h-10 rounded-full bg-[#181C22] border-2 border-[var(--color-accent)] flex items-center justify-center font-bold text-sm text-[var(--color-accent)] shadow-sm group-hover:scale-105 group-hover:border-white transition-all">
              {personalInfo.monogram}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-wide text-white group-hover:text-[var(--color-accent)] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-gray-400">
                {personalInfo.roleBadge}
              </span>
            </div>
          </a>

          {/* Desktop Floating Pill Navigation */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#181C22] border border-[#2A313E] shadow-lg">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[var(--color-accent)] text-black shadow-md'
                      : 'text-gray-300 hover:text-[var(--color-accent)] hover:bg-[#222733]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Switcher & Resume CTA */}
          <div className="hidden lg:flex items-center gap-3 relative">
            
            {/* Color Palette Switcher Trigger */}
            <div className="relative">
              <button
                onClick={() => setPaletteOpen(!paletteOpen)}
                className="p-2 rounded-full bg-[#181C22] border border-[#2A313E] hover:border-[var(--color-accent)] text-gray-300 hover:text-[var(--color-accent)] transition-all cursor-pointer flex items-center gap-1.5 text-xs font-medium"
                title="Change Portfolio Color Theme"
              >
                <Palette className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="capitalize">{theme}</span>
              </button>

              {/* Theme Dropdown Palette */}
              {paletteOpen && (
                <div className="absolute right-0 mt-2 w-56 p-2 rounded-2xl bg-[#14171E] border border-[var(--color-accent)]/50 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="text-[10px] font-mono text-gray-400 px-2 py-1 uppercase tracking-wider">
                    Select Accent Palette
                  </div>
                  <div className="space-y-1">
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          changeTheme(t.id);
                          setPaletteOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          theme === t.id
                            ? 'bg-[#222834] text-white border border-[var(--color-accent)]/40'
                            : 'text-gray-300 hover:bg-[#1C212B]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            style={{ backgroundColor: t.primary }}
                            className="w-3.5 h-3.5 rounded-full border border-white/20"
                          />
                          <span>{t.name}</span>
                        </div>
                        {theme === t.id && <Check className="w-3.5 h-3.5 text-[var(--color-accent)]" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--color-accent)] text-xs font-bold text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Switcher */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => {
                const nextTheme = theme === 'emerald' ? 'violet' : theme === 'violet' ? 'cyan' : theme === 'cyan' ? 'amber' : 'emerald';
                changeTheme(nextTheme);
              }}
              className="p-2 rounded-full bg-[#181C22] border border-[#2A313E] text-[var(--color-accent)]"
              title="Switch Theme"
            >
              <Palette className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#181C22] border border-[#2A313E] text-gray-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101318] border-b border-[#2A313E] px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-[var(--color-accent)] text-black'
                    : 'text-gray-300 hover:text-[var(--color-accent)] hover:bg-[#181C22]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-[#2A313E] mt-2 flex flex-col gap-2">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-[var(--color-accent)] text-black font-bold text-xs"
              >
                Download Resume PDF
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
