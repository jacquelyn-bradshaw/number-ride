import AnswerButtons from "@/components/answerButtons/answerButtons";
import randomNumber from "@/utils/randomNumber";
import styles from "./additionGame.module.scss";

export default function AdditionGame({ amount }: { amount: number }) {
  const max = 20 - amount;
  const currentNumber = randomNumber(max);
  const correctAnswer = Number(currentNumber) + Number(amount);

  return (
    <div>
      <h2>Add {amount}</h2>
      <p className={styles.question}>
        {currentNumber} + {amount} =
      </p>
      <AnswerButtons correctAnswer={correctAnswer} />
    </div>
  );
}
