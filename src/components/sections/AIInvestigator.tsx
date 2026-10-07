import { BrainCircuit, CheckCircle2, Shield, Search, FileText } from "lucide-react";

export default function AIInvestigator() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      {/* Vibrant Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-slate-50 dark:from-indigo-900/20 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300"></div>
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none transition-colors duration-300"></div>
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none transition-colors duration-300"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Column: Description */}
        <div>
          <div className="inline-flex items-center rounded-full border border-emerald-500/20 dark:border-emerald-400/30 bg-gradient-to-r from-emerald-500/10 to-indigo-500/10 dark:from-emerald-400/10 dark:to-indigo-400/10 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-8 shadow-sm dark:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-colors duration-300">
            <BrainCircuit className="mr-2 h-4 w-4" />
            AI Investigation Assistant
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight transition-colors duration-300">
            Investigation Assistance, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">
              Grounded in Evidence.
            </span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-light transition-colors duration-300">
            The AI Investigator acts as a force multiplier for your team. It accelerates analysis by parsing vast amounts of correlated data and generating natural language summaries, but it never makes authoritative decisions without showing its work.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] shadow-sm dark:shadow-none hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors duration-300">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block text-lg mb-1 transition-colors duration-300">Evidence-backed responses</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300">Every assertion is linked directly to raw logs, alerts, or system state.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] shadow-sm dark:shadow-none hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors duration-300">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/10 shrink-0">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block text-lg mb-1 transition-colors duration-300">Retrieval-augmented context</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300">Queries are enriched with historical incident data and threat intelligence.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.05] shadow-sm dark:shadow-none hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors duration-300">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/10 shrink-0">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block text-lg mb-1 transition-colors duration-300">Explicit uncertainty</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed transition-colors duration-300">The AI highlights what is known versus what is inferred or missing.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column: AI Chat Mockup (Glassmorphism) */}
        <div className="relative lg:ml-8 mt-12 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-emerald-500/5 to-transparent dark:from-indigo-500/20 dark:via-emerald-500/10 rounded-[2.5rem] transform rotate-3 scale-[1.02] opacity-70 blur-md transition-colors duration-300" />
          <div className="relative bg-white/80 dark:bg-[#0a0f1c]/80 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-[560px] transition-colors duration-300">
            {/* Header */}
            <div className="bg-slate-50/50 dark:bg-white/[0.03] border-b border-slate-200 dark:border-white/10 p-5 flex items-center gap-4 transition-colors duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                <BrainCircuit className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-base font-bold text-slate-900 dark:text-white tracking-wide transition-colors duration-300">SentinelMesh Assistant</div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium tracking-wider uppercase transition-colors duration-300">Investigation Mode</div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto custom-scrollbar">
              {/* Analyst Query */}
              <div className="flex justify-end">
                <div className="bg-indigo-600 border border-indigo-500 p-4 rounded-2xl rounded-tr-sm text-sm text-white shadow-lg max-w-[85%] font-medium">
                  What happened in this incident?
                </div>
              </div>

              {/* AI Response */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm dark:shadow-inner transition-colors duration-300">
                  <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400 transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  <div className="bg-slate-50/80 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 p-5 rounded-2xl rounded-tl-sm text-sm text-slate-700 dark:text-slate-200 leading-relaxed shadow-sm dark:shadow-lg backdrop-blur-sm transition-colors duration-300">
                    The incident contains correlated authentication, process and network activity involving the affected asset <code className="bg-slate-200 dark:bg-slate-900 px-2 py-1 rounded-md border border-slate-300 dark:border-white/20 text-xs font-mono text-emerald-700 dark:text-emerald-300 transition-colors duration-300">db-prod-01</code>.
                    <br /><br />
                    Multiple failed login attempts were followed by a successful login and immediate execution of suspicious PowerShell commands.
                  </div>

                  {/* Evidence References */}
                  <div className="bg-slate-100/50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-2xl p-4 shadow-sm dark:shadow-inner transition-colors duration-300">
                    <div className="text-[10px] font-bold tracking-widest text-slate-500 dark:text-slate-400 mb-3 uppercase flex items-center gap-2 transition-colors duration-300">
                      <Search className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 transition-colors duration-300" /> Evidence Referenced
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 text-xs p-2.5 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/[0.06] transition-colors cursor-pointer shadow-sm dark:shadow-none">
                        <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-colors duration-300" />
                        <span className="font-semibold text-slate-800 dark:text-slate-200 transition-colors duration-300">Event #EV-1023</span>
                        <span className="text-slate-500 dark:text-slate-400 truncate hidden sm:inline transition-colors duration-300">- Authentication activity</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs p-2.5 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/[0.06] transition-colors cursor-pointer shadow-sm dark:shadow-none">
                        <FileText className="w-4 h-4 text-rose-600 dark:text-rose-400 transition-colors duration-300" />
                        <span className="font-semibold text-slate-800 dark:text-slate-200 transition-colors duration-300">Alert #AL-2231</span>
                        <span className="text-slate-500 dark:text-slate-400 truncate hidden sm:inline transition-colors duration-300">- Suspicious Process activity</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
