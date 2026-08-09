function ProblemMeta({ problem }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      <span className="theme-accent-background theme-accent rounded-full px-3 py-1 text-sm font-medium">
        {problem.difficulty}
      </span>

      {problem.topics?.map((topic) => (
        <span
          key={topic}
          className="theme-surface theme-text-secondary theme-border rounded-full border px-3 py-1 text-sm"
        >
          {topic}
        </span>
      ))}

      {problem.language && (
        <span className="theme-surface theme-text-secondary theme-border rounded-full border px-3 py-1 text-sm">
          {problem.language}
        </span>
      )}
    </div>
  );
}

export default ProblemMeta;