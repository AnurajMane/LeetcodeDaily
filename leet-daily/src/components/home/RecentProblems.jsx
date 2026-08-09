import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ProblemCard from "../problems/ProblemCard";

function RecentProblems({ problems }) {
  const recentProblems = problems.slice(0, 3);

  return (
    <section className="theme-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="theme-accent text-xs font-medium uppercase tracking-[0.2em]">
              The Journal
            </p>

            <h2 className="theme-text-primary mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Recent Problems
            </h2>

            <p className="theme-text-secondary mt-3 max-w-xl text-sm leading-6">
              A look back at the latest problems and solutions.
            </p>
          </div>

          <Link
            to="/problems"
            className="theme-text-secondary inline-flex items-center gap-2 text-sm font-medium transition hover:text-[var(--accent)]"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {recentProblems.map((problem) => (
            <ProblemCard
              key={problem.slug}
              problem={problem}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default RecentProblems;