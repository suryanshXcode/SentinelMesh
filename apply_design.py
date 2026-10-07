import os

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

# 1. globals.css
write_file("src/app/globals.css", """@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

@theme inline {
  --color-accent: #10B981;
  --color-accent-sec: #14B8A6;
  --color-accent-glow: #10E3A5;
}

:root {
  --background: #F5F8F7;
  --foreground: #0D1726;
  --surface: #FFFFFF;
  --surface-elevated: #F9FBFA;
  --border: rgba(15, 23, 42, 0.08);
  --muted: #64748B;
  --glow: rgba(16, 185, 129, 0.15);
}

.dark {
  --background: #030712;
  --foreground: #F8FAFC;
  --surface: #07111A;
  --surface-elevated: #0A171B;
  --border: rgba(255, 255, 255, 0.05);
  --muted: #94A3B8;
  --glow: rgba(16, 227, 165, 0.15);
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  transition: background-color 0.3s ease, color 0.3s ease;
  overflow-x: hidden;
}

.theme-transition {
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}

.cyber-grid {
  background-size: 40px 40px;
  background-image: linear-gradient(to right, var(--border) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--border) 1px, transparent 1px);
  mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
}
""")

# 2. Welcome Page
write_file("src/app/welcome/page.tsx", """
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Shield } from "lucide-react";

export default function WelcomePage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[var(--background)] overflow-hidden theme-transition text-[var(--foreground)]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 cyber-grid" />
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--glow)] blur-[120px]"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-[var(--accent)]"
            initial={{ 
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
              opacity: 0.1 
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50],
              opacity: [0.1, 0.5, 0]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
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
          className="mb-12 flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]"
        >
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>System Online</span>
          </div>
          <div className="flex items-center gap-2 hidden sm:flex">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>Intelligence Engine Active</span>
          </div>
          <div className="flex items-center gap-2">
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
              router.push('/');
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
""")
