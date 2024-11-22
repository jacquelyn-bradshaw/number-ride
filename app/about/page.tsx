import styles from "./page.module.css";
import Link from "next/link";

export default function About() {
  return (
    <main className={styles.main}>
      <h1>About</h1>
      <p>
        <Link href="/">Home</Link>
      </p>
    </main>
  );
}
