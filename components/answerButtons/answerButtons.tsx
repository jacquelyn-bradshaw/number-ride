import AnswerButton from "../answerButton/answerButton";
import randomNumber from "@/utils/randomNumber";
import styles from "./answerButtons.module.scss";

export default function AnswerButtons({
  correctAnswer,
}: {
  correctAnswer: number;
}) {
  const possibleAnswers = [
    correctAnswer,
    randomNumber(20),
    randomNumber(20),
    randomNumber(20),
  ];

  return (
    <div className={styles.buttons}>
      {possibleAnswers.map((answer, index) => (
        <AnswerButton key={index} answer={answer} />
      ))}
    </div>
  );
}
