import React from "react";
import { motion } from "framer-motion";
import { Activity, AlertTriangle, ArrowRight, BrainCircuit, CheckCircle2, ChevronRight, CircleDot, Database, Eye, FileSearch, Fingerprint, GitBranch, Layers3, Lock, Network, Radar, Search, Shield, ShieldAlert, ShieldCheck, Sparkles, Target, Terminal, UserCheck, Workflow, Zap } from "lucide-react";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";
import { stages, workspaceItems, workflow } from "../constants";
import { ThemeToggle } from "../ThemeToggle";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#f7faf9]/90 dark:border-white/10 dark:bg-[#020617]/80 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 shadow-lg shadow-slate-900/10">
              <Shield className="h-5 w-5 text-emerald-400" />
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>

            <div>
              <p className="text-base font-bold tracking-tight text-slate-950 dark:text-white transition-colors duration-300">
                Sentinel<span className="text-emerald-600 dark:text-emerald-400">Mesh</span>
              </p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 transition-colors duration-300">
                Security Intelligence
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#platform"
              className="text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-400 transition-colors hover:dark:text-white"
            >
              Platform
            </a>

            <a
              href="#workflow"
              className="text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-400 transition-colors hover:dark:text-white"
            >
              Workflow
            </a>

            <a
              href="#architecture"
              className="text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-400 transition-colors hover:dark:text-white"
            >
              Architecture
            </a>

            <a
              href="#investigation"
              className="text-sm font-medium text-slate-600 hover:text-slate-950 dark:text-slate-400 transition-colors hover:dark:text-white"
            >
              Investigation
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#demo"
              className="flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-emerald-500/10 dark:border dark:border-emerald-500/20 dark:text-emerald-400 dark:shadow-[0_0_15px_rgba(16,185,129,0.15)] dark:hover:bg-emerald-500/20 dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Explore Platform
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
