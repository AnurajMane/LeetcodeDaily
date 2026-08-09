import React, { useState } from "react";
import { ArrowLeft, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "motion/react";

function NotFound() {
  // Mouse tracking state for ambient spotlight interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid spotlight tracking
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
      className="relative isolate flex min-h-[75vh] w-full items-center justify-center overflow-hidden px-4 py-20 select-none"
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -z-10 h-[450px] w-[450px] rounded-full bg-[var(--accent,rgba(139,92,246,0.15))] opacity-80 blur-[110px]"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />

      {/* Ambient Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-lg text-center">

        {/* Floating Animated 404 Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex"
        >
          <span className="theme-accent-background theme-accent theme-accent-border inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
            </span>
            404 Error
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="theme-text-primary mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          Problem not found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="theme-text-secondary mx-auto mt-4 max-w-md text-sm leading-relaxed sm:text-base"
        >
          The page or problem solution you're looking for doesn't exist, has been removed, or moved to a new route.
        </motion.p>

        {/* Interactive Return Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link
              to="/"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-[var(--accent,rgba(139,92,246,1))] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--accent)]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--accent)]/30"
            >
              {/* Animated Sheen Overlay */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <motion.div
                className="inline-flex"
                whileHover={{ x: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </motion.div>
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Decorative Compass Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="theme-text-muted mt-12 flex items-center justify-center gap-2 text-xs"
        >
          <Compass className="h-3.5 w-3.5 text-[var(--accent)] animate-spin-slow opacity-60" />
          <span>Lost in the solution set? Head back home.</span>
        </motion.div>

      </div>
    </section>
  );
}

export default NotFound;