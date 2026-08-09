import React, { useState } from "react";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

import SpotlightBackground from "./SpotlightBackground";

function Hero() {
  // Mouse position state for subtle interactive tilt / dynamic glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid mouse reaction
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative isolate overflow-hidden select-none"
    >
      <SpotlightBackground />

      {/* Ambient Mouse Tracking Glow Overlay */}
      <motion.div
        className="pointer-events-none absolute -z-10 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/10 blur-[120px]"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          {/* Eyebrow Badge with Pulsing Ping */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex"
          >
            <span className="theme-accent-background theme-accent theme-accent-border inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] shadow-sm backdrop-blur-md transition-shadow hover:shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              Daily LeetCode Journal
            </span>
          </motion.div>

          {/* Heading with Staggered Visual Flow */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="theme-text-primary mt-8 text-5xl font-extrabold tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            One Problem.
            <br />
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="theme-accent bg-clip-text"
            >
              One Day.
            </motion.span>
            <br />
            One Better Solution.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="theme-text-secondary mx-auto mt-7 max-w-2xl text-base leading-relaxed sm:text-lg sm:leading-8"
          >
            A daily journal of solving LeetCode problems,
            understanding the patterns behind them, and writing
            cleaner, more optimal solutions.
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {/* Primary Action Button */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/problems"
                className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/20 transition-shadow hover:shadow-xl hover:shadow-[var(--accent)]/30 sm:w-auto"
              >
                {/* Subtle sheen highlight on hover */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                
                <span>Browse Problems</span>
                <motion.div
                  className="inline-flex"
                  initial={false}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.div>
              </Link>
            </motion.div>

            {/* Secondary Action Button */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-full sm:w-auto"
            >
              <a
                href="#today"
                className="group theme-surface theme-text-primary theme-border flex w-full items-center justify-center gap-2.5 rounded-xl border px-6 py-3.5 text-sm font-medium shadow-sm transition-all hover:border-[var(--accent)] hover:shadow-md sm:w-auto"
              >
                <BookOpen className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
                <span>Today's Problem</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Animated Hint Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className="theme-text-muted mt-12 flex items-center justify-center gap-2 text-xs tracking-wider"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--accent)] animate-pulse" />
            <span>Solve. Understand. Improve.</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;