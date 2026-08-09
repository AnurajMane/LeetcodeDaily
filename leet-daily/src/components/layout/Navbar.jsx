import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";

import PageContainer from "./PageContainer";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      label: "Problems",
      path: "/problems",
    },
    {
      label: "Streak",
      path: "/streak",
    },
    {
      label: "About",
      path: "/about",
    },
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b theme-border bg-[var(--background)]/80 backdrop-blur-xl">
      <PageContainer>
        <nav className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2"
          >
            <div className="theme-accent-border theme-accent-background theme-accent flex h-8 w-8 items-center justify-center rounded-lg border transition hover:opacity-80">
              <span className="text-sm font-bold">
                &lt;/&gt;
              </span>
            </div>

            <span className="theme-text-primary text-sm font-semibold tracking-tight sm:text-base">
              DailyCode
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm transition ${
                    isActive
                      ? "theme-surface theme-text-primary"
                      : "theme-text-secondary theme-surface-hover hover:text-[var(--text-primary)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="theme-text-secondary theme-surface theme-border theme-surface-hover inline-flex h-9 w-9 items-center justify-center rounded-full border transition hover:text-[var(--text-primary)]"
            >
              <SiGithub className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="theme-text-secondary theme-surface theme-border theme-surface-hover inline-flex h-9 w-9 items-center justify-center rounded-lg border transition hover:text-[var(--text-primary)] md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="theme-border border-t py-4 md:hidden">
            <div className="flex flex-col gap-1">

              {navigationItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm transition ${
                      isActive
                        ? "theme-surface theme-text-primary"
                        : "theme-text-secondary theme-surface-hover hover:text-[var(--text-primary)]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="theme-border my-2 border-t" />

              {/* Mobile Theme */}
              <div className="flex items-center justify-between px-4 py-2">
                <span className="theme-text-secondary text-sm">
                  Theme
                </span>

                <ThemeToggle />
              </div>

              {/* Mobile GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
                className="theme-text-secondary theme-surface-hover flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition hover:text-[var(--text-primary)]"
              >
                <SiGithub className="h-4 w-4" />
                GitHub
              </a>

            </div>
          </div>
        )}
      </PageContainer>
    </header>
  );
}

export default Navbar;