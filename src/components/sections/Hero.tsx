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
              <div className="rounded-[32px] border border-slate-200/60 bg-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-slate-900/50 p-4 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-colors duration-300">
                <div className="relative overflow-hidden rounded-[24px] bg-white/80 dark:bg-[#060c18] border border-slate-200/50 dark:border-white/5 shadow-inner transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-indigo-500/5 dark:from-emerald-500/10 dark:to-indigo-500/10 pointer-events-none" />
                  <div className="relative flex items-center justify-between border-b border-slate-200/60 dark:border-white/10 px-6 py-4 bg-slate-50/50 dark:bg-white/[0.02] backdrop-blur-sm transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1.5">
                        <span className="h-3 w-3 rounded-full bg-rose-400/90 shadow-[0_0_10px_rgba(251,113,133,0.3)]" />
                        <span className="h-3 w-3 rounded-full bg-amber-400/90 shadow-[0_0_10px_rgba(251,191,36,0.3)]" />
                        <span className="h-3 w-3 rounded-full bg-emerald-400/90 shadow-[0_0_10px_rgba(52,211,153,0.3)]" />
                      </div>

                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide">
                        sentinelmesh / intelligence-engine
                      </span>
                    </div>

                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-colors duration-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" />
                      LIVE
                    </span>
                  </div>

                  <div className="relative p-6 sm:p-8">
                    <div className="mb-8 grid grid-cols-3 gap-4">
                      {[
                        ["Alerts", "12,842"],
                        ["Correlated", "384"],
                        ["Incidents", "27"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none p-5 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-0.5"
                        >
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                            {label}
                          </p>
                          <p className="mt-2 text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-800 to-slate-500 dark:from-white dark:to-slate-400 transition-colors duration-300">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="relative rounded-2xl border border-slate-200/60 bg-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.02] dark:shadow-none p-6 sm:p-8 transition-colors duration-300">
                      <div className="mb-8 flex items-center justify-between">
                        <div>
                          <p className="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-300">
                            Incident Intelligence
                          </p>
                          <p className="mt-1.5 text-xs font-medium tracking-wide text-slate-500 uppercase">
                            Correlation pipeline
                          </p>
                        </div>

                        <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                          <Activity className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        {stages.map((stage, index) => {
                          const Icon = stage.icon;
                          const isActive = index === activeStage;

                          return (
                            <button
                              key={stage.id}
                              onClick={() => setActiveStage(index)}
                              className="group flex w-full items-center gap-4 text-left relative"
                            >
                              {isActive && (
                                <motion.div
                                  layoutId="activeIndicator"
                                  className="absolute -left-4 h-full w-1 rounded-r-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                />
                              )}

                              <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${isActive
                                  ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] scale-110"
                                  : "border-slate-200/60 bg-slate-100/50 text-slate-500 dark:border-white/10 dark:bg-white/[0.03] group-hover:bg-slate-200/50 dark:group-hover:bg-white/[0.05]"
                                  }`}
                              >
                                <Icon className="h-5 w-5" />
                              </div>

                              <div className="min-w-0 flex-1 ml-1">
                                <div className="flex items-center justify-between gap-3">
                                  <span
                                    className={`truncate text-[13px] font-bold tracking-wide transition-colors duration-300 ${isActive
                                      ? "text-slate-900 dark:text-white"
                                      : "text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300"
                                      }`}
                                  >
                                    {stage.title}
                                  </span>

                                  <span
                                    className={`text-[9px] font-black uppercase tracking-[0.2em] transition-colors duration-300 ${isActive
                                      ? "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(16,185,129,0.1)]"
                                      : "text-slate-400 dark:text-slate-600"
                                      }`}
                                  >
                                    {isActive ? "ACTIVE" : "READY"}
                                  </span>
                                </div>

                                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/5 transition-colors duration-300 shadow-inner">
                                  <motion.div
                                    animate={{
                                      width: isActive ? "100%" : "0%",
                                    }}
                                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
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
