"use client";

import styles from "./answerButton.module.scss";

interface AnswerButtonProps {
  answer: number;
  onSelect: (answer: number) => void;
  isSelected: boolean;
  isCorrect: boolean;
  isIncorrect: boolean;
  disabled: boolean;
}

export default function AnswerButton({
  answer,
  onSelect,
  isSelected,
  isCorrect,
  isIncorrect,
  disabled,
}: AnswerButtonProps) {
  let buttonClass = styles.button;

  if (isSelected) {
    if (isCorrect) {
      buttonClass = `${styles.button} ${styles.correct}`;
    } else if (isIncorrect) {
      buttonClass = `${styles.button} ${styles.incorrect}`;
    }
  }

  return (
    <button
      className={buttonClass}
      onClick={() => onSelect(answer)}
      disabled={disabled}
    >
      {answer}
    </button>
  );
}
