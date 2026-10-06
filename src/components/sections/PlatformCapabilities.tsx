import React from "react";
import { motion } from "framer-motion";
import { Activity, AlertTriangle, ArrowRight, BrainCircuit, CheckCircle2, ChevronRight, CircleDot, Database, Eye, FileSearch, Fingerprint, GitBranch, Layers3, Lock, Network, Radar, Search, Shield, ShieldAlert, ShieldCheck, Sparkles, Target, Terminal, UserCheck, Workflow, Zap } from "lucide-react";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";
import { stages, workspaceItems, workflow } from "../constants";

export default function PlatformCapabilities() {
  return (
    <>
      <section id="investigation" className="relative bg-white dark:bg-[#020617] py-20 sm:py-24 overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-transparent dark:bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03),transparent_70%)] pointer-events-none transition-colors duration-300" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="PLATFORM CAPABILITIES"
            title="Built for security investigation."
            description="SentinelMesh brings correlation, prioritization, threat context and evidence into a single analyst-oriented workflow."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SOC Overview",
                description:
                  "Understand active incidents, alert volume, risk distribution and investigation status from one workspace.",
                icon: Radar,
              },
              {
                title: "Incident Investigation",
                description:
                  "Move from an incident summary into detailed evidence, timelines and related security activity.",
                icon: FileSearch,
              },
              {
                title: "Attack Graph",
                description:
                  "Explore relationships between users, hosts, IPs, alerts, events and other investigation entities.",
                icon: Network,
              },
              {
                title: "Evidence Timeline",
                description:
                  "Build a chronological view of the activity surrounding an incident.",
                icon: Activity,
              },
              {
                title: "Threat Mapping",
                description:
                  "Connect observed behavior to relevant threat techniques and investigation context.",
                icon: Target,
              },
              {
                title: "AI Investigator",
                description:
                  "Use retrieval-grounded AI assistance with evidence references and explicit insufficient-evidence handling.",
                icon: BrainCircuit,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative rounded-3xl border border-slate-200 bg-[#f9fbfa] dark:border-white/10 dark:bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 dark:hover:border-emerald-500/30 dark:hover:bg-slate-800/50"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent dark:from-emerald-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 transition-all dark:shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 dark:group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="relative mt-6 text-lg font-bold text-slate-950 dark:text-white dark:group-hover:text-emerald-50 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400 dark:group-hover:text-slate-300 transition-colors duration-300">
                    {item.description}
                  </p>

                  <div className="relative mt-5 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 transition-colors duration-300">
                    Explore capability
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
