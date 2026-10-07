import React from "react";
import { motion } from "framer-motion";
import { Activity, AlertTriangle, ArrowRight, BrainCircuit, CheckCircle2, ChevronRight, CircleDot, Database, Eye, FileSearch, Fingerprint, GitBranch, Layers3, Lock, Network, Radar, Search, Shield, ShieldAlert, ShieldCheck, Sparkles, Target, Terminal, UserCheck, Workflow, Zap } from "lucide-react";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";
import { stages, workspaceItems, workflow } from "../constants";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950 transition-colors duration-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <Link href="/home" className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Logo" className="h-8 w-8 rounded-lg object-contain bg-white" />

            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white transition-colors duration-300">
                Sentinel<span className="text-emerald-600 dark:text-emerald-400 transition-colors duration-300">Mesh</span>
              </p>

              <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Security Incident Intelligence
              </p>
            </div>
          </Link>

          <p className="text-xs text-slate-600">
            Security intelligence • Investigation • Evidence
          </p>
        </div>
      </footer>

    </>
  );
}
