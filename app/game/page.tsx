"use client";

import { useSearchParams } from "next/navigation";

import AdditionGame from "@/components/additionGame/additionGame";
import SubtractionGame from "@/components/subtractionGame/subtractionGame";

export default function Game() {
  const params = useSearchParams();
  const type = params.get("type");
  const amount = Number(params.get("amount"));

  const GameType = () => {
    if (type === "addition") {
      return <AdditionGame amount={amount} />;
    } else if (type === "subtraction") {
      return <SubtractionGame amount={amount} />;
    }
  };

  return (
    <main>
      <GameType />
    </main>
  );
}
