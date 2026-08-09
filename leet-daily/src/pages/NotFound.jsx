import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
          404
        </p>

        <h1 className="theme-text-primary mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Problem not found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-neutral-500">
          The page you're looking for doesn't exist or may have moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-neutral-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;