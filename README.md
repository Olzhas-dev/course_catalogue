# Course Catalog

A course catalog web application built with **Next.js 16** (App Router), **TypeScript**, and **Tailwind CSS** for the "Advanced Web Technologies" course (Lab 1).

## What's Implemented

### Core Features

- **File-based routing** with the App Router: `/`, `/about`, `/courses`, `/courses/[id]`
- **Server Components** for all pages and `CourseCard` — data is fetched on the server with `await getCourses()` / `await getCourse(id)`
- **Client Component** (`LikeButton`) — the only `'use client'` in the project, using `useState` for interactive like functionality
- **Dynamic routes** with `params` typed as `Promise<{ id: string }>` and properly awaited
- **`generateStaticParams`** to pre-render all course pages at build time
- **`loading.tsx`** for a loading indicator during navigation (visible thanks to a 300 ms simulated delay)
- **`not-found.tsx`** triggered via `notFound()` from `next/navigation` when a course ID doesn't exist
- **Shared navigation** in `layout.tsx` with `next/link` (Home / Courses / About)

### Bonus Features

1. **Error Boundary** (`app/courses/error.tsx`) — navigating to `/courses/broken` deliberately throws an error caught by the Error Boundary, with a "Try again" button
2. **Client-side search** on `/courses` — a `CourseSearch` Client Component filters the server-loaded course list by title in real time, while the page itself remains a Server Component
3. **Route group** `(auth)/` with a `/login` stub page, demonstrating the route-group pattern from the lecture

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
app/
├── layout.tsx              ← shared navigation
├── page.tsx                ← "/" (home)
├── about/
│   └── page.tsx            ← "/about"
├── courses/
│   ├── page.tsx            ← "/courses" (course list + search)
│   ├── not-found.tsx       ← shown when course not found
│   ├── error.tsx           ← Error Boundary (bonus)
│   └── [id]/
│       ├── page.tsx        ← "/courses/:id" (dynamic route)
│       └── loading.tsx     ← loading indicator
└── (auth)/
    └── login/
        └── page.tsx        ← "/login" stub (bonus)

components/
├── CourseCard.tsx           ← Server Component (card with Link)
├── CourseSearch.tsx         ← Client Component (search filter, bonus)
└── LikeButton.tsx          ← Client Component (❤ button with useState)

lib/
└── courses.ts              ← mock data with simulated delay
```
## Lab 2: Styling with Tailwind CSS and shadcn/ui

Styled the existing catalog without changing its logic.

- **shadcn/ui:** initialized with `npx shadcn@latest init`, and added the `button` and `card` components (`components/ui/`).
- **`CourseCard`:** rewritten with `Card`, `CardHeader`, `CardTitle`, `CardContent` and `Button`. It is still a Server Component (no `'use client'`), and its props are unchanged. Cards have a hover effect (`hover:shadow-md hover:border-blue-300 transition`).
- **Responsive course list:** a grid with 1 column on phones, 2 on tablets (`sm:`) and 3 on desktop (`lg:`). It lives in `CourseSearch`, which renders the cards. I checked each width in browser DevTools.
- **Navigation:** the nav in `app/layout.tsx` is laid out in a row, with padding inside each link, a hover state, and a bottom border that separates it from the page.