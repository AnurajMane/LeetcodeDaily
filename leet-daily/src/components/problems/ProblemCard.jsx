import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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

function ProblemCard({ problem }) {
  const formattedDate = new Date(
    `${problem.date}T00:00:00`
  ).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      to={`/problems/${problem.slug}`}
      className="group block"
    >
      <article className="theme-surface theme-border relative overflow-hidden rounded-2xl border p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-6">

        {/* Subtle hover accent */}
        <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100" />

        <div className="flex flex-col gap-5">

          {/* Top Row */}
          <div className="flex items-center justify-between gap-4">
            <span className="theme-text-muted text-xs font-medium uppercase tracking-[0.15em]">
              Day {problem.id}
            </span>

            <span
              className={`rounded-full border px-2.5 py-1 text-xs font-medium ${getDifficultyClasses(
                problem.difficulty
              )}`}
            >
              {problem.difficulty}
            </span>
          </div>

          {/* Title */}
          <div>
            <h2 className="theme-text-primary text-xl font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
              {problem.title}
            </h2>

            <div className="mt-3 flex flex-wrap gap-2">
              {problem.topics?.map((topic) => (
                <span
                  key={topic}
                  className="theme-surface-hover theme-text-secondary theme-border rounded-full border px-2.5 py-1 text-xs"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="theme-border flex items-center justify-between border-t pt-4">
            <span className="theme-text-muted text-sm">
              {formattedDate}
            </span>

            <span className="theme-text-secondary inline-flex items-center gap-1 text-sm transition group-hover:text-[var(--accent)]">
              Read solution
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

        </div>
      </article>
    </Link>
  );
}

export default ProblemCard;