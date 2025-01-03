import styles from "./button.module.scss";

export default function Button({ text }: { text: string }) {
  return <button className={styles.button}>{text}</button>;
}
