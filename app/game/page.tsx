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
  return (
    <main className={styles.main}>
      <AdditionGame add={params.amount} />
    </main>
  );
}
