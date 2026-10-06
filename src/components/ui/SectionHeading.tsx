import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string; }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-xs font-bold tracking-[0.24em] text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
      >
        {eyebrow}
      </motion.p>

      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl transition-colors duration-300"
      >
        {title}
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg transition-colors duration-300"
      >
        {description}
      </motion.p>
    </div>
    );
}
