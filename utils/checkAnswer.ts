export async function checkAnswer(
  answer: number,
  amount: number,
  symbol: string,
  currentNumber: number
) {
  const response = await fetch("/api/checkanswer", {
    method: "POST",
    body: JSON.stringify({ answer, amount, symbol, currentNumber }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const body = await response.json();
  console.log(body);
}
