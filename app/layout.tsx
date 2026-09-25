import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Course catalog project for Advanced Web Technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <nav className="flex gap-4 p-4 border-b">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/courses" className="hover:underline">
            Courses
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}