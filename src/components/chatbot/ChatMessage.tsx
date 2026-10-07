"use client";

import { Message } from "ai/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BrainCircuit, Check, Copy, User } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex w-full flex-col gap-1",
        isUser ? "items-end" : "items-start"
      )}
    >
      <div className="flex items-center gap-2 px-1">
        {!isUser && (
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
            <BrainCircuit className="h-3 w-3" />
          </div>
        )}
        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
          {isUser ? "You" : "Sentinel AI"}
        </span>
      </div>

      <div
        className={cn(
          "relative max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm",
          isUser
            ? "bg-emerald-600 text-white rounded-tr-sm"
            : "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white rounded-tl-sm"
        )}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline underline-offset-2 hover:text-emerald-200">
                {children}
              </a>
            ),
            ul: ({ children }) => <ul className="mb-2 list-disc pl-4 last:mb-0">{children}</ul>,
            ol: ({ children }) => <ol className="mb-2 list-decimal pl-4 last:mb-0">{children}</ol>,
            li: ({ children }) => <li className="mb-1 last:mb-0">{children}</li>,
            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
            code: ({ node, inline, className, children, ...props }: any) => {
              const match = /language-(\w+)/.exec(className || "");
              const isInline = inline || !match;
              
              if (isInline) {
                return (
                  <code className="rounded bg-black/10 dark:bg-white/10 px-1.5 py-0.5 font-mono text-[13px]" {...props}>
                    {children}
                  </code>
                );
              }

              return (
                <CodeBlock language={match[1]} value={String(children).replace(/\n$/, "")} />
              );
            },
          }}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

function CodeBlock({ language, value }: { language: string; value: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="my-3 overflow-hidden rounded-lg bg-slate-950 border border-slate-800 shadow-md">
      <div className="flex items-center justify-between bg-slate-900 px-4 py-1.5">
        <span className="text-xs font-medium text-slate-400 lowercase">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          title="Copy code"
        >
          {isCopied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="overflow-x-auto p-4 text-[13px] leading-relaxed text-slate-50">
        <pre className="font-mono bg-transparent m-0 p-0">
          <code>{value}</code>
        </pre>
      </div>
    </div>
  );
}
