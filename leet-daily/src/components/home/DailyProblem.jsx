import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function getDifficultyClasses(difficulty) {
  switch (difficulty) {
    case "Easy":
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-500";

    case "Medium":
      return "border-amber-500/20 bg-amber-500/10 text-amber-500";

    case "Hard":
      return "border-red-500/20 bg-red-500/10 text-red-500";

    default:
      return "theme-accent-border theme-accent-background theme-accent";
  }
}

function DailyProblem({ problem }) {
  if (!problem) {
    return null;
  }

  const formattedDate = new Date(
    `${problem.date}T00:00:00`
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section
      id="today"
      className="theme-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section heading */}
        <div className="text-center">
          <p className="theme-accent text-xs font-medium uppercase tracking-[0.2em]">
            Today's Problem
          </p>

          <h2 className="theme-text-primary mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Today's challenge
          </h2>

          <p className="theme-text-secondary mx-auto mt-3 max-w-xl text-sm leading-6">
            One problem to solve, understand, and learn from today.
          </p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <Link
            to={`/problems/${problem.slug}`}
            className="group block"
          >
            <article className="theme-surface theme-border relative overflow-hidden rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8">

              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />

              <div className="relative">

                {/* Top */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="theme-text-muted text-xs font-medium uppercase tracking-[0.18em]">
                    Day {problem.id}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${getDifficultyClasses(
                      problem.difficulty
                    )}`}
                  >
                    {problem.difficulty}
                  </span>
                </div>

                {/* Title */}
                <h3 className="theme-text-primary mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  {problem.title}
                </h3>

                {/* Topics */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {problem.topics?.map((topic) => (
                    <span
                      key={topic}
                      className="theme-surface-hover theme-text-secondary theme-border rounded-full border px-3 py-1 text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="theme-border mt-8 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="theme-text-muted inline-flex items-center gap-2 text-sm">
                    <CalendarDays className="h-4 w-4" />
                    {formattedDate}
                  </span>

                  <span className="theme-text-primary inline-flex items-center gap-2 text-sm font-medium">
                    Read solution
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>

              </div>
            </article>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default DailyProblem;