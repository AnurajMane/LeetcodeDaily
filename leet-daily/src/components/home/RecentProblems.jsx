import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import ProblemCard from "../problems/ProblemCard";

// Container variant for staggered card entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Individual item reveal variant
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function RecentProblems({ problems = [] }) {
  const recentProblems = problems.slice(0, 3);

  return (
    <section className="theme-background px-4 py-20 sm:px-6 lg:px-8 select-none">
      <div className="mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow with Pulse */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              <p className="theme-accent text-xs font-semibold uppercase tracking-[0.2em]">
                The Journal
              </p>
            </div>

            <h2 className="theme-text-primary mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Recent Problems
            </h2>

            <p className="theme-text-secondary mt-3 max-w-xl text-sm leading-6">
              A look back at the latest problems solved, patterns uncovered, and optimal approaches written.
            </p>
          </motion.div>

          {/* Animated "View All" Link */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/problems"
              className="group theme-text-secondary inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:text-[var(--accent)]"
            >
              <span>View all</span>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex"
              >
                <ArrowRight className="h-4 w-4 transition-transform duration-200" />
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* Problems Grid */}
        {recentProblems.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-10 grid gap-6 lg:grid-cols-3"
          >
            {recentProblems.map((problem) => (
              <motion.div
                key={problem.slug}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-2xl transition-shadow duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/10"
              >
                <ProblemCard problem={problem} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Empty State Fallback */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="theme-border theme-surface mt-10 rounded-2xl border p-12 text-center"
          >
            <Sparkles className="mx-auto h-8 w-8 opacity-40 text-[var(--accent)]" />
            <p className="theme-text-muted mt-3 text-sm">
              No recent problems published yet.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}

export default RecentProblems;