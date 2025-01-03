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
      <AnswerButton answer={possibleAnswers[0]} />
      <AnswerButton answer={possibleAnswers[1]} />
      <AnswerButton answer={possibleAnswers[2]} />
      <AnswerButton answer={possibleAnswers[3]} />
    </div>
  );
}
