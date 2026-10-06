import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Copy, 
  Check, 
  Printer, 
  BookOpen, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  FileCode2
} from 'lucide-react';
import { 
  WHITEPAPER_METADATA, 
  WHITEPAPER_SECTIONS, 
  generateWhitepaperMarkdown 
} from '../data/whitepaperContent';

export const WhitepaperSection: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(WHITEPAPER_SECTIONS[0].id);
  const [viewMode, setViewMode] = useState<'chapters' | 'full'>('chapters');
  const [copied, setCopied] = useState<boolean>(false);

  const activeSection = WHITEPAPER_SECTIONS.find((s) => s.id === activeSectionId) || WHITEPAPER_SECTIONS[0];

  const handleDownloadMarkdown = () => {
    const markdownContent = generateWhitepaperMarkdown();
    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Vegas-50k-Whitepaper-v1.0.0.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    const markdownContent = generateWhitepaperMarkdown();
    navigator.clipboard.writeText(markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="whitepaper" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest mb-3">
            DOCUMENTO TÉCNICO OFICIAL
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
            Whitepaper de Vegas 50k
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            {WHITEPAPER_METADATA.title}
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-[#64748B] mt-2 font-mono-num">
            <span>{WHITEPAPER_METADATA.subtitle}</span>
            <span>·</span>
            <span>{WHITEPAPER_METADATA.author}</span>
          </div>
        </div>

        {/* Action bar for downloading & reading */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#121824] border border-[#222E42] mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('chapters')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                viewMode === 'chapters'
                  ? 'bg-[#1D283A] text-[#FFD700] border border-[#F59E0B]/40'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
            >
              Capítulos
            </button>
            <button
              onClick={() => setViewMode('full')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                viewMode === 'full'
                  ? 'bg-[#1D283A] text-[#FFD700] border border-[#F59E0B]/40'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
            >
              Documento Completo
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#222E42] bg-[#0B0E14] text-xs font-medium text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#384966] transition-all"
              title="Copiar markdown completo"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado' : 'Copiar Texto'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#222E42] bg-[#0B0E14] text-xs font-medium text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#384966] transition-all"
              title="Imprimir o guardar como PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#0B0E14] font-bold text-xs shadow-md shadow-[#F59E0B]/15 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Descargar Whitepaper (.md)</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        {viewMode === 'chapters' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Chapter Index (4 cols) */}
            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-3 px-2">
                ÍNDICE DE CONTENIDOS
              </div>
              {WHITEPAPER_SECTIONS.map((sec) => {
                const isSelected = sec.id === activeSectionId;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSectionId(sec.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#172030] border-[#F59E0B] text-[#FFD700]'
                        : 'bg-[#121824] border-[#222E42] text-[#94A3B8] hover:bg-[#141C2B] hover:text-[#F8FAFC]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono-num font-bold text-xs text-[#F59E0B]">{sec.number}</span>
                      <span className="text-sm font-semibold truncate max-w-[210px]">{sec.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#FFD700]' : 'text-[#64748B]'}`} />
                  </button>
                );
              })}
            </div>

            {/* Reading Panel (8 cols) */}
            <div className="lg:col-span-8 rounded-3xl border border-[#222E42] bg-[#121824] p-8 sm:p-10">
              <div className="flex items-center gap-3 text-xs font-mono-num text-[#F59E0B] font-bold uppercase mb-3">
                <span>SECCIÓN {activeSection.number}</span>
                <span className="text-[#64748B]">·</span>
                <span>ARQUITECTURA & TEORÍA</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight mb-6">
                {activeSection.title}
              </h3>
              <div className="prose prose-invert max-w-none text-base text-[#94A3B8] leading-relaxed whitespace-pre-line font-normal space-y-4">
                {activeSection.content}
              </div>
            </div>
          </div>
        ) : (
          /* Full Document Reading View */
          <div className="rounded-3xl border border-[#222E42] bg-[#121824] p-8 sm:p-12 space-y-12">
            <div className="border-b border-[#222E42] pb-6">
              <div className="text-xs font-mono-num text-[#F59E0B] font-bold tracking-widest uppercase mb-2">
                TEXTO ÍNTEGRO DEL WHITEPAPER
              </div>
              <h3 className="text-3xl font-black text-[#F8FAFC]">{WHITEPAPER_METADATA.title}</h3>
              <p className="text-sm text-[#94A3B8] mt-1">{WHITEPAPER_METADATA.subtitle}</p>
            </div>

            {WHITEPAPER_SECTIONS.map((sec) => (
              <div key={sec.id} className="border-b border-[#222E42]/60 pb-8 last:border-b-0 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono-num text-[#F59E0B] font-bold">
                  <span>CAPÍTULO {sec.number}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">{sec.title}</h4>
                <div className="text-sm sm:text-base text-[#94A3B8] leading-relaxed whitespace-pre-line">
                  {sec.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
