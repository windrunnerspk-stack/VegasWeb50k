import React, { useState } from 'react';
import { 
  Download, 
  Smartphone, 
  ShieldCheck, 
  Check, 
  Copy, 
  AlertCircle,
  HardDrive,
  QrCode,
  Sparkles,
  Lock
} from 'lucide-react';
import { APP_SPECS } from '../data/appSpecs';
import { triggerApkDownload } from '../utils/downloadApk';

export const DownloadSection: React.FC = () => {
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleDownloadApk = () => {
    setDownloadProgress(10);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev === null) return 10;
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDownloadProgress(null), 1500);
          return 100;
        }
        return prev + 30;
      });
    }, 120);

    triggerApkDownload();
  };

  const handleCopyDownloadLink = () => {
    const fullUrl = APP_SPECS.downloadUrl.startsWith('http')
      ? APP_SPECS.downloadUrl
      : `${window.location.origin}${APP_SPECS.downloadUrl}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="download" className="py-20 lg:py-28 bg-[#0D121B]/80 border-t border-b border-[#222E42]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest mb-3">
            CENTRO OFICIAL DE DESCARGA
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
            Obtén Vegas 50k para tu Teléfono
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Descarga directa y segura del paquete oficial de instalación. Sin intermediarios, sin anuncios
            y optimizado para el máximo rendimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Download Card (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-[#222E42] bg-[#121824] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#222E42]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2C3954] via-[#151D2C] to-[#070B12] border-2 border-[#F59E0B] flex items-center justify-center shadow-lg shadow-[#F59E0B]/20">
                  <span className="font-luxury font-black text-xl text-[#FFD700]">50K</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#F8FAFC]">Paquete Oficial Vegas 50k</h3>
                  <div className="text-xs text-[#94A3B8] font-mono-num flex items-center gap-2 mt-0.5">
                    <span>Versión {APP_SPECS.version}</span>
                    <span>·</span>
                    <span>{APP_SPECS.fileSize}</span>
                    <span>·</span>
                    <span className="text-[#10B981] font-semibold">Producción Estable</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#063321] border border-[#10B981]/30 text-xs font-bold text-[#10B981]">
                <ShieldCheck className="w-4 h-4" />
                <span>Certificado Limpio & Verificado</span>
              </div>
            </div>

            {/* Technical Specs Table */}
            <div className="py-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono-num border-b border-[#222E42]">
              <div>
                <span className="text-[#64748B] block uppercase text-[10px]">Identificador</span>
                <span className="text-[#F8FAFC] truncate block font-medium" title={APP_SPECS.packageName}>
                  {APP_SPECS.packageName}
                </span>
              </div>
              <div>
                <span className="text-[#64748B] block uppercase text-[10px]">Compatibilidad</span>
                <span className="text-[#F8FAFC] font-medium">{APP_SPECS.minSdk}</span>
              </div>
              <div>
                <span className="text-[#64748B] block uppercase text-[10px]">Arquitectura</span>
                <span className="text-[#F8FAFC] font-medium">Universal (64-bit)</span>
              </div>
            </div>

            {/* Direct Download Button */}
            <div className="pt-6 space-y-3">
              <a
                href={APP_SPECS.downloadUrl}
                download={`vegas-50k-v${APP_SPECS.version}.apk`}
                className="w-full py-4.5 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#FFD700] to-[#F59E0B] text-[#0B0E14] font-black text-lg shadow-xl shadow-[#F59E0B]/25 hover:shadow-[#F59E0B]/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer text-center"
              >
                <Download className="w-6 h-6 stroke-[2.5]" />
                <span>Descargar APK Oficial v{APP_SPECS.version} (20 MB)</span>
              </a>

              <a
                href="/downloads/vegas-50k-v1.0.1.apk"
                download="vegas-50k-v1.0.1.apk"
                className="w-full py-3 rounded-xl border border-[#222E42] bg-[#0B0E14] hover:bg-[#172030] hover:border-[#384966] text-[#F8FAFC] font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>Descarga Directa Servidor Web v{APP_SPECS.version} (20 MB)</span>
              </a>

              <div className="flex items-center justify-between text-xs text-[#94A3B8] pt-1">
                <span>Descarga libre y directa sin tiendas de terceros</span>
                <button
                  onClick={handleCopyDownloadLink}
                  className="text-[#FFD700] hover:underline inline-flex items-center gap-1 font-semibold cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Enlace copiado' : 'Copiar enlace'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Installation Guide (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-[#222E42] bg-[#121824] p-6 sm:p-8">
              <h4 className="text-lg font-bold text-[#F8FAFC] mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#F59E0B]" />
                <span>Instalación Rápida en 4 Pasos</span>
              </h4>

              <ol className="space-y-4 text-xs sm:text-sm text-[#94A3B8]">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#172030] text-[#FFD700] border border-[#222E42] flex items-center justify-center shrink-0 font-bold font-mono-num text-xs">
                    1
                  </span>
                  <div>
                    <strong className="text-[#F8FAFC] block">Descarga el archivo APK</strong>
                    Presiona el botón dorado para descargar directamente el paquete a tu teléfono.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#172030] text-[#FFD700] border border-[#222E42] flex items-center justify-center shrink-0 font-bold font-mono-num text-xs">
                    2
                  </span>
                  <div>
                    <strong className="text-[#F8FAFC] block">Habilitar Instalación</strong>
                    Si tu navegador solicita confirmación para instalar aplicaciones directas, pulsa "Permitir".
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#172030] text-[#FFD700] border border-[#222E42] flex items-center justify-center shrink-0 font-bold font-mono-num text-xs">
                    3
                  </span>
                  <div>
                    <strong className="text-[#F8FAFC] block">Tocar "Instalar"</strong>
                    Abre el archivo descargado desde tus notificaciones o gestor de descargas y confirma.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#172030] text-[#FFD700] border border-[#222E42] flex items-center justify-center shrink-0 font-bold font-mono-num text-xs">
                    4
                  </span>
                  <div>
                    <strong className="text-[#F8FAFC] block">¡Listo para Operar!</strong>
                    Abre Vegas 50k, configura tu divisa favorita y toma el control de tu bankroll.
                  </div>
                </li>
              </ol>
            </div>

            {/* Quality & Security Guarantee Card */}
            <div className="rounded-3xl border border-[#222E42] bg-[#121824] p-6 sm:p-8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#063321] border border-[#10B981]/40 flex items-center justify-center shrink-0 text-[#10B981]">
                <Lock className="w-5 h-5" />
              </div>
              <div className="text-xs text-[#94A3B8]">
                <strong className="text-[#F8FAFC] block text-sm mb-1">Garantía de Privacidad Total</strong>
                La aplicación no contiene publicidad invasiva, software espía ni permisos ocultos. Funciona
                con total autonomía en tu teléfono móvil.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
