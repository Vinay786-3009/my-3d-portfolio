import React from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import VoiceAssistant from './components/VoiceAssistant';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import ResumeBanner from './sections/ResumeBanner';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] text-[#D1D5DB] flex flex-col relative transition-colors duration-400">
      {/* Precision Desktop Custom Cursor with Dynamic Theme Halo */}
      <CustomCursor />

      {/* Interactive AI Voice Assistant */}
      <VoiceAssistant />

      {/* Floating Pill Navigation with Theme Palette Switcher */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <ResumeBanner />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
