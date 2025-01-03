import AnswerButton from "../answerButton/answerButton";
import randomNumber from "@/utils/randomNumber";
import styles from "./answerButtons.module.scss";

export default function AnswerButtons({
  correctAnswer,
}: {
  correctAnswer: number;
}) {
  const possibleAnswers = [correctAnswer];

  while (possibleAnswers.length < 4) {
    const nextRandomNumber = randomNumber(20);
    if (!possibleAnswers.includes(nextRandomNumber)) {
      possibleAnswers.push(nextRandomNumber);
    }
  }

  return (
    <div className={styles.buttons}>
      {possibleAnswers.map((answer, index) => (
        <AnswerButton key={index} answer={answer} />
      ))}
    </div>
  );
}
