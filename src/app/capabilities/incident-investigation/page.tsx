import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileSearch, ArrowRight, FileText, Database, Network, Activity, Clock, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function IncidentInvestigationPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans transition-colors duration-300">
      <Navbar />

      <div className="pt-32 pb-24 relative overflow-hidden">
        {/* Ambient background decoration */}
        <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[600px] h-[600px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none transition-colors duration-300"></div>
        <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none transition-colors duration-300"></div>

        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 relative z-10">
          <Link href="/home#investigation" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors mb-12">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-colors duration-300">
              <FileSearch className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Incident Investigation
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-16 leading-relaxed font-light transition-colors duration-300">
            Move from an alert to the complete story behind an incident. <br className="hidden md:block" />
            SentinelMesh brings related evidence, activity, entities, and timelines together so analysts can understand what happened without jumping between disconnected tools.
          </p>

          <div className="space-y-20">
            {/* Investigation capabilities */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-sky-500 rounded-full inline-block"></span>
                Investigation capabilities
              </h2>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { icon: FileText, title: 'Incident Summary', desc: 'Quickly understand the nature and severity of an incident.', color: 'from-fuchsia-500 to-pink-500', bg: 'bg-fuchsia-500/10', text: 'text-fuchsia-600 dark:text-fuchsia-400', shadow: 'hover:shadow-[0_15px_40px_rgba(217,70,239,0.15)] dark:hover:shadow-[0_0_40px_rgba(217,70,239,0.15)]', borderHover: 'hover:border-fuchsia-300 dark:hover:border-fuchsia-500/50' },
                  { icon: Database, title: 'Evidence Collection', desc: 'Review logs, alerts, events, and associated artifacts.', color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400', shadow: 'hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] dark:hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]', borderHover: 'hover:border-blue-300 dark:hover:border-blue-500/50' },
                  { icon: Network, title: 'Entity Correlation', desc: 'Connect users, hosts, IPs, domains, and other entities.', color: 'from-violet-500 to-purple-500', bg: 'bg-violet-500/10', text: 'text-violet-600 dark:text-violet-400', shadow: 'hover:shadow-[0_15px_40px_rgba(139,92,246,0.15)] dark:hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]', borderHover: 'hover:border-violet-300 dark:hover:border-violet-500/50' },
                  { icon: Activity, title: 'Activity Analysis', desc: 'Examine suspicious behavior surrounding the incident.', color: 'from-amber-500 to-yellow-500', bg: 'bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400', shadow: 'hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] dark:hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]', borderHover: 'hover:border-amber-300 dark:hover:border-amber-500/50' },
                  { icon: Clock, title: 'Investigation Timeline', desc: 'Follow activity chronologically.', color: 'from-teal-500 to-emerald-500', bg: 'bg-teal-500/10', text: 'text-teal-600 dark:text-teal-400', shadow: 'hover:shadow-[0_15px_40px_rgba(20,184,166,0.15)] dark:hover:shadow-[0_0_40px_rgba(20,184,166,0.15)]', borderHover: 'hover:border-teal-300 dark:hover:border-teal-500/50' },
                  { icon: CheckCircle2, title: 'Evidence-Based Conclusions', desc: 'Build conclusions directly from observable evidence.', color: 'from-emerald-500 to-green-500', bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', shadow: 'hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)] dark:hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]', borderHover: 'hover:border-emerald-300 dark:hover:border-emerald-500/50' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className={`group relative flex flex-col gap-3 p-6 sm:p-8 rounded-[2rem] bg-white/60 dark:bg-white/[0.02] backdrop-blur-md border border-slate-200/80 dark:border-white/5 shadow-sm dark:shadow-none hover:-translate-y-1 transition-all duration-500 ${item.shadow} ${item.borderHover} overflow-hidden`}>
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

            {/* Investigation flow */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span>
                Investigation flow
              </h2>
              
              <div className="relative p-8 md:p-12 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-blue-500/5 dark:from-sky-500/10 dark:to-blue-500/10 pointer-events-none"></div>
                
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                  {['Alert', 'Context', 'Evidence', 'Correlation', 'Finding'].map((step, idx, arr) => (
                    <React.Fragment key={step}>
                      <div className="flex flex-col items-center gap-2 group">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold text-lg shadow-sm group-hover:border-sky-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-all duration-300">
                          {idx + 1}
                        </div>
                        <span className="font-semibold text-slate-700 dark:text-slate-300 tracking-wide">
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

            {/* Key value */}
            <section>
              <div className="relative p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-indigo-500/10 dark:from-sky-500/10 dark:via-transparent dark:to-indigo-500/10 border border-sky-500/20 dark:border-sky-500/20 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/20 blur-[80px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 blur-[80px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-semibold text-sky-700 dark:text-sky-400 mb-6">
                    Key Value
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Reduce investigation time by keeping the evidence and relationships analysts need in one place.
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
