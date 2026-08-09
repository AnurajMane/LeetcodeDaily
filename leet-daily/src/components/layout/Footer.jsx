import React from "react";
import { ExternalLink, Heart } from "lucide-react";
import { SiGithub } from "react-icons/si";
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

          {/* Footer Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2.5">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="theme-accent-border theme-accent-background theme-accent flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-bold shadow-sm"
              >
                &lt;/&gt;
              </motion.div>

              <span className="theme-text-primary text-base font-bold tracking-tight">
                DailyCode
              </span>
            </div>

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
              className="group theme-text-secondary theme-surface theme-border inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--text-primary)] hover:shadow-md"
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
              className="group theme-text-secondary theme-surface theme-border inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--text-primary)] hover:shadow-md"
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