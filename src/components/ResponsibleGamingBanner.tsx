import React from 'react';
import { AlertTriangle, Shield, HeartHandshake } from 'lucide-react';

export const ResponsibleGamingBanner: React.FC = () => {
  return (
    <div className="bg-[#121824] border-t border-b border-[#222E42] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2A1517] border border-[#EF4444]/40 flex items-center justify-center shrink-0 text-[#EF4444] font-black text-lg">
              18+
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F8FAFC] flex items-center gap-2">
                <span>Compromiso con el Juego Responsable</span>
                <span className="text-[#64748B]">·</span>
                <span className="text-[#EF4444] font-mono-num text-xs">Exclusivo Adultos</span>
              </h4>
              <p className="text-xs text-[#94A3B8] max-w-3xl mt-1 leading-relaxed">
                Vegas 50k es una herramienta analítica independiente para el registro y gestión de presupuesto.
                La aplicación no procesa apuestas, no gestiona dinero real ni fomenta las actividades de juego compulsivo.
                Juega únicamente con dinero que estés dispuesto a perder y establece siempre límites previos.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs text-[#64748B] hidden sm:inline">¿Necesitas ayuda?</span>
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-[#0B0E14] border border-[#222E42] text-xs font-semibold text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#384966] transition-colors"
            >
              BeGambleAware.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
