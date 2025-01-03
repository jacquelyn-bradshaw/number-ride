import Link from "next/link";
import Button from "@/components/button/button";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h2>Addition</h2>
        <Link
          href={{
            pathname: "/game",
            query: {
              type: "addition",
              amount: 1,
            },
          }}
        >
          <Button text="+1" />
        </Link>
        <Link
          href={{
            pathname: "/game",
            query: {
              type: "addition",
              amount: 2,
            },
          }}
        >
          <Button text="+2" />
        </Link>
      </div>
    </main>
  );
}
