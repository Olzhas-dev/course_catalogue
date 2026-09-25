import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Course Catalog</h1>
      <p className="mb-4">
        Welcome! Check out the courses
      </p>
      <Link href="/courses" className="text-blue-600 underline">
        View Courses
      </Link>
    </main>
  );
}