import React, { useState } from 'react';
import { Menu, X, Download, ShieldCheck, Sparkles } from 'lucide-react';
import { APP_SPECS } from '../data/appSpecs';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Visión General', href: '#what-it-does' },
    { label: 'Características', href: '#features' },
    { label: 'Interfaz Móvil', href: '#mockups' },
    { label: 'Whitepaper', href: '#whitepaper' },
    { label: 'Descargar APK', href: '#download' },
    { label: 'Centro Oficial', href: '#official-links' },
  ];

  const handleDirectApkDownload = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const link = document.createElement('a');
    link.href = APP_SPECS.downloadUrl;
    link.setAttribute('download', `vegas-50k-v${APP_SPECS.version}.apk`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B0E14]/95 backdrop-blur-md border-b border-[#222E42]/80 transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-[#172030] via-[#1F2C42] to-[#172030] border-b border-[#222E42]/60 px-4 py-1.5 text-center text-xs text-[#94A3B8]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span className="font-semibold text-[#F8FAFC]">Lanzamiento Oficial v{APP_SPECS.version}</span>
          <span className="text-[#64748B]">·</span>
          <span>Disponible para Android</span>
          <span className="text-[#64748B]">·</span>
          <button
            onClick={() => handleDirectApkDownload()}
            className="text-[#FFD700] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
          >
            Descarga Directa Inmediata
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-[#2C3954] via-[#151D2C] to-[#070B12] border-2 border-[#F59E0B] flex items-center justify-center shadow-lg shadow-[#F59E0B]/15 group-hover:border-[#FFD700] transition-colors">
              <div className="w-8 h-8 rounded-full border border-[#FDE68A]/60 flex items-center justify-center">
                <span className="font-luxury font-black text-xs tracking-wider text-[#FFD700]">50K</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-luxury text-xl font-bold tracking-wider text-[#F8FAFC] group-hover:text-[#FFD700] transition-colors">
                  VEGAS 50K
                </span>
                <span className="text-[10px] tracking-widest text-[#10B981] font-mono-num font-semibold border border-[#10B981]/30 px-1.5 py-0.5 rounded">
                  OFICIAL
                </span>
              </div>
              <p className="text-[11px] text-[#94A3B8] tracking-widest uppercase font-semibold">
                VIP Bankroll & Casino Betting Dashboard
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#F8FAFC] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F59E0B] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA: DIRECT DOWNLOAD */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleDirectApkDownload()}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#FFD700] to-[#F59E0B] hover:from-[#FFD700] hover:to-[#F59E0B] text-[#0B0E14] font-black text-sm shadow-lg shadow-[#F59E0B]/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Descargar APK</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-[#222E42] bg-[#121824] text-[#94A3B8] hover:text-[#F8FAFC]"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#222E42] bg-[#0F141F] px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#94A3B8] hover:text-[#F8FAFC] py-2 border-b border-[#222E42]/40"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleDirectApkDownload();
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#F59E0B] text-[#0B0E14] font-black text-center cursor-pointer shadow-md"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              Descargar APK Directo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
