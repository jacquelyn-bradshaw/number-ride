import AdditionGame from "@/components/additionGame/additionGame";
import styles from "./page.module.css";

interface SearchParams {
  type: string;
  amount: number;
}

export default async function Addition({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const GameType = () => {
    if (params.type === "addition") {
      return <AdditionGame add={params.amount} />;
    } else if (params.type === "subtraction") {
      return <h2>Subtraction</h2>;
    }
  };

  return (
    <main className={styles.main}>
      <GameType />
    </main>
  );
}
