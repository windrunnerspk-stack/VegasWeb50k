import React, { useState } from 'react';
import { 
  Download, 
  FileText, 
  ShieldCheck, 
  Mail, 
  Lock, 
  HeartHandshake, 
  Check, 
  Copy,
  ExternalLink,
  HelpCircle
} from 'lucide-react';
import { APP_SPECS } from '../data/appSpecs';
import { triggerApkDownload } from '../utils/downloadApk';

export const OfficialLinks: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const officialResources = [
    {
      title: 'Paquete de Instalación Oficial',
      description: 'Descarga directa del instalador verificado para dispositivos móviles.',
      actionLabel: 'Descargar APK',
      actionType: 'download',
      icon: Download,
      tag: 'Versión 1.0.0',
    },
    {
      title: 'Whitepaper & Marco Cuantitativo',
      description: 'Documento técnico con los algoritmos matemáticos y principios de capital.',
      actionLabel: 'Leer Whitepaper',
      actionType: 'whitepaper',
      icon: FileText,
      tag: 'Documento Oficial',
    },
    {
      title: 'Atención & Soporte al Usuario',
      description: 'Canal de asistencia para dudas sobre configuración de bankroll y uso de la suite.',
      actionLabel: 'Copiar Correo',
      actionType: 'email',
      icon: Mail,
      tag: 'Soporte Directo',
    },
    {
      title: 'Política de Privacidad Estricta',
      description: 'Compromiso de cero venta de datos personales y aislamiento total de balances.',
      actionLabel: 'Ver Privacidad',
      actionType: 'privacy',
      icon: Lock,
      tag: 'Seguridad',
    },
    {
      title: 'Programa de Juego Responsable',
      description: 'Guías de contención, fijación de límites y herramientas de reinicio de emergencia.',
      actionLabel: 'Ver Protocolo',
      actionType: 'gaming',
      icon: HeartHandshake,
      tag: 'Protección 18+',
    },
    {
      title: 'Centro de Ayuda & Preguntas Frecuentes',
      description: 'Respuestas sobre cómo calcular el ROI, gestionar la racha y configurar divisas.',
      actionLabel: 'Consultar FAQ',
      actionType: 'faq',
      icon: HelpCircle,
      tag: 'Guías de Uso',
    },
  ];

  const handleAction = (type: string) => {
    if (type === 'download') {
      triggerApkDownload();
    } else if (type === 'whitepaper') {
      const el = document.getElementById('whitepaper');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'email') {
      navigator.clipboard.writeText(APP_SPECS.supportEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'faq' || type === 'privacy' || type === 'gaming') {
      const el = document.getElementById('what-it-does');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="official-links" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest mb-3">
            CENTRO OFICIAL & ECOSISTEMA
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
            Recursos Oficiales de Vegas 50k
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Información institucional, descargas oficiales, documentación técnica y canales de asistencia.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {officialResources.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#222E42] bg-[#121824] p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#F59E0B]/50 hover:bg-[#141C2B] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0B0E14] border border-[#222E42] flex items-center justify-center text-[#F59E0B] group-hover:text-[#FFD700] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono-num font-semibold text-[#64748B]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#FFD700] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#222E42]/60">
                  <button
                    onClick={() => handleAction(item.actionType)}
                    className="w-full py-2.5 px-3 rounded-lg bg-[#0B0E14] hover:bg-[#192334] border border-[#222E42] text-xs font-bold text-[#F8FAFC] hover:text-[#FFD700] flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>
                      {item.actionType === 'email' && copiedEmail
                        ? '¡Correo Copiado!'
                        : item.actionLabel}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Readiness Note */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0B0E14] border border-[#222E42] text-xs text-[#94A3B8] leading-relaxed max-w-4xl mx-auto flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse shrink-0" />
            <span>
              <strong className="text-[#F8FAFC]">Sitio Web Oficial Preparado para Dominio Propio:</strong>{' '}
              Estructura estática optimizada para vinculación inmediata a cualquier dominio comercial (.com, .io, .vip).
            </span>
          </div>
          <span className="text-[#F59E0B] font-mono-num font-bold text-xs shrink-0">
            SSL / HTTPS Ready
          </span>
        </div>
      </div>
    </section>
  );
};
