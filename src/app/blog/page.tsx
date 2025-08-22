import Link from "next/link";
import { posts } from "@/data/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
  );

  return (
    <section className="mx-auto max-w-3xl px-4 py-10 mt-16">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-2 text-gray-600">Thoughts, notes, and quick updates.</p>

      <ul className="mt-8 space-y-6">
        {sorted.map((p) => (
          <li key={p.slug} className="border-b pb-6">
            <time className="text-sm text-gray-500">
              {formatDate(p.publishedAt)}
            </time>
            <h2 className="mt-1 text-xl font-semibold">
              <Link href={`/blog/${p.slug}`} className="hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="mt-1 text-gray-700">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
