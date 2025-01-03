import AnswerButtons from "../answerButtons/answerButtons";
import styles from "./subtractionGame.module.scss";
import randomNumber from "../../utils/randomNumber";

export default function SubtractionGame({ amount }: { amount: number }) {
  const max = 20;

  return (
    <div className={styles.main}>
      <h2>Subtract {amount}</h2>
      <p>
        {randomNumber(max)} - {amount} =
      </p>
      <AnswerButtons />
    </div>
  );
}
