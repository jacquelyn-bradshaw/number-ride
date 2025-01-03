import styles from "./gameButton.module.scss";

export default function GameButton({ text }: { text: string }) {
  return <button className={styles.button}>{text}</button>;
}
