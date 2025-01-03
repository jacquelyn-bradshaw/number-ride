"use client";

import AnswerButton from "../answerButton/answerButton";
import randomNumber from "@/utils/randomNumber";
import styles from "./answerButtons.module.scss";

export default function AnswerButtons({
  correctAnswer,
}: {
  correctAnswer: number;
}) {
  const possibleAnswers = [correctAnswer];

  while (possibleAnswers.length < 4) {
    const nextRandomNumber = randomNumber(20);
    if (!possibleAnswers.includes(nextRandomNumber)) {
      possibleAnswers.push(nextRandomNumber);
    }
  }

  const selectAnswer = (answer: number) => {
    if (answer === correctAnswer) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }
  };

  return (
    <div className={styles.buttons}>
      {possibleAnswers.map((answer, index) => (
        <AnswerButton onSelect={selectAnswer} key={index} answer={answer} />
      ))}
    </div>
  );
}
