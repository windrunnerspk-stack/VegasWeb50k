export interface AppSpecInfo {
  name: string;
  tagline: string;
  description: string;
  version: string;
  packageName: string;
  minSdk: string;
  targetSdk: string;
  fileSize: string;
  releaseDate: string;
  downloadUrl: string;
  supportEmail: string;
  techStack: {
    language: string;
    uiFramework: string;
    localDb: string;
    cloudService: string;
    auth: string;
  };
  supportedCurrencies: {
    code: string;
    symbol: string;
    name: string;
    flag: string;
  }[];
}

export const APP_SPECS: AppSpecInfo = {
  name: 'Vegas 50k',
  tagline: 'VIP Bankroll & Casino Betting Dashboard',
  description: 'Panel exclusivo de control financiero para apuestas y casino con analíticas en tiempo real, protección de capital y límites de riesgo semanales.',
  version: '1.0.1',
  packageName: 'com.aistudio.vegas50k.vgtrak',
  minSdk: 'Android 7.0 o superior',
  targetSdk: 'Android 15 / 16',
  fileSize: '20.0 MB',
  releaseDate: 'Octubre 2026',
  downloadUrl: '/downloads/vegas-50k-v1.0.1.apk',
  supportEmail: 'soporte@vegas50k.com',
  techStack: {
    language: 'Motor de alto rendimiento',
    uiFramework: 'Diseño Dark Luxury a 120 FPS',
    localDb: 'Almacenamiento cifrado en dispositivo',
    cloudService: 'Sincronización en la nube en tiempo real',
    auth: 'Autenticación biométrica y Google Sign-In'
  },
  supportedCurrencies: [
    { code: 'USD', symbol: '$', name: 'Dólar Estadounidense', flag: '🇺🇸' },
    { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
    { code: 'GBP', symbol: '£', name: 'Libra Esterlina', flag: '🇬🇧' },
    { code: 'MXN', symbol: 'Mex$', name: 'Peso Mexicano', flag: '🇲🇽' },
    { code: 'COP', symbol: 'COL$', name: 'Peso Colombiano', flag: '🇨🇴' },
    { code: 'ARS', symbol: 'ARS$', name: 'Peso Argentino', flag: '🇦🇷' },
    { code: 'CLP', symbol: 'CLP$', name: 'Peso Chileno', flag: '🇨🇱' },
    { code: 'BRL', symbol: 'R$', name: 'Real Brasileño', flag: '🇧🇷' },
    { code: 'USDT', symbol: '₮', name: 'Tether USDT', flag: '🟢' },
    { code: 'BTC', symbol: '₿', name: 'Bitcoin', flag: '🪙' }
  ]
};
