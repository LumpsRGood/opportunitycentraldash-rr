import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  FileText, 
  Clock, 
  MapPin, 
  Mail, 
  Copy, 
  Check, 
  AlertTriangle, 
  X,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DocumentItem } from '../types';
import { matchDocument } from '../utils/search';
import { ensureWebViewerUrl } from '../utils/urlHelper';

interface DocumentGridProps {
  documents: (DocumentItem & { department?: string })[];
  searchTerm?: string;
  selectedCategory?: string;
  emptyMessage?: string;
  showDepartment?: boolean;
}

interface DocumentCardItemProps {
  doc: DocumentItem & { department?: string };
  idx: number;
  showDepartment?: boolean;
  onOpenModal?: (doc: DocumentItem) => void;
}

const DocumentCardItem: React.FC<DocumentCardItemProps> = ({
  doc,
  idx,
  showDepartment,
  onOpenModal
}) => {
  const IconComponent = doc.icon;
  const hasVariants = Boolean(doc.stateVariants && doc.stateVariants.length > 0);
  const isPlaceholder = !doc.sharepointUrl && !hasVariants;
  const deptList = doc.departments && doc.departments.length > 0 
    ? doc.departments 
    : (doc.department ? [doc.department] : []);

  return (
    <motion.article 
      key={doc.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.2, delay: Math.min(idx * 0.02, 0.2) } }}
      className={`oc-doc-card card-${doc.bandClass || 'red'} ${isPlaceholder ? 'bg-slate-50/50 border-dashed' : ''} flex flex-col`}
    >
      <div className="oc-card-header-row">
        <div className={`oc-card-icon-wrapper ${doc.bandClass || 'red'} ${isPlaceholder ? 'opacity-80' : ''}`}>
          <IconComponent size={20} className="stroke-[2.5]" />
        </div>
        <div className="flex items-center gap-1.5 flex-wrap justify-end">
          {showDepartment && deptList.map((dept) => (
            <span key={dept} className="text-[10.5px] font-bold tracking-wider uppercase text-red-900 bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
              {dept}
            </span>
          ))}
          <span className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
            {doc.category}
          </span>
          <span className="oc-card-format-badge">
            {hasVariants ? 'Multi-State' : doc.format}
          </span>
        </div>
      </div>

      <div className="oc-card-title-container mb-2">
        <h3 className={isPlaceholder ? 'text-slate-800' : ''}>{doc.title}</h3>
      </div>
      
      <p className="oc-card-description">{doc.description}</p>
      
      <div className="mt-auto pt-3">
        {hasVariants ? (
          <button
            type="button"
            onClick={() => onOpenModal && onOpenModal(doc)}
            className="oc-open-button w-full inline-flex items-center justify-center gap-2 font-medium cursor-pointer shadow-xs"
          >
            <Layers size={14} />
            <span>Select State & View Forms</span>
          </button>
        ) : (
          <>
            {doc.sharepointUrl ? (
              <a 
                href={ensureWebViewerUrl(doc.sharepointUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="oc-open-button w-full inline-flex items-center justify-center gap-2 font-medium"
              >
                <span>Open in SharePoint</span>
                <ExternalLink size={14} />
              </a>
            ) : (
              <div className="w-full py-2.5 px-3 rounded-lg bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs font-semibold flex items-center justify-center gap-1.5 select-none">
                <Clock size={13} className="text-amber-700" />
                <span>Placeholder • Pending Publication</span>
              </div>
            )}
          </>
        )}
      </div>
    </motion.article>
  );
};

