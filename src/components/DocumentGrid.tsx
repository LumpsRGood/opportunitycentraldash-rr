import React from 'react';
import { ExternalLink, FileText, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { DocumentItem } from '../types';

interface DocumentGridProps {
  documents: (DocumentItem & { department?: string })[];
  searchTerm?: string;
  selectedCategory?: string;
  emptyMessage?: string;
  showDepartment?: boolean;
}

export const DocumentGrid: React.FC<DocumentGridProps> = ({
  documents,
  searchTerm = '',
  selectedCategory = 'All',
  emptyMessage = 'No documents match your current filter.',
  showDepartment = false
}) => {
  const filtered = documents.filter(doc => {
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch = !term || 
      doc.title.toLowerCase().includes(term) ||
      doc.description.toLowerCase().includes(term) ||
      doc.category.toLowerCase().includes(term) ||
      (doc.department && doc.department.toLowerCase().includes(term)) ||
      doc.format.toLowerCase().includes(term);

    const matchesCategory = selectedCategory === 'All' || 
      doc.category === selectedCategory || 
      doc.department === selectedCategory;

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

  return (
    <div className="oc-card-grid">
      {filtered.map((doc, idx) => {
        const IconComponent = doc.icon;
        const isPlaceholder = !doc.sharepointUrl;

        return (
          <motion.article 
            key={doc.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2, delay: Math.min(idx * 0.02, 0.2) } }}
            className={`oc-doc-card card-${doc.bandClass || 'red'} ${isPlaceholder ? 'bg-slate-50/50 border-dashed' : ''}`}
          >
            <div className="oc-card-header-row">
              <div className={`oc-card-icon-wrapper ${doc.bandClass || 'red'} ${isPlaceholder ? 'opacity-80' : ''}`}>
                <IconComponent size={20} className="stroke-[2.5]" />
              </div>
              <div className="flex items-center gap-1.5 flex-wrap justify-end">
                {showDepartment && doc.department && (
                  <span className="text-[10.5px] font-bold tracking-wider uppercase text-red-900 bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
                    {doc.department}
                  </span>
                )}
                <span className="text-[10.5px] font-semibold uppercase tracking-wider text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {doc.category}
                </span>
                <span className="oc-card-format-badge">{doc.format}</span>
              </div>
            </div>

            <div className="oc-card-title-container mb-2">
              <h3 className={isPlaceholder ? 'text-slate-800' : ''}>{doc.title}</h3>
            </div>
            
            <p className="oc-card-description">{doc.description}</p>
            
            <div className="mt-auto pt-3">
              {doc.sharepointUrl ? (
                <a 
                  href={doc.sharepointUrl}
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
            </div>
          </motion.article>
        );
      })}
    </div>
  );
};
