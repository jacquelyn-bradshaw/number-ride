import styles from "./answerButton.module.scss";

export default function AnswerButton({ answer }: { answer: number }) {
  return <button className={styles.button}>{answer}</button>;
}
