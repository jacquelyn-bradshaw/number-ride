export async function POST(request: Request) {
  const res = await request.json();
  switch (res.symbol) {
    case "+":
      if (res.answer === res.currentNumber + res.amount) {
        return Response.json("true");
      } else {
        return new Response("false");
      }
    case "-":
      if (res.answer === res.currentNumber - res.amount) {
        return Response.json("true");
      } else {
        return new Response("false");
      }
  }
}
