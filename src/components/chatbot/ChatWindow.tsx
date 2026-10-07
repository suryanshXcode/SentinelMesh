"use client";

import { useRef, useEffect, useState } from "react";
import { useChat } from "ai/react";
import { motion } from "framer-motion";
import { BrainCircuit, X, RefreshCw, Send, Loader2, Minus } from "lucide-react";
import ChatMessage from "./ChatMessage";
import { usePathname } from "next/navigation";

export default function ChatWindow({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();
  const [contextPage, setContextPage] = useState("Home");

  useEffect(() => {
    // Determine context based on URL
    if (pathname?.includes("soc-overview")) setContextPage("SOC Overview");
    else if (pathname?.includes("incident-investigation")) setContextPage("Incident Investigation");
    else if (pathname?.includes("attack-graph")) setContextPage("Attack Graph");
    else if (pathname?.includes("evidence-timeline")) setContextPage("Evidence Timeline");
    else if (pathname?.includes("mitre-attack")) setContextPage("MITRE ATT&CK");
    else if (pathname?.includes("ai-investigator")) setContextPage("AI Investigator");
    else setContextPage("Home");
  }, [pathname]);

  const initialWelcome = {
    id: "welcome",
    role: "assistant" as const,
    content: `Hi! I'm Sentinel AI 👋\n\nI'm your general-purpose AI assistant.\n\nAsk me anything — cybersecurity, coding, AI, study questions, general knowledge, writing, or just something random.`,
  };

  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages, append, error } = useChat({
    api: "/api/chat",
    body: {
      contextPage,
    },
    initialMessages: [initialWelcome],
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const suggestions: Record<string, string[]> = {
    "SOC Overview": [
      "Summarize this dashboard",
      "What is an incident?",
      "Explain alert severity",
      "What is MITRE ATT&CK?"
    ],
    "Incident Investigation": [
      "How should I investigate this?",
      "Explain the evidence",
      "What should I check next?"
    ],
    "Attack Graph": [
      "Explain this attack path",
      "What is lateral movement?",
      "How do attack graphs work?"
    ],
    "Evidence Timeline": [
      "Summarize this timeline",
      "What happened first?",
      "Which events look suspicious?"
    ],
    "MITRE ATT&CK": [
      "What is this technique?",
      "Explain this tactic",
      "How is MITRE ATT&CK used?"
    ],
    "Home": [
      "What can you do?",
      "Explain cybersecurity",
      "Tell me about SentinelMesh",
      "Help me with Python",
      "Ask me something random"
    ]
  };

  const currentSuggestions = suggestions[contextPage] || suggestions["Home"];

  const handleSuggestionClick = (suggestion: string) => {
    append({ role: "user", content: suggestion });
  };

  const handleClear = () => {
    setMessages([initialWelcome]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="fixed bottom-0 right-0 md:bottom-6 md:right-6 z-[100] flex flex-col bg-white dark:bg-slate-900 w-full h-[100dvh] md:h-[650px] md:w-[420px] md:rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 px-4 py-3 border-b border-slate-200 dark:border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <BrainCircuit className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              ✦ SENTINEL AI
            </h2>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Your intelligent digital assistant
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleClear}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-md hover:bg-slate-200 dark:hover:bg-white/5 transition-colors"
            title="New Chat"
            aria-label="New Chat"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-md hover:bg-slate-200 dark:hover:bg-white/5 transition-colors md:hidden"
            title="Minimize"
            aria-label="Minimize"
          >
            <Minus className="h-4 w-4" />
          </button>
          <button
            onClick={onClose}
            className="hidden md:block p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-md hover:bg-slate-200 dark:hover:bg-white/5 transition-colors"
            title="Close"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-white dark:bg-slate-950/50">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {/* Error State */}
        {error && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 text-sm">
            Sorry, I couldn't process that right now. Please try again.
          </div>
        )}

        {/* Loading State */}
        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex flex-col gap-1 items-start">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 ml-1">Sentinel AI is thinking...</span>
            <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}

        {/* Suggestions - Only show if it's just the welcome message */}
        {messages.length === 1 && (
          <div className="pt-4">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
              Suggested questions
            </p>
            <div className="flex flex-wrap gap-2">
              {currentSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="text-xs px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-left"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 shrink-0">
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/50 focus-within:border-emerald-500/50 dark:focus-within:border-emerald-500/50 focus-within:ring-1 focus-within:ring-emerald-500/50 transition-all"
        >
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="w-full bg-transparent px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white transition-colors hover:bg-emerald-500 disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:text-slate-500"
            aria-label="Send message"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
