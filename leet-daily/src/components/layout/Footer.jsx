import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

import PageContainer from "./PageContainer";

function Footer() {
  return (
    <footer className="theme-border mt-20 border-t">
      <PageContainer>
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">

          {/* Footer Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="theme-accent-border theme-accent-background theme-accent flex h-7 w-7 items-center justify-center rounded-md border text-xs font-bold">
                &lt;/&gt;
              </div>

              <span className="theme-text-primary font-semibold">
                DailyCode
              </span>
            </div>

            <p className="theme-text-muted mt-3 max-w-md text-sm leading-6">
              One problem. One day. One better solution.
              <br />
              A daily journal of solving and understanding LeetCode problems.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="theme-text-secondary theme-surface theme-border theme-surface-hover inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition hover:text-[var(--text-primary)]"
            >
              <SiGithub className="h-4 w-4" />
              GitHub
            </a>

            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noreferrer"
              className="theme-text-secondary theme-surface theme-border theme-surface-hover inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition hover:text-[var(--text-primary)]"
            >
              LeetCode
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

          </div>
        </div>

        {/* Copyright */}
        <div className="theme-border theme-text-muted border-t py-5 text-center text-xs">
          © {new Date().getFullYear()} DailyCode. Built with React.
        </div>
      </PageContainer>
    </footer>
  );
}

export default Footer;