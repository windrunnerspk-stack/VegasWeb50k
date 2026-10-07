import { APP_SPECS } from '../data/appSpecs';

export function triggerApkDownload() {
  const url = APP_SPECS.downloadUrl;
  const link = document.createElement('a');
  link.href = url;
  
  // Si es un enlace externo (como GitHub Release o CDN), aseguramos compatibilidad
  if (url.startsWith('http://') || url.startsWith('https://')) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
  
  link.setAttribute('download', `vegas-50k-v${APP_SPECS.version}.apk`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