export const DocumentGrid: React.FC<DocumentGridProps> = ({
  documents,
  searchTerm = '',
  selectedCategory = 'All',
  emptyMessage = 'No documents match your current filter.',
  showDepartment = false
}) => {
  const [modalDoc, setModalDoc] = useState<DocumentItem | null>(null);
  const [selectedStateIndex, setSelectedStateIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalDoc(null);
      }
    };
    if (modalDoc) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalDoc]);

  // If user searched for a specific state, preselect that state
  useEffect(() => {
    if (!modalDoc?.stateVariants || !searchTerm.trim()) return;
    const term = searchTerm.trim().toLowerCase();
    const matchIdx = modalDoc.stateVariants.findIndex(
      v => term.includes(v.state.toLowerCase()) || (term.length === 2 && term === v.abbr.toLowerCase())
    );
    if (matchIdx !== -1) {
      setSelectedStateIndex(matchIdx);
    }
  }, [modalDoc, searchTerm]);

  const handleOpenModal = (doc: DocumentItem) => {
    setModalDoc(doc);
    setSelectedStateIndex(0);
  };

  const handleCopyText = (text: string, emailKey?: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    if (emailKey) {
      setCopiedEmail(emailKey);
      setTimeout(() => setCopiedEmail(null), 2000);
    } else {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    }
  };

  const filtered = documents.filter(doc => {
    const matchesSearch = matchDocument(doc, searchTerm);

    const matchesCategory = selectedCategory === 'All' || 
      doc.category === selectedCategory || 
      doc.department === selectedCategory ||
      (doc.departments && doc.departments.includes(selectedCategory));

    return matchesSearch && matchesCategory;
  });

  if (filtered.length === 0) {
    return (
      <div className="text-center py-12 px-4 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-500">
        <FileText size={32} className="mx-auto mb-2 text-slate-400 opacity-60" />
        <p className="text-sm font-medium">{emptyMessage}</p>
      </div>
    );
  }

  const activeVariant = modalDoc?.stateVariants ? modalDoc.stateVariants[selectedStateIndex] : null;

  return (
    <>
      <div className="oc-card-grid">
        {filtered.map((doc, idx) => (
          <DocumentCardItem
            key={doc.id}
            doc={doc}
            idx={idx}
            showDepartment={showDepartment}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>

      {/* OVERLAY POPUP MODAL (Zero layout shifting on grid) */}
      <AnimatePresence>
        {modalDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalDoc(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between p-5 border-b border-slate-100 bg-slate-50/70">
                <div className="pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200/80 px-2 py-0.5 rounded">
                      Multi-State Form
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">
                      6 State Markets
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{modalDoc.title}</h3>
                  <p className="text-xs text-slate-600 mt-0.5">{modalDoc.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setModalDoc(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
                  title="Close popup"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 space-y-4 overflow-y-auto">
                {/* State Market Selector */}
                <div className="p-3 bg-slate-50 border border-slate-200/90 rounded-xl">
                  <div className="flex items-center justify-between gap-1 mb-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <MapPin size={13} className="text-red-600" />
                      Select Your State Market:
                    </span>
                    <span className="text-xs font-bold text-red-700 bg-red-100/70 border border-red-200 px-2.5 py-0.5 rounded-md">
                      {activeVariant?.state} ({activeVariant?.abbr})
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {modalDoc.stateVariants?.map((variant, vIdx) => {
                      const isSelected = vIdx === selectedStateIndex;
                      return (
                        <button
                          key={variant.abbr}
                          type="button"
                          onClick={() => setSelectedStateIndex(vIdx)}
                          className={`py-2 px-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-red-600 text-white shadow-sm font-bold border border-red-700'
                              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <span className={`text-[10.5px] uppercase font-mono font-bold ${isSelected ? 'text-red-100' : 'text-slate-400'}`}>
                            {variant.abbr}
                          </span>
                          <span className="truncate">{variant.state}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Direct SharePoint Button for active state */}
                {activeVariant?.sharepointUrl && (
                  <div>
                    <a
                      href={ensureWebViewerUrl(activeVariant.sharepointUrl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold text-xs inline-flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Open {activeVariant.state} Form in SharePoint</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}

                {/* Submission notice and contacts */}
                {modalDoc.submissionNotice && (
                  <div className="p-3.5 rounded-xl bg-red-50/70 border border-red-200 text-xs space-y-2.5">
                    <div className="flex items-center gap-1.5 font-bold text-red-900">
                      <AlertTriangle size={15} className="text-red-600 shrink-0" />
                      <span>Mandatory 24-Hour Submission</span>
                    </div>
                    <p className="text-[11.5px] text-slate-600 leading-relaxed">
                      Submit completed report within 24 hours of incident to all 3 contacts:
                    </p>

                    <div className="space-y-1.5">
                      {modalDoc.submissionNotice.contacts.map((contact) => (
                        <div
                          key={contact.email}
                          className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-white border border-red-100 text-[11px]"
                        >
                          <span className="font-semibold text-slate-800">{contact.name}</span>
                          <button
                            type="button"
                            onClick={() => handleCopyText(contact.email, contact.email)}
                            className="text-red-700 hover:text-red-800 font-mono text-[10.5px] flex items-center gap-1 hover:underline cursor-pointer"
                            title="Click to copy email address"
                          >
                            <span>{contact.email}</span>
                            {copiedEmail === contact.email ? (
                              <Check size={11} className="text-green-600" />
                            ) : (
                              <Copy size={11} className="opacity-60" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-1 border-t border-red-200/60">
                      <a
                        href={`mailto:${modalDoc.submissionNotice.contacts.map(c => c.email).join(',')}?subject=Workers%20Compensation%20Injury%20Report%20-%20[Store%20Number]&body=Hello,%0D%0A%0D%0APlease%20find%20attached%20the%20state-specific%20workers%20compensation%20report%20for%20our%20store.%0D%0A%0D%0AStore%20Number:%20%0D%0AState%20Market:%20${encodeURIComponent(activeVariant?.state || '')}%0D%0AEmployee%20Name:%20%0D%0ADate%20of%20Injury:%20%0D%0A%0D%0AThank%20you.`}
                        className="flex-1 py-2 px-3 bg-red-700 hover:bg-red-800 text-white rounded-lg text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Mail size={13} />
                        <span>Email All 3 Contacts</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopyText(modalDoc.submissionNotice!.contacts.map(c => c.email).join(', '))}
                        className="py-2 px-3 bg-white hover:bg-red-50 text-red-900 border border-red-200 rounded-lg text-xs font-semibold inline-flex items-center justify-center gap-1 transition-colors cursor-pointer"
                      >
                        {copiedAll ? <Check size={13} className="text-green-600" /> : <Copy size={13} className="text-red-700" />}
                        <span>{copiedAll ? 'Copied!' : 'Copy All'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-3 px-5 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setModalDoc(null)}
                  className="py-1.5 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
