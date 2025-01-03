import AnswerButtons from "../answerButtons/answerButtons";
import styles from "./subtractionGame.module.scss";
import randomNumber from "../../utils/randomNumber";

export default function SubtractionGame({ amount }: { amount: number }) {
  const max = 20;
  const currentNumber = randomNumber(max);
  const correctAnswer = Number(currentNumber) - Number(amount);

  return (
    <div className={styles.main}>
      <h2>Subtract {amount}</h2>
      <p>
        {currentNumber} - {amount} =
      </p>
      <AnswerButtons correctAnswer={correctAnswer} />
    </div>
  );
}
