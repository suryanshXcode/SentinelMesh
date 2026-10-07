import React from "react";
import { motion } from "framer-motion";
import { Activity, AlertTriangle, ArrowRight, BrainCircuit, CheckCircle2, ChevronRight, CircleDot, Database, Eye, FileSearch, Fingerprint, GitBranch, Layers3, Lock, Network, Radar, Search, Shield, ShieldAlert, ShieldCheck, Sparkles, Target, Terminal, UserCheck, Workflow, Zap } from "lucide-react";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";
import { stages, workspaceItems, workflow } from "../constants";

export default function CTA() {
  return (
    <>
      <section id="demo" className="bg-slate-50 dark:bg-slate-950 py-20 sm:py-24 transition-colors duration-300">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <Badge>SECURITY INTELLIGENCE PLATFORM</Badge>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-7 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl transition-colors duration-300"
          >
            Turn security signals into
            <span className="text-emerald-600 dark:text-emerald-400 dark:drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"> actionable intelligence.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg transition-colors duration-300"
          >
            SentinelMesh gives analysts a connected path from detection to
            evidence-backed investigation and response.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <a
              href="#platform"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              Explore Working Model
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#architecture"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 px-6 py-3.5 text-sm font-semibold dark:text-white backdrop-blur-sm transition dark:hover:border-white/20 dark:hover:bg-white/10"
            >
              View Architecture
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
