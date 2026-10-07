import { APP_SPECS } from '../data/appSpecs';

export function triggerApkDownload(urlOverride?: string) {
  const url = urlOverride || APP_SPECS.downloadUrl;
  
  // En móviles Android, la asignación directa a window.location.href es la forma 100%
  // fiable de activar el gestor de descargas del sistema operativo con el archivo completo de 20 MB.
  window.location.href = url;
}
