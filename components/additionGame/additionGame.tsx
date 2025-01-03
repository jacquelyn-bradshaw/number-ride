import styles from "./additionGame.module.css";

export default function AdditionGame({ add }: { add: number }) {
  return (
    <div className={styles.main}>
      <h2>Add {add}</h2>
    </div>
  );
}
