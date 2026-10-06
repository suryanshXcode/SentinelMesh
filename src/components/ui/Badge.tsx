import React from "react";

export default function Badge({ children, dark }: { children: React.ReactNode; dark?: boolean; }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-[0.16em] ${dark
          ? "border-white/10 bg-white/[0.04] text-slate-300"
          : "border-slate-200 bg-white text-slate-600"
        }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {children}
    </span>
    );
}
