import GameLink from "@/components/gameLink/gameLink";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h2>Addition</h2>
        <GameLink type="addition" amount={1} text="+1" />
        <GameLink type="addition" amount={2} text="+2" />
        <GameLink type="addition" amount={3} text="+3" />
      </div>
    </main>
  );
}
