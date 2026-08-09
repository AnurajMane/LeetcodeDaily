import {
  ArrowRight,
  BookOpen,
  Code2,
  FileText,
  Layers3,
  Terminal,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";

import PageContainer from "../components/layout/PageContainer";

function About() {
  const principles = [
    {
      icon: BookOpen,
      title: "Solve",
      description:
        "Take one problem and spend time understanding what it is really asking.",
    },
    {
      icon: Code2,
      title: "Understand",
      description:
        "Focus on the pattern, reasoning, trade-offs, and why a solution works.",
    },
    {
      icon: Layers3,
      title: "Improve",
      description:
        "Look for cleaner, simpler, and more efficient ways to approach the problem.",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Pick a problem",
      description:
        "Choose one LeetCode problem to work on for the day.",
    },
    {
      step: "02",
      title: "Understand the pattern",
      description:
        "Break down the problem and identify the underlying data structure or algorithm.",
    },
    {
      step: "03",
      title: "Write the solution",
      description:
        "Document the approach, implementation, complexity, and key takeaway.",
    },
    {
      step: "04",
      title: "Publish",
      description:
        "Add the solution as a Markdown file and let the static site handle the rest.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl"
        />

        {/* Grid */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        <PageContainer className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="theme-accent-background theme-accent theme-accent-border inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em]">
              <Terminal className="h-3.5 w-3.5" />
              About DailyCode
            </div>

            <h1 className="theme-text-primary mt-7 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              One Problem.
              <br />
              <span className="theme-accent">One Day.</span>
              <br />
              One Better Solution.
            </h1>

            <p className="theme-text-secondary mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg">
              DailyCode is a personal journal for solving LeetCode
              problems, understanding the ideas behind them, and
              documenting better solutions one day at a time.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Philosophy */}
      <section className="theme-background px-4 py-20 sm:px-6 lg:px-8">
        <PageContainer>
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <p className="theme-accent text-xs font-medium uppercase tracking-[0.2em]">
                The Philosophy
              </p>

              <h2 className="theme-text-primary mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Consistency over complexity.
              </h2>

              <p className="theme-text-secondary mt-4 leading-7">
                DailyCode is built around a simple habit: solve one
                problem every day and learn something from it.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <div
                    key={principle.title}
                    className="theme-surface theme-border rounded-2xl border p-6"
                  >
                    <div className="theme-accent-background theme-accent theme-accent-border flex h-10 w-10 items-center justify-center rounded-lg border">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="theme-text-primary mt-5 text-lg font-semibold">
                      {principle.title}
                    </h3>

                    <p className="theme-text-secondary mt-2 text-sm leading-6">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* How it works */}
      <section className="theme-background px-4 py-20 sm:px-6 lg:px-8">
        <PageContainer>
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <p className="theme-accent text-xs font-medium uppercase tracking-[0.2em]">
                The Workflow
              </p>

              <h2 className="theme-text-primary mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                From problem to journal entry.
              </h2>

              <p className="theme-text-secondary mt-4 leading-7">
                Every solution follows the same simple workflow.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {workflow.map((item) => (
                <div
                  key={item.step}
                  className="theme-surface theme-border rounded-2xl border p-6"
                >
                  <span className="theme-text-muted font-mono text-sm">
                    {item.step}
                  </span>

                  <h3 className="theme-text-primary mt-4 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="theme-text-secondary mt-2 text-sm leading-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Built with */}
      <section className="theme-background px-4 py-20 sm:px-6 lg:px-8">
        <PageContainer>
          <div className="mx-auto max-w-5xl">
            <div className="theme-surface theme-border overflow-hidden rounded-2xl border">
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="theme-accent-background theme-accent theme-accent-border flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                    <FileText className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="theme-text-primary text-xl font-semibold">
                      Built with Markdown
                    </h2>

                    <p className="theme-text-secondary mt-2 max-w-2xl text-sm leading-6">
                      Every problem on DailyCode is a Markdown file.
                      There is no database, admin dashboard, or CMS.
                      Adding a new problem is as simple as creating a
                      file, writing the solution, and pushing it to Git.
                    </p>
                  </div>
                </div>

                <div className="theme-border theme-surface mt-8 overflow-x-auto rounded-xl border p-4">
                  <pre className="theme-text-secondary font-mono text-sm leading-7">
{`src/
└── content/
    └── problems/
        ├── 001-two-sum.md
        ├── 002-valid-parentheses.md
        └── 003-your-next-problem.md`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Technology */}
      <section className="theme-background px-4 py-20 sm:px-6 lg:px-8">
        <PageContainer>
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <p className="theme-accent text-xs font-medium uppercase tracking-[0.2em]">
                Technology
              </p>

              <h2 className="theme-text-primary mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Simple by design.
              </h2>

              <p className="theme-text-secondary mt-4 leading-7">
                DailyCode is intentionally frontend-only and built
                for static deployment.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React",
                "JavaScript",
                "Vite",
                "Tailwind CSS",
                "React Router",
                "Markdown",
                "YAML",
                "Motion",
              ].map((technology) => (
                <span
                  key={technology}
                  className="theme-surface theme-text-secondary theme-border rounded-full border px-3.5 py-2 text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* CTA */}
      <section className="theme-background px-4 pb-24 pt-4 sm:px-6 lg:px-8">
        <PageContainer>
          <div className="theme-surface theme-border relative overflow-hidden rounded-2xl border p-8 text-center sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl"
            />

            <div className="relative">
              <p className="theme-text-muted text-sm">
                Ready to explore?
              </p>

              <h2 className="theme-text-primary mt-2 text-2xl font-bold sm:text-3xl">
                Start with today's problem.
              </h2>

              <p className="theme-text-secondary mx-auto mt-3 max-w-xl text-sm leading-6">
                Browse the journal and explore the problems,
                approaches, and solutions documented so far.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/problems"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Browse Problems
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="https://github.com/AnurajMane"
                  target="_blank"
                  rel="noreferrer"
                  className="theme-surface theme-text-primary theme-border inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-medium transition hover:opacity-80"
                >
                  <SiGithub className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>
    </main>
  );
}

export default About;