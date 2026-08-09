import { useMemo, useState } from "react";

import PageContainer from "../components/layout/PageContainer";
import ProblemCard from "../components/problems/ProblemCard";
import ProblemFilters from "../components/problems/ProblemFilters";
import ProblemStats from "../components/problems/ProblemStats";

import problems from "../data/problems";
import {
  getAllTopics,
  getProblemStats,
} from "../lib/problemUtils";

function Problems() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [topic, setTopic] = useState("All");

  const topics = useMemo(
    () => getAllTopics(problems),
    []
  );

  const stats = useMemo(
    () => getProblemStats(problems),
    []
  );

  const filteredProblems = useMemo(() => {
    const normalizedSearch = search
      .trim()
      .toLowerCase();

    return problems.filter((problem) => {
      const matchesSearch =
        !normalizedSearch ||
        problem.title
          .toLowerCase()
          .includes(normalizedSearch) ||
        String(problem.id)
          .includes(normalizedSearch) ||
        problem.topics?.some((item) =>
          item.toLowerCase().includes(normalizedSearch)
        );

      const matchesDifficulty =
        difficulty === "All" ||
        problem.difficulty === difficulty;

      const matchesTopic =
        topic === "All" ||
        problem.topics?.includes(topic);

      return (
        matchesSearch &&
        matchesDifficulty &&
        matchesTopic
      );
    });
  }, [search, difficulty, topic]);

  return (
    <PageContainer className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <header>
          <p className="theme-accent text-sm font-medium uppercase tracking-[0.2em]">
            Archive
          </p>

          <h1 className="theme-text-primary mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Problems
          </h1>

          <p className="theme-text-secondary mt-4 max-w-2xl leading-7">
            Every problem I've solved, understood, and documented.
          </p>
        </header>

        {/* Statistics */}
        <ProblemStats stats={stats} />

        {/* Filters */}
        <ProblemFilters
          search={search}
          setSearch={setSearch}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          topic={topic}
          setTopic={setTopic}
          topics={topics}
        />

        {/* Results Count */}
        <div className="theme-border mt-8 flex items-center justify-between border-b pb-4">
          <p className="theme-text-secondary text-sm">
            Showing{" "}
            <span className="theme-text-primary font-medium">
              {filteredProblems.length}
            </span>{" "}
            {filteredProblems.length === 1
              ? "problem"
              : "problems"}
          </p>

          {filteredProblems.length !== problems.length && (
            <p className="theme-text-muted text-sm">
              of {problems.length} total
            </p>
          )}
        </div>

        {/* Problems */}
        {filteredProblems.length > 0 ? (
          <div className="mt-6 space-y-4">
            {filteredProblems.map((problem) => (
              <ProblemCard
                key={problem.slug}
                problem={problem}
              />
            ))}
          </div>
        ) : (
          <div className="theme-surface theme-border mt-6 rounded-2xl border px-6 py-16 text-center">
            <h2 className="theme-text-primary text-lg font-semibold">
              No problems found
            </h2>

            <p className="theme-text-secondary mt-2 text-sm">
              Try changing your search or filters.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setDifficulty("All");
                setTopic("All");
              }}
              className="theme-accent mt-5 text-sm font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </PageContainer>
  );
}

export default Problems;