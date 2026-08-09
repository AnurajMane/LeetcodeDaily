import { parseMarkdown } from "../lib/markdown";
import {
  getAllTopics,
  getLatestProblem,
  getProblemById,
  getProblemBySlug,
  getProblemStats,
  sortProblemsByDate,
} from "../lib/problemUtils";

const problemFiles = import.meta.glob(
  "../content/problems/*.md",
  {
    eager: true,
    query: "?raw",
    import: "default",
  }
);

const problems = Object.entries(problemFiles).map(
  ([filePath, rawMarkdown]) => {
    const problem = parseMarkdown(rawMarkdown);

    return {
      ...problem,
      filePath,
    };
  }
);

const sortedProblems = sortProblemsByDate(problems);

export {
  sortedProblems as problems,
  getLatestProblem,
  getProblemBySlug,
  getProblemById,
  getProblemStats,
  getAllTopics,
};

export default sortedProblems;