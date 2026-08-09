import PageContainer from "../components/layout/PageContainer";

function Home() {
  return (
    <PageContainer className="py-20">
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="theme-text-primary text-center text-4xl font-bold tracking-tight sm:text-6xl">
          One Problem.
          <br />
          One Day.
          <br />
          One Better Solution.
        </h1>
      </div>
    </PageContainer>
  );
}

export default Home;