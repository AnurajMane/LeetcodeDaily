import Hero from "../components/home/Hero";
import DailyProblem from "../components/home/DailyProblem";
import RecentProblems from "../components/home/RecentProblems";
import Stats from "../components/home/Stats";

import problems from "../data/problems";
import {
  getLatestProblem,
  getProblemStats,
} from "../lib/problemUtils";

function Home() {
  const latestProblem = getLatestProblem(problems);
  const stats = getProblemStats(problems);

  return (
    <main>
      <Hero />

      <DailyProblem
        problem={latestProblem}
      />

      <Stats
        stats={stats}
      />

      <RecentProblems
        problems={problems}
      />
    </main>
  );
}

export default Home;