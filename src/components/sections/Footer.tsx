import React from "react";
import { motion } from "framer-motion";
import { Activity, AlertTriangle, ArrowRight, BrainCircuit, CheckCircle2, ChevronRight, CircleDot, Database, Eye, FileSearch, Fingerprint, GitBranch, Layers3, Lock, Network, Radar, Search, Shield, ShieldAlert, ShieldCheck, Sparkles, Target, Terminal, UserCheck, Workflow, Zap } from "lucide-react";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";
import { stages, workspaceItems, workflow } from "../constants";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
              <Shield className="h-4 w-4 text-emerald-400" />
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Sentinel<span className="text-emerald-400">Mesh</span>
              </p>

              <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600">
                Security Incident Intelligence
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-600">
            Security intelligence • Investigation • Evidence
          </p>
        </div>
      </footer>

    </>
  );
}
