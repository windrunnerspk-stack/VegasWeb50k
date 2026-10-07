import React from 'react';
import { Download, FileText, ShieldCheck, Mail, Lock } from 'lucide-react';
import { APP_SPECS } from '../data/appSpecs';
import { triggerApkDownload } from '../utils/downloadApk';

export const Footer: React.FC = () => {
  const handleDirectApk = () => {
    triggerApkDownload();
  };

  return (
    <footer className="bg-[#0B0E14] text-[#94A3B8] border-t border-[#222E42] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#222E42]/70">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2C3954] via-[#151D2C] to-[#070B12] border border-[#F59E0B] flex items-center justify-center">
                <span className="font-luxury font-black text-xs text-[#FFD700]">50K</span>
              </div>
              <span className="font-luxury text-lg font-bold text-[#F8FAFC] tracking-wider">
                VEGAS 50K
              </span>
            </div>

            <p className="text-xs text-[#94A3B8] max-w-sm leading-relaxed">
              Plataforma diseñada para el control contable de bankroll, métricas de ROI y
              mitigación de riesgo semanal bajo estética Dark Luxury.
            </p>

            <div className="text-[11px] text-[#64748B] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Versión Oficial Lista para Publicación Comercial</span>
            </div>
          </div>

          {/* Col 1: Navegación */}
          <div>
            <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#what-it-does" className="hover:text-[#FFD700] transition-colors">
                  Propósito & Filosofía
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#FFD700] transition-colors">
                  Características Clave
                </a>
              </li>
              <li>
                <a href="#mockups" className="hover:text-[#FFD700] transition-colors">
                  Interfaz Móvil
                </a>
              </li>
              <li>
                <a href="#whitepaper" className="hover:text-[#FFD700] transition-colors">
                  Whitepaper Oficial
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-[#FFD700] transition-colors">
                  Descargar APK
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Documentación */}
          <div>
            <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-4">
              Documentación
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#whitepaper" className="hover:text-[#FFD700] transition-colors">
                  Criterio Kelly & Ruina
                </a>
              </li>
              <li>
                <a href="#whitepaper" className="hover:text-[#FFD700] transition-colors">
                  Algoritmo de Stop-Loss
                </a>
              </li>
              <li>
                <a href="#whitepaper" className="hover:text-[#FFD700] transition-colors">
                  Seguridad & Aislamiento
                </a>
              </li>
              <li>
                <a href="#whitepaper" className="hover:text-[#FFD700] transition-colors">
                  Motor Multidivisa 10+
                </a>
              </li>
              <li>
                <a href="#whitepaper" className="hover:text-[#FFD700] transition-colors">
                  Hoja de Ruta (Roadmap)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Descarga Rápida & Contacto */}
          <div>
            <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-4">
              Centro Oficial
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={APP_SPECS.downloadUrl}
                  download={`vegas-50k-v${APP_SPECS.version}.apk`}
                  className="hover:text-[#FFD700] transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Descargar APK v{APP_SPECS.version}</span>
                </a>
              </li>
              <li>
                <a
                  href="#whitepaper"
                  className="hover:text-[#FFD700] transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Whitepaper Oficial</span>
                </a>
              </li>
              <li>
                <span className="text-[#64748B]">
                  Soporte: <span className="text-[#94A3B8] font-mono-num">{APP_SPECS.supportEmail}</span>
                </span>
              </li>
              <li>
                <span className="text-[#64748B]">
                  Paquete: <code className="text-[#94A3B8] font-mono-num">{APP_SPECS.packageName}</code>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            © 2026 Vegas 50k. Todos los derechos reservados. Preparado para dominio propio.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#F8FAFC] font-semibold">Vegas 50k Official Web</span>
            <span>·</span>
            <span className="text-[#10B981] font-mono-num">v{APP_SPECS.version}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
