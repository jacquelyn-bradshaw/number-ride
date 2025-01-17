import AnswerButtons from "@/components/answerButtons/answerButtons";
import randomNumber from "@/utils/randomNumber";
import styles from "./subtractionGame.module.scss";

export default function SubtractionGame({ amount }: { amount: number }) {
  const max = 20;
  const currentNumber = randomNumber(max);
  const correctAnswer = Number(currentNumber) - Number(amount);

  return (
    <div>
      <h2>Subtract {amount}</h2>
      <p className={styles.question}>
        {currentNumber} - {amount} =
      </p>
      <AnswerButtons correctAnswer={correctAnswer} />
    </div>
  );
}
