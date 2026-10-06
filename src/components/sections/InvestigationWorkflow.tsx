import React from "react";
import { motion } from "framer-motion";
import { Activity, AlertTriangle, ArrowRight, BrainCircuit, CheckCircle2, ChevronRight, CircleDot, Database, Eye, FileSearch, Fingerprint, GitBranch, Layers3, Lock, Network, Radar, Search, Shield, ShieldAlert, ShieldCheck, Sparkles, Target, Terminal, UserCheck, Workflow, Zap } from "lucide-react";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";
import { stages, workspaceItems, workflow } from "../constants";

export default function InvestigationWorkflow() {
  return (
    <>
      <section
        id="workflow"
        className="border-y border-slate-200 bg-[#f4f8f6] dark:border-white/5 dark:bg-[#020617] py-20 sm:py-24 transition-colors duration-300"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="INVESTIGATION WORKFLOW"
            title="One connected security workflow."
            description="Every stage contributes context to the next, reducing fragmented analysis and helping analysts move from signal to action."
          />

          <div className="mt-14 grid gap-3 md:grid-cols-5">
            {workflow.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900/40 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-emerald-500/30 dark:hover:border-emerald-500/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-slate-400 dark:text-slate-500 transition-colors duration-300">
                      0{index + 1}
                    </span>

                    <Icon className="h-5 w-5 text-emerald-500 dark:text-emerald-400 dark:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-colors duration-300" />
                  </div>

                  <h3 className="mt-8 text-lg font-bold text-slate-950 dark:text-white transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400 transition-colors duration-300">
                    {item.description}
                  </p>

                  {index < workflow.length - 1 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-800 md:flex transition-colors duration-300">
                      <ChevronRight className="h-3 w-3 text-slate-400 transition-colors duration-300" />
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
