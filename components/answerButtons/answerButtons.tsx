"use client";
import { useState } from "react";
import { useApi } from "@/hooks/useApi";

import AnswerButton from "@/components/answerButton/answerButton";
import { generatePossibleAnswers } from "@/utils/generatePossibleAnswers";
import { getCorrectAnswer } from "@/utils/getCorrectAnswer";
import styles from "./answerButtons.module.scss";

interface AnswerButtonsProps {
  currentNumber: number;
  amount: number;
  symbol: string;
}

export default function AnswerButtons({
  currentNumber,
  amount,
  symbol,
}: AnswerButtonsProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const { callApiCheckAnswer } = useApi("/api/checkanswer");

  const correctAnswer = getCorrectAnswer(currentNumber, symbol, amount);
  const possibleAnswers = generatePossibleAnswers(correctAnswer);

  const selectAnswer = async (answer: number) => {
    try {
      const result = await callApiCheckAnswer({
        method: "POST",
        body: JSON.stringify({
          answer,
          amount,
          symbol,
          currentNumber,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSelectedAnswer(answer);
      console.log("result", result);
    } catch (error) {
      console.error("Error checking answer:", error);
    }
  };

  return (
    <div className={styles.buttons}>
      {possibleAnswers.map((answer, index) => (
        <AnswerButton
          onSelect={selectAnswer}
          key={index}
          answer={answer}
          isSelected={selectedAnswer !== null}
          isCorrect={answer === correctAnswer}
          isIncorrect={
            selectedAnswer !== null &&
            answer === selectedAnswer &&
            answer !== correctAnswer
          }
          disabled={selectedAnswer !== null}
        />
      ))}
    </div>
  );
}
