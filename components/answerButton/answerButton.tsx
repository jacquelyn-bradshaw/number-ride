"use client";

import styles from "./answerButton.module.scss";

interface AnswerButtonProps {
  answer: number;
  onSelect: (answer: number) => void;
}

export default function AnswerButton({ answer, onSelect }: AnswerButtonProps) {
  return (
    <button className={styles.button} onClick={() => onSelect(answer)}>
      {answer}
    </button>
  );
}
