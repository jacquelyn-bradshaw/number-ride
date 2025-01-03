import styles from "./subtractionGame.module.css";

export default function SubtractionGame({ amount }: { amount: number }) {
  return (
    <div className={styles.main}>
      <h2>Subtract {amount}</h2>
    </div>
  );
}
