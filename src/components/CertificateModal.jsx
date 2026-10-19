import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Download, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Image as ImageIcon,
  ZoomIn,
  ZoomOut,
  Maximize2
} from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  const [viewMode, setViewMode] = useState('photo'); // 'photo' | 'pdf'
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Reset view mode on certificate change
    setViewMode('photo');
    setIsZoomed(false);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-[#14171E] border border-[var(--color-accent)]/60 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#2C323D] bg-[#1C212B]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#14171E] border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-semibold text-[var(--color-accent)] uppercase tracking-wider block">
                  {certificate.type || 'Verified Credential'}
                </span>
                <span className="text-sm font-bold text-white truncate block">
                  {certificate.issuer}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Toggle Buttons if both photo and PDF exist */}
              {certificate.hasPdf && certificate.pdfUrl && (
                <div className="hidden sm:flex items-center bg-[#101318] p-1 rounded-lg border border-[#2C323D] text-xs">
                  <button
                    onClick={() => setViewMode('photo')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors font-medium cursor-pointer ${
                      viewMode === 'photo'
                        ? 'bg-[var(--color-accent)] text-black font-semibold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Photo</span>
                  </button>
                  <button
                    onClick={() => setViewMode('pdf')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors font-medium cursor-pointer ${
                      viewMode === 'pdf'
                        ? 'bg-[var(--color-accent)] text-black font-semibold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>PDF</span>
                  </button>
                </div>
              )}

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full text-gray-400 hover:text-black hover:bg-[var(--color-accent)] transition-all flex items-center justify-center cursor-pointer ml-1"
                aria-label="Close certificate modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
            
            {/* Title & Badge */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#252A34]">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                  {certificate.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Issued by <span className="text-white font-medium">{certificate.organization || certificate.issuer}</span> • {certificate.date}
                </p>
              </div>

              {certificate.scoreBadge && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C212B] border border-[var(--color-accent)] text-xs font-bold text-[var(--color-accent)] shrink-0 self-start md:self-auto shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" />
                  <span>{certificate.scoreBadge}</span>
                </div>
              )}
            </div>

            {/* Mobile View Mode Switcher if PDF exists */}
            {certificate.hasPdf && certificate.pdfUrl && (
              <div className="sm:hidden flex items-center justify-center gap-2 bg-[#1C212B] p-1.5 rounded-xl border border-[#2C323D]">
                <button
                  onClick={() => setViewMode('photo')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs rounded-lg transition-colors ${
                    viewMode === 'photo'
                      ? 'bg-[var(--color-accent)] text-black font-bold'
                      : 'text-gray-300'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>View Photo</span>
                </button>
                <button
                  onClick={() => setViewMode('pdf')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs rounded-lg transition-colors ${
                    viewMode === 'pdf'
                      ? 'bg-[var(--color-accent)] text-black font-bold'
                      : 'text-gray-300'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View PDF</span>
                </button>
              </div>
            )}

            {/* Visual Certificate Photo / PDF Display Area */}
            {viewMode === 'photo' && certificate.imageUrl ? (
              <div className="rounded-xl overflow-hidden border border-[#2C323D] bg-[#0A0C10] shadow-xl">
                {/* Photo Viewer Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#1C212B] border-b border-[#2C323D] text-xs text-gray-300">
                  <span className="flex items-center gap-2 font-medium">
                    <ImageIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    <span>Certificate High-Resolution Photo</span>
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsZoomed(!isZoomed)}
                      className="text-xs text-gray-300 hover:text-[var(--color-accent)] flex items-center gap-1 cursor-pointer transition-colors"
                      title={isZoomed ? "Reset Zoom" : "Zoom In"}
                    >
                      {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                      <span className="hidden sm:inline">{isZoomed ? 'Fit' : 'Zoom'}</span>
                    </button>
                    <a
                      href={certificate.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[var(--color-accent)] hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>Full Photo</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Photo Image Container */}
                <div 
                  className={`relative w-full overflow-auto flex items-center justify-center p-2 sm:p-4 bg-gradient-to-b from-[#0D1016] to-[#080A0E] ${
                    isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    className={`rounded-lg shadow-2xl transition-all duration-300 object-contain max-h-[550px] ${
                      isZoomed ? 'scale-125 my-8 max-h-none w-full max-w-none' : 'w-auto max-w-full'
                    }`}
                    loading="eager"
                  />
                </div>
              </div>
            ) : viewMode === 'pdf' && certificate.hasPdf && certificate.pdfUrl ? (
              <div className="rounded-xl overflow-hidden border border-[#2C323D] bg-[#0A0C10]">
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#1C212B] border-b border-[#2C323D] text-xs text-gray-300">
                  <span className="flex items-center gap-2 font-medium">
                    <FileText className="w-4 h-4 text-[var(--color-accent)]" />
                    <span>Official PDF Document Preview</span>
                  </span>
                  <a
                    href={certificate.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--color-accent)] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Open in Full Window</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                
                <div className="w-full h-96 sm:h-[480px]">
                  <iframe
                    src={`${certificate.pdfUrl}#toolbar=0&navpanes=0`}
                    title={certificate.title}
                    className="w-full h-full border-none"
                  />
                </div>
              </div>
            ) : (
              <div className="p-8 rounded-xl bg-[#1C212B] border border-[#2C323D] text-center">
                <ShieldCheck className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-3" />
                <h4 className="text-base font-bold text-white mb-1">
                  Verified Academic Credential
                </h4>
                <p className="text-xs text-gray-400 max-w-md mx-auto">
                  This credential is authenticated through institutional academic records, course evaluations, and verified completion rosters.
                </p>
              </div>
            )}

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-[#101318] p-4 rounded-xl border border-[#202530]">
              {certificate.description}
            </p>

            {/* Serial / Credential Identifier */}
            {certificate.serialNumber && (
              <div className="p-3.5 rounded-xl bg-[#1C212B] border border-[#2C323D] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-gray-400">Credential Verification ID:</span>
                <span className="text-[var(--color-accent)] font-bold">{certificate.serialNumber}</span>
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-4 border-t border-[#2C323D] bg-[#1C212B]">
            <div className="flex flex-wrap items-center gap-2">
              {certificate.imageUrl && (
                <a
                  href={certificate.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14171E] border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black font-semibold text-xs transition-colors cursor-pointer"
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>View Original Photo</span>
                </a>
              )}

              {certificate.hasPdf && certificate.pdfUrl && (
                <a
                  href={certificate.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent)] text-black hover:opacity-90 font-bold text-xs transition-colors shadow-md cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              )}

              {certificate.externalUrl && (
                <a
                  href={certificate.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14171E] border border-[#2D3340] hover:border-[var(--color-accent)] text-white hover:text-[var(--color-accent)] font-semibold text-xs transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  <span>Visit Profile</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full border border-[#2C323D] hover:border-[var(--color-accent)] text-xs font-semibold text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
