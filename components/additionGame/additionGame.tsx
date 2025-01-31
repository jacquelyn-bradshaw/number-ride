import AnswerButtons from "@/components/answerButtons/answerButtons";
import randomNumber from "@/utils/randomNumber";
import styles from "./additionGame.module.scss";

export default function AdditionGame({ amount }: { amount: number }) {
  const max = 20 - amount;
  const currentNumber = randomNumber(max, 0);

  return (
    <div>
      <h2>Add {amount}</h2>
      <p className={styles.question}>
        {currentNumber} + {amount} =
      </p>
      <AnswerButtons currentNumber={currentNumber} amount={amount} symbol="+" />
    </div>
  );
}
