import React from "react";
import { motion } from "framer-motion";
import { Activity, AlertTriangle, ArrowRight, BrainCircuit, CheckCircle2, ChevronRight, CircleDot, Database, Eye, FileSearch, Fingerprint, GitBranch, Layers3, Lock, Network, Radar, Search, Shield, ShieldAlert, ShieldCheck, Sparkles, Target, Terminal, UserCheck, Workflow, Zap } from "lucide-react";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";
import { stages, workspaceItems, workflow } from "../constants";
import Link from "next/link";

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
                href: "/capabilities/soc-overview",
                bgLight: "bg-emerald-50",
                bgDark: "dark:bg-emerald-500/10",
                textLight: "text-emerald-600",
                textDark: "dark:text-emerald-400",
                hoverBgLight: "group-hover:bg-emerald-100",
                hoverBgDark: "dark:group-hover:bg-emerald-500/20",
                shadowShadow: "dark:shadow-[0_0_15px_rgba(16,185,129,0.1)]",
                hoverShadow: "dark:group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
                borderHover: "dark:hover:border-emerald-500/30",
                gradientFrom: "dark:from-emerald-500/5",
              },
              {
                title: "Incident Investigation",
                description:
                  "Move from an incident summary into detailed evidence, timelines and related security activity.",
                icon: FileSearch,
                href: "/capabilities/incident-investigation",
                bgLight: "bg-sky-50",
                bgDark: "dark:bg-sky-500/10",
                textLight: "text-sky-600",
                textDark: "dark:text-sky-400",
                hoverBgLight: "group-hover:bg-sky-100",
                hoverBgDark: "dark:group-hover:bg-sky-500/20",
                shadowShadow: "dark:shadow-[0_0_15px_rgba(14,165,233,0.1)]",
                hoverShadow: "dark:group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]",
                borderHover: "dark:hover:border-sky-500/30",
                gradientFrom: "dark:from-sky-500/5",
              },
              {
                title: "Attack Graph",
                description:
                  "Explore relationships between users, hosts, IPs, alerts, events and other investigation entities.",
                icon: Network,
                href: "/capabilities/attack-graph",
                bgLight: "bg-violet-50",
                bgDark: "dark:bg-violet-500/10",
                textLight: "text-violet-600",
                textDark: "dark:text-violet-400",
                hoverBgLight: "group-hover:bg-violet-100",
                hoverBgDark: "dark:group-hover:bg-violet-500/20",
                shadowShadow: "dark:shadow-[0_0_15px_rgba(139,92,246,0.1)]",
                hoverShadow: "dark:group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]",
                borderHover: "dark:hover:border-violet-500/30",
                gradientFrom: "dark:from-violet-500/5",
              },
              {
                title: "Evidence Timeline",
                description:
                  "Build a chronological view of the activity surrounding an incident.",
                icon: Activity,
                href: "/capabilities/evidence-timeline",
                bgLight: "bg-teal-50",
                bgDark: "dark:bg-teal-500/10",
                textLight: "text-teal-600",
                textDark: "dark:text-teal-400",
                hoverBgLight: "group-hover:bg-teal-100",
                hoverBgDark: "dark:group-hover:bg-teal-500/20",
                shadowShadow: "dark:shadow-[0_0_15px_rgba(20,184,166,0.1)]",
                hoverShadow: "dark:group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]",
                borderHover: "dark:hover:border-teal-500/30",
                gradientFrom: "dark:from-teal-500/5",
              },
              {
                title: "MITRE ATT&CK",
                description:
                  "Connect observed behavior to relevant threat techniques and investigation context.",
                icon: Target,
                href: "/capabilities/mitre-attack",
                bgLight: "bg-rose-50",
                bgDark: "dark:bg-rose-500/10",
                textLight: "text-rose-600",
                textDark: "dark:text-rose-400",
                hoverBgLight: "group-hover:bg-rose-100",
                hoverBgDark: "dark:group-hover:bg-rose-500/20",
                shadowShadow: "dark:shadow-[0_0_15px_rgba(244,63,94,0.1)]",
                hoverShadow: "dark:group-hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]",
                borderHover: "dark:hover:border-rose-500/30",
                gradientFrom: "dark:from-rose-500/5",
              },
              {
                title: "AI Investigator",
                description:
                  "Use retrieval-grounded AI assistance with evidence references and explicit insufficient-evidence handling.",
                icon: BrainCircuit,
                href: "/capabilities/ai-investigator",
                bgLight: "bg-indigo-50",
                bgDark: "dark:bg-indigo-500/10",
                textLight: "text-indigo-600",
                textDark: "dark:text-indigo-400",
                hoverBgLight: "group-hover:bg-indigo-100",
                hoverBgDark: "dark:group-hover:bg-indigo-500/20",
                shadowShadow: "dark:shadow-[0_0_15px_rgba(99,102,241,0.1)]",
                hoverShadow: "dark:group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]",
                borderHover: "dark:hover:border-indigo-500/30",
                gradientFrom: "dark:from-indigo-500/5",
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
                  className={`group relative rounded-3xl border border-slate-200 bg-[#f9fbfa] dark:border-white/10 dark:bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 dark:hover:bg-slate-800/50 ${item.borderHover}`}
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${item.gradientFrom}`} />

                  <div className={`relative flex h-11 w-11 items-center justify-center rounded-xl transition-all ${item.bgLight} ${item.bgDark} ${item.textLight} ${item.textDark} ${item.shadowShadow} ${item.hoverBgLight} ${item.hoverBgDark} ${item.hoverShadow}`}>
                    <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
                  </div>

                  <h3 className="relative mt-6 text-lg font-bold text-slate-950 dark:text-white transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400 transition-colors duration-300">
                    {item.description}
                  </p>

                  {item.href ? (
                    <Link href={item.href} className={`relative mt-5 inline-flex items-center gap-2 text-xs font-semibold transition-colors duration-300 hover:opacity-80 before:absolute before:inset-0 before:-m-4 ${item.textLight} ${item.textDark}`}>
                      Explore capability
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <div className={`relative mt-5 flex items-center gap-2 text-xs font-semibold transition-colors duration-300 ${item.textLight} ${item.textDark}`}>
                      Explore capability
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
