export const getCorrectAnswer = (
  currentNumber: number,
  symbol: string,
  amount: number
) => {
  let correctAnswer: number;

  if (symbol == "+") {
    correctAnswer = currentNumber + amount;
  } else if (symbol == "-") {
    correctAnswer = currentNumber - amount;
  } else {
    correctAnswer = currentNumber;
  }

  return correctAnswer;
};
