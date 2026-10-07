import React from "react";
import Image from "next/image";
import SentinelOrbitOverlay from "../SentinelOrbitOverlay";

interface WorkingModelProps {
  activeStage?: number;
  setActiveStage?: (val: number) => void;
}

export default function WorkingModel({ activeStage = 0, setActiveStage }: WorkingModelProps) {
  return (
    <section
      id="platform"
      className="border-y border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950 py-20 sm:py-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-emerald-600 dark:text-emerald-400">
              WORKING MODEL
            </p>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl transition-colors duration-300">
              From raw signals to
              <span className="text-emerald-600 dark:text-emerald-400"> investigation-ready</span>{" "}
              incidents.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-400 transition-colors duration-300">
              Explore each intelligence stage. The model automatically
              progresses through the pipeline and can also be controlled
              manually.
            </p>
          </div>
        </div>

        <div className="relative w-full rounded-[30px] border border-slate-200 bg-white shadow-2xl shadow-slate-200/50 dark:border-white/10 dark:bg-[#07100f] dark:shadow-black/30 overflow-hidden transition-colors duration-300">
          <Image
            src="/landing.jpeg"
            alt="SentinelMesh Working Model"
            width={1600}
            height={900}
            className="w-full h-auto object-contain pointer-events-none select-none"
            priority
          />

          <SentinelOrbitOverlay activeStage={activeStage} />
        </div>
      </div>
    </section>
  );
}
