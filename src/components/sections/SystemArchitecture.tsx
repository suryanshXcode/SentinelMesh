import React from "react";
import { motion } from "framer-motion";
import { Activity, AlertTriangle, ArrowRight, BrainCircuit, CheckCircle2, ChevronRight, CircleDot, Database, Eye, FileSearch, Fingerprint, GitBranch, Layers3, Lock, Network, Radar, Search, Shield, ShieldAlert, ShieldCheck, Sparkles, Target, Terminal, UserCheck, Workflow, Zap } from "lucide-react";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";
import { stages, workspaceItems, workflow } from "../constants";

export default function SystemArchitecture() {
  return (
    <>
      <section id="architecture" className="relative bg-white dark:bg-[#020617] py-20 sm:py-24 overflow-hidden transition-colors duration-300">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-transparent dark:bg-emerald-500/10 blur-[100px] pointer-events-none transition-colors duration-300" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="SYSTEM ARCHITECTURE"
            title="Designed as an evidence-driven intelligence pipeline."
            description="A modular architecture connects telemetry ingestion, detection, correlation, incident management, evidence and AI-assisted investigation."
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-14 overflow-hidden rounded-[30px] border border-slate-200 bg-slate-950 dark:border-white/10 dark:bg-slate-900/60 p-5 shadow-2xl shadow-slate-900/10 dark:shadow-emerald-500/5 backdrop-blur-md sm:p-8 transition-colors duration-300"
          >
            <div className="grid gap-3 md:grid-cols-4">
              {[
                {
                  label: "SOURCES",
                  items: ["Cloud", "Network", "Endpoint", "Application"],
                },
                {
                  label: "SECURITY CORE",
                  items: [
                    "Ingestion",
                    "Validation",
                    "Detection",
                    "Noise Reduction",
                  ],
                },
                {
                  label: "INTELLIGENCE",
                  items: [
                    "Correlation",
                    "Incident Engine",
                    "Risk Engine",
                    "Threat Mapping",
                  ],
                },
                {
                  label: "INVESTIGATION",
                  items: [
                    "Evidence",
                    "Timeline",
                    "Attack Graph",
                    "AI / RAG",
                  ],
                },
              ].map((column, index) => (
                <div
                  key={column.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <p className="text-[10px] font-bold tracking-[0.18em] text-emerald-400">
                    {column.label}
                  </p>

                  <div className="mt-5 space-y-2">
                    {column.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/5 bg-white/[0.025] px-3 py-3 text-xs font-medium text-slate-400"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  {index < 3 && (
                    <div className="mt-4 hidden items-center gap-2 md:flex">
                      <div className="h-px flex-1 bg-white/10" />
                      <ArrowRight className="h-3 w-3 text-slate-700" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                {
                  title: "FastAPI",
                  subtitle: "Backend & APIs",
                },
                {
                  title: "PostgreSQL",
                  subtitle: "Incidents & evidence",
                },
                {
                  title: "React / Next.js",
                  subtitle: "SOC dashboard",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-emerald-400/[0.035] p-4"
                >
                  <p className="text-xs font-bold text-white">{item.title}</p>
                  <p className="mt-1 text-[10px] text-slate-600">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
