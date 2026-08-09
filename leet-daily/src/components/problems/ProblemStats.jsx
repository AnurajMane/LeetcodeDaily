function ProblemStats({ stats }) {
  const items = [
    {
      label: "Total",
      value: stats.total,
    },
    {
      label: "Easy",
      value: stats.easy,
    },
    {
      label: "Medium",
      value: stats.medium,
    },
    {
      label: "Hard",
      value: stats.hard,
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="theme-surface theme-border rounded-xl border p-4"
        >
          <p className="theme-text-muted text-xs uppercase tracking-[0.15em]">
            {item.label}
          </p>

          <p className="theme-text-primary mt-2 text-2xl font-bold">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProblemStats;