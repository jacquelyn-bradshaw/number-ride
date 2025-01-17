"use client";
import { useState } from "react";

import AnswerButton from "@/components/answerButton/answerButton";
import randomNumber from "@/utils/randomNumber";
import styles from "./answerButtons.module.scss";

export default function AnswerButtons({
  correctAnswer,
}: {
  correctAnswer: number;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const possibleAnswers = [correctAnswer];

  while (possibleAnswers.length < 4) {
    const nextRandomNumber = randomNumber(20, 0);
    if (!possibleAnswers.includes(nextRandomNumber)) {
      possibleAnswers.push(nextRandomNumber);
    }
  }

  const selectAnswer = (answer: number) => {
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
