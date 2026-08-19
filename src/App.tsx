/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, useMemo } from 'react';
import { 
  FileText, 
  UserMinus, 
  AlertTriangle, 
  ShieldCheck, 
  ClipboardSignature, 
  Thermometer, 
  Search, 
  Copy, 
  Check, 
  Info, 
  Mail, 
  ArrowUpRight, 
  ExternalLink,
  ChevronRight,
  Download,
  AlertCircle,
  FileCode,
  Sparkles,
  Layers,
  PhoneCall,
  ArrowRight,
  Home,
  Users,
  Wrench,
  Monitor,
  BookOpen,
  Bell,
  Settings,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Coins,
  Wallet,
  LogOut,
  User,
  Building,
  FolderKanban,
  ArrowUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RedRobinLogo } from './components/RedRobinLogo';
import { OpportunityGroupLogo } from './components/OpportunityLogo';
import { DocumentItem } from './types.ts';
import { LoginScreen } from './components/LoginScreen.tsx';
import { useAuth } from './context/AuthContext.tsx';
import { DocumentGrid } from './components/DocumentGrid.tsx';
import { AiAssistant } from './components/AiAssistant.tsx';
import { matchDocument } from './utils/search.ts';
import {
  ALL_DOCUMENTS,
  SECURITY_PLATFORM_DOCS,
  HUMAN_RESOURCES_DOCS,
  BDO_ACCOUNTING_DOCS,
  INSURANCE_INCIDENTS_DOCS,
  IT_DOCS,
  HANDBOOK_DOCS
} from './data/documents.ts';

const APP_VERSION = 'v1.1.0';

