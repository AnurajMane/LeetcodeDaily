import PageContainer from "../components/layout/PageContainer";
import { problems } from "../data/problems";

function Problems() {
  return (
    <PageContainer className="py-20">
      <h1 className="theme-text-primary text-4xl font-bold">
        Problems
      </h1>

      <div className="mt-8">
        <p className="theme-text-secondary">
          Total problems: {problems.length}
        </p>

        <pre className="theme-surface theme-text-secondary theme-border mt-4 overflow-auto rounded-xl border p-4 text-sm">
          {JSON.stringify(problems, null, 2)}
        </pre>
      </div>
    </PageContainer>
  );
}

export default Problems;