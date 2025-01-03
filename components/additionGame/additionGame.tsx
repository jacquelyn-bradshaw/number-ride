import styles from "./additionGame.module.scss";
import randomNumber from "../../utils/randomNumber";
import AnswerButtons from "../answerButtons/answerButtons";

export default function AdditionGame({ amount }: { amount: number }) {
  const max = 20 - amount;

  return (
    <div className={styles.main}>
      <h2>Add {amount}</h2>
      <p>
        {randomNumber(max)} + {amount} =
      </p>
      <AnswerButtons />
    </div>
  );
}
