export interface WhitepaperSectionItem {
  id: string;
  number: string;
  title: string;
  content: string;
}

export const WHITEPAPER_METADATA = {
  title: 'Vegas 50k: Marco Teórico y Arquitectura de Gestión Algorítmica de Bankroll',
  subtitle: 'Whitepaper Oficial · Versión 1.0.1 · Edición Comercial',
  author: 'Vegas 50k Core Analytics & Engineering',
  appPackage: 'com.aistudio.vegas50k.vgtrak',
};

export const WHITEPAPER_SECTIONS: WhitepaperSectionItem[] = [
  {
    id: 'abstract',
    number: '01',
    title: 'Resumen Ejecutivo & Declaración del Problema',
    content: `En la industria global de apuestas deportivas y juegos de casino, más del 92% de los participantes experimentan pérdidas acumuladas no debido a la falta de intuición en eventos específicos, sino a una falla estructural sistemática: la ausencia de disciplina financiera, la carencia de métricas objetivas de Retorno de Inversión (ROI) y la inexistencia de mecanismos automatizados de contención ante rachas negativas (drawdown o efecto tilt).

Vegas 50k fue concebida como una plataforma diseñada para tratar el capital de juego como una cartera de activos que requiere modelado cuantitativo, límites paramétricos semanales y trazabilidad contable en tiempo real.

El proyecto desacopla las emociones de las decisiones de asignación de capital mediante una interfaz táctil de estética Dark Luxury, ofreciendo a los usuarios control granular sobre cuotas, volumen en riesgo, tasas de acierto (win rate) y límites de stop-loss programables.`
  },
  {
    id: 'mathematics',
    number: '02',
    title: 'Fundamentos Matemáticos: Criterio Kelly & Control de Ruina',
    content: `La probabilidad de ruina del apostador (Gambler's Ruin) se aproxima asintóticamente a 1 cuando el volumen de apuestas no está estrictamente acotado por una fracción finita del capital total. Vegas 50k implementa de manera nativa los siguientes principios analíticos:

1. Fracción de Apuesta Conservadora (Fractional Kelly):
Recomendación de stake proporcional calculada mediante:
f* = (b*p - q) / b
Donde 'b' son las cuotas netas decimales menos 1, 'p' es la probabilidad estimada de éxito y 'q' es (1 - p). Vegas 50k promueve parametrizaciones de seguridad de 1/4 Kelly para evitar volatilidades drásticas.

2. Umbrales de Alerta de Riesgo Dinámico:
El sistema clasifica el estado de la cuenta en tres niveles de riesgo en función del capital semanal consumido frente a los límites definidos:
· SAFE (< 70% del límite semanal consumido): Operación nominal estándar.
· WARNING (70% - 90% del límite): El indicador visual transmuta a ámbar dorado, alertando al usuario sobre la proximidad de su techo de tolerancia.
· CRITICAL (> 90% del límite): Activación de advertencia roja carmesí y sugerencia de congelamiento de operaciones (Stop Loss forzoso).

3. Métricas Clave de Rendimiento (KPIs):
· ROI Periódico = (Beneficio Neto / Volumen Total Apostado) × 100
· Win Rate = (Apuestas Ganadas / Apuestas Totales Liquidadas) × 100
· Cuota Promedio Ponderada y Racha Actual (Streak).`
  },
  {
    id: 'architecture',
    number: '03',
    title: 'Arquitectura Técnica y Rendimiento en Dispositivos Móviles',
    content: `Para garantizar latencias nulas y máxima confiabilidad en entornos de alta exigencia, la aplicación móvil rechaza marcos híbridos o navegadores web embebidos, implementando una arquitectura de procesamiento nativa:

1. Motor de Alta Velocidad:
· Compilación optimizada para procesadores de 64 bits (arm64-v8a y x86_64).
· Compatibilidad universal con dispositivos móviles modernos.

2. Capa de Presentación Fluida:
· Interfaz reactiva a 120 FPS con transiciones instantáneas.
· Arquitectura Unidirectional Data Flow (UDF) que garantiza consistencia de saldo en pantalla.
· Gráficos vectoriales renderizados en hardware para curvas de bankroll sin retrasos.

3. Almacenamiento Local Offline-First:
· Base de datos local cifrada en el dispositivo para operaciones instantáneas sin conexión a internet.
· Tablas relacionales indexadas para histórico de movimientos, configuraciones de riesgo y balances.`
  },
  {
    id: 'cloud-security',
    number: '04',
    title: 'Sincronización en Nube & Modelo de Seguridad',
    content: `A diferencia de las hojas de cálculo tradicionales o aplicaciones locales vulnerables a la pérdida de dispositivo, Vegas 50k integra una capa de persistencia en la nube de alta disponibilidad:

1. Autenticación Criptográfica:
· Soporte para inicio de sesión seguro con Google y credenciales biométricas.
· Posibilidad de operar en modo local totalmente anónimo o con respaldo remoto.

2. Aislamiento Estricto por Usuario:
· Cada usuario cuenta con un espacio de almacenamiento privado y cifrado en la nube.
· Ningún tercero puede visualizar tu volumen apostado ni tus estadísticas financieras.`
  },
  {
    id: 'multicurrency',
    number: '05',
    title: 'Motor Multidivisa & Respaldo Cripto',
    content: `Los jugadores profesionales operan en diversas casas de apuestas internacionales y salas de juego globales. Vegas 50k incorpora un subsistema de formateo multidivisa de alta fidelidad:

· Divisas Fiat Principales: USD ($), EUR (€), GBP (£).
· Divisas Regionales Latinoamericanas: MXN (Mex$), COP (COL$), ARS (ARS$), CLP (CLP$), BRL (R$).
· Activos Digitales & Stablecoins: Tether USDT (₮) y Bitcoin BTC (🪙).

El sistema almacena los valores como cantidades numéricas de doble precisión y desacopla la representación visual según la configuración seleccionada, garantizando que el usuario pueda migrar de divisa sin distorsionar el historial de apuestas.`
  },
  {
    id: 'roadmap',
    number: '06',
    title: 'Hoja de Ruta del Ecosistema',
    content: `El plan de evolución de Vegas 50k contempla mejoras continuas en analítica y predictibilidad:

· Fase 1 (v1.0 - Lanzamiento Oficial):
Dashboard VIP completo, motor de apuestas deportivas y casino, base de datos local y en la nube, control de riesgo semanal, gráficos interactivos de bankroll y paquete de instalación optimizado.

· Fase 2 (v1.5):
Exportación de informes contables en formato CSV y PDF, calculadora integrada de arbitraje y valor esperado (+EV), y widgets de acceso rápido.

· Fase 3 (v2.0):
Alertas proactivas cuando el límite de stop-loss alcance el 85%, y analíticas avanzadas de correlación por disciplina y mercado.`
  },
  {
    id: 'responsible-gaming',
    number: '07',
    title: 'Compromiso Ético & Juego Responsable',
    content: `Vegas 50k no es una casa de apuestas, no procesa transacciones con dinero real y no incentiva las apuestas compulsivas. Su propósito es exclusivamente analítico, educativo y de gestión de riesgo financiero.

Se incluye una función de "Reinicio de Emergencia" (Emergency Reset) y herramientas de autocontrol para ayudar a los usuarios a poner fin a patrones de juego problemáticos y respetar límites financieros inquebrantables.`
  }
];

export function generateWhitepaperMarkdown(): string {
  let doc = `# ${WHITEPAPER_METADATA.title}\n`;
  doc += `## ${WHITEPAPER_METADATA.subtitle}\n\n`;
  doc += `*Autor:* ${WHITEPAPER_METADATA.author}\n`;
  doc += `*Identificador de Paquete:* ${WHITEPAPER_METADATA.appPackage}\n\n`;
  doc += `---\n\n`;

  WHITEPAPER_SECTIONS.forEach((section) => {
    doc += `### ${section.number}. ${section.title}\n\n`;
    doc += `${section.content}\n\n`;
    doc += `---\n\n`;
  });

  doc += `\n*© 2026 Vegas 50k Project. Todos los derechos reservados.*\n`;
  return doc;
}
