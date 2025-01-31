import randomNumber from "@/utils/randomNumber";

export const generatePossibleAnswers = (correctAnswer: number) => {
  const possibleAnswers = [correctAnswer];

  while (possibleAnswers.length < 4) {
    const nextRandomNumber = randomNumber(20, 0);
    if (!possibleAnswers.includes(nextRandomNumber)) {
      possibleAnswers.push(nextRandomNumber);
    }
  }

  return possibleAnswers;
};
