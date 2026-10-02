import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <p className="text-muted-foreground mb-4">
        This is a stub login page demonstrating the route group pattern.
        Real authentication will be added in a future lab.
      </p>
      <Link href="/" className="text-blue-600 underline">
        Back to Home
      </Link>
    </main>
  );
}
