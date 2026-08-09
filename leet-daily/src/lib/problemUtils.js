export function sortProblemsByDate(problems) {
  return [...problems].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
}

export function getLatestProblem(problems) {
  const sortedProblems = sortProblemsByDate(problems);

  return sortedProblems[0] || null;
}

export function getProblemBySlug(problems, slug) {
  return problems.find((problem) => problem.slug === slug);
}

export function getProblemById(problems, id) {
  return problems.find((problem) => problem.id === Number(id));
}

export function getProblemsByDifficulty(problems, difficulty) {
  if (!difficulty || difficulty === "All") {
    return problems;
  }

  return problems.filter(
    (problem) => problem.difficulty === difficulty
  );
}

export function getProblemsByTopic(problems, topic) {
  if (!topic || topic === "All") {
    return problems;
  }

  return problems.filter((problem) =>
    problem.topics?.includes(topic)
  );
}

export function getProblemStats(problems) {
  return {
    total: problems.length,

    easy: problems.filter(
      (problem) => problem.difficulty === "Easy"
    ).length,

    medium: problems.filter(
      (problem) => problem.difficulty === "Medium"
    ).length,

    hard: problems.filter(
      (problem) => problem.difficulty === "Hard"
    ).length,
  };
}

export function getAllTopics(problems) {
  const topics = problems.flatMap(
    (problem) => problem.topics || []
  );

  return [...new Set(topics)].sort();
}

export function getAdjacentProblems(problems, currentProblem) {
  const sortedProblems = [...problems].sort(
    (a, b) => Number(a.id) - Number(b.id)
  );

  const currentIndex = sortedProblems.findIndex(
    (problem) => problem.slug === currentProblem.slug
  );

  if (currentIndex === -1) {
    return {
      previousProblem: null,
      nextProblem: null,
    };
  }

  return {
    previousProblem:
      sortedProblems[currentIndex - 1] || null,

    nextProblem:
      sortedProblems[currentIndex + 1] || null,
  };
}