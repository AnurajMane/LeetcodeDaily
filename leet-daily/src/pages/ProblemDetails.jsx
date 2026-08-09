import React, { useState, useEffect } from "react";
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

// Helper component for interactive inline code snippet with copy-to-clipboard feedback
function InlineCode({ children, ...props }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    if (typeof children === "string") {
      navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <span className="relative inline-block group">
      <code
        onClick={handleCopy}
        title="Click to copy"
        className="theme-surface theme-text-primary border border-transparent hover:border-[var(--accent)] cursor-pointer rounded-md px-1.5 py-0.5 font-mono text-[0.9em] transition-all duration-200 hover:shadow-sm"
        {...props}
      >
        {children}
      </code>
      {copied && (
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-black/80 px-2 py-0.5 text-[10px] text-white shadow backdrop-blur-sm animate-fade-in">
          Copied!
        </span>
      )}
    </span>
  );
}

function ProblemDetails() {
  const { slug } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const problem = getProblemBySlug(problems, slug);

  // Scroll Progress and Back-To-Top Trigger Listener
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!problem) {
    return (
      <PageContainer className="py-20">
        <div className="relative mx-auto max-w-2xl text-center">
          {/* Subtle Background Glow */}
          <div className="absolute -top-12 left-1/2 -z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-3xl" />

          <p className="theme-accent text-sm font-semibold uppercase tracking-[0.25em]">
            404 Error
          </p>

          <h1 className="theme-text-primary mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Problem not found
          </h1>

          <p className="theme-text-secondary mt-4 text-base sm:text-lg">
            We couldn't find a problem matching{" "}
            <span className="theme-text-primary font-mono font-medium underline decoration-[var(--accent)] underline-offset-4">
              "{slug}"
            </span>
          </p>

          <Link
            to="/problems"
            className="group theme-surface theme-text-primary theme-border mt-8 inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium shadow-sm transition-all duration-300 hover:border-[var(--accent)] hover:shadow-md active:scale-95"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            <span>Back to Problems</span>
          </Link>
        </div>
      </PageContainer>
    );
  }

  const { previousProblem, nextProblem } = getAdjacentProblems(problems, problem);

  return (
    <>
      {/* Top Scroll Reading Progress Bar */}
      <div className="fixed top-0 left-0 z-50 h-1 w-full bg-transparent">
        <div
          className="h-full bg-[var(--accent)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <PageContainer className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          {/* Enhanced Breadcrumb Navigation */}
          <nav className="theme-text-muted mb-8 flex items-center gap-2 text-sm font-medium">
            <Link
              to="/problems"
              className="group inline-flex items-center gap-1 transition-colors hover:text-[var(--text-primary)]"
            >
              <span className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5">
                ←
              </span>
              <span>Problems</span>
            </Link>

            <span className="opacity-40">/</span>

            <span className="truncate theme-text-primary font-semibold">
              {problem.title}
            </span>
          </nav>

          {/* Header */}
          <ProblemHeader problem={problem} />

          {/* Divider with Subtle Gradient */}
          <div className="mt-10 h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--border-color,rgba(255,255,255,0.15))] to-transparent" />

          {/* Styled Markdown Article Content */}
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
              [&_h1]:tracking-tight

              [&_h2]:theme-text-primary
              [&_h2]:mb-4
              [&_h2]:mt-12
              [&_h2]:text-2xl
              [&_h2]:font-semibold
              [&_h2]:tracking-tight

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
              [&_a]:transition-opacity
              [&_a]:hover:opacity-80

              [&_blockquote]:theme-border
              [&_blockquote]:theme-surface
              [&_blockquote]:my-6
              [&_blockquote]:rounded-r-xl
              [&_blockquote]:border-l-4
              [&_blockquote]:border-l-[var(--accent)]
              [&_blockquote]:px-5
              [&_blockquote]:py-4
              [&_blockquote]:italic

              [&_table]:my-6
              [&_table]:w-full
              [&_table]:border-collapse
              [&_table]:overflow-hidden
              [&_table]:rounded-lg

              [&_th]:theme-text-primary
              [&_th]:theme-border
              [&_th]:theme-surface
              [&_th]:border
              [&_th]:px-4
              [&_th]:py-3
              [&_th]:text-left
              [&_th]:font-semibold

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
                  const isCodeBlock = className?.startsWith("language-");

                  if (isCodeBlock) {
                    return (
                      <CodeBlock className={className}>
                        {children}
                      </CodeBlock>
                    );
                  }

                  return <InlineCode {...props}>{children}</InlineCode>;
                },

                pre({ children }) {
                  return <>{children}</>;
                },

                img({ src, alt, ...props }) {
                  return (
                    <span className="my-8 block overflow-hidden rounded-xl">
                      <img
                        src={src}
                        alt={alt || ""}
                        loading="lazy"
                        className="theme-border w-full border object-cover transition-transform duration-500 hover:scale-[1.02]"
                        {...props}
                      />
                    </span>
                  );
                },
              }}
            >
              {problem.content}
            </ReactMarkdown>
          </article>

          {/* Previous / Next Problem Navigation */}
          <div className="mt-12">
            <ProblemNavigation
              previousProblem={previousProblem}
              nextProblem={nextProblem}
            />
          </div>
        </div>

        {/* Floating Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`theme-surface theme-text-primary theme-border fixed bottom-8 right-8 z-40 flex h-11 w-11 items-center justify-center rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 translate-y-4"
          }`}
        >
          <span className="text-lg font-bold">↑</span>
        </button>
      </PageContainer>
    </>
  );
}

export default ProblemDetails;