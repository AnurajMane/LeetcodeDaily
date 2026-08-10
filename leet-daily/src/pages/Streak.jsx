import React from "react";
import { ArrowLeft, CheckCircle2, Flame, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "motion/react";

import PageContainer from "../components/layout/PageContainer";

// Simulated 12-week streak heatmap data
const generateMockHeatmap = () => {
  const weeks = 12;
  const daysPerWeek = 7;
  const grid = [];

  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < daysPerWeek; d++) {
      // Generate realistic intensity levels (0 = empty, 1-4 = active)
      const isRecent = w > 6;
      const intensity = isRecent
        ? Math.floor(Math.random() * 4) + 1
        : Math.random() > 0.4
        ? Math.floor(Math.random() * 3) + 1
        : 0;
      week.push(intensity);
    }
    grid.push(week);
  }
  return grid;
};

const mockHeatmap = generateMockHeatmap();

function Streak() {
  // Dynamic Cursor Glow Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const upcomingFeatures = [
    "Daily solving streak counter",
    "Longest & current streak records",
    "Interactive contribution calendar",
    "Detailed problem-solving analytics",
  ];

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden select-none"
    >
      {/* Background Interactive Glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[110px]"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <PageContainer>
        <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-20">
          <div className="mx-auto max-w-2xl text-center">

            {/* Glowing Flame Icon Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-orange-500/30 bg-orange-500/10 shadow-lg shadow-orange-500/10 backdrop-blur-md"
            >
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-3xl bg-orange-500/20 blur-md animate-pulse" />

              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Flame className="h-9 w-9 text-orange-500 fill-orange-500/30" />
              </motion.div>
            </motion.div>

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-500"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              Future Update
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="theme-text-primary mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            >
              My consistency,
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 bg-clip-text text-transparent">
                visualized.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="theme-text-secondary mx-auto mt-5 max-w-lg text-sm leading-relaxed sm:text-base"
            >
              I'm planning to build a dedicated streak dashboard to track daily problem-solving progress and turn consistency into a visual timeline.
            </motion.p>

            {/* Interactive Mock Heatmap Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="theme-surface theme-border relative mx-auto mt-8 max-w-md overflow-hidden rounded-2xl border p-5 shadow-md backdrop-blur-md"
            >
              <div className="flex items-center justify-between pb-3 text-xs font-semibold theme-text-muted border-b theme-border">
                <span>Mock Contribution Preview</span>
                <span className="text-orange-500 font-mono">14 Day Streak 🔥</span>
              </div>

              {/* Heatmap Grid */}
              <div className="mt-4 flex justify-between gap-1.5 overflow-x-auto py-1">
                {mockHeatmap.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-1.5">
                    {week.map((level, dIndex) => {
                      let bgClass = "bg-white/5 border border-white/5";
                      if (level === 1) bgClass = "bg-orange-900/40 border border-orange-700/30";
                      if (level === 2) bgClass = "bg-orange-700/60 border border-orange-500/40";
                      if (level === 3) bgClass = "bg-orange-500/80 border border-orange-400/50 shadow-xs shadow-orange-500/20";
                      if (level === 4) bgClass = "bg-orange-400 border border-amber-300 shadow-sm shadow-orange-500/40";

                      return (
                        <motion.div
                          key={dIndex}
                          whileHover={{ scale: 1.3 }}
                          className={`h-3 w-3 rounded-xs transition-colors duration-200 ${bgClass}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Feature Preview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="theme-surface theme-border mx-auto mt-6 max-w-md rounded-2xl border p-6 text-left shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="h-4 w-4 text-orange-500" />
                <span className="theme-text-primary text-sm font-bold">
                  What's coming to Streak
                </span>
              </div>

              <div className="theme-border mt-4 space-y-3 border-t pt-4">
                {upcomingFeatures.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-orange-500/80 shrink-0" />
                    <span className="theme-text-secondary text-sm font-medium">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Back Button Action */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  to="/"
                  className="group theme-surface theme-border theme-text-primary inline-flex items-center gap-2.5 rounded-xl border px-5 py-3 text-sm font-semibold shadow-xs transition-all hover:border-[var(--accent)] hover:shadow-md"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
                  <span>Back to Home</span>
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </section>
      </PageContainer>
    </main>
  );
}

export default Streak;