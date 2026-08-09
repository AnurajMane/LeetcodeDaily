import React from "react";
import { ExternalLink, Flame, Heart } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import PageContainer from "./PageContainer";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="theme-border relative mt-20 border-t select-none">
      {/* Subtle Top Gradient Glow Bar */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-30" />

      <PageContainer>
        <div className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">

          {/* Footer Brand with Flame & Brackets Logo */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/" className="group inline-flex items-center gap-2.5">
              {/* Animated Flame Badge */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--accent)]/30 bg-[var(--accent-background)] shadow-sm backdrop-blur-md"
              >
                {/* Subtle ambient hover glow */}
                <div className="absolute inset-0 rounded-xl bg-[var(--accent)]/15 blur-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-center justify-center font-mono font-bold text-xs text-[var(--accent)]">
                  <span className="opacity-70 transition-transform duration-200 group-hover:-translate-x-0.5">
                    &lt;
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <Flame className="h-4 w-4 fill-amber-500 text-amber-500" />
                  </motion.div>
                  <span className="opacity-70 transition-transform duration-200 group-hover:translate-x-0.5">
                    &gt;
                  </span>
                </div>
              </motion.div>

              {/* Brand Title & Subtitle */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="theme-text-primary text-base font-extrabold tracking-tight">
                    Daily<span className="text-[var(--accent)]">Code</span>
                  </span>
                  <span
                    className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"
                    title="Daily Streak Active"
                  />
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 -mt-0.5">
                  LeetCode Journal
                </span>
              </div>
            </Link>

            <p className="theme-text-muted mt-3 max-w-md text-sm leading-6">
              One problem. One day. One better solution.
              <br />
              A daily journal of solving and understanding LeetCode problems.
            </p>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            {/* GitHub Link */}
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              href="https://github.com/AnurajMane/LeetcodeDaily"
              target="_blank"
              rel="noreferrer"
              className="group theme-text-secondary theme-surface theme-border inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium shadow-xs transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--text-primary)] hover:shadow-md"
            >
              <SiGithub className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
              <span>GitHub</span>
            </motion.a>

            {/* LeetCode Link */}
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              href="https://leetcode.com/u/Anurajmane02/"
              target="_blank"
              rel="noreferrer"
              className="group theme-text-secondary theme-surface theme-border inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium shadow-xs transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--text-primary)] hover:shadow-md"
            >
              <span>LeetCode</span>
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>

        </div>

        {/* Copyright */}
        <div className="theme-border theme-text-muted flex flex-col items-center justify-between gap-2 border-t py-6 text-center text-xs sm:flex-row">
          <p>© {currentYear} DailyCode. Built with React & Tailwind CSS.</p>
          <p className="flex items-center gap-1 opacity-80">
            <span>Crafted for problem solvers</span>
            <Heart className="h-3 w-3 text-rose-500 fill-rose-500 animate-pulse" />
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}

export default Footer;