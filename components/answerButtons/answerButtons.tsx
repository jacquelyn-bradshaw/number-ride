"use client";
import { useState } from "react";

import AnswerButton from "@/components/answerButton/answerButton";
import { generatePossibleAnswers } from "@/utils/generatePossibleAnswers";
import { getCorrectAnswer } from "@/utils/getCorrectAnswer";
import { checkAnswer } from "@/utils/checkAnswer";
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

  const correctAnswer = getCorrectAnswer(currentNumber, symbol, amount);
  const possibleAnswers = generatePossibleAnswers(correctAnswer);

  const selectAnswer = (answer: number) => {
    checkAnswer(answer, amount, symbol, currentNumber);
    setSelectedAnswer(answer);
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
