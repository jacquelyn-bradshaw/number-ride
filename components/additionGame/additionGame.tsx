import AnswerButtons from "../answerButtons/answerButtons";
import styles from "./additionGame.module.scss";
import randomNumber from "../../utils/randomNumber";

export default function AdditionGame({ amount }: { amount: number }) {
  const max = 20 - amount;
  const currentNumber = randomNumber(max);
  const correctAnswer = Number(currentNumber) + Number(amount);

  return (
    <div className={styles.main}>
      <h2>Add {amount}</h2>
      <p>
        {currentNumber} + {amount} =
      </p>
      <AnswerButtons correctAnswer={correctAnswer} />
    </div>
  );
}
