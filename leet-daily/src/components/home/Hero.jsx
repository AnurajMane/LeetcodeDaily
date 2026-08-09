import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import SpotlightBackground from "./SpotlightBackground";

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <SpotlightBackground />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="theme-accent-background theme-accent theme-accent-border inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Daily LeetCode Journal
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="theme-text-primary mt-8 text-5xl font-bold tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            One Problem.
            <br />

            <span className="theme-accent">
              One Day.
            </span>

            <br />

            One Better Solution.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="theme-text-secondary mx-auto mt-7 max-w-2xl text-base leading-7 sm:text-lg"
          >
            A daily journal of solving LeetCode problems,
            understanding the patterns behind them, and writing
            better solutions.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/problems"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Browse Problems
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <a
              href="#today"
              className="theme-surface theme-text-primary theme-border inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-medium transition hover:opacity-80"
            >
              <BookOpen className="h-4 w-4" />
              Today's Problem
            </a>
          </motion.div>

          {/* Small hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="theme-text-muted mt-8 text-xs"
          >
            Solve. Understand. Improve.
          </motion.p>

        </div>
      </div>
    </section>
  );
}

export default Hero;