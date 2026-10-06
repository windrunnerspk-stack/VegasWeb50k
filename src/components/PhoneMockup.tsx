import React, { useState } from 'react';
import { 
  Wifi, 
  BatteryMedium, 
  Plus, 
  TrendingUp, 
  Shield, 
  PieChart, 
  Sliders, 
  DollarSign, 
  RotateCcw,
  Check,
  ChevronRight,
  Flame,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { APP_SPECS } from '../data/appSpecs';

export const PhoneMockup: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<'dashboard' | 'risk' | 'chart' | 'category' | 'bet_slip'>('dashboard');
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'EUR' | 'COP' | 'USDT' | 'BTC'>('USD');

  const currencySymbols = {
    USD: '$',
    EUR: '€',
    COP: 'COL$',
    USDT: '₮',
    BTC: '₿',
  };

  const currentSym = currencySymbols[selectedCurrency];

  return (
    <section id="mockups" className="py-20 lg:py-28 bg-[#0D121B]/70 border-t border-b border-[#222E42]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest mb-3">
            MOCKUPS DE ALTA FIDELIDAD
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
            Explora la Interfaz Nativa de Vegas 50k
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Interactúa con las pantallas reales de la aplicación. Diseñadas bajo el estándar Dark Luxury
            con renderizado ultra fluido a 120 FPS.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Controls & Screen Selector (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div>
              <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2">
                PANTALLAS DISPONIBLES
              </div>
              <div className="space-y-2">
                {[
                  {
                    id: 'dashboard',
                    title: '1. Dashboard Principal & Saldo',
                    desc: 'Balance consolidado, KPIs clave de ROI y lista de últimas jugadas.',
                    icon: DollarSign,
                  },
                  {
                    id: 'risk',
                    title: '2. Centinela de Riesgo & Stop-Loss',
                    desc: 'Semáforo semanal para evitar el tilt y respetar el presupuesto.',
                    icon: Shield,
                  },
                  {
                    id: 'chart',
                    title: '3. Curva Vectorial de Bankroll',
                    desc: 'Histórico gráfico de P&L acumulado a lo largo del tiempo.',
                    icon: TrendingUp,
                  },
                  {
                    id: 'category',
                    title: '4. Comparativa Deportes vs Casino',
                    desc: 'Métricas segmentadas de volumen, win rate y retornos.',
                    icon: PieChart,
                  },
                  {
                    id: 'bet_slip',
                    title: '5. Hoja de Registro (Add Bet Sheet)',
                    desc: 'Formulario modal nativo para ingresar nuevas apuestas.',
                    icon: Plus,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const isCurrent = selectedScreen === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedScreen(item.id as any)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                        isCurrent
                          ? 'bg-[#172030] border-[#F59E0B] shadow-lg shadow-[#F59E0B]/10'
                          : 'bg-[#121824] border-[#222E42] hover:bg-[#141C2B] hover:border-[#384966]'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                          isCurrent
                            ? 'bg-[#F59E0B] text-[#0B0E14]'
                            : 'bg-[#0B0E14] text-[#94A3B8] border border-[#222E42]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className={`text-sm font-bold ${isCurrent ? 'text-[#FFD700]' : 'text-[#F8FAFC]'}`}>
                          {item.title}
                        </div>
                        <div className="text-xs text-[#94A3B8] mt-0.5 leading-snug">
                          {item.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Currency switcher inside mockup */}
            <div className="p-4 rounded-xl bg-[#121824] border border-[#222E42]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#94A3B8]">Probar Divisa en el Mockup:</span>
                <span className="text-xs font-mono-num text-[#F59E0B]">{selectedCurrency}</span>
              </div>
              <div className="flex gap-2">
                {(['USD', 'EUR', 'COP', 'USDT', 'BTC'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setSelectedCurrency(curr)}
                    className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                      selectedCurrency === curr
                        ? 'bg-[#F59E0B] text-[#0B0E14] border-[#F59E0B]'
                        : 'bg-[#0B0E14] text-[#94A3B8] border-[#222E42] hover:text-[#F8FAFC]'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Smartphone Mockup Frame (7 Cols) */}
          <div className="lg:col-span-7 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              {/* Outer Phone Casing with Titanium Bezel */}
              <div className="relative rounded-[50px] p-3.5 bg-gradient-to-b from-[#2C384D] via-[#1E2738] to-[#121824] border-4 border-[#334259] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_rgba(245,158,11,0.15)] ring-1 ring-white/10">
                {/* Physical buttons styling on sides */}
                <div className="absolute -left-4.5 top-28 w-1 h-12 bg-[#2C384D] rounded-l" />
                <div className="absolute -left-4.5 top-44 w-1 h-12 bg-[#2C384D] rounded-l" />
                <div className="absolute -right-4.5 top-32 w-1 h-16 bg-[#2C384D] rounded-r" />

                {/* Inner Screen Glass */}
                <div className="relative w-full h-[690px] rounded-[38px] bg-[#0B0E14] overflow-hidden flex flex-col border border-[#1E293B]">
                  {/* Status Bar */}
                  <div className="pt-2 px-6 pb-2 flex items-center justify-between text-xs text-[#94A3B8] shrink-0 select-none bg-[#0B0E14]">
                    <span className="font-semibold text-[#F8FAFC] font-mono-num text-[11px]">11:35</span>
                    {/* Punch hole camera */}
                    <div className="w-4 h-4 rounded-full bg-black border border-[#222E42] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#172030]" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <Wifi className="w-3.5 h-3.5 text-[#F8FAFC]" />
                      <BatteryMedium className="w-4 h-4 text-[#10B981]" />
                    </div>
                  </div>

                  {/* Top App Header inside Phone */}
                  <div className="px-4 py-2 border-b border-[#1E293B] bg-[#121824] shrink-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#1F293D] border border-[#F59E0B] flex items-center justify-center">
                          <span className="text-[10px] font-black text-[#FFD700]">50K</span>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#F8FAFC] tracking-wide">VEGAS 50K</div>
                          <div className="text-[9px] text-[#F59E0B] font-semibold tracking-wider">VIP MEMBER</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono-num px-2 py-0.5 rounded bg-[#0B0E14] border border-[#222E42] text-[#FFD700]">
                          {selectedCurrency}
                        </span>
                        <div className="w-6 h-6 rounded-full bg-[#1F293D] border border-[#334259] flex items-center justify-center text-[10px] text-[#F8FAFC]">
                          DL
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Screen Content */}
                  <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3.5 scrollbar-thin">
                    {/* SCREEN 1: DASHBOARD */}
                    {selectedScreen === 'dashboard' && (
                      <div className="space-y-3">
                        {/* Balance Card */}
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#172030] to-[#121824] border border-[#222E42] relative overflow-hidden">
                          <div className="absolute right-0 top-0 translate-x-3 -translate-y-3 w-20 h-20 bg-[#F59E0B]/10 rounded-full blur-xl pointer-events-none" />
                          <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">
                            BANKROLL DISPONIBLE
                          </div>
                          <div className="text-2xl font-black font-mono-num text-[#FFD700] tracking-tight mt-0.5">
                            {currentSym}52,840.00
                          </div>
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-[11px] font-bold font-mono-num text-[#10B981] flex items-center">
                              <ArrowUpRight className="w-3.5 h-3.5" /> +{currentSym}2,840.00 (+5.68%)
                            </span>
                            <span className="text-[10px] text-[#64748B]">· Esta Semana</span>
                          </div>
                        </div>

                        {/* KPI mini 2x2 grid */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-2.5 rounded-xl bg-[#141C2B] border border-[#1E293B]">
                            <div className="text-[10px] text-[#64748B]">ROI PERIÓDICO</div>
                            <div className="text-sm font-bold font-mono-num text-[#10B981]">+14.28%</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#141C2B] border border-[#1E293B]">
                            <div className="text-[10px] text-[#64748B]">WIN RATE</div>
                            <div className="text-sm font-bold font-mono-num text-[#F8FAFC]">68.4%</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#141C2B] border border-[#1E293B]">
                            <div className="text-[10px] text-[#64748B]">RACHA ACTUAL</div>
                            <div className="text-sm font-bold font-mono-num text-[#F59E0B]">5 Wins 🔥</div>
                          </div>
                          <div className="p-2.5 rounded-xl bg-[#141C2B] border border-[#1E293B]">
                            <div className="text-[10px] text-[#64748B]">CUOTA MEDIA</div>
                            <div className="text-sm font-bold font-mono-num text-[#F8FAFC]">1.92x</div>
                          </div>
                        </div>

                        {/* Recent Bets list */}
                        <div>
                          <div className="flex items-center justify-between text-[11px] font-bold text-[#64748B] mb-1.5 uppercase">
                            <span>ÚLTIMAS JUGADAS</span>
                            <span className="text-[#F59E0B]">VER TODAS (38)</span>
                          </div>

                          <div className="space-y-1.5">
                            <div className="p-2.5 rounded-xl bg-[#121824] border border-[#1E293B] flex items-center justify-between">
                              <div>
                                <div className="text-xs font-bold text-[#F8FAFC]">Real Madrid vs Man City</div>
                                <div className="text-[10px] text-[#94A3B8]">Más de 2.5 goles · Cuota 1.95</div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs font-bold font-mono-num text-[#10B981]">+{currentSym}237.50</div>
                                <span className="text-[9px] font-bold text-[#10B981]">WON</span>
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-[#121824] border border-[#1E293B] flex items-center justify-between">
                              <div>
                                <div className="text-xs font-bold text-[#F8FAFC]">Mesa Ruleta VIP #1</div>
                                <div className="text-[10px] text-[#94A3B8]">Color Rojo · Cuota 2.00</div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs font-bold font-mono-num text-[#EF4444]">-{currentSym}150.00</div>
                                <span className="text-[9px] font-bold text-[#EF4444]">LOST</span>
                              </div>
                            </div>

                            <div className="p-2.5 rounded-xl bg-[#121824] border border-[#1E293B] flex items-center justify-between">
                              <div>
                                <div className="text-xs font-bold text-[#F8FAFC]">Lakers vs Celtics</div>
                                <div className="text-[10px] text-[#94A3B8]">Gana Lakers -4.5 · Cuota 1.88</div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs font-bold font-mono-num text-[#F59E0B]">Pendiente</div>
                                <span className="text-[9px] font-bold text-[#F59E0B]">PENDING</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* SCREEN 2: RISK CONTROL */}
                    {selectedScreen === 'risk' && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-[#121824] border border-[#10B981]/40">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[#F8FAFC]">ESTADO DE RIESGO:</span>
                            <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-[#063321] text-[#10B981] border border-[#10B981]/50">
                              SAFE (38%)
                            </span>
                          </div>
                          <p className="text-[11px] text-[#94A3B8] mt-1.5 leading-tight">
                            Tus pérdidas semanales están dentro del rango seguro. Se recomienda mantener el tamaño de apuesta (stake).
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#141C2B] border border-[#1E293B] space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-[#94A3B8]">Pérdida Semanal:</span>
                            <span className="font-mono-num text-[#EF4444] font-bold">
                              {currentSym}1,330 / {currentSym}3,500
                            </span>
                          </div>
                          <div className="h-2 w-full bg-[#0B0E14] rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#10B981] to-[#F59E0B] w-[38%]" />
                          </div>
                          <div className="text-[10px] text-[#64748B] text-right font-mono-num">
                            Restante antes de Stop-Loss: {currentSym}2,170
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#141C2B] border border-[#1E293B] space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className="text-[#94A3B8]">Volumen en Juego:</span>
                            <span className="font-mono-num text-[#38BDF8] font-bold">
                              {currentSym}9,000 / {currentSym}12,000
                            </span>
                          </div>
                          <div className="h-2 w-full bg-[#0B0E14] rounded-full overflow-hidden">
                            <div className="h-full bg-[#38BDF8] w-[75%]" />
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#0B0E14] border border-[#222E42] text-center">
                          <span className="text-xs text-[#F59E0B] font-bold block mb-1">
                            ⚙ Ajustar Parámetros de Riesgo
                          </span>
                          <span className="text-[10px] text-[#94A3B8]">
                            Límite de pérdida y volumen semanal configurable directamente en la aplicación.
                          </span>
                        </div>
                      </div>
                    )}

                    {/* SCREEN 3: CHART */}
                    {selectedScreen === 'chart' && (
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-[#121824] border border-[#222E42]">
                          <div className="text-[10px] font-bold text-[#64748B]">PROYECCIÓN TEMPORAL</div>
                          <div className="text-lg font-bold font-mono-num text-[#FFD700]">
                            {currentSym}52,840.00
                          </div>
                          <div className="text-[10px] text-[#10B981] font-semibold">
                            Crecimiento neto: +{currentSym}2,840.00
                          </div>
                        </div>

                        {/* Chart Box */}
                        <div className="p-3 rounded-xl bg-[#0B0E14] border border-[#1E293B]">
                          <div className="h-44 w-full">
                            <svg className="w-full h-full" viewBox="0 0 280 140">
                              <defs>
                                <linearGradient id="phoneChartGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              <line x1="0" y1="100" x2="280" y2="100" stroke="#334155" strokeDasharray="3 3" />
                              <text x="210" y="95" fill="#64748B" fontSize="8" fontFamily="monospace">Base: 50k</text>
                              <path
                                d="M 0,100 L 40,90 L 80,105 L 120,80 L 160,65 L 200,75 L 240,40 L 280,25 L 280,140 L 0,140 Z"
                                fill="url(#phoneChartGrad)"
                              />
                              <path
                                d="M 0,100 L 40,90 L 80,105 L 120,80 L 160,65 L 200,75 L 240,40 L 280,25"
                                fill="none"
                                stroke="#FFD700"
                                strokeWidth="2"
                              />
                              <circle cx="280" cy="25" r="4" fill="#FFD700" />
                            </svg>
                          </div>
                        </div>

                        <div className="flex justify-between text-[10px] text-[#64748B] font-mono-num">
                          <span>Lun</span>
                          <span>Mar</span>
                          <span>Mié</span>
                          <span>Jue</span>
                          <span>Vie</span>
                          <span>Sáb</span>
                          <span>Hoy</span>
                        </div>
                      </div>
                    )}

                    {/* SCREEN 4: CATEGORY BREAKDOWN */}
                    {selectedScreen === 'category' && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-[#121824] border border-[#222E42]">
                          <div className="text-xs font-bold text-[#F8FAFC] mb-1">
                            ⚽ Apuestas Deportivas
                          </div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-[#94A3B8]">Beneficio Neto:</span>
                            <span className="font-mono-num text-[#10B981] font-bold">+{currentSym}2,140.00</span>
                          </div>
                          <div className="flex justify-between text-xs mb-2">
                            <span className="text-[#94A3B8]">Tasa de Acierto:</span>
                            <span className="font-mono-num text-[#F8FAFC]">72.4%</span>
                          </div>
                          <div className="h-1.5 w-full bg-[#0B0E14] rounded-full overflow-hidden">
                            <div className="h-full bg-[#10B981] w-[72%]" />
                          </div>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#121824] border border-[#222E42]">
                          <div className="text-xs font-bold text-[#F8FAFC] mb-1">
                            🎰 Juegos de Casino
                          </div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-[#94A3B8]">Beneficio Neto:</span>
                            <span className="font-mono-num text-[#FFD700] font-bold">+{currentSym}700.00</span>
                          </div>
                          <div className="flex justify-between text-xs mb-2">
                            <span className="text-[#94A3B8]">Tasa de Acierto:</span>
                            <span className="font-mono-num text-[#F8FAFC]">58.3%</span>
                          </div>
                          <div className="h-1.5 w-full bg-[#0B0E14] rounded-full overflow-hidden">
                            <div className="h-full bg-[#F59E0B] w-[58%]" />
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-[#0B0E14] border border-[#1E293B] text-[11px] text-[#94A3B8]">
                          💡 <strong className="text-[#F8FAFC]">Conclusión Analítica:</strong> Tu rentabilidad en deportes es 18% mayor que en casino este ciclo.
                        </div>
                      </div>
                    )}

                    {/* SCREEN 5: ADD BET SHEET */}
                    {selectedScreen === 'bet_slip' && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-[#141C2B] border border-[#F59E0B]/50 space-y-2.5">
                          <div className="text-xs font-bold text-[#FFD700]">REGISTRAR APUESTA</div>
                          
                          <div>
                            <label className="text-[10px] text-[#64748B]">EVENTO / ENCUENTRO</label>
                            <div className="p-2 rounded-lg bg-[#0B0E14] border border-[#222E42] text-xs text-[#F8FAFC]">
                              Barcelona vs PSG
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="text-[10px] text-[#64748B]">CUOTA</label>
                              <div className="p-2 rounded-lg bg-[#0B0E14] border border-[#222E42] text-xs font-mono-num text-[#F8FAFC]">
                                2.10
                              </div>
                            </div>
                            <div>
                              <label className="text-[10px] text-[#64748B]">STAKE</label>
                              <div className="p-2 rounded-lg bg-[#0B0E14] border border-[#222E42] text-xs font-mono-num text-[#F8FAFC]">
                                {currentSym}300.00
                              </div>
                            </div>
                          </div>

                          <div className="p-2 rounded-lg bg-[#063321] border border-[#10B981]/30 flex justify-between items-center text-xs">
                            <span className="text-[#10B981] font-medium">Ganancia Potencial:</span>
                            <span className="font-mono-num text-[#10B981] font-bold">+{currentSym}330.00 neto</span>
                          </div>

                          <div className="py-2.5 rounded-lg bg-[#F59E0B] text-[#0B0E14] font-bold text-xs text-center">
                            Guardar Apuesta
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Android Navigation Bar Pill at bottom */}
                  <div className="py-2 flex justify-center bg-[#0B0E14] shrink-0 border-t border-[#1E293B]">
                    <div className="w-28 h-1 rounded-full bg-[#64748B]/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
