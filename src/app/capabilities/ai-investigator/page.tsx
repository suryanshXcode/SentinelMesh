import React from 'react';
import Link from 'next/link';
import { ArrowLeft, BrainCircuit, ArrowRight, MessageSquare, Database, Link as LinkIcon, FileText, Search, AlertCircle } from 'lucide-react';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export default function AIInvestigatorPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans transition-colors duration-300">
      <Navbar />

      <div className="pt-32 pb-24 relative overflow-hidden">
        {/* Ambient background decoration */}
        <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none transition-colors duration-300"></div>
        <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 blur-[100px] rounded-full pointer-events-none transition-colors duration-300"></div>

        <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10 relative z-10">
          <Link href="/home#investigation" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors mb-12">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-colors duration-300">
              <BrainCircuit className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              AI Investigator
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-16 leading-relaxed font-light transition-colors duration-300">
            Ask questions. Follow the evidence. Investigate with confidence. <br className="hidden md:block" />
            Use retrieval-grounded AI assistance to accelerate security investigations while keeping responses connected to available evidence.
          </p>

          <div className="space-y-20">
            {/* AI capabilities */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-indigo-500 rounded-full inline-block"></span>
                AI capabilities
              </h2>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { icon: MessageSquare, title: 'Natural Language Investigation', desc: 'Ask questions about an incident in plain language.', color: 'from-rose-500 to-orange-500', bg: 'bg-rose-500/10', text: 'text-rose-600 dark:text-rose-400', shadow: 'hover:shadow-[0_15px_40px_rgba(244,63,94,0.15)] dark:hover:shadow-[0_0_40px_rgba(244,63,94,0.15)]', borderHover: 'hover:border-rose-300 dark:hover:border-rose-500/50' },
                  { icon: Database, title: 'Evidence Retrieval', desc: 'Retrieve relevant investigation data before generating an answer.', color: 'from-indigo-500 to-purple-500', bg: 'bg-indigo-500/10', text: 'text-indigo-600 dark:text-indigo-400', shadow: 'hover:shadow-[0_15px_40px_rgba(99,102,241,0.15)] dark:hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]', borderHover: 'hover:border-indigo-300 dark:hover:border-indigo-500/50' },
                  { icon: LinkIcon, title: 'Evidence References', desc: 'Connect AI responses to supporting evidence.', color: 'from-amber-500 to-orange-500', bg: 'bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400', shadow: 'hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] dark:hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]', borderHover: 'hover:border-amber-300 dark:hover:border-amber-500/50' },
                  { icon: FileText, title: 'Investigation Summaries', desc: 'Quickly summarize complex incidents.', color: 'from-sky-500 to-blue-500', bg: 'bg-sky-500/10', text: 'text-sky-600 dark:text-sky-400', shadow: 'hover:shadow-[0_15px_40px_rgba(14,165,233,0.15)] dark:hover:shadow-[0_0_40px_rgba(14,165,233,0.15)]', borderHover: 'hover:border-sky-300 dark:hover:border-sky-500/50' },
                  { icon: Search, title: 'Threat Reasoning', desc: 'Identify potential relationships and investigation paths.', color: 'from-emerald-500 to-teal-500', bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', shadow: 'hover:shadow-[0_15px_40px_rgba(16,185,129,0.15)] dark:hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]', borderHover: 'hover:border-emerald-300 dark:hover:border-emerald-500/50' },
                  { icon: AlertCircle, title: 'Insufficient-Evidence Handling', desc: 'Clearly indicate when available evidence is not enough to support a conclusion.', color: 'from-fuchsia-500 to-pink-500', bg: 'bg-fuchsia-500/10', text: 'text-fuchsia-600 dark:text-fuchsia-400', shadow: 'hover:shadow-[0_15px_40px_rgba(217,70,239,0.15)] dark:hover:shadow-[0_0_40px_rgba(217,70,239,0.15)]', borderHover: 'hover:border-fuchsia-300 dark:hover:border-fuchsia-500/50' }
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

            {/* Example questions */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-purple-500 rounded-full inline-block"></span>
                Example questions
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "What happened before this alert?",
                  "Which host was involved in the suspicious activity?",
                  "Show me the evidence connecting this user to the incident.",
                  "Which MITRE techniques are supported by the available evidence?"
                ].map((question, idx) => (
                  <div key={idx} className="relative p-6 rounded-[1.5rem] bg-indigo-50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/10 flex items-start gap-4">
                    <MessageSquare className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <p className="font-medium text-slate-800 dark:text-slate-200 italic">"{question}"</p>
                  </div>
                ))}
              </div>
            </section>

            {/* AI investigation flow */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-fuchsia-500 rounded-full inline-block"></span>
                AI investigation flow
              </h2>
              
              <div className="relative p-8 md:p-12 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 shadow-lg dark:shadow-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 pointer-events-none"></div>
                
                <div className="relative flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between gap-6">
                  {['Ask', 'Retrieve', 'Correlate', 'Explain', 'Reference Evidence'].map((step, idx, arr) => (
                    <React.Fragment key={step}>
                      <div className="flex flex-col items-center gap-2 group text-center md:flex-1">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 font-bold text-lg shadow-sm group-hover:border-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300">
                          {idx + 1}
                        </div>
                        <span className="font-semibold text-slate-700 dark:text-slate-300 tracking-wide text-sm md:text-base leading-tight mt-1">
                          {step}
                        </span>
                      </div>
                      {idx < arr.length - 1 && (
                        <ArrowRight className="h-6 w-6 shrink-0 text-slate-300 dark:text-slate-700 rotate-90 md:rotate-0 mb-6 md:mb-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </section>

            {/* Key value */}
            <section>
              <div className="relative p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-fuchsia-500/10 dark:from-indigo-500/10 dark:via-transparent dark:to-fuchsia-500/10 border border-indigo-500/20 dark:border-indigo-500/20 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/20 blur-[80px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/20 blur-[80px] rounded-full mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-6 shadow-sm">
                    Key Value
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Accelerate investigation without replacing analyst judgment or hiding uncertainty.
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
