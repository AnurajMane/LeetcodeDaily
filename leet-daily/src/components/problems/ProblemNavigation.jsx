import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ProblemNavigation({ previousProblem, nextProblem }) {
  return (
    <div className="theme-border mt-16 grid grid-cols-1 border-t pt-8 sm:grid-cols-2">
      <div>
        {previousProblem && (
          <Link
            to={`/problems/${previousProblem.slug}`}
            className="group inline-flex max-w-full flex-col"
          >
            <span className="theme-text-muted flex items-center gap-2 text-xs uppercase tracking-wide">
              <ArrowLeft className="h-3.5 w-3.5" />
              Previous
            </span>

            <span className="theme-text-primary mt-2 truncate text-sm font-medium transition group-hover:text-[var(--accent)]">
              {previousProblem.title}
            </span>
          </Link>
        )}
      </div>

      <div className="mt-6 text-left sm:mt-0 sm:text-right">
        {nextProblem && (
          <Link
            to={`/problems/${nextProblem.slug}`}
            className="group inline-flex max-w-full flex-col"
          >
            <span className="theme-text-muted flex items-center justify-end gap-2 text-xs uppercase tracking-wide">
              Next
              <ArrowRight className="h-3.5 w-3.5" />
            </span>

            <span className="theme-text-primary mt-2 truncate text-sm font-medium transition group-hover:text-[var(--accent)]">
              {nextProblem.title}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProblemNavigation;