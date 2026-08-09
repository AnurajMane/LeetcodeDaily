import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion, AnimatePresence } from "motion/react";

function CodeBlock({ children, className }) {
  const [copied, setCopied] = useState(false);

  const language = className ? className.replace("language-", "") : "text";
  const code = String(children).replace(/\n$/, "");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <div className="theme-border my-6 overflow-hidden rounded-xl border bg-[#0d1117] shadow-lg shadow-black/20 select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-md">
        
        {/* Left Side: Window Controls & Language Label */}
        <div className="flex items-center gap-3">
          {/* MacOS Decorative Window Control Dots */}
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>

          <div className="h-3 w-[1px] bg-white/10" />

          {/* Language Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-neutral-300 border border-white/10">
            <Terminal className="h-3 w-3 text-[var(--accent)]" />
            {language}
          </span>
        </div>

        {/* Right Side: Animated Copy Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          type="button"
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          className={`relative inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
            copied
              ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-400 shadow-xs shadow-emerald-500/20"
              : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="copied"
                initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotate: 45 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-1.5"
              >
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span>Copied!</span>
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ scale: 0.5, opacity: 0, rotate: 45 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotate: -45 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-1.5"
              >
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Code Area */}
      <div className="relative font-mono text-sm">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            padding: "1.25rem 1.5rem",
            background: "transparent",
            fontSize: "0.975rem",
            lineHeight: "1.7",
          }}
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeBlock;