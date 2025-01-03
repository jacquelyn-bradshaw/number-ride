import styles from "./additionGame.module.css";

export default function AdditionGame({ amount }: { amount: number }) {
  return (
    <div className={styles.main}>
      <h2>Add {amount}</h2>
    </div>
  );
}
