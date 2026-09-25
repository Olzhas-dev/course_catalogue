import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="block border rounded-lg p-4 mb-4 hover:bg-gray-50"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="mt-2 text-sm">
        Credits: {credits} · ❤ {likes}
      </p>
    </Link>
  );
}