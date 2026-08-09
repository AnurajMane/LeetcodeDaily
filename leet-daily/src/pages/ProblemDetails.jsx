import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import PageContainer from "../components/layout/PageContainer";
import ProblemHeader from "../components/problems/ProblemHeader";
import CodeBlock from "../components/problems/CodeBlock";
import ProblemNavigation from "../components/problems/ProblemNavigation";

import problems from "../data/problems";
import {
  getAdjacentProblems,
  getProblemBySlug,
} from "../lib/problemUtils";

function ProblemDetails() {
  const { slug } = useParams();

  const problem = getProblemBySlug(problems, slug);

  if (!problem) {
    return (
      <PageContainer className="py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="theme-accent text-sm font-medium uppercase tracking-[0.25em]">
            404
          </p>

          <h1 className="theme-text-primary mt-4 text-4xl font-bold">
            Problem not found
          </h1>

          <p className="theme-text-secondary mt-4">
            We couldn't find a problem with the slug{" "}
            <span className="theme-text-primary font-medium">
              {slug}
            </span>
            .
          </p>

          <Link
            to="/problems"
            className="theme-surface theme-text-primary theme-border mt-8 inline-flex rounded-lg border px-4 py-2.5 text-sm font-medium transition hover:opacity-80"
          >
            ← Back to Problems
          </Link>
        </div>
      </PageContainer>
    );
  }

  const { previousProblem, nextProblem } =
    getAdjacentProblems(problems, problem);

  return (
    <PageContainer className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl">

        {/* Breadcrumb */}
        <div className="theme-text-muted mb-8 flex items-center gap-2 text-sm">
          <Link
            to="/problems"
            className="transition hover:text-[var(--text-primary)]"
          >
            Problems
          </Link>

          <span>/</span>

          <span className="truncate">
            {problem.title}
          </span>
        </div>

        {/* Header */}
        <ProblemHeader problem={problem} />

        {/* Divider */}
        <div className="theme-border mt-10 border-t" />

        {/* Markdown Content */}
        <article
          className="
            theme-text-secondary
            mt-10
            max-w-none

            [&_h1]:theme-text-primary
            [&_h1]:mb-6
            [&_h1]:mt-12
            [&_h1]:text-3xl
            [&_h1]:font-bold

            [&_h2]:theme-text-primary
            [&_h2]:mb-4
            [&_h2]:mt-12
            [&_h2]:text-2xl
            [&_h2]:font-semibold

            [&_h3]:theme-text-primary
            [&_h3]:mb-3
            [&_h3]:mt-8
            [&_h3]:text-xl
            [&_h3]:font-semibold

            [&_p]:mb-5
            [&_p]:leading-8

            [&_ul]:mb-6
            [&_ul]:list-disc
            [&_ul]:space-y-2
            [&_ul]:pl-6

            [&_ol]:mb-6
            [&_ol]:list-decimal
            [&_ol]:space-y-2
            [&_ol]:pl-6

            [&_li]:leading-7

            [&_a]:font-medium
            [&_a]:text-[var(--accent)]
            [&_a]:underline
            [&_a]:underline-offset-4

            [&_blockquote]:theme-border
            [&_blockquote]:theme-surface
            [&_blockquote]:my-6
            [&_blockquote]:rounded-r-lg
            [&_blockquote]:border-l-4
            [&_blockquote]:px-5
            [&_blockquote]:py-4

            [&_table]:my-6
            [&_table]:w-full
            [&_table]:border-collapse

            [&_th]:theme-text-primary
            [&_th]:theme-border
            [&_th]:theme-surface
            [&_th]:border
            [&_th]:px-4
            [&_th]:py-3
            [&_th]:text-left

            [&_td]:theme-border
            [&_td]:border
            [&_td]:px-4
            [&_td]:py-3

            [&_hr]:theme-border
            [&_hr]:my-10
            [&_hr]:border-t
          "
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ className, children, ...props }) {
                const isCodeBlock =
                  className?.startsWith("language-");

                if (isCodeBlock) {
                  return (
                    <CodeBlock
                      className={className}
                    >
                      {children}
                    </CodeBlock>
                  );
                }

                return (
                  <code
                    className="theme-surface theme-text-primary rounded-md px-1.5 py-0.5 font-mono text-[0.9em]"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },

              pre({ children }) {
                return <>{children}</>;
              },

              img({ src, alt, ...props }) {
                return (
                  <img
                    src={src}
                    alt={alt || ""}
                    loading="lazy"
                    className="theme-border my-8 rounded-xl border"
                    {...props}
                  />
                );
              },
            }}
          >
            {problem.content}
          </ReactMarkdown>
        </article>

        {/* Previous / Next */}
        <ProblemNavigation
          previousProblem={previousProblem}
          nextProblem={nextProblem}
        />
      </div>
    </PageContainer>
  );
}

export default ProblemDetails;