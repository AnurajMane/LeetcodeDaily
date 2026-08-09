import React from "react";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function getDifficultyDetails(difficulty) {
  switch (difficulty) {
    case "Easy":
      return {
        badgeClasses: "border-emerald-500/25 bg-emerald-500/10 text-emerald-500 shadow-emerald-500/10",
        dotClass: "bg-emerald-500",
      };

    case "Medium":
      return {
        badgeClasses: "border-amber-500/25 bg-amber-500/10 text-amber-500 shadow-amber-500/10",
        dotClass: "bg-amber-500",
      };

    case "Hard":
      return {
        badgeClasses: "border-rose-500/25 bg-rose-500/10 text-rose-500 shadow-rose-500/10",
        dotClass: "bg-rose-500",
      };

    default:
      return {
        badgeClasses: "theme-accent-border theme-accent-background theme-accent",
        dotClass: "bg-[var(--accent)]",
      };
  }
}

function ProblemCard({ problem }) {
  const difficulty = getDifficultyDetails(problem.difficulty);

  // Safe Date Formatting
  const formattedDate = problem?.date
    ? new Date(`${problem.date}T00:00:00`).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  return (
    <Link to={`/problems/${problem.slug}`} className="group block select-none">
      <motion.article
        whileHover={{ y: -6, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
        className="theme-surface theme-border relative overflow-hidden rounded-2xl border p-5 shadow-xs transition-all duration-300 hover:border-[var(--accent)]/50 hover:shadow-xl hover:shadow-[var(--accent)]/10 sm:p-6"
      >
        {/* Animated Top Border Accent Line */}
        <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />

        <div className="flex flex-col gap-5">

          {/* Top Row: Day Indicator & Difficulty Pill */}
          <div className="flex items-center justify-between gap-4">
            <span className="theme-text-muted inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
              <span className="theme-accent text-xs font-bold">#</span>
              Day {problem.id}
            </span>

            {/* Difficulty Badge with Pulse Indicator */}
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold shadow-xs transition-shadow duration-300 ${difficulty.badgeClasses}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${difficulty.dotClass} animate-pulse`} />
              {problem.difficulty}
            </span>
          </div>

          {/* Title & Topic Tags */}
          <div className="space-y-3">
            <h2 className="theme-text-primary text-xl font-bold tracking-tight transition-colors duration-200 group-hover:text-[var(--accent)]">
              {problem.title}
            </h2>

            {problem.topics && problem.topics.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {problem.topics.map((topic) => (
                  <motion.span
                    key={topic}
                    whileHover={{ scale: 1.05 }}
                    className="theme-surface-hover theme-text-secondary theme-border inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-xs font-medium backdrop-blur-xs transition-colors group-hover:border-[var(--accent)]/30"
                  >
                    <Tag className="h-3 w-3 opacity-50" />
                    {topic}
                  </motion.span>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Row: Date & Action Trigger */}
          <div className="theme-border flex items-center justify-between border-t pt-4">
            <span className="theme-text-muted flex items-center gap-1.5 text-xs font-medium">
              <Calendar className="h-3.5 w-3.5 opacity-60" />
              {formattedDate}
            </span>

            <span className="theme-text-secondary inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200 group-hover:text-[var(--accent)]">
              <span>Read solution</span>
              <motion.div
                className="inline-flex"
                initial={false}
                animate={{ x: 0, y: 0 }}
                whileHover={{ x: 2, y: -2 }}
              >
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.div>
            </span>
          </div>

        </div>
      </motion.article>
    </Link>
  );
}

export default ProblemCard;