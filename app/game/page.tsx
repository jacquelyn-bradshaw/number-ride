import AdditionGame from "@/components/additionGame/additionGame";
import SubtractionGame from "@/components/subtractionGame/subtractionGame";

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
      return <AdditionGame amount={params.amount} />;
    } else if (params.type === "subtraction") {
      return <SubtractionGame amount={params.amount} />;
    }
  };

  return (
    <main>
      <GameType />
    </main>
  );
}
