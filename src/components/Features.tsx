import React, { useState } from 'react';
import { 
  TrendingUp, 
  ShieldAlert, 
  Activity, 
  Coins, 
  GitFork, 
  Sliders, 
  CheckCircle2, 
  Clock, 
  Zap,
  Globe2,
  Lock,
  Smartphone
} from 'lucide-react';
import { APP_SPECS } from '../data/appSpecs';

export const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kpi' | 'risk' | 'chart' | 'category' | 'currency' | 'security'>('kpi');

  const featureTabs = [
    { id: 'kpi', label: 'Dashboard & KPIs', icon: Activity },
    { id: 'risk', label: 'Control de Riesgo', icon: ShieldAlert },
    { id: 'chart', label: 'Curva Histórica', icon: TrendingUp },
    { id: 'category', label: 'Deportes vs Casino', icon: GitFork },
    { id: 'currency', label: '10 Divisas & Cripto', icon: Coins },
    { id: 'security', label: 'Seguridad & Privacidad', icon: Lock },
  ] as const;

  return (
    <section id="features" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest mb-3">
            CAPACIDADES DEL SISTEMA
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
            Ingeniería de datos al servicio del apostador
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Cada módulo dentro de Vegas 50k fue concebido para eliminar el factor emocional
            y ofrecer métricas exactas sobre tu rendimiento.
          </p>
        </div>

        {/* Interactive Segmented Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#121824] border border-[#222E42] rounded-2xl max-w-4xl mx-auto mb-12">
          {featureTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1D283A] text-[#FFD700] border border-[#F59E0B]/40 shadow-sm'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#172030]/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#F59E0B]' : 'text-[#64748B]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Display Box */}
        <div className="rounded-3xl border border-[#222E42] bg-[#121824] p-6 sm:p-10 shadow-2xl">
          {activeTab === 'kpi' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-xs font-mono-num font-bold text-[#F59E0B] uppercase tracking-wider mb-2">
                  MÓDULO 01 · ANALÍTICAS FINANCIERAS
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-4">
                  Cuadro de Mando Ejecutivo & Métricas KPI
                </h3>
                <p className="text-base text-[#94A3B8] leading-relaxed mb-6">
                  Vegas 50k computa y actualiza al instante las métricas vitales de cualquier inversor en apuestas:
                  saldo total consolidado, beneficio o pérdida neta (P&L), retorno porcentual sobre capital (ROI),
                  tasa de acierto (Win Rate), racha actual de victorias consecutivas y cuota promedio ponderada.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3.5 rounded-xl bg-[#0B0E14] border border-[#222E42]">
                    <span className="text-xs text-[#64748B] block font-medium">ROI Periódico</span>
                    <span className="text-lg font-bold font-mono-num text-[#10B981]">+14.28%</span>
                    <p className="text-[11px] text-[#94A3B8] mt-0.5">Calculado sobre volumen real</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0B0E14] border border-[#222E42]">
                    <span className="text-xs text-[#64748B] block font-medium">Win Rate Global</span>
                    <span className="text-lg font-bold font-mono-num text-[#F8FAFC]">68.4%</span>
                    <p className="text-[11px] text-[#94A3B8] mt-0.5">26 ganadas de 38 jugadas</p>
                  </div>
                </div>
              </div>

              {/* KPI Simulated Component */}
              <div className="bg-[#0B0E14] p-6 rounded-2xl border border-[#222E42] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#222E42]">
                  <div>
                    <span className="text-xs text-[#64748B]">SALDO TOTAL ACTUAL</span>
                    <div className="text-3xl font-extrabold font-mono-num text-[#FFD700]">$52,840.00</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#64748B]">BENEFICIO NETO</span>
                    <div className="text-xl font-bold font-mono-num text-[#10B981]">+$2,840.00</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-[#141C2B] text-center border border-[#192233]">
                    <div className="text-[11px] text-[#64748B]">VOLUMEN</div>
                    <div className="text-sm font-bold font-mono-num text-[#F8FAFC]">$9,000</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#141C2B] text-center border border-[#192233]">
                    <div className="text-[11px] text-[#64748B]">CUOTA MEDIA</div>
                    <div className="text-sm font-bold font-mono-num text-[#F8FAFC]">1.92x</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#141C2B] text-center border border-[#192233]">
                    <div className="text-[11px] text-[#64748B]">RACHA VIP</div>
                    <div className="text-sm font-bold font-mono-num text-[#F59E0B]">5 Wins 🔥</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'risk' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-xs font-mono-num font-bold text-[#EF4444] uppercase tracking-wider mb-2">
                  MÓDULO 02 · SALVAGUARDA DE CAPITAL
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-4">
                  Semáforo de Riesgo y Stop-Loss Semanal
                </h3>
                <p className="text-base text-[#94A3B8] leading-relaxed mb-6">
                  El mayor enemigo del apostador es doblar apuestas tras perder (falacia del jugador). Vegas 50k
                  incorpora un centinela de pérdidas semanales. Establece tu límite máximo tolerado (ej. $3,500) y
                  el sistema evaluará tu nivel de exposición en 3 estados estrictos:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0B0E14] border border-[#10B981]/30">
                    <span className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse" />
                    <div>
                      <strong className="text-[#10B981] text-sm">Estado SAFE (&lt;70% consumido):</strong>
                      <span className="text-xs text-[#94A3B8] ml-2">Operación estándar y dentro de parámetros seguros.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0B0E14] border border-[#F59E0B]/30">
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <div>
                      <strong className="text-[#F59E0B] text-sm">Estado WARNING (70% - 90%):</strong>
                      <span className="text-xs text-[#94A3B8] ml-2">Alerta preventiva. Se recomienda moderar el tamaño de la jugada.</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0B0E14] border border-[#EF4444]/30">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                    <div>
                      <strong className="text-[#EF4444] text-sm">Estado CRITICAL (&gt;90% consumido):</strong>
                      <span className="text-xs text-[#94A3B8] ml-2">Pérdidas al borde del límite semanal. Bloqueo preventivo de operaciones.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Meter Simulation */}
              <div className="bg-[#0B0E14] p-6 rounded-2xl border border-[#222E42] space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#64748B]">MONITOR DE TOLERANCIA SEMANAL</span>
                    <h4 className="text-lg font-bold text-[#F8FAFC]">Límite de Pérdidas: $3,500.00</h4>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-bold font-mono-num rounded-md bg-[#063321] text-[#10B981] border border-[#10B981]/40">
                    SAFE (38%)
                  </span>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-[#94A3B8]">Pérdida utilizada: $1,330.00</span>
                    <span className="font-mono-num text-[#F8FAFC]">Disponible: $2,170.00</span>
                  </div>
                  <div className="h-3 w-full bg-[#172030] rounded-full overflow-hidden p-0.5 border border-[#222E42]">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#10B981] to-[#F59E0B] w-[38%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-[#94A3B8]">Volumen en juego semanal: $9,000</span>
                    <span className="font-mono-num text-[#F8FAFC]">Techo: $12,000</span>
                  </div>
                  <div className="h-3 w-full bg-[#172030] rounded-full overflow-hidden p-0.5 border border-[#222E42]">
                    <div className="h-full rounded-full bg-[#3B82F6] w-[75%]" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'chart' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-xs font-mono-num font-bold text-[#F59E0B] uppercase tracking-wider mb-2">
                  MÓDULO 03 · PROGRESIÓN VECTORIAL
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-4">
                  Curva Histórica de Evolución del Bankroll
                </h3>
                <p className="text-base text-[#94A3B8] leading-relaxed mb-6">
                  Observa la trayectoria de tu capital en una gráfica continua de alta resolución. Cada punto
                  representa un ciclo liquidado, permitiéndote identificar con exactitud los periodos de
                  drawdown y las fases de máximo rendimiento financiero.
                </p>
                <div className="flex items-center gap-4 text-sm text-[#94A3B8]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-[#FFD700]" /> Curva de Rendimiento
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-0.5 bg-[#64748B] border-dashed" /> Línea Base ($50,000)
                  </span>
                </div>
              </div>

              {/* Chart Graphic Preview */}
              <div className="bg-[#0B0E14] p-6 rounded-2xl border border-[#222E42]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold text-[#94A3B8]">EVOLUCIÓN EN EL TIEMPO</span>
                  <span className="text-xs font-mono-num text-[#10B981] font-bold">+$2,840 (+5.68%)</span>
                </div>
                <div className="h-44 w-full">
                  <svg className="w-full h-full" viewBox="0 0 400 160">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <line x1="10" y1="120" x2="390" y2="120" stroke="#334155" strokeDasharray="4 4" strokeWidth="1" />
                    <text x="340" y="115" fill="#64748B" fontSize="10" fontFamily="monospace">Base: 50k</text>
                    <path
                      d="M 10,120 L 50,110 L 100,125 L 150,95 L 200,80 L 250,90 L 300,50 L 350,35 L 390,30 L 390,150 L 10,150 Z"
                      fill="url(#chartGrad)"
                    />
                    <path
                      d="M 10,120 L 50,110 L 100,125 L 150,95 L 200,80 L 250,90 L 300,50 L 350,35 L 390,30"
                      fill="none"
                      stroke="#FFD700"
                      strokeWidth="2.5"
                    />
                    <circle cx="390" cy="30" r="5" fill="#FFD700" />
                    <circle cx="390" cy="30" r="9" fill="#FFD700" opacity="0.3" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'category' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-xs font-mono-num font-bold text-[#10B981] uppercase tracking-wider mb-2">
                  MÓDULO 04 · DESGLOSE SECTORIAL
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-4">
                  Comparativa Deportes vs Casino
                </h3>
                <p className="text-base text-[#94A3B8] leading-relaxed mb-6">
                  Muchos jugadores son rentables en apuestas deportivas pero pierden el beneficio en
                  mesas de ruleta o blackjack, o viceversa. Vegas 50k desglosa de manera tajante el dinero
                  en juego, el retorno bruto y la tasa de acierto en cada segmento.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="p-3.5 rounded-xl bg-[#0B0E14] border border-[#222E42] flex justify-between items-center">
                    <div>
                      <span className="font-bold text-[#F8FAFC]">Apuestas Deportivas</span>
                      <p className="text-xs text-[#94A3B8]">Fútbol, Baloncesto, Tenis, UFC</p>
                    </div>
                    <span className="font-mono-num text-[#10B981] font-bold">+$2,140.00 (ROI +38.3%)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0B0E14] border border-[#222E42] flex justify-between items-center">
                    <div>
                      <span className="font-bold text-[#F8FAFC]">Juegos de Casino</span>
                      <p className="text-xs text-[#94A3B8]">Ruleta en vivo, Blackjack, Poker</p>
                    </div>
                    <span className="font-mono-num text-[#FFD700] font-bold">+$700.00 (ROI +20.4%)</span>
                  </div>
                </div>
              </div>

              {/* Progress Distribution visual */}
              <div className="bg-[#0B0E14] p-6 rounded-2xl border border-[#222E42] space-y-4">
                <span className="text-xs font-semibold text-[#64748B]">DISTRIBUCIÓN DEL CAPITAL EN JUEGO</span>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#F8FAFC] font-semibold">⚽ Deportes (62%)</span>
                    <span className="text-[#94A3B8] font-mono-num">$5,580 arriesgados</span>
                  </div>
                  <div className="h-3 w-full bg-[#172030] rounded-full overflow-hidden">
                    <div className="h-full bg-[#10B981] w-[62%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#F8FAFC] font-semibold">🎰 Casino (38%)</span>
                    <span className="text-[#94A3B8] font-mono-num">$3,420 arriesgados</span>
                  </div>
                  <div className="h-3 w-full bg-[#172030] rounded-full overflow-hidden">
                    <div className="h-full bg-[#F59E0B] w-[38%]" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'currency' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-xs font-mono-num font-bold text-[#FFD700] uppercase tracking-wider mb-2">
                  MÓDULO 05 · SOPORTE INTERNACIONAL
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-4">
                  10 Divisas Fiat, Latinoamericanas & Cripto
                </h3>
                <p className="text-base text-[#94A3B8] leading-relaxed mb-6">
                  Los apostadores modernos operan a nivel global: casas de apuestas internacionales en Euros,
                  plataformas con Dólares, operadores en América Latina en moneda local
                  y salas Web3 con Tether (USDT) o Bitcoin (BTC). Vegas 50k te permite alternar de divisa
                  al instante manteniendo intacta la coherencia contable.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {APP_SPECS.supportedCurrencies.map((c) => (
                    <span key={c.code} className="px-2.5 py-1 rounded bg-[#0B0E14] border border-[#222E42] text-[#F8FAFC]">
                      {c.flag} {c.code} ({c.symbol})
                    </span>
                  ))}
                </div>
              </div>

              {/* Currencies Grid Showcase */}
              <div className="bg-[#0B0E14] p-6 rounded-2xl border border-[#222E42] grid grid-cols-2 gap-3">
                {APP_SPECS.supportedCurrencies.slice(0, 6).map((c) => (
                  <div key={c.code} className="p-3 rounded-xl bg-[#121824] border border-[#222E42] flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#F8FAFC] block">{c.name}</span>
                      <span className="text-[11px] text-[#64748B] font-mono-num">{c.code}</span>
                    </div>
                    <span className="text-lg">{c.flag}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-xs font-mono-num font-bold text-[#10B981] uppercase tracking-wider mb-2">
                  MÓDULO 06 · PRIVACIDAD ABSOLUTA
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-4">
                  Seguridad Criptográfica y Modo Local Privado
                </h3>
                <p className="text-base text-[#94A3B8] leading-relaxed mb-6">
                  Tus registros financieros pertenecen exclusivamente a ti. Vegas 50k ofrece almacenamiento
                  cifrado en tu propio dispositivo móvil para uso offline y seguro, con opción de sincronización
                  en la nube mediante Google con aislamiento estricto de datos.
                </p>
                <ul className="space-y-3 text-sm text-[#94A3B8]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Modo Invitado 100% privado sin necesidad de registro</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Aislamiento estricto por usuario y cifrado de datos</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Cero custodia de dinero real: imposible que terceros accedan a tus fondos</span>
                  </li>
                </ul>
              </div>

              {/* Security Shield Card */}
              <div className="bg-[#0B0E14] p-7 rounded-2xl border border-[#222E42] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#063321] border border-[#10B981]/40 flex items-center justify-center text-[#10B981]">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#F8FAFC]">Protección de Datos Grado Financiero</h4>
                    <span className="text-xs text-[#10B981] font-semibold">Auditoría de Acceso Aislado</span>
                  </div>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  A diferencia de aplicaciones que envían tu historial a brokers o casas de apuestas con fines
                  publicitarios, Vegas 50k respeta tu privacidad financiera al 100%. Tus registros nunca se comparten con terceros.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
