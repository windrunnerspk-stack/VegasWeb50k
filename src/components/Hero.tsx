import React from 'react';
import { Download, FileText, ShieldAlert, Sparkles, SlidersHorizontal, ArrowDown } from 'lucide-react';
import { APP_SPECS } from '../data/appSpecs';
import { triggerApkDownload } from '../utils/downloadApk';

export const Hero: React.FC = () => {
  const handleDirectDownload = () => {
    triggerApkDownload();
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background ambient luxury lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#F59E0B]/12 via-[#10B981]/5 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#172030]/60 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Executive Subtitle kicker with typographic separators */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F59E0B] mb-6">
            <span>Plataforma Financiera VIP</span>
            <span className="text-[#64748B]">·</span>
            <span>Gestión Profesional de Bankroll</span>
            <span className="text-[#64748B]">·</span>
            <span className="text-[#10B981]">Versión Oficial 1.0.0</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.15] mb-6">
            Control de bankroll y{' '}
            <span className="bg-gradient-to-r from-[#FFD700] via-[#F59E0B] to-[#FDE68A] bg-clip-text text-transparent">
              gestión de riesgo
            </span>{' '}
            para apostadores de élite.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed mb-10 max-w-3xl mx-auto font-normal">
            <strong className="text-[#F8FAFC] font-semibold">Vegas 50k</strong> es la plataforma
            diseñada para transformar el seguimiento de apuestas deportivas y juegos de casino
            en una disciplina financiera de alta precisión. Monitorea tu capital, domina tu ROI neto en tiempo real
            y protege tu saldo con un estricto semáforo semanal de Stop-Loss.
          </p>

          {/* Primary Action Buttons: Direct APK download right on the button */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href={APP_SPECS.downloadUrl}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#FFD700] to-[#F59E0B] text-[#0B0E14] font-black text-base shadow-xl shadow-[#F59E0B]/25 hover:shadow-[#F59E0B]/40 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center gap-3 cursor-pointer"
            >
              <Download className="w-5 h-5 stroke-[2.5]" />
              <span>Descargar APK Directo (v{APP_SPECS.version})</span>
            </a>

            <a
              href="#whitepaper"
              className="px-6 py-4 rounded-xl border border-[#222E42] bg-[#121824] hover:bg-[#172030] hover:border-[#384966] text-[#F8FAFC] font-bold text-base transition-all inline-flex items-center gap-2"
            >
              <FileText className="w-5 h-5 text-[#F59E0B]" />
              <span>Leer Whitepaper Oficial</span>
            </a>

            <a
              href="#features"
              className="px-6 py-4 rounded-xl border border-[#222E42]/80 bg-[#0B0E14] hover:bg-[#121824] text-[#94A3B8] hover:text-[#F8FAFC] font-semibold text-base transition-all inline-flex items-center gap-2"
            >
              <SlidersHorizontal className="w-5 h-5 text-[#10B981]" />
              <span>Ver Funciones</span>
            </a>
          </div>

          {/* Telemetry Highlights (Zero-Pill Discipline) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#222E42]/70 text-left">
            <div>
              <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1">
                Bankroll Base
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono-num text-[#F8FAFC] tracking-tight">
                $50,000 <span className="text-sm font-normal text-[#94A3B8]">USD</span>
              </div>
              <div className="text-xs text-[#94A3B8] mt-1">Configurable por el usuario</div>
            </div>

            <div>
              <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1">
                Control de Riesgo
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono-num text-[#10B981] tracking-tight flex items-center gap-1.5">
                <span>Safe</span>
                <span className="text-xs font-normal text-[#94A3B8]">/ Warn / Crit</span>
              </div>
              <div className="text-xs text-[#94A3B8] mt-1">Stop-Loss semanal reactivo</div>
            </div>

            <div>
              <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1">
                Motor Multidivisa
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono-num text-[#FFD700] tracking-tight">
                10 Divisas
              </div>
              <div className="text-xs text-[#94A3B8] mt-1">Fiat global, LATAM y Cripto</div>
            </div>

            <div>
              <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1">
                Disponibilidad
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono-num text-[#F8FAFC] tracking-tight">
                Android
              </div>
              <div className="text-xs text-[#10B981] mt-1">Versión Oficial Lista</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
