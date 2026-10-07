"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatWindow from "./ChatWindow";

export default function SentinelAI() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-emerald-500 before:opacity-0 before:blur-md hover:before:opacity-40 before:transition-opacity before:duration-500"
            aria-label="Open Sentinel AI"
          >
            <div className="absolute -inset-1 rounded-full animate-pulse bg-emerald-500/20" />
            <img src="/chat-bot-logo.png" alt="Sentinel AI" className="h-full w-full object-cover rounded-full relative z-10" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <ChatWindow onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
