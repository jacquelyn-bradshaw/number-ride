import Link from "next/link";

export default function Blog() {
  return (
    <main>
      <h1>Blog</h1>
      <Link href="/blog/first-post">First Post</Link>
      <Link href="/blog/second-post">Second Post</Link>
    </main>
  );
}
