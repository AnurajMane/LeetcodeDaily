import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      type="button"
      onClick={() => setIsDark((previous) => !previous)}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="theme-text-secondary theme-surface theme-border relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border shadow-xs transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)] select-none"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ scale: 0.4, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.4, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Sun className="h-4 w-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0.4, rotate: 90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.4, rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            <Moon className="h-4 w-4 text-indigo-500 transition-transform duration-300 hover:-rotate-12" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default ThemeToggle;