import { getCourses } from "@/lib/courses";
import CourseSearch from "@/components/CourseSearch";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <CourseSearch courses={courses} />
    </main>
  );
}