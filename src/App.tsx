import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatItDoes } from './components/WhatItDoes';
import { Features } from './components/Features';
import { PhoneMockup } from './components/PhoneMockup';
import { WhitepaperSection } from './components/WhitepaperSection';
import { DownloadSection } from './components/DownloadSection';
import { OfficialLinks } from './components/OfficialLinks';
import { ResponsibleGamingBanner } from './components/ResponsibleGamingBanner';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#F59E0B] selection:text-[#0B0E14]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Presentation & Direct APK Download */}
        <Hero />

        {/* 2. What it does, Purpose & Target Audience */}
        <WhatItDoes />

        {/* 3. Core Features & Technical Capabilities */}
        <Features />

        {/* 4. High-Fidelity Interactive Mobile Mockups */}
        <PhoneMockup />

        {/* 5 & 6. Official Whitepaper Reading & Download (.md/PDF) */}
        <WhitepaperSection />

        {/* 7. Official APK Download Hub & 4-Step Install Guide */}
        <DownloadSection />

        {/* 8. Official Resources & Center */}
        <OfficialLinks />

        {/* Responsible Gaming Disclaimer */}
        <ResponsibleGamingBanner />
      </main>

      {/* Official Footer */}
      <Footer />
    </div>
  );
}
