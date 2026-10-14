import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
import { Terminal, Layout, Cpu, Database, Wrench, Sparkles, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

export default function Skills() {
  const [selectedDomain, setSelectedDomain] = useState('programming');

  // Remap into the 5 core domains requested in art direction + specialized exposure
  const domains = [
    {
      id: 'programming',
      name: 'Programming',
      icon: <Terminal className="w-4 h-4" />,
      tagline: 'Algorithmic problem-solving and structured object-oriented foundations',
      skills: [
        { name: 'Java', role: 'Data Structures & Algorithms', context: 'LeetCode Problem Solving', verified: true },
        { name: 'Python', role: 'Machine Learning & Data Pipelines', context: 'Scikit-learn & Jupyter', verified: true },
        { name: 'JavaScript', role: 'Modern ES6+ Syntax & Asynchronous Flow', context: 'React Application Logic', verified: true },
        { name: 'SQL', role: 'Relational Database Queries & Filtering', context: 'Data Analysis & Extraction', verified: true }
      ]
    },
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: <Layout className="w-4 h-4" />,
      tagline: 'Component architecture, reactive state management, and modern design systems',
      skills: [
        { name: 'React.js', role: 'Custom Hooks, Props & Virtual DOM Architecture', context: 'Smart Campus & E-Commerce', verified: true },
        { name: 'Tailwind CSS', role: 'Utility-First Tokens & Glassmorphic UI Systems', context: 'Custom Styled Layouts', verified: true },
        { name: 'HTML5', role: 'Semantic Structure & Accessibility Best Practices', context: 'Standards-Compliant Markup', verified: true },
        { name: 'CSS3', role: 'Modern CSS Grid, Flexbox, Micro-Animations', context: 'Fluid Responsive Behavior', verified: true },
        { name: 'Responsive UI', role: 'Adaptive Mobile-First Cross-Viewport Rendering', context: '360px to 4K Displays', verified: true }
      ]
    },
    {
      id: 'ai-ml',
      name: 'Data Science & Machine Learning',
      icon: <Cpu className="w-4 h-4" />,
      tagline: 'Predictive modeling, exploratory analysis, and numerical computing pipelines',
      skills: [
        { name: 'Scikit-learn', role: 'Supervised Learning (Classification & Regression)', context: 'Student Prediction System', verified: true },
        { name: 'Pandas', role: 'Data Cleaning, Null Handling & Transformations', context: 'Accident Hotspot Analyzer', verified: true },
        { name: 'NumPy', role: 'High-Performance Numerical Array Computing', context: 'Feature Vectorization', verified: true },
        { name: 'Exploratory Data Analysis', role: 'Correlation Discovery & Distribution Plotting', context: 'CodeAlpha ML Internship', verified: true },
        { name: 'Data Preprocessing', role: 'Feature Scaling, Normalization & Categorical Encoding', context: 'Model Pipeline Prep', verified: true }
      ]
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: <Database className="w-4 h-4" />,
      tagline: 'Structured and document-oriented persistent storage solutions',
      skills: [
        { name: 'MySQL', role: 'Relational Tables, Foreign Keys & Normalized Schemas', context: 'Coursework & Projects', verified: true },
        { name: 'MongoDB', role: 'NoSQL Document Collections & JSON Documents', context: 'Web Development', verified: true },
        { name: 'Firebase', role: 'Realtime Backend-as-a-Service & Authentication', context: 'Cloud Data Storage', verified: true }
      ]
    },
    {
      id: 'tools',
      name: 'Development Tools',
      icon: <Wrench className="w-4 h-4" />,
      tagline: 'Version control, developer environments, and deployment pipelines',
      skills: [
        { name: 'Git', role: 'Branching, Commit Hygiene & Merge Workflows', context: 'Daily Version Control', verified: true },
        { name: 'GitHub', role: 'Open Source Repositories & Collaboration', context: '40+ Repositories Managed', verified: true },
        { name: 'VS Code', role: 'Primary Development Environment & Debugger', context: 'Daily Coding Workflow', verified: true },
        { name: 'Jupyter Notebook', role: 'Interactive Exploratory Data Science & Prototyping', context: 'Data Analysis Notebooks', verified: true },
        { name: 'Vercel', role: 'Continuous Integration & Single-Page Application Hosting', context: 'Production Deployments', verified: true },
        { name: 'XAMPP', role: 'Local Apache & MySQL Server Stack Testing', context: 'Local Environment', verified: true }
      ]
    }
  ];

  const currentDomain = domains.find(d => d.id === selectedDomain) || domains[0];

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#030712] border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INDEX: 03 // TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Art-Directed <span className="text-gradient-cyan">Technical Landscape</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Curated skills verified through university coursework, practical open-source code, and machine learning internships.
          </p>
        </div>

        {/* Interactive Domain Navigation & Detailed Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Domain Selector Menu (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-3 mb-3">
              SELECT CORE DOMAIN
            </div>

            {domains.map((domain) => {
              const isSelected = domain.id === selectedDomain;
              return (
                <button
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)] text-white'
                      : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl transition-colors ${
                      isSelected ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'bg-slate-900 text-slate-400'
                    }`}>
                      {domain.icon}
                    </div>
                    <div>
                      <div className="text-sm font-display font-bold">
                        {domain.name}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {domain.skills.length} verified technologies
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-cyan-400 translate-x-0.5' : 'text-slate-400'
                  }`} />
                </button>
              );
            })}

            {/* Specialized Exposure Card */}
            <div className="mt-6 p-4 rounded-2xl glass-panel border border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <Activity className="w-3.5 h-3.5" />
                <span>APPLIED CERTIFICATIONS</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                AWS Data Engineering, AWS Generative AI, Google AI-ML, and Arduino Embedded Systems verified through EduSkills and NPTEL.
              </p>
            </div>
          </div>

          {/* Right Column: Active Domain Landscape (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDomain.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800/90 shadow-2xl relative"
              >
                {/* Domain Header */}
                <div className="border-b border-slate-800/80 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                      {currentDomain.icon}
                      <span className="uppercase">{currentDomain.name}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white">
                      Technical Capabilities &amp; Application
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      {currentDomain.tagline}
                    </p>
                  </div>

                  <div className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-cyan-300 self-start sm:self-auto">
                    ACTIVE MATRIX
                  </div>
                </div>

                {/* Skills Landscape Nodes */}
                <div className="space-y-4">
                  {currentDomain.skills.map((skill, sIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: sIdx * 0.05 }}
                      className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/70 hover:border-cyan-500/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                    >
                      <div className="flex items-start sm:items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center font-mono text-xs font-bold text-cyan-400 group-hover:border-cyan-500/40 transition-colors shrink-0">
                          {sIdx + 1}
                        </div>
                        <div>
                          <div className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </div>
                          <div className="text-xs text-slate-300">
                            {skill.role}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-auto">
                        <div className="text-right">
                          <span className="text-[11px] font-mono text-slate-400 block">
                            {skill.context}
                          </span>
                          <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 justify-end">
                            <CheckCircle2 className="w-3 h-3" />
                            <span>VERIFIED</span>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Recruiter Note */}
                <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span>Based on actual deliverables &amp; coursework</span>
                  <span className="font-mono text-cyan-400/80">No exaggerated percentages</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
