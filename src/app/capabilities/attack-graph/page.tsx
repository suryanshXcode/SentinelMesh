import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Network, ArrowRight, UserX, Monitor, Globe, AlertTriangle, Link as LinkIcon, Crosshair, Map as MapIcon, ShieldAlert, GitBranch } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function AttackGraphPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans transition-colors duration-300">
      <Navbar />

      <div className="pt-32 pb-24 relative overflow-hidden">
        {/* Ambient background decoration */}
        <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[600px] h-[600px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none transition-colors duration-300"></div>
        <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 blur-[100px] rounded-full pointer-events-none transition-colors duration-300"></div>

        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 relative z-10">
          <Link href="/home#investigation" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400 transition-colors mb-12">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-colors duration-300">
              <Network className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Attack Graph
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-16 leading-relaxed font-light transition-colors duration-300">
            Visualize how an attack moves across your environment. <br className="hidden md:block" />
            Turn complex security relationships into an interactive graph connecting users, hosts, IP addresses, alerts, events, and other investigation entities.
          </p>

          <div className="space-y-20">
            {/* Explore relationships */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-violet-500 rounded-full inline-block"></span>
                Explore relationships
              </h2>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { icon: UserX, title: 'User → Host', desc: 'Identify machines associated with suspicious users.', color: 'from-rose-500 to-orange-500', bg: 'bg-rose-500/10', text: 'text-rose-600 dark:text-rose-400', shadow: 'hover:shadow-[0_15px_40px_rgba(244,63,94,0.15)] dark:hover:shadow-[0_0_40px_rgba(244,63,94,0.15)]', borderHover: 'hover:border-rose-300 dark:hover:border-rose-500/50' },
                  { icon: Monitor, title: 'Host → IP', desc: 'Trace network activity and communication.', color: 'from-indigo-500 to-purple-500', bg: 'bg-indigo-500/10', text: 'text-indigo-600 dark:text-indigo-400', shadow: 'hover:shadow-[0_15px_40px_rgba(99,102,241,0.15)] dark:hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]', borderHover: 'hover:border-indigo-300 dark:hover:border-indigo-500/50' },
                  { icon: Globe, title: 'IP → Alert', desc: 'Connect network indicators to triggered detections.', color: 'from-amber-500 to-orange-500', bg: 'bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400', shadow: 'hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] dark:hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]', borderHover: 'hover:border-amber-300 dark:hover:border-amber-500/50' },
                  { icon: AlertTriangle, title: 'Alert → Event', desc: 'Drill into the underlying security events.', color: 'from-sky-500 to-blue-500', bg: 'bg-sky-500/10', text: 'text-sky-600 dark:text-sky-400', shadow: 'hover:shadow-[0_15px_40px_rgba(14,165,233,0.15)] dark:hover:shadow-[0_0_40px_rgba(14,165,233,0.15)]', borderHover: 'hover:border-sky-300 dark:hover:border-sky-500/50' },
                  { icon: LinkIcon, title: 'Entity Relationships', desc: 'Discover hidden connections across the investigation.', color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', shadow: 'hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)] dark:hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]', borderHover: 'hover:border-emerald-300 dark:hover:border-emerald-500/50' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className={`group relative flex flex-col gap-3 p-6 sm:p-8 rounded-[2rem] bg-white/60 dark:bg-white/[0.02] backdrop-blur-md border border-slate-200/80 dark:border-white/5 shadow-sm dark:shadow-none hover:-translate-y-1 transition-all duration-500 ${item.shadow} ${item.borderHover} overflow-hidden ${index === 4 ? 'sm:col-span-2 sm:max-w-md sm:mx-auto w-full' : ''}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-[0.02] dark:opacity-0 group-hover:opacity-[0.05] dark:group-hover:opacity-[0.08] transition-opacity duration-500`} />
                      
                      <div className="relative z-10 flex items-center gap-4 mb-2">
                        <div className={`p-3 rounded-2xl ${item.bg} ${item.text} shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <h3 className={`font-bold text-xl text-slate-900 dark:text-white transition-colors duration-300`}>{item.title}</h3>
                      </div>
                      <p className="relative z-10 text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Graph investigation */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-fuchsia-500 rounded-full inline-block"></span>
                Graph investigation
              </h2>
              
              <div className="relative p-8 md:p-12 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 dark:from-violet-500/10 dark:to-fuchsia-500/10 pointer-events-none"></div>
                
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                  {['Entities', 'Relationships', 'Attack Path', 'Investigation'].map((step, idx, arr) => (
                    <React.Fragment key={step}>
                      <div className="flex flex-col items-center gap-2 group">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold text-lg shadow-sm group-hover:border-violet-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-all duration-300">
                          {idx + 1}
                        </div>
                        <span className="font-semibold text-slate-700 dark:text-slate-300 tracking-wide text-center">
                          {step}
                        </span>
                      </div>
                      {idx < arr.length - 1 && (
                        <ArrowRight className="h-6 w-6 text-slate-300 dark:text-slate-700 rotate-90 md:rotate-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>
            
            {/* What analysts can discover */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-amber-500 rounded-full inline-block"></span>
                What analysts can discover
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: MapIcon, title: 'Potential lateral movement' },
                  { icon: ShieldAlert, title: 'Suspicious authentication chains' },
                  { icon: GitBranch, title: 'Connected compromised assets' },
                  { icon: Crosshair, title: 'Repeated attack patterns' },
                  { icon: AlertTriangle, title: 'High-risk relationships' }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400 shrink-0 shadow-inner">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Key value */}
            <section>
              <div className="relative p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-rose-500/10 dark:from-violet-500/10 dark:via-transparent dark:to-rose-500/10 border border-violet-500/20 dark:border-violet-500/20 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-400/20 blur-[80px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-400/20 blur-[80px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-700 dark:text-violet-400 mb-6 shadow-sm">
                    Key Value
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    See the attack path—not just individual alerts.
                  </h2>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
