import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Course not found</h1>
      <Link href="/courses" className="text-blue-600 underline">
        Back to Courses
      </Link>
    </main>
  );
}