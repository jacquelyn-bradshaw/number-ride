"use client";

import { useSearchParams } from "next/navigation";
import { useLocalStorage } from "@/hooks/useLocalStorage";

import AdditionGame from "@/components/additionGame/additionGame";
import SubtractionGame from "@/components/subtractionGame/subtractionGame";

export default function Game() {
  const params = useSearchParams();
  const type = params.get("type");
  const amount = Number(params.get("amount"));

  const [score, setScore] = useLocalStorage<number>("userScore", 0);

  const updateScore = (score: number) => {
    setScore((prevScore) => prevScore + score);
  };

  const GameType = () => {
    if (type === "addition") {
      return <AdditionGame amount={amount} updateScore={updateScore} />;
    } else if (type === "subtraction") {
      return <SubtractionGame amount={amount} updateScore={updateScore} />;
    }
  };

  return (
    <main>
      <h2>User Score: {score}</h2>
      <GameType />
    </main>
  );
}
