import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allCertificates, certificationCategories, achievementsHonors } from '../data/portfolioData';
import CertificateModal from '../components/CertificateModal';
import { 
  Sparkles, 
  Award, 
  FileText, 
  Trophy, 
  ShieldCheck, 
  Cloud, 
  Code, 
  ChevronRight,
  Medal,
  Eye,
  Image as ImageIcon
} from 'lucide-react';

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filteredCertificates = selectedCategory === 'all'
    ? allCertificates
    : allCertificates.filter(c => 
        c.category === selectedCategory || 
        (selectedCategory === 'internships' && c.isVirtualInternship)
      );

  const getCertificateIcon = (cert) => {
    if (cert.category === 'global') return <ShieldCheck className="w-6 h-6 text-[var(--color-accent)]" />;
    if (cert.category === 'eduskills') return <Cloud className="w-6 h-6 text-[var(--color-accent)]" />;
    if (cert.category === 'hackathons') return <Trophy className="w-6 h-6 text-[var(--color-accent)]" />;
    return <Award className="w-6 h-6 text-[var(--color-accent)]" />;
  };

  const getAchievementIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-6 h-6 text-[var(--color-accent)]" />;
      case 'Award': return <Award className="w-6 h-6 text-[var(--color-accent)]" />;
      case 'Medal': return <Medal className="w-6 h-6 text-[var(--color-accent)]" />;
      default: return <Code className="w-6 h-6 text-[var(--color-accent)]" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[var(--color-bg-base)] border-t border-[#252A34]">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[var(--color-accent)]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181C22] border border-[#2D3340] text-xs font-semibold text-[var(--color-accent)] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONTINUOUS LEARNING &amp; HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Certifications &amp; <span className="text-[var(--color-accent)]">Achievements</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-normal">
            A showcase of my continuous learning in Software Engineering, AI, Cloud Computing, and Competitive Problem Solving.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {certificationCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[var(--color-accent)] text-black shadow-lg shadow-[var(--color-accent)]/20'
                  : 'bg-[#181C22] border border-[#2D3340] text-gray-300 hover:text-white hover:border-[var(--color-accent)]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 4-Column Certificates Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          <AnimatePresence>
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedCertificate(cert)}
                className="bg-[#181C22] border border-[#2D3340] rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[var(--color-accent)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-xl min-h-[320px]"
              >
                {/* Certificate Photo Thumbnail Container */}
                <div className="relative w-full aspect-[16/11] bg-[#0E1116] overflow-hidden border-b border-[#252A34] flex items-center justify-center">
                  {cert.imageUrl ? (
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-12 h-12 rounded-full bg-[#14171E] border border-[#2D3340] flex items-center justify-center mb-2">
                        {getCertificateIcon(cert)}
                      </div>
                      <span className="text-xs text-gray-500 font-mono">Verified Credential</span>
                    </div>
                  )}

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181C22] via-transparent to-black/30 pointer-events-none" />

                  {/* Floating Type Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-white">
                      {cert.hasPdf ? (
                        <>
                          <FileText className="w-2.5 h-2.5 text-[var(--color-accent)]" />
                          <span>PDF + Photo</span>
                        </>
                      ) : (
                        <>
                          <ImageIcon className="w-2.5 h-2.5 text-[var(--color-accent)]" />
                          <span>Photo</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Hover Quick-View Indicator */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-[2px]">
                    <div className="px-3 py-1.5 rounded-full bg-[var(--color-accent)] text-black flex items-center gap-1.5 shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to View Photo</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Issuer & Date */}
                    <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1.5">
                      <span className="font-semibold text-[var(--color-accent)] truncate max-w-[150px]">
                        {cert.issuer}
                      </span>
                      <span>{cert.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-gray-200 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2 mb-2.5">
                      {cert.title}
                    </h3>
                  </div>

                  {/* Bottom Badges & Action */}
                  <div className="pt-3 border-t border-[#252A34] flex items-center justify-between">
                    {cert.scoreBadge ? (
                      <span className="text-[11px] font-semibold text-[var(--color-accent)] px-2.5 py-0.5 rounded-full bg-[#101318] border border-[#2D3340] truncate max-w-[140px]">
                        {cert.scoreBadge}
                      </span>
                    ) : (
                      <span className="text-[10px] text-gray-400 font-mono">Authenticated</span>
                    )}

                    <span className="text-xs text-gray-400 group-hover:text-white flex items-center gap-1 font-medium transition-colors">
                      <span>View</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Achievements & Honors Showcase */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Achievements &amp; Honors
            </h3>
            <p className="text-sm text-gray-400">
              Recognized competitive performance, hackathon wins, and technical milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsHonors.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#181C22] border border-[#2D3340] p-6 sm:p-7 rounded-2xl flex gap-5 hover:border-[var(--color-accent)] transition-all duration-300 shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#101318] border border-[#2D3340] group-hover:border-[var(--color-accent)] flex items-center justify-center shrink-0 transition-colors">
                  {getAchievementIcon(item.icon)}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-semibold text-[var(--color-accent)]">
                      {item.badge}
                    </span>
                    <span className="text-[11px] text-gray-500 font-mono">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-[var(--color-accent)] transition-colors mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Certificate Viewer Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
}
