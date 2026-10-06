"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Shield } from "lucide-react";

export default function WelcomePage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<{ x: number; y: number; delay: number; duration: number; targetY: number }[]>([]);

  useEffect(() => {
    setTimeout(() => setMounted(true), 0);
    const newParticles = [...Array(20)].map(() => ({
      x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
      y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      targetY: Math.random() * -100 - 50,
    }));
    setParticles(newParticles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[var(--background)] overflow-hidden theme-transition text-[var(--foreground)]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 cyber-grid" />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--glow)] blur-[120px]"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-[var(--accent)]"
            initial={{ 
              x: p.x, 
              y: p.y,
              opacity: 0.1 
            }}
            animate={{ 
              y: [null, p.targetY],
              opacity: [0.1, 0.5, 0]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: p.delay
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* System Status Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12 flex flex-col sm:flex-row gap-4 sm:gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]"
        >
          <div className="flex items-center gap-2 mx-auto">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>System Online</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 mx-auto">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>Intelligence Engine Active</span>
          </div>
          <div className="flex items-center gap-2 mx-auto">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>Threat Monitoring Ready</span>
          </div>
        </motion.div>

        {/* Centerpiece Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] shadow-[0_0_30px_var(--glow)] backdrop-blur-md"
        >
          <Shield className="h-12 w-12 text-[var(--accent)]" />
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          SENTINELMESH
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12 max-w-2xl text-lg text-[var(--muted)]"
        >
          Security Incident Intelligence & Attack Investigation Platform
        </motion.p>

        {/* Enter CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            // Signal transition simulation before routing
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.6s ease';
            setTimeout(() => {
              router.push('/home');
              setTimeout(() => {
                document.body.style.opacity = '1';
              }, 100);
            }, 600);
          }}
          className="group relative overflow-hidden rounded-xl border border-[var(--accent)] bg-[var(--accent)]/10 px-8 py-4 text-sm font-bold uppercase tracking-widest text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-[var(--surface)] hover:shadow-[0_0_40px_var(--glow)]"
        >
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
            <div className="relative h-full w-8 bg-white/20" />
          </div>
          Enter SentinelMesh
        </motion.button>
      </div>
    </div>
  );
}
