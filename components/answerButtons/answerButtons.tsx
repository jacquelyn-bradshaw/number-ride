import AnswerButton from "../answerButton/answerButton";
import styles from "./answerButtons.module.scss";

export default function AnswerButtons() {
  return (
    <div className={styles.buttons}>
      <AnswerButton text="fix" />
      <AnswerButton text="fix" />
      <AnswerButton text="fix" />
      <AnswerButton text="fix" />
    </div>
  );
}
