import React, { useState } from "react";
import { Flame, Menu, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import PageContainer from "./PageContainer";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: "Problems", path: "/problems" },
    { label: "Streak", path: "/streak" },
    { label: "About", path: "/about" },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b theme-border bg-[var(--background)]/80 backdrop-blur-xl transition-colors duration-300 select-none">
      <PageContainer>
        <nav className="flex h-16 items-center justify-between">

          {/* Logo Concept 1: Flame & Brackets (< 🔥 >) */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2.5"
          >
            {/* Animated Flame Icon Badge */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--accent)]/30 bg-[var(--accent-background)] shadow-xs backdrop-blur-md"
            >
              {/* Subtle ambient hover glow */}
              <div className="absolute inset-0 rounded-xl bg-[var(--accent)]/15 blur-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex items-center justify-center font-mono text-xs font-bold text-[var(--accent)]">
                <span className="opacity-70 transition-transform duration-200 group-hover:-translate-x-0.5">
                  &lt;
                </span>
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  <Flame className="h-4 w-4 fill-amber-500 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
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
                  title="Daily streak active"
                />
              </div>
              <span className="text-[9px] font-mono font-medium tracking-widest uppercase text-neutral-500 -mt-0.5">
                LeetCode Journal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Animated Active Pill */}
          <div className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "theme-text-primary font-semibold"
                        : "theme-text-secondary hover:text-[var(--text-primary)]"
                    }`
                  }
                >
                  {/* Sliding Active Background Highlight */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="theme-surface absolute inset-0 -z-10 rounded-lg shadow-xs"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />

            <motion.a
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              href="https://github.com/AnurajMane/LeetcodeDaily"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="theme-text-secondary theme-surface theme-border inline-flex h-9 w-9 items-center justify-center rounded-full border shadow-xs transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
            >
              <SiGithub className="h-4 w-4" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="theme-text-secondary theme-surface theme-border inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors hover:text-[var(--text-primary)] md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="theme-border border-t py-4">
                <div className="flex flex-col gap-1">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                            isActive
                              ? "theme-surface theme-text-primary font-semibold"
                              : "theme-text-secondary hover:text-[var(--text-primary)]"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </motion.div>
                  ))}

                  <div className="theme-border my-2 border-t" />

                  {/* Mobile Theme Toggle Row */}
                  <div className="flex items-center justify-between px-4 py-2">
                    <span className="theme-text-secondary text-sm font-medium">
                      Theme
                    </span>
                    <ThemeToggle />
                  </div>

                  {/* Mobile GitHub Action */}
                  <a
                    href="https://github.com/AnurajMane/LeetcodeDaily"
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMobileMenu}
                    className="theme-text-secondary flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:text-[var(--text-primary)]"
                  >
                    <SiGithub className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </PageContainer>
    </header>
  );
}

export default Navbar;