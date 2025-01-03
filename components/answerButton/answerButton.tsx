import styles from "./answerButton.module.scss";

export default function AnswerButton({ text }: { text: string }) {
  return <button className={styles.button}>{text}</button>;
}
