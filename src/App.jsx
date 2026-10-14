import React from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Approach from './sections/Approach';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300 relative">
      {/* Precision Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Glassmorphism Navigation */}
      <Navbar />

      {/* Structured Content Sections: About directly after Hero */}
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Approach />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
