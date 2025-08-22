export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO
};

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello, World 👋",
    excerpt: "This is my very first post on the new blog.",
    publishedAt: "2025-08-20T00:00:00.000Z",
  },
  {
    slug: "nextjs-notes",
    title: "Notes while learning Next.js",
    excerpt: "A few quick tips I found useful.",
    publishedAt: "2025-08-18T00:00:00.000Z",
  },
];