export default function App() {
  const { isAuthenticated, user, login, loginAsDemo, logout, isLoading, error, isConfigured } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [hubCategory, setHubCategory] = useState('All Departments');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [expandedHowTo, setExpandedHowTo] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    return ALL_DOCUMENTS.filter(doc => matchDocument(doc, searchTerm));
  }, [searchTerm]);

  // References for scrollspy and smooth scrolling
  const sectionRefs: Record<string, { current: HTMLElement | null }> = {
    home: useRef<HTMLElement | null>(null),
    security: useRef<HTMLElement | null>(null),
    hr: useRef<HTMLElement | null>(null),
    bdo: useRef<HTMLElement | null>(null),
    insurance: useRef<HTMLElement | null>(null),
    it: useRef<HTMLElement | null>(null),
    handbooks: useRef<HTMLElement | null>(null),
    hub: useRef<HTMLElement | null>(null),
  };

  // Scrollspy to set active tab as user scrolls and toggle back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBackToTop(currentScrollY > 320);

      const scrollPosition = currentScrollY + 160;

      if (currentScrollY < 80) {
        setActiveTab('home');
        return;
      }

      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const top = ref.current.offsetTop;
          const height = ref.current.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleTabClick = (sectionId: string) => {
    setActiveTab(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const targetRef = sectionRefs[sectionId];
      if (targetRef && targetRef.current) {
        window.scrollTo({
          top: targetRef.current.offsetTop - 110,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(email);
      setTimeout(() => {
        setCopiedEmail(null);
      }, 2000);
    });
  };

  if (!isAuthenticated) {
    return (
      <LoginScreen
        onLoginWithMicrosoft={login}
        onPreviewLogin={() => loginAsDemo('Opportunity Leader', 'General Manager')}
        isLoading={isLoading}
        error={error}
      />
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .navbar,
        footer.footer {
          display: none !important;
        }

        /* Always a pure, clean white background */
        html, body {
          background: #ffffff !important;
          background-color: #ffffff !important;
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
        }

        .oc-portal {
          /* Official Red Robin Brand Colors */
          --oc-brand-red: #ED1C24;
          --oc-brand-gold: #F9A70D;
          --oc-brand-lonestar: #6A0203;

          --oc-red: #ED1C24;
          --oc-red-dark: #6A0203;
          --oc-gold: #F9A70D;
          --oc-lonestar: #6A0203;
          
          --oc-text: #0f172a;
          --oc-muted: #64748b;
          --oc-line: #e2e8f0;
          --oc-panel: #ffffff;
          color: var(--oc-text);
          background: #ffffff;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .oc-portal * {
          box-sizing: border-box;
        }

        .oc-masthead {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          border-bottom: 1px solid var(--oc-line);
          padding: 20px 40px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .oc-masthead-left h1 {
          margin: 0;
          color: var(--oc-text);
          font-size: 26px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .oc-masthead-left p {
          margin: 6px 0 0;
          color: var(--oc-muted);
          font-size: 13px;
          font-weight: 500;
        }

        .oc-search-wrapper {
          position: relative;
          flex-grow: 1;
          max-width: 380px;
          margin-right: 20px;
        }

        .oc-search-input {
          width: 100%;
          height: 40px;
          padding: 0 16px 0 42px;
          background: #ffffff;
          border: 1px solid var(--oc-line);
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--oc-text);
          outline: none;
          transition: all 0.2s ease;
        }

        .oc-search-input:focus {
          border-color: #ED1C24;
          box-shadow: 0 0 0 3px rgba(237, 28, 36, 0.15);
        }

        .oc-search-icon {
          position: absolute;
          left: 14px;
          top: 11px;
          color: var(--oc-muted);
          pointer-events: none;
        }

        .oc-tabs-container {
          position: sticky;
          top: 0;
          z-index: 50;
          background: #ffffff;
          border-bottom: 1px solid var(--oc-line);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
        }

        .oc-tabs-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1400px;
          margin: 0 auto;
          min-height: 48px;
          padding: 0 32px;
          gap: 20px;
        }

        .oc-nav-logos {
          display: flex;
          align-items: center;
          gap: 14px;
          opacity: 0;
          transform: translateX(8px);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          flex-shrink: 0;
        }

        .oc-nav-logos.visible {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
        }

        .oc-tabs {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0;
          padding: 0;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          white-space: nowrap;
          flex: 1;
        }

        .oc-tabs::-webkit-scrollbar {
          display: none;
        }

        .oc-tabs button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          height: 48px;
          padding: 0 14px;
          border: none;
          border-bottom: 2.5px solid transparent;
          background: transparent;
          color: #475569;
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: -0.01em;
          cursor: pointer;
          transition: all 0.15s ease;
          flex-shrink: 0;
        }

        .oc-tabs button.active {
          color: #ED1C24;
          border-bottom-color: #ED1C24;
          font-weight: 700;
        }

        .oc-tabs button:hover {
          color: #6A0203;
          background: rgba(237, 28, 36, 0.03);
        }

        .oc-search-hero {
          width: min(1400px, calc(100% - 80px));
          margin: 22px auto 28px;
        }

        .oc-search-bar {
          display: flex;
          align-items: center;
          position: relative;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          padding: 11px 18px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
          transition: all 0.2s ease;
        }

        .oc-search-bar:focus-within {
          border-color: #ED1C24;
          box-shadow: 0 0 0 3.5px rgba(237, 28, 36, 0.08), 0 3px 8px rgba(0,0,0,0.05);
        }

        .oc-search-icon {
          color: #64748b;
          margin-right: 12px;
          flex-shrink: 0;
        }

        .oc-search-input {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 14.5px;
          font-weight: 450;
          color: #1e293b;
          outline: none;
          width: 100%;
        }

        .oc-search-input::placeholder {
          color: #94a3b8;
          font-weight: 400;
        }

        .oc-section-heading h2 {
          margin: 0;
          color: var(--oc-text);
          font-size: 22px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .oc-section-heading p {
          margin: 6px 0 0;
          color: var(--oc-muted);
          font-size: 14px;
          line-height: 1.5;
          font-weight: 400;
        }

        .oc-panel {
          width: min(1400px, calc(100% - 80px));
          margin: 0 auto 32px;
          padding: 32px;
          background: #ffffff;
          border: 1px solid var(--oc-line);
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: all 0.25s ease;
        }

        .oc-section-heading {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }

        .oc-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(237, 28, 36, 0.08);
          color: #ED1C24;
          font-size: 18px;
          flex-shrink: 0;
        }

        .oc-search-filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--oc-line);
        }

        .oc-category-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
        }

        .oc-category-btn {
          padding: 6px 14px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 9999px;
          color: #475569;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .oc-category-btn:hover {
          background: #f8fafc;
          border-color: #cbd5e1;
        }

        .oc-category-btn.active {
          background: #ED1C24;
          color: #ffffff;
          border-color: #ED1C24;
          font-weight: 600;
        }

        .oc-card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 24px;
        }

        .oc-doc-card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          padding: 24px;
          border-left: 4px solid #cbd5e1;
          overflow: hidden;
        }

        .oc-doc-card.card-green { border-left-color: #15803d; }
        .oc-doc-card.card-red { border-left-color: #ED1C24; }
        .oc-doc-card.card-orange { border-left-color: #F9A70D; }
        .oc-doc-card.card-forest { border-left-color: #166534; }
        .oc-doc-card.card-purple { border-left-color: #6A0203; }
        .oc-doc-card.card-blue { border-left-color: #0284c7; }

        .oc-doc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 20px -8px rgba(106, 2, 3, 0.08);
          border-color: #cbd5e1;
        }

        .oc-card-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 14px;
          width: 100%;
        }

        .oc-card-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          flex-shrink: 0;
        }

        .oc-card-icon-wrapper.green { background-color: #f0fdf4; color: #15803d; }
        .oc-card-icon-wrapper.red { background-color: rgba(237, 28, 36, 0.08); color: #ED1C24; }
        .oc-card-icon-wrapper.orange { background-color: rgba(249, 167, 13, 0.1); color: #F9A70D; }
        .oc-card-icon-wrapper.forest { background-color: #f0fdf4; color: #166534; }
        .oc-card-icon-wrapper.purple { background-color: rgba(106, 2, 3, 0.08); color: #6A0203; }
        .oc-card-icon-wrapper.blue { background-color: #f0f9ff; color: #0284c7; }

        .oc-card-title-container {
          flex: 1;
          min-width: 0;
        }

        .oc-card-title-container h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          color: var(--oc-text);
          line-height: 1.3;
        }

        .oc-card-format-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          background-color: #f8fafc;
          color: #475569;
          text-transform: uppercase;
          border: 1px solid #e2e8f0;
          letter-spacing: 0.05em;
        }

        .oc-doc-card p.oc-card-description {
          margin: 0 0 20px 0;
          font-size: 14px;
          line-height: 1.5;
          color: #64748b;
          flex-grow: 1;
        }

        .oc-open-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          height: 40px;
          border-radius: 8px;
          background-color: #ED1C24;
          color: #ffffff !important;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }

        .oc-open-button:hover {
          background-color: #6A0203;
          box-shadow: 0 4px 10px rgba(106, 2, 3, 0.25);
        }

        .oc-open-button.coming-soon {
          background-color: #64748b;
          color: #f1f5f9 !important;
          cursor: not-allowed;
          pointer-events: none;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .oc-warning {
          margin: 0 0 24px;
          padding: 16px 20px;
          border-left: 4px solid #F9A70D;
          border-radius: 8px;
          background: #ffffff;
          border: 1px solid rgba(249, 167, 13, 0.3);
          border-left-width: 4px;
        }

        .oc-warning strong {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
          color: #6A0203;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .oc-warning p {
          margin: 0;
          font-size: 13px;
          line-height: 1.5;
          color: #475569;
        }

        .oc-table-container {
          overflow-x: auto;
          border-radius: 8px;
          border: 1px solid var(--oc-line);
          background: #ffffff;
        }

        .oc-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          font-size: 13px;
        }

        .oc-table th,
        .oc-table td {
          padding: 14px 16px;
          border-bottom: 1px solid var(--oc-line);
          text-align: left;
          vertical-align: middle;
        }

        .oc-table th {
          background: #ffffff;
          color: #475569;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          border-bottom: 2px solid var(--oc-line);
        }

        .oc-table tr:last-child td {
          border-bottom: 0;
        }

        .oc-table td.oc-bold-cell {
          font-weight: 600;
          color: var(--oc-text);
        }

        .oc-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: 0.02em;
        }

        .oc-badge.paid { background: rgba(249, 167, 13, 0.12); color: #854d0e; border: 1px solid rgba(249, 167, 13, 0.3); }
        .oc-badge.invoice { background: rgba(237, 28, 36, 0.08); color: #6A0203; border: 1px solid rgba(237, 28, 36, 0.2); }
        .oc-badge.payroll { background: #fef3c7; color: #78350f; border: 1px solid #fde68a; }

        .oc-contact-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background-color: #ffffff;
          transition: all 0.2s ease;
        }

        .oc-contact-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 2px 8px rgba(106, 2, 3, 0.04);
        }

        .oc-contact-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .oc-contact-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 5px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          min-width: 84px;
          text-align: center;
        }

        .oc-contact-badge.employee {
          background-color: rgba(249, 167, 13, 0.12);
          color: #9a3412;
          border: 1px solid rgba(249, 167, 13, 0.3);
        }

        .oc-contact-badge.guest {
          background-color: rgba(237, 28, 36, 0.08);
          color: #6A0203;
          border: 1px solid rgba(237, 28, 36, 0.2);
        }

        .oc-contact-info h4 {
          margin: 0;
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
        }

        .oc-contact-info p {
          margin: 2px 0 0;
          font-size: 12px;
          color: #64748b;
        }

        .oc-contact-email-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          color: #000000;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .oc-contact-email-btn:hover {
          background-color: #f8fafc;
          border-color: #000000;
          color: #000000;
        }

        .oc-cc-container {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 16px;
        }

        .oc-cc-title {
          font-size: 11px;
          font-weight: 700;
          color: #475569;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .oc-cc-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .oc-cc-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          border-radius: 6px;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .oc-cc-item:hover {
          background-color: #f8fafc;
          border-color: #cbd5e1;
        }

        .oc-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 100px;
          margin-top: 48px;
          background: #ffffff;
          border-top: 1px solid var(--oc-line);
          color: var(--oc-muted);
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          padding: 24px;
        }

        .oc-empty-state {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          background: #ffffff;
          border: 2px dashed var(--oc-line);
          border-radius: 12px;
          text-align: center;
        }

        .oc-empty-state h4 {
          margin: 0;
          font-size: 15px;
          font-weight: 700;
          color: var(--oc-text);
        }

        .oc-empty-state p {
          margin: 4px 0 0;
          font-size: 13px;
          color: var(--oc-muted);
        }

        .oc-toast {
          position: fixed;
          bottom: 84px;
          right: 28px;
          background: #0f172a;
          color: #ffffff;
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.2);
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #1e293b;
        }

        .oc-back-to-top {
          position: fixed;
          bottom: 28px;
          right: 28px;
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px 16px;
          background: #6A0203;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 9999px;
          box-shadow: 0 4px 14px rgba(106, 2, 3, 0.35), 0 2px 6px rgba(0, 0, 0, 0.12);
          cursor: pointer;
          z-index: 90;
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: -0.01em;
          transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
        }

        .oc-back-to-top:hover {
          background: #ED1C24;
          box-shadow: 0 6px 20px rgba(237, 28, 36, 0.4), 0 3px 8px rgba(0, 0, 0, 0.18);
        }

        .oc-back-to-top:active {
          transform: scale(0.96);
        }

        @media (max-width: 768px) {
          .oc-masthead {
            padding: 16px 20px;
          }

          .oc-masthead-left h1 {
            font-size: 22px;
          }

          .oc-tabs-inner {
            padding: 0;
          }

          .oc-tabs {
            gap: 16px;
            padding: 0 20px;
            overflow-x: auto;
            white-space: nowrap;
            width: 100%;
          }

          .oc-tabs button {
            font-size: 13px;
          }

          .oc-nav-logos {
            display: none !important;
          }

          .oc-search-hero,
          .oc-panel {
            width: calc(100% - 32px);
          }

          .oc-panel {
            padding: 20px;
          }

          .oc-card-grid {
            grid-template-columns: 1fr;
          }

          .oc-search-filter-bar {
            flex-direction: column;
            align-items: stretch;
          }

          .oc-search-wrapper {
            max-width: 100%;
            margin-right: 0;
            margin-bottom: 12px;
          }
        }
      `}</style>

      <main id="mainContent" className="oc-portal">
        {/* Header Section */}
        <header className="oc-masthead">
          <div className="oc-masthead-left">
            <h1 className="flex items-center gap-3">
              Opportunity Central
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200 uppercase tracking-wider scale-90 origin-left select-none">
                {APP_VERSION}
              </span>
            </h1>
            <p>One Stop Portal &amp; Directory | Opportunity Restaurant Group (Red Robin Franchisee)</p>
          </div>
          <div className="flex items-center gap-5 sm:gap-6 flex-wrap md:flex-nowrap">
            {/* Opportunity Restaurant Group Branding */}
            <OpportunityGroupLogo className="h-11 w-auto hidden sm:block shrink-0" />

            {/* Red Robin Logo (Official High-Fidelity Vector) */}
            <div className="border-l border-slate-200 pl-4 sm:pl-6 h-12 flex items-center shrink-0">
              <RedRobinLogo className="h-11 sm:h-12 w-auto select-none" />
            </div>
          </div>
        </header>

        {/* Dynamic Sticky Navigation Menu */}
        <div className="oc-tabs-container">
          <div className="oc-tabs-inner">
            <nav className="oc-tabs" aria-label="Opportunity Central sections">
              <button 
                className={activeTab === 'home' ? 'active' : ''} 
                onClick={() => handleTabClick('home')}
              >
                Home
              </button>
              <button 
                className={activeTab === 'security' ? 'active' : ''} 
                onClick={() => handleTabClick('security')}
              >
                Security Platform
              </button>
              <button 
                className={activeTab === 'hr' ? 'active' : ''} 
                onClick={() => handleTabClick('hr')}
              >
                Human Resources
              </button>
              <button 
                className={activeTab === 'bdo' ? 'active' : ''} 
                onClick={() => handleTabClick('bdo')}
              >
                BDO &amp; Accounting
              </button>
              <button 
                className={activeTab === 'insurance' ? 'active' : ''} 
                onClick={() => handleTabClick('insurance')}
              >
                Insurance &amp; Incidents
              </button>
              <button 
                className={activeTab === 'it' ? 'active' : ''} 
                onClick={() => handleTabClick('it')}
              >
                IT
              </button>
              <button 
                className={activeTab === 'handbooks' ? 'active' : ''} 
                onClick={() => handleTabClick('handbooks')}
              >
                Handbooks
              </button>
              <button 
                className={activeTab === 'hub' ? 'active' : ''} 
                onClick={() => handleTabClick('hub')}
              >
                Document Hub
              </button>
            </nav>
            <div className={`oc-nav-logos ${activeTab !== 'home' ? 'visible' : ''}`}>
              <OpportunityGroupLogo className="h-8 w-auto" />
              <div className="border-l border-slate-200 pl-3 h-8 flex items-center">
                <RedRobinLogo className="h-7 w-auto select-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Streamlined Search Bar Section (Home Anchor) */}
        <section id="home" ref={sectionRefs.home} className="oc-search-hero">
          <div className="oc-search-bar">
            <Search size={19} className="oc-search-icon" />
            <input 
              type="text" 
              placeholder="Search policies, forms, training decks, and spreadsheets..." 
              className="oc-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-xs text-slate-500 hover:text-slate-700 font-semibold px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </section>

        {/* Instant Search Results Panel (Appears immediately below search bar with zero scrolling required) */}
        {searchTerm.trim().length > 0 && (
          <section className="oc-panel mb-8 border-2 border-red-200/90 shadow-md bg-gradient-to-b from-white to-red-50/10">
            <div className="flex items-center justify-between flex-wrap gap-3 pb-3 mb-4 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-[#6A0203] text-white">
                  <Search size={16} />
                </span>
                <div>
                  <h2 className="text-base font-bold text-slate-800 m-0 flex items-center gap-2">
                    Search Results for &ldquo;{searchTerm}&rdquo;
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-100 text-red-900 font-bold">
                      {searchResults.length} {searchResults.length === 1 ? 'document' : 'documents'} found
                    </span>
                  </h2>
                  <p className="text-xs text-slate-500 m-0">All matching store policies, forms, and guides appear instantly below.</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                Clear Search
              </button>
            </div>

            <DocumentGrid 
              documents={searchResults} 
              searchTerm={searchTerm} 
              showDepartment={true}
              emptyMessage={`No documents found matching "${searchTerm}". Try checking for related keywords like incident, injury, robbery, claim, form, or cash deposit.`}
            />
          </section>
        )}

        {/* 1. Security Platform Panel */}
        <section id="security" ref={sectionRefs.security} className="oc-panel oc-documents mb-8">
          <div className="oc-section-heading">
            <span className="oc-icon" aria-hidden="true">
              <ShieldCheck size={20} />
            </span>
            <div>
              <h2>Security Platform</h2>
              <p>Official store security protocols, active threat response, robbery procedures, and TABC compliance.</p>
            </div>
          </div>

          <DocumentGrid 
            documents={SECURITY_PLATFORM_DOCS} 
            searchTerm={searchTerm} 
            emptyMessage="No security documents match your search query."
          />
        </section>

        {/* 2. Human Resources Panel */}
        <section id="hr" ref={sectionRefs.hr} className="oc-panel mb-8">
          <div className="oc-section-heading">
            <span className="oc-icon" aria-hidden="true">
              <Users size={20} />
            </span>
            <div>
              <h2>Human Resources</h2>
              <p>Workplace policies, sexual harassment training, corrective action forms, termination standards, and workers comp.</p>
            </div>
          </div>

          <DocumentGrid 
            documents={HUMAN_RESOURCES_DOCS} 
            searchTerm={searchTerm} 
            emptyMessage="No HR documents match your search query."
          />
        </section>

        {/* 3. BDO & Accounting Panel */}
        <section id="bdo" ref={sectionRefs.bdo} className="oc-panel mb-8">
          <div className="oc-section-heading">
            <span className="oc-icon" aria-hidden="true">
              <Coins size={20} />
            </span>
            <div>
              <h2>BDO &amp; Accounting</h2>
              <p>Bank deposit standards, payroll procedures, Ramp corporate card guidelines, GL coding, and mileage tracking.</p>
            </div>
          </div>

          <DocumentGrid 
            documents={BDO_ACCOUNTING_DOCS} 
            searchTerm={searchTerm} 
            emptyMessage="No accounting documents match your search query."
          />
        </section>

        {/* 4. Insurance & Incidents Panel */}
        <section id="insurance" ref={sectionRefs.insurance} className="oc-panel mb-8">
          <div className="oc-section-heading">
            <span className="oc-icon" aria-hidden="true">
              <AlertTriangle size={20} />
            </span>
            <div>
              <h2>Insurance &amp; Incidents</h2>
              <p>Guest injury reporting, vendor incident documentation, workers compensation claims, and insurance forms.</p>
            </div>
          </div>

          <DocumentGrid 
            documents={INSURANCE_INCIDENTS_DOCS} 
            searchTerm={searchTerm} 
            emptyMessage="No insurance or incident documents match your search query."
          />
        </section>

        {/* 5. IT Panel */}
        <section id="it" ref={sectionRefs.it} className="oc-panel mb-8">
          <div className="oc-section-heading">
            <span className="oc-icon" aria-hidden="true">
              <Monitor size={20} />
            </span>
            <div>
              <h2>IT</h2>
              <p>POS hardware troubleshooting, kitchen display systems, network connectivity, and IT helpdesk escalation.</p>
            </div>
          </div>

          <DocumentGrid 
            documents={IT_DOCS} 
            searchTerm={searchTerm} 
            emptyMessage="No IT documents match your search query."
          />
        </section>

        {/* 6. Handbooks Panel */}
        <section id="handbooks" ref={sectionRefs.handbooks} className="oc-panel mb-8">
          <div className="oc-section-heading">
            <span className="oc-icon" aria-hidden="true">
              <BookOpen size={20} />
            </span>
            <div>
              <h2>Handbooks</h2>
              <p>Store employee handbook and team member appearance &amp; uniform standards.</p>
            </div>
          </div>

          <DocumentGrid 
            documents={HANDBOOK_DOCS} 
            searchTerm={searchTerm} 
            emptyMessage="No handbook documents match your search query."
          />
        </section>

        {/* 7. Master Document Hub Panel (Last Section) */}
        <section id="hub" ref={sectionRefs.hub} className="oc-panel mb-8">
          <div className="oc-section-heading">
            <span className="oc-icon" aria-hidden="true">
              <FolderKanban size={20} />
            </span>
            <div>
              <h2>Document Hub</h2>
              <p>Complete company-wide repository of documents across all departments in one unified area. Filter by department or search above.</p>
            </div>
          </div>

          {/* Department Quick Filters */}
          <div className="flex items-center gap-2 mb-5 overflow-x-auto pb-2 scrollbar-none">
            {[
              'All Departments',
              'Security Platform',
              'Human Resources',
              'BDO & Accounting',
              'Insurance & Incidents',
              'IT',
              'Handbooks'
            ].map((dept) => {
              const isSelected = hubCategory === dept;
              return (
                <button
                  key={dept}
                  type="button"
                  onClick={() => setHubCategory(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#6A0203] text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {dept}
                </button>
              );
            })}
          </div>

          <DocumentGrid 
            documents={ALL_DOCUMENTS} 
            searchTerm={searchTerm} 
            selectedCategory={hubCategory === 'All Departments' ? 'All' : hubCategory}
            showDepartment={true}
            emptyMessage="No documents in the Document Hub match your search or department filter."
          />
        </section>

        {/* How Do I? & Who to Contact Sections - Hidden / Commented out per request */}
        {false && (
          <>
            <section id="howDoI" className="oc-panel">
          <div className="oc-section-heading">
            <span className="oc-icon" aria-hidden="true">
              <HelpCircle size={20} />
            </span>
            <div>
              <h2>How Do I?</h2>
              <p>Quick reference procedures and step-by-step guides for daily store operations.</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-6">
            {/* Accordion Item 1: Cash Reallocation */}
            <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs">
              <button
                type="button"
                onClick={() => setExpandedHowTo(expandedHowTo === 'cash-reallocation' ? null : 'cash-reallocation')}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer text-left border-none"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(237, 28, 36, 0.1)', color: '#ED1C24' }}
                  >
                    <Coins size={16} />
                  </div>
                  <div>
                    <h3 className="m-0 text-sm font-bold text-slate-800">Cash Reallocation Procedure</h3>
                    <p className="m-0 text-xs text-slate-500 font-normal">Step-by-step flow for transferring cash surplus between stores.</p>
                  </div>
                </div>
                <div className="text-slate-400">
                  {expandedHowTo === 'cash-reallocation' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {expandedHowTo === 'cash-reallocation' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 border-t border-slate-200 bg-white">
                      <div className="flex flex-col gap-5">
                        <div className="flex gap-4">
                          <div 
                            className="flex-shrink-0 w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center border"
                            style={{ backgroundColor: 'rgba(237, 28, 36, 0.08)', color: '#ED1C24', borderColor: 'rgba(237, 28, 36, 0.2)' }}
                          >
                            1
                          </div>
                          <div>
                            <h4 className="m-0 text-xs font-bold uppercase tracking-wider text-slate-700">Identify Stores for Reallocation</h4>
                            <p className="m-0 mt-1 text-xs text-slate-600 leading-relaxed">
                              Determine which store has a cash surplus (e.g., store #1234) and which store has a cash deficit (e.g., store #7890). Ensure that the surplus store has enough excess cash to cover the deficit of the other store.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div 
                            className="flex-shrink-0 w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center border"
                            style={{ backgroundColor: 'rgba(237, 28, 36, 0.08)', color: '#ED1C24', borderColor: 'rgba(237, 28, 36, 0.2)' }}
                          >
                            2
                          </div>
                          <div>
                            <h4 className="m-0 text-xs font-bold uppercase tracking-wider text-slate-700">Pull Cash from Surplus Store</h4>
                            <p className="m-0 mt-1 text-xs text-slate-600 leading-relaxed">
                              Only an <b>Above Restaurant Leader (ARL)</b> or General Manager should physically remove the required amount of cash from the surplus store, ensuring dual verification.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div 
                            className="flex-shrink-0 w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center border"
                            style={{ backgroundColor: 'rgba(237, 28, 36, 0.08)', color: '#ED1C24', borderColor: 'rgba(237, 28, 36, 0.2)' }}
                          >
                            3
                          </div>
                          <div>
                            <h4 className="m-0 text-xs font-bold uppercase tracking-wider text-slate-700">Record Transaction in Surplus Store's POS</h4>
                            <p className="m-0 mt-1 text-xs text-slate-600 leading-relaxed">
                              In the POS of the surplus store, enter the transaction as a <b>paid out</b>. Use the description: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-[11px]" style={{ color: '#6A0203' }}>“Reallocation of cash to [cash short store #]”</code>.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div 
                            className="flex-shrink-0 w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center border"
                            style={{ backgroundColor: 'rgba(237, 28, 36, 0.08)', color: '#ED1C24', borderColor: 'rgba(237, 28, 36, 0.2)' }}
                          >
                            4
                          </div>
                          <div>
                            <h4 className="m-0 text-xs font-bold uppercase tracking-wider text-slate-700">Transfer Cash to Deficit Store</h4>
                            <p className="m-0 mt-1 text-xs text-slate-600 leading-relaxed">
                              Transport the cash securely to the destination store. Follow all safety and cash transport protocols during transfer.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div 
                            className="flex-shrink-0 w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center border"
                            style={{ backgroundColor: 'rgba(237, 28, 36, 0.08)', color: '#ED1C24', borderColor: 'rgba(237, 28, 36, 0.2)' }}
                          >
                            5
                          </div>
                          <div>
                            <h4 className="m-0 text-xs font-bold uppercase tracking-wider text-slate-700">Record Transaction in Cash Short Store's POS</h4>
                            <p className="m-0 mt-1 text-xs text-slate-600 leading-relaxed">
                              Upon arrival at the deficit store, in the POS, enter the transaction as a <b>paid in</b> with description: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-[11px]" style={{ color: '#15803d' }}>“Reallocation of cash from [cash surplus store #]”</code>.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion Item 2: Deposits */}
            <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs">
              <button
                type="button"
                onClick={() => setExpandedHowTo(expandedHowTo === 'deposits' ? null : 'deposits')}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer text-left border-none"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(249, 167, 13, 0.12)', color: '#F9A70D' }}
                  >
                    <Wallet size={16} />
                  </div>
                  <div>
                    <h3 className="m-0 text-sm font-bold text-slate-800">Daily Safe Drops &amp; Bank Deposits</h3>
                    <p className="m-0 text-xs text-slate-500 font-normal">Preparation and secure validation procedures for daily cash receipts.</p>
                  </div>
                </div>
                <div className="text-slate-400">
                  {expandedHowTo === 'deposits' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {expandedHowTo === 'deposits' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 border-t border-slate-200 bg-white">
                      <div className="flex flex-col gap-4 text-xs text-slate-600 leading-relaxed">
                        <p className="m-0">Follow this protocol strictly for daily deposits to ensure accuracy and audit compliance:</p>
                        <ul className="m-0 pl-5 flex flex-col gap-2 list-disc">
                          <li><b>Prepare Deposit Slip:</b> Count all cash drawers, verify register drops with POS End-of-Day totals, and fill out the bank deposit slip.</li>
                          <li><b>Safe Drop Entry:</b> Enter the safe drop into the POS under Safe Management. Always record the tamper-evident bag number in the memo.</li>
                          <li><b>Secure Transport:</b> Seal in the designated deposit bag and place in the smart safe or prepare for armored pickup.</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion Item 3: Paid Outs */}
            <div className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs">
              <button
                type="button"
                onClick={() => setExpandedHowTo(expandedHowTo === 'paid-outs' ? null : 'paid-outs')}
                className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer text-left border-none"
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(106, 2, 3, 0.08)', color: '#6A0203' }}
                  >
                    <FileText size={16} />
                  </div>
                  <div>
                    <h3 className="m-0 text-sm font-bold text-slate-800">Petty Cash &amp; Local Paid Outs</h3>
                    <p className="m-0 text-xs text-slate-500 font-normal">Approval rules and logging requirements for local emergency purchases.</p>
                  </div>
                </div>
                <div className="text-slate-400">
                  {expandedHowTo === 'paid-outs' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {expandedHowTo === 'paid-outs' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 border-t border-slate-200 bg-white">
                      <div className="flex flex-col gap-4 text-xs text-slate-600 leading-relaxed">
                        <p className="m-0">All local store disbursements must comply with financial rules:</p>
                        <ul className="m-0 pl-5 flex flex-col gap-2 list-disc">
                          <li><b>Pre-Approval:</b> Obtain General Manager or ARL sign-off prior to making store purchases. Keep original itemized receipts.</li>
                          <li><b>POS Entry:</b> Select "Paid Out" on the POS terminal. Select the accurate category (e.g., Emergency Maintenance, Kitchen Supplies).</li>
                          <li><b>Receipt Archival:</b> Write the transaction number and purpose on the receipt and place in the daily accounting envelope.</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Financial & Incident Who to Contact Section */}
        <section id="contacts" ref={sectionRefs.contacts} className="oc-panel">
          <div className="oc-section-heading">
            <span className="oc-icon" aria-hidden="true">
              <Users size={20} />
            </span>
            <div>
              <h2>Who to Contact &amp; Submissions</h2>
              <p>Rules and contact directory for financial filings and incident reports.</p>
            </div>
          </div>

          {/* Financial & Invoice Submissions */}
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
              <FileCode size={18} style={{ color: '#ED1C24' }} />
              Financial &amp; Invoice Submissions
            </h3>
            
            <aside className="oc-warning">
              <strong>
                <AlertTriangle size={18} style={{ color: '#F9A70D' }} />
                CRITICAL FINANCIAL SEPARATION RULE
              </strong>
              <p><b>Paid Outs are NOT invoices.</b> Do NOT combine AP invoices with POS Paid Out reports. Submit each item separately to the appropriate email address listed below.</p>
            </aside>

            <div className="oc-table-container">
              <table className="oc-table">
                <thead>
                  <tr>
                    <th>Document Category</th>
                    <th>Submit To Email (Click to Copy)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="oc-badge paid">POS PAID OUTS</span>
                      <div className="text-[11px] text-slate-500 mt-1">Already posted in the POS. Send all supporting receipts &amp; summaries.</div>
                    </td>
                    <td className="oc-bold-cell">
                      <button 
                        onClick={() => handleCopyEmail('OFA-FPORG@bdo.com')}
                        style={{ color: '#000000' }}
                        className="flex items-center gap-1.5 hover:underline bg-transparent border-none font-bold cursor-pointer text-left p-0 text-black"
                      >
                        <Mail size={15} className="shrink-0 text-black" style={{ color: '#000000' }} />
                        OFA-FPORG@bdo.com
                        {copiedEmail === 'OFA-FPORG@bdo.com' ? <Check size={14} className="text-green-600 ml-1 shrink-0" /> : <Copy size={13} className="text-slate-400 opacity-60 ml-1 shrink-0" />}
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="oc-badge invoice">AP INVOICES</span>
                      <div className="text-[11px] text-slate-500 mt-1">Accounts Payable. Send all vendor invoices requiring payment.</div>
                    </td>
                    <td className="oc-bold-cell">
                      <button 
                        onClick={() => handleCopyEmail('OFA-AP-ORG@bdo.com')}
                        style={{ color: '#000000' }}
                        className="flex items-center gap-1.5 hover:underline bg-transparent border-none font-bold cursor-pointer text-left p-0 text-black"
                      >
                        <Mail size={15} className="shrink-0 text-black" style={{ color: '#000000' }} />
                        OFA-AP-ORG@bdo.com
                        {copiedEmail === 'OFA-AP-ORG@bdo.com' ? <Check size={14} className="text-green-600 ml-1 shrink-0" /> : <Copy size={13} className="text-slate-400 opacity-60 ml-1 shrink-0" />}
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="oc-badge payroll">PAYROLL</span>
                      <div className="text-[11px] text-slate-500 mt-1">Payroll inquiries, adjustments, tip logs, and documentation.</div>
                    </td>
                    <td className="oc-bold-cell">
                      <button 
                        onClick={() => handleCopyEmail('OFA-PR-ORG@bdo.com')}
                        style={{ color: '#000000' }}
                        className="flex items-center gap-1.5 hover:underline bg-transparent border-none font-bold cursor-pointer text-left p-0 text-black"
                      >
                        <Mail size={15} className="shrink-0 text-black" style={{ color: '#000000' }} />
                        OFA-PR-ORG@bdo.com
                        {copiedEmail === 'OFA-PR-ORG@bdo.com' ? <Check size={14} className="text-green-600 ml-1 shrink-0" /> : <Copy size={13} className="text-slate-400 opacity-60 ml-1 shrink-0" />}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Incident Report Guidelines */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4 flex items-center gap-2 border-b border-slate-200 pb-2">
              <AlertCircle size={18} style={{ color: '#ED1C24' }} />
              Incident Report Guidelines
            </h3>
            <p className="text-xs text-slate-500 mb-4">Send reports immediately based on target category. Ensure mandatory team CCs.</p>

            {/* Contact Cards Directory */}
            <div className="flex flex-col gap-3 mb-4">
              <div className="oc-contact-card">
                <div className="oc-contact-left">
                  <span className="oc-contact-badge employee">Employee</span>
                  <div className="oc-contact-info">
                    <h4 className="m-0 text-sm font-semibold text-slate-800">Hani</h4>
                    <p className="m-0 text-xs text-slate-500">Primary Contact | Select First Insurance</p>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => handleCopyEmail('Hani@selectfirstinsurance.com')}
                  className="oc-contact-email-btn"
                  title="Click to copy email address"
                >
                  <Mail size={14} />
                  <span className="text-xs">Hani@selectfirstinsurance.com</span>
                  {copiedEmail === 'Hani@selectfirstinsurance.com' ? (
                    <Check size={14} className="text-green-600" />
                  ) : (
                    <Copy size={12} className="opacity-60" />
                  )}
                </button>
              </div>

              <div className="oc-contact-card">
                <div className="oc-contact-left">
                  <span className="oc-contact-badge guest">Guest</span>
                  <div className="oc-contact-info">
                    <h4 className="m-0 text-sm font-semibold text-slate-800">Jim Doran</h4>
                    <p className="m-0 text-xs text-slate-500">Primary Contact | AJ Gallagher</p>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => handleCopyEmail('Jim_doran@ajg.com')}
                  className="oc-contact-email-btn"
                  title="Click to copy email address"
                >
                  <Mail size={14} />
                  <span className="text-xs">Jim_doran@ajg.com</span>
                  {copiedEmail === 'Jim_doran@ajg.com' ? (
                    <Check size={14} className="text-green-600" />
                  ) : (
                    <Copy size={12} className="opacity-60" />
                  )}
                </button>
              </div>
            </div>

            {/* CC Container Block */}
            <div className="oc-cc-container">
              <div className="oc-cc-title">Always CC the Following on All Incident Reports</div>
              <div className="oc-cc-list">
                <div 
                  className="oc-cc-item" 
                  onClick={() => handleCopyEmail('bclark@opportunityrestaurantgroup.com')}
                  title="Click to copy email address"
                >
                  <span>bclark@opportunityrestaurantgroup.com</span>
                  {copiedEmail === 'bclark@opportunityrestaurantgroup.com' ? (
                    <span className="text-green-600 flex items-center gap-1 text-xs font-bold"><Check size={14} /> Copied!</span>
                  ) : (
                    <span className="text-slate-400 flex items-center gap-1 text-xs"><Copy size={12} /> Copy</span>
                  )}
                </div>

                <div 
                  className="oc-cc-item" 
                  onClick={() => handleCopyEmail('TFurr@opportunityrestaurantgroup.com')}
                  title="Click to copy email address"
                >
                  <span>TFurr@opportunityrestaurantgroup.com</span>
                  {copiedEmail === 'TFurr@opportunityrestaurantgroup.com' ? (
                    <span className="text-green-600 flex items-center gap-1 text-xs font-bold"><Check size={14} /> Copied!</span>
                  ) : (
                    <span className="text-slate-400 flex items-center gap-1 text-xs"><Copy size={12} /> Copy</span>
                  )}
                </div>

                <div 
                  className="oc-cc-item" 
                  onClick={() => handleCopyEmail('Jdragoljevic@opportunityrestaurantgroup.com')}
                  title="Click to copy email address"
                >
                  <span>Jdragoljevic@opportunityrestaurantgroup.com</span>
                  {copiedEmail === 'Jdragoljevic@opportunityrestaurantgroup.com' ? (
                    <span className="text-green-600 flex items-center gap-1 text-xs font-bold"><Check size={14} /> Copied!</span>
                  ) : (
                    <span className="text-slate-400 flex items-center gap-1 text-xs"><Copy size={12} /> Copy</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )}

        {/* Footer */}
        <footer className="oc-footer">
          <div>© 2026 Lumps Are Good</div>
          <div className="text-xs text-slate-400 font-normal">We ❤️ You &bull; But You've Reached The End</div>
        </footer>

        {/* Floating Return to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              type="button"
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 20, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.85 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label="Return to top of page"
              title="Return to top"
              className="oc-back-to-top"
            >
              <ArrowUp size={16} className="stroke-[2.5]" />
              <span>Back to Top</span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Interactive Toast Feedback */}
        <AnimatePresence>
          {copiedEmail && (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="oc-toast"
            >
              <Check size={16} className="text-emerald-400" />
              <span>Copied email to clipboard!</span>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Test AI Chat Assistant (Commented out for now - can be re-enabled later) */}
        {/* <AiAssistant /> */}
      </main>
    </>
  );
}
