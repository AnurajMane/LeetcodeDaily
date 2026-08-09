import { Search, X } from "lucide-react";

function ProblemFilters({
  search,
  setSearch,
  difficulty,
  setDifficulty,
  topic,
  setTopic,
  topics,
}) {
  const hasFilters =
    search.trim() ||
    difficulty !== "All" ||
    topic !== "All";

  const clearFilters = () => {
    setSearch("");
    setDifficulty("All");
    setTopic("All");
  };

  return (
    <div className="mt-10 space-y-4">

      {/* Search */}
      <div className="relative">
        <Search className="theme-text-muted absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2" />

        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search problems..."
          className="theme-surface theme-text-primary theme-border w-full rounded-xl border py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
        />
      </div>

      {/* Filter Row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        {/* Difficulty */}
        <div className="flex flex-wrap gap-2">
          {["All", "Easy", "Medium", "Hard"].map(
            (item) => (
              <button
                key={item}
                type="button"
                onClick={() => setDifficulty(item)}
                className={`rounded-lg px-3.5 py-2 text-sm transition ${
                  difficulty === item
                    ? "theme-surface theme-text-primary theme-border border"
                    : "theme-text-secondary theme-surface-hover"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        {/* Topic */}
        <select
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          className="theme-surface theme-text-secondary theme-border rounded-lg border px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
        >
          <option value="All">
            All Topics
          </option>

          {topics.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Clear */}
      {hasFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className="theme-text-muted inline-flex items-center gap-1.5 text-sm transition hover:text-[var(--text-primary)]"
        >
          <X className="h-3.5 w-3.5" />
          Clear filters
        </button>
      )}
    </div>
  );
}

export default ProblemFilters;