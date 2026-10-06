"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/sections/Navbar";
import Hero from "../../components/sections/Hero";
import PlatformCapabilities from "../../components/sections/PlatformCapabilities";
import InvestigationWorkflow from "../../components/sections/InvestigationWorkflow";
import SystemArchitecture from "../../components/sections/SystemArchitecture";
import AIInvestigator from "../../components/sections/AIInvestigator";
import CTA from "../../components/sections/CTA";
import Footer from "../../components/sections/Footer";
import { stages } from "../../components/constants";

export default function Home() {
  const [activeStage, setActiveStage] = useState(0);

  /* Automatic stage rotation */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((current) => (current + 1) % stages.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)] theme-transition">
      <Navbar />
      <Hero activeStage={activeStage} setActiveStage={setActiveStage} />
      <PlatformCapabilities />
      <InvestigationWorkflow />
      <SystemArchitecture />
      <AIInvestigator />
      <CTA />
      <Footer />
    </main>
  );
}