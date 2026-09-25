"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      onClick={() => setLikes((prev) => prev + 1)}
      className="mt-4 px-4 py-2 border rounded-lg hover:bg-gray-50"
    >
      ❤ {likes}
    </button>
  );
}