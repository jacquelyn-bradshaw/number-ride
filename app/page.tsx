"use client";

import { useEffect, useState } from "react";
import GameLink from "@/components/gameLink/gameLink";
import styles from "./page.module.scss";

export default function Home() {
  const [score, setScore] = useState<string | null>(null);

  useEffect(() => {
    const storedScore = localStorage.getItem("userScore") || "0";
    setScore(storedScore);
  }, []);

  return (
    <main>
      <h3 className={styles.score}>User Score: {score}</h3>
      <div className={styles.container}>
        <h2>Addition</h2>
        <GameLink type="addition" amount={1} text="+ 1" />
        <GameLink type="addition" amount={2} text="+ 2" />
      </div>
      <div className={styles.container}>
        <h2>Subtraction</h2>
        <GameLink type="subtraction" amount={1} text="- 1" />
        <GameLink type="subtraction" amount={2} text="- 2" />
      </div>
    </main>
  );
}
