import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredProjects } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import ProjectVisualizer from '../components/ProjectVisualizer';
import { Sparkles, ArrowRight, Eye } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardTransform, setCardTransform] = useState({});

  const categories = ['All', 'Web Application', 'Machine Learning', 'Data Science', 'Embedded Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === selectedCategory);

  const handleMouseMove = (e, projectId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setHoveredCard(projectId);
    setCardTransform(prev => ({
      ...prev,
      [projectId]: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    }));
  };

  const handleMouseLeave = (projectId) => {
    setHoveredCard(null);
    setCardTransform(prev => ({
      ...prev,
      [projectId]: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    }));
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0D0F12] border-t border-[#252A34]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181C22] border border-[#2D3340] text-xs font-semibold text-[var(--color-accent)] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="text-[var(--color-accent)]">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-normal">
            Practical software applications, data analytics pipelines, and interactive engineering demonstrations.
          </p>
        </div>

        {/* =========================================================================
            LIVE PROJECT VISUALIZATION LAB (Interactive Visualizers Showcase)
           ========================================================================= */}
        <ProjectVisualizer />

        {/* Filter Tabs Title */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pt-4 border-t border-[#252A34]">
          <div>
            <h3 className="text-xl font-bold text-white">Full Project Repositories</h3>
            <p className="text-xs text-gray-400">Filter verified source repositories by engineering domain</p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[var(--color-accent)] text-black shadow-lg shadow-[var(--color-accent)]/20'
                    : 'bg-[#181C22] border border-[#2D3340] text-gray-300 hover:text-white hover:border-[var(--color-accent)]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with 3D Spotlight Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const transform = cardTransform[project.id] || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onMouseMove={(e) => handleMouseMove(e, project.id)}
                  onMouseLeave={() => handleMouseLeave(project.id)}
                  style={{
                    transform,
                    transition: hoveredCard === project.id ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out, box-shadow 0.5s ease'
                  }}
                  className="spotlight-card bg-[#181C22] border border-[#2D3340] rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer shadow-xl h-full"
                >
                  <div>
                    {/* Project Image Viewport */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#101318]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#181C22] via-[#181C22]/40 to-transparent" />
                      
                      {/* Category Badge on top of image */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-[#101217]/90 border border-[#2D3340] text-[11px] font-semibold text-[var(--color-accent)] shadow-md backdrop-blur-md">
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors mb-2.5 flex items-center justify-between"
                      >
                        <span>{project.title}</span>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all" />
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-400 line-clamp-3 leading-relaxed mb-4">
                        {project.summary}
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md bg-[#101318] border border-[#2D3340] text-[11px] text-gray-300 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md bg-[#101318] border border-[#2D3340] text-[11px] text-[var(--color-accent)] font-mono">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="px-6 pb-6 pt-2 border-t border-[#252A34] flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 rounded-xl bg-[#101318] border border-[#2D3340] hover:border-[var(--color-accent)] text-xs font-semibold text-gray-300 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span>Details</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-4 rounded-xl bg-[var(--color-accent)] text-black hover:opacity-90 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Global GitHub CTA Banner */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Vinay786-3009"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#181C22] border border-[#2D3340] hover:border-[var(--color-accent)] text-sm font-semibold text-gray-200 hover:text-white transition-all shadow-xl group"
          >
            <GithubIcon className="w-4 h-4 text-[var(--color-accent)]" />
            <span>View All 40+ Repositories on GitHub</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all" />
          </a>
        </div>

      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
