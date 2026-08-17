import { FileText, Download, X, AlertCircle, ExternalLink, Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  format: string;
  icon: any;
  bandClass: string;
  bandIcon?: string;
  isPlaceholder?: boolean;
}

interface DocumentModalProps {
  document: DocumentItem | null;
  onClose: () => void;
}

export function DocumentModal({ document, onClose }: DocumentModalProps) {
  const [downloaded, setDownloaded] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!document) return null;

  const IconComponent = document.icon || FileText;

  const handleDownloadPlaceholder = () => {
    // Generate a placeholder file for store managers
    const textContent = `=====================================================
${document.title.toUpperCase()} [PLACEHOLDER TEMPLATE]
Opportunity Restaurant Group - Red Robin Franchisee
=====================================================

Document ID: ${document.id}
Category: ${document.category}
Format: ${document.format}
Generated: ${new Date().toLocaleDateString()}

PURPOSE:
${document.description}

STORE / LOCATION INFO:
- Store Number: _____________________
- General Manager: __________________
- Date of Shift: ____________________

[NOTE: Replace this placeholder document with your finalized store file or connect to your designated cloud document repository.]
=====================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = window.document.createElement('a');
    a.href = url;
    a.download = `${document.id}-placeholder.${document.format.toLowerCase() === 'docx' ? 'txt' : 'txt'}`;
    window.document.body.appendChild(a);
    a.click();
    window.document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const handleCopyPlaceholderRef = () => {
    navigator.clipboard.writeText(`[Red Robin Portal] ${document.title} (${document.category} - ${document.format})`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top brand red accent bar */}
          <div className="h-1.5 w-full" style={{ backgroundColor: '#ED1C24' }} />

          {/* Modal Header */}
          <div className="flex items-start justify-between p-6 pb-4 border-b border-slate-100 bg-white">
            <div className="flex items-center gap-3.5">
              <div 
                className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border"
                style={{ backgroundColor: 'rgba(237, 28, 36, 0.08)', borderColor: 'rgba(237, 28, 36, 0.2)', color: '#ED1C24' }}
              >
                <IconComponent size={22} className="stroke-[2.2]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {document.format}
                  </span>
                  <span 
                    className="text-xs font-semibold px-2 py-0.5 rounded border"
                    style={{ backgroundColor: 'rgba(106, 2, 3, 0.08)', borderColor: 'rgba(106, 2, 3, 0.2)', color: '#6A0203' }}
                  >
                    {document.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 m-0 mt-1 leading-snug">
                  {document.title}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors border-none bg-transparent cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-4 bg-white">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Description &amp; Use Case</h4>
              <p className="text-sm text-slate-700 m-0 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                {document.description}
              </p>
            </div>

            {/* Placeholder Notice Box using Brand Gold */}
            <div 
              className="p-3.5 rounded-lg border flex items-start gap-3"
              style={{ backgroundColor: 'rgba(249, 167, 13, 0.08)', borderColor: 'rgba(249, 167, 13, 0.35)' }}
            >
              <AlertCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#F9A70D' }} />
              <div className="text-xs leading-relaxed" style={{ color: '#6A0203' }}>
                <strong className="font-bold block mb-0.5" style={{ color: '#6A0203' }}>Placeholder Document Reference</strong>
                All external document links have been safely configured as clean placeholders for this repository build.
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-3 p-4 px-6 bg-slate-50 border-t border-slate-100">
            <button
              type="button"
              onClick={handleCopyPlaceholderRef}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copiedLink ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              {copiedLink ? 'Reference Copied' : 'Copy Title'}
            </button>

            <button
              type="button"
              onClick={handleDownloadPlaceholder}
              style={{ backgroundColor: '#ED1C24' }}
              className="px-4 py-2 text-xs font-semibold text-white border-none rounded-lg shadow-xs hover:opacity-90 transition-opacity flex items-center gap-1.5 cursor-pointer"
            >
              {downloaded ? <Check size={14} /> : <Download size={14} />}
              {downloaded ? 'Downloaded!' : 'Download Sample Template'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
