import { ExternalLink } from "lucide-react";

import ProblemMeta from "./ProblemMeta";

function ProblemHeader({ problem }) {
  return (
    <header>
      <div className="theme-text-muted text-sm font-medium">
        Day {problem.id}
      </div>

      <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="theme-text-primary text-4xl font-bold tracking-tight sm:text-5xl">
            {problem.title}
          </h1>

          <ProblemMeta problem={problem} />

          <p className="theme-text-muted mt-4 text-sm">
            Published on{" "}
            {new Date(`${problem.date}T00:00:00`).toLocaleDateString(
              "en-IN",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              }
            )}
          </p>
        </div>

        {problem.leetcodeUrl && (
          <a
            href={problem.leetcodeUrl}
            target="_blank"
            rel="noreferrer"
            className="theme-text-primary theme-surface theme-border theme-surface-hover inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition"
          >
            View on LeetCode
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </header>
  );
}

export default ProblemHeader;