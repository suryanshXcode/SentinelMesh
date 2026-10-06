import React from "react";
import { motion } from "framer-motion";
import { Activity, AlertTriangle, ArrowRight, BrainCircuit, CheckCircle2, ChevronRight, CircleDot, Database, Eye, FileSearch, Fingerprint, GitBranch, Layers3, Lock, Network, Radar, Search, Shield, ShieldAlert, ShieldCheck, Sparkles, Target, Terminal, UserCheck, Workflow, Zap } from "lucide-react";
import Badge from "../ui/Badge";
import SectionHeading from "../ui/SectionHeading";
import { stages, workspaceItems, workflow } from "../constants";

export default function Hero({ activeStage, setActiveStage, setIsPaused }: { activeStage: number, setActiveStage: (stage: number) => void, setIsPaused?: (v: boolean) => void }) {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        {/* background decoration */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-200/20 blur-3xl" />
          <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-cyan-200/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 lg:px-10 lg:pb-24 lg:pt-28">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* LEFT */}
            <div>
              <Badge>SECURITY INCIDENT INTELLIGENCE</Badge>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-7 max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-6xl lg:text-[70px] transition-colors duration-300"
              >
                Smarter Detection.
                <br />
                <span className="text-emerald-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-emerald-400 dark:to-cyan-400 transition-colors duration-300">Faster Investigation.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="mt-7 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg transition-colors duration-300"
              >
                SentinelMesh transforms large volumes of security alerts into
                correlated, prioritized and evidence-backed incidents so
                analysts can understand what happened and act faster.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#platform"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 text-white dark:bg-emerald-500 px-6 py-3.5 text-sm font-semibold dark:text-slate-950 shadow-xl shadow-slate-950/10 dark:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition hover:-translate-y-0.5 hover:bg-slate-800 dark:hover:bg-emerald-400 dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                >
                  Explore SentinelMesh
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#architecture"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 px-6 py-3.5 text-sm font-semibold dark:text-slate-300 backdrop-blur-sm transition dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  View Architecture
                </a>
              </motion.div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Evidence-backed
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Analyst-first
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  AI-assisted
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-[30px] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900/50 p-3 dark:shadow-emerald-500/5 backdrop-blur-md transition-colors duration-300">
                <div className="overflow-hidden rounded-[22px] bg-slate-950">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                      </div>

                      <span className="text-xs font-semibold text-slate-400">
                        sentinelmesh / intelligence-engine
                      </span>
                    </div>

                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      LIVE
                    </span>
                  </div>

                  <div className="p-5 sm:p-7">
                    <div className="mb-6 grid grid-cols-3 gap-3">
                      {[
                        ["Alerts", "12,842"],
                        ["Correlated", "384"],
                        ["Incidents", "27"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
                        >
                          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                            {label}
                          </p>
                          <p className="mt-2 text-lg font-bold text-white">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                      <div className="mb-5 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            Incident intelligence
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            Correlation pipeline
                          </p>
                        </div>

                        <Activity className="h-5 w-5 text-emerald-400" />
                      </div>

                      <div className="space-y-4">
                        {stages.map((stage, index) => {
                          const Icon = stage.icon;
                          const isActive = index === activeStage;

                          return (
                            <button
                              key={stage.id}
                              onClick={() => setActiveStage(index)}
                              className="flex w-full items-center gap-3 text-left"
                            >
                              <div
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition ${isActive
                                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                                  : "border-white/10 bg-white/[0.03] text-slate-600"
                                  }`}
                              >
                                <Icon className="h-4 w-4" />
                              </div>

                              <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-3">
                                  <span
                                    className={`truncate text-xs font-medium ${isActive
                                      ? "text-white"
                                      : "text-slate-500"
                                      }`}
                                  >
                                    {stage.title}
                                  </span>

                                  <span
                                    className={`text-[9px] font-bold ${isActive
                                      ? "text-emerald-400"
                                      : "text-slate-700"
                                      }`}
                                  >
                                    {isActive ? "ACTIVE" : "READY"}
                                  </span>
                                </div>

                                <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">
                                  <motion.div
                                    animate={{
                                      width: isActive ? "78%" : "22%",
                                    }}
                                    className="h-full rounded-full bg-emerald-400/60"
                                    transition={{ duration: 0.5 }}
                                  />
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
