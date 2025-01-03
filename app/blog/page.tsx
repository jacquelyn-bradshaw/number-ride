import Link from "next/link";

import styles from "./page.module.scss";

export default function Blog() {
  return (
    <main className={styles.main}>
      <h1>Blog</h1>
      <div className={styles.links}>
        <Link href="/blog/first-post" className={styles.link}>
          First Post
        </Link>
        <Link href="/blog/second-post" className={styles.link}>
          Second Post
        </Link>
      </div>
    </main>
  );
}
