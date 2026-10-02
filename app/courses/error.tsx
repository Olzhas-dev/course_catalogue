"use client";

export default function CourseError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-red-600">
        Something went wrong!
      </h1>
      <p className="mb-4 text-muted-foreground">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition"
      >
        Try again
      </button>
    </main>
  );
}
