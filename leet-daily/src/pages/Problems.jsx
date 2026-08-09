import { Link } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";
import problems from "../data/problems";

function Problems() {
  return (
    <PageContainer className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div>
          <p className="theme-accent text-sm font-medium uppercase tracking-[0.2em]">
            Archive
          </p>

          <h1 className="theme-text-primary mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Problems
          </h1>

          <p className="theme-text-secondary mt-4 max-w-2xl leading-7">
            Every problem I've solved, understood, and documented.
          </p>
        </div>

        <div className="theme-border mt-10 border-t" />

        <div className="divide-y theme-border">
          {problems.map((problem) => (
            <Link
              key={problem.slug}
              to={`/problems/${problem.slug}`}
              className="group block py-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="theme-text-muted text-sm">
                    Day {problem.id}
                  </div>

                  <h2 className="theme-text-primary mt-1 text-xl font-semibold transition group-hover:text-[var(--accent)]">
                    {problem.title}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {problem.topics?.map((topic) => (
                      <span
                        key={topic}
                        className="theme-surface theme-text-muted theme-border rounded-full border px-2.5 py-1 text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span className="theme-accent-background theme-accent rounded-full px-3 py-1 text-xs font-medium">
                    {problem.difficulty}
                  </span>

                  <span className="theme-text-muted text-sm">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

export default Problems;