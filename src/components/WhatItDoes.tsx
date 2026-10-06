import React from 'react';
import { ShieldCheck, TrendingUp, DollarSign, PieChart, Lock, Smartphone, RefreshCw, BarChart2 } from 'lucide-react';

export const WhatItDoes: React.FC = () => {
  const pillars = [
    {
      icon: DollarSign,
      title: 'Contabilidad Precisa de Bankroll',
      description:
        'Registra cada jugada con cuota, importe (stake), mercado y evento. El sistema calcula al milímetro el beneficio neto real, descontando automáticamente el importe arriesgado y consolidando tu balance total en tiempo real.',
    },
    {
      icon: ShieldCheck,
      title: 'Semáforo de Riesgo y Stop-Loss Semanal',
      description:
        'Evita el temido "tilt" y la ruina del jugador. Configura un límite semanal de pérdidas tolerables (ej. $3,500) y de volumen en juego. Si superas el 70% o 90%, el medidor visual se transforma a modo advertencia o crítico.',
    },
    {
      icon: PieChart,
      title: 'Separación Deportes vs Casino',
      description:
        'Compara de forma objetiva la rentabilidad entre apuestas deportivas (fútbol, baloncesto, tenis) y juegos de casino (ruleta, blackjack, slots, póker). Identifica con claridad qué disciplina te genera valor y cuál drena tu capital.',
    },
    {
      icon: BarChart2,
      title: 'Curva Histórica de Evolución y ROI',
      description:
        'Visualiza el progreso de tu capital mediante un gráfico vectorial continuo. Monitorea tu Return on Investment (ROI), tu tasa de acierto (Win Rate %) y las rachas de victorias acumuladas.',
    },
    {
      icon: Smartphone,
      title: 'Rendimiento Inmediato & Modo Offline',
      description:
        'Diseñada para responder al instante a 120 FPS. Funciona de manera 100% autónoma y offline con base de datos local en tu teléfono, perfecta para usar en salas de juego o estadios con baja señal.',
    },
    {
      icon: Lock,
      title: 'Privacidad Absoluta & Respaldo en la Nube',
      description:
        'Opera en modo privado en tu dispositivo o activa la sincronización en la nube con tu cuenta de Google. Tu información financiera está estrictamente aislada y protegida con los estándares más altos.',
    },
  ];

  return (
    <section id="what-it-does" className="py-20 lg:py-28 bg-[#0D121B]/60 border-t border-b border-[#222E42]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest mb-3">
            PROPÓSITO & FILOSOFÍA
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-5">
            ¿Qué hace exactamente Vegas 50k?
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            La gran mayoría de jugadores pierden su capital no por falta de intuición, sino por falta de
            disciplina contable y descontrol emocional. Vegas 50k actúa como un{' '}
            <strong className="text-[#F8FAFC]">director financiero de bolsillo</strong> que impone
            rigor analítico y protege tu patrimonio.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#222E42] bg-[#121824] p-7 transition-all duration-300 hover:border-[#F59E0B]/50 hover:bg-[#141C2B] group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#172030] border border-[#222E42] flex items-center justify-center text-[#F59E0B] group-hover:text-[#FFD700] group-hover:scale-105 transition-all mb-5">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC] mb-2.5 group-hover:text-[#FFD700] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Target Audience & Visual Identity Deep Dive */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-[#222E42] bg-[#141C2B] p-8">
            <div className="text-xs font-bold text-[#10B981] uppercase tracking-wider mb-2">
              PÚBLICO OBJETIVO
            </div>
            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4">
              Diseñado para quienes se toman su capital en serio
            </h3>
            <ul className="space-y-3.5 text-sm text-[#94A3B8]">
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold">✓</span>
                <span>
                  <strong className="text-[#F8FAFC]">Apostadores Deportivos Disciplinados:</strong> Quienes buscan cuotas con valor esperado positivo (+EV) y necesitan medir su ROI neto real mes a mes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold">✓</span>
                <span>
                  <strong className="text-[#F8FAFC]">Jugadores VIP & High Rollers:</strong> Usuarios que gestionan bankrolls de 5 a 6 cifras y exigen una interfaz oscura sofisticada a la altura de su nivel.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold">✓</span>
                <span>
                  <strong className="text-[#F8FAFC]">Entusiastas del Juego Responsable:</strong> Quienes desean un límite inviolable que les avise antes de que una mala racha consuma más dinero del planificado.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#222E42] bg-[#141C2B] p-8">
            <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider mb-2">
              IDENTIDAD VISUAL
            </div>
            <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4">
              Estética Dark Luxury: Obsidian, Champagne Gold & Emerald
            </h3>
            <p className="text-sm text-[#94A3B8] mb-5 leading-relaxed">
              La identidad de Vegas 50k rechaza deliberadamente los colores chillones de las casas de apuestas convencionales. Su lenguaje visual transmite exclusividad, sobriedad y concentración:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-[#0B0E14] border border-[#222E42]">
                <div className="w-6 h-6 rounded-full bg-[#0B0E14] border border-[#3B4B66] mx-auto mb-1.5" />
                <div className="text-xs font-bold text-[#F8FAFC]">Obsidian</div>
                <div className="text-[10px] text-[#64748B] font-mono-num">#0B0E14</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0B0E14] border border-[#222E42]">
                <div className="w-6 h-6 rounded-full bg-[#F59E0B] mx-auto mb-1.5 shadow-sm shadow-[#F59E0B]/40" />
                <div className="text-xs font-bold text-[#F8FAFC]">Gold VIP</div>
                <div className="text-[10px] text-[#64748B] font-mono-num">#F59E0B</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0B0E14] border border-[#222E42]">
                <div className="w-6 h-6 rounded-full bg-[#10B981] mx-auto mb-1.5 shadow-sm shadow-[#10B981]/40" />
                <div className="text-xs font-bold text-[#F8FAFC]">Emerald</div>
                <div className="text-[10px] text-[#64748B] font-mono-num">#10B981</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0B0E14] border border-[#222E42]">
                <div className="w-6 h-6 rounded-full bg-[#EF4444] mx-auto mb-1.5 shadow-sm shadow-[#EF4444]/40" />
                <div className="text-xs font-bold text-[#F8FAFC]">Crimson</div>
                <div className="text-[10px] text-[#64748B] font-mono-num">#EF4444</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
