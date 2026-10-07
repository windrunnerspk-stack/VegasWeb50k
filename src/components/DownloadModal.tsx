import React from 'react';
import { X, Download, ShieldCheck, HardDrive, Smartphone, Check } from 'lucide-react';
import { APP_SPECS } from '../data/appSpecs';
import { triggerApkDownload } from '../utils/downloadApk';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    triggerApkDownload();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-[#121824] border border-[#222E42] p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#0B0E14] border border-[#222E42] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#384966] transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#172030] border-2 border-[#F59E0B] flex items-center justify-center">
            <span className="font-luxury font-black text-base text-[#FFD700]">50K</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#F8FAFC]">Descargar Vegas 50k APK</h3>
            <p className="text-xs text-[#94A3B8] font-mono-num">
              v{APP_SPECS.version} · {APP_SPECS.fileSize} · {APP_SPECS.packageName}
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="p-4 rounded-xl bg-[#0B0E14] border border-[#222E42] space-y-2 mb-6 text-xs text-[#94A3B8]">
          <div className="flex justify-between">
            <span className="text-[#64748B]">Compatibilidad:</span>
            <span className="text-[#F8FAFC] font-semibold">{APP_SPECS.minSdk} a Android 15/16</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B]">Tipo de paquete:</span>
            <span className="text-[#F8FAFC] font-semibold">Paquete Oficial Directo</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#64748B]">Seguridad:</span>
            <span className="text-[#10B981] font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Verificado sin publicidad ni malware
            </span>
          </div>
        </div>

        {/* Direct Download Action Button */}
        <div className="space-y-3">
          <a
            href={APP_SPECS.downloadUrl}
            download={`vegas-50k-v${APP_SPECS.version}.apk`}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#FFD700] to-[#F59E0B] text-[#0B0E14] font-black text-base shadow-xl shadow-[#F59E0B]/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <Download className="w-5 h-5 stroke-[2.5]" />
            <span>Descargar Archivo APK v{APP_SPECS.version} Directo Ahora</span>
          </a>
        </div>

        {/* Instructions */}
        <p className="text-[11px] text-[#64748B] text-center mt-5 leading-normal">
          Para instalar este APK en Android, recuerda permitir la instalación de aplicaciones de orígenes
          desconocidos en tu navegador si el sistema te lo solicita.
        </p>
      </div>
    </div>
  );
};
