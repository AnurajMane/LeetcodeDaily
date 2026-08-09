import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";

// Animated counter hook component
function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 70,
    damping: 18,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value || 0);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

function Stats({ stats = { total: 0, easy: 0, medium: 0, hard: 0 } }) {
  const total = stats.total || 0;
  
  // Calculate relative distribution percentages safely
  const easyPct = total ? Math.round(((stats.easy || 0) / total) * 100) : 0;
  const mediumPct = total ? Math.round(((stats.medium || 0) / total) * 100) : 0;
  const hardPct = total ? Math.round(((stats.hard || 0) / total) * 100) : 0;

  const items = [
    {
      label: "Problems Solved",
      value: stats.total,
      color: "var(--accent, #6366f1)",
      dotColor: "bg-[var(--accent,#6366f1)]",
      badge: "Total",
      pct: 100,
    },
    {
      label: "Easy",
      value: stats.easy,
      color: "#10b981", // Emerald
      dotColor: "bg-emerald-500",
      badge: `${easyPct}%`,
      pct: easyPct,
    },
    {
      label: "Medium",
      value: stats.medium,
      color: "#f59e0b", // Amber
      dotColor: "bg-amber-500",
      badge: `${mediumPct}%`,
      pct: mediumPct,
    },
    {
      label: "Hard",
      value: stats.hard,
      color: "#f43f5e", // Rose
      dotColor: "bg-rose-500",
      badge: `${hardPct}%`,
      pct: hardPct,
    },
  ];

  return (
    <section className="theme-background px-4 py-16 sm:px-6 lg:px-8 select-none">
      <div className="mx-auto max-w-5xl">

        {/* Card Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group theme-surface theme-border relative overflow-hidden rounded-2xl border p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6"
            >
              {/* Subtle top color glow line */}
              <div
                className="absolute inset-x-0 top-0 h-1 opacity-80 transition-opacity group-hover:opacity-100"
                style={{ backgroundColor: item.color }}
              />

              {/* Card Header & Dot */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className={`h-2 w-2 rounded-full ${item.dotColor} animate-pulse`} />
                  <span className="theme-text-muted text-xs font-semibold uppercase tracking-[0.15em]">
                    {item.label}
                  </span>
                </span>

                {/* Percentage Badge */}
                {item.badge && (
                  <span className="theme-border rounded-full border px-2 py-0.5 text-[10px] font-medium opacity-70">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Counter Value */}
              <div className="mt-4 flex items-baseline gap-1">
                <p className="theme-text-primary text-3xl font-extrabold tracking-tight sm:text-4xl">
                  <AnimatedNumber value={item.value} />
                </p>
              </div>

              {/* Mini Mini Bar Indicator */}
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Distribution Breakdown Bar */}
        {total > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10"
          >
            <div
              className="h-full bg-emerald-500 transition-all duration-500"
              style={{ width: `${easyPct}%` }}
              title={`Easy: ${easyPct}%`}
            />
            <div
              className="h-full bg-amber-500 transition-all duration-500"
              style={{ width: `${mediumPct}%` }}
              title={`Medium: ${mediumPct}%`}
            />
            <div
              className="h-full bg-rose-500 transition-all duration-500"
              style={{ width: `${hardPct}%` }}
              title={`Hard: ${hardPct}%`}
            />
          </motion.div>
        )}

      </div>
    </section>
  );
}

export default Stats;