"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";

type CourseSearchProps = {
  courses: {
    id: string;
    title: string;
    description: string;
    credits: number;
    likes: number;
  }[];
};

export default function CourseSearch({ courses }: CourseSearchProps) {
  const [query, setQuery] = useState("");

  const filtered = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search courses by title…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
          />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-muted-foreground mt-4">No courses match your search.</p>
      )}
    </>
  );
}
