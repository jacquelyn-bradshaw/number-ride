import { render, screen } from "@testing-library/react";
import AnswerButtons from "@/components/answerButtons/answerButtons";

describe("AnswerButtons Component", () => {
  const mockUpdateScore = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the correct number of answer buttons", () => {
    render(
      <AnswerButtons
        currentNumber={5}
        amount={2}
        symbol="+"
        updateScore={mockUpdateScore}
      />
    );

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(4);
  });

  it("one of the buttons should be the correct answer with addition", () => {
    render(
      <AnswerButtons
        currentNumber={5}
        amount={2}
        symbol="+"
        updateScore={mockUpdateScore}
      />
    );

    const correctAnswer = 7;
    const correctButton = screen.getByText(correctAnswer.toString());
    expect(correctButton).toBeInTheDocument();
  });

  it("one of the buttons should be the correct answer with subtraction", () => {
    render(
      <AnswerButtons
        currentNumber={5}
        amount={2}
        symbol="-"
        updateScore={mockUpdateScore}
      />
    );

    const correctAnswer = 3;
    const correctButton = screen.getByText(correctAnswer.toString());
    expect(correctButton).toBeInTheDocument();
  });

  it("one of the buttons should be the correct answer", () => {
    render(
      <AnswerButtons
        currentNumber={5}
        amount={2}
        symbol=""
        updateScore={mockUpdateScore}
      />
    );

    const correctAnswer = 5;
    const correctButton = screen.getByText(correctAnswer.toString());
    expect(correctButton).toBeInTheDocument();
  });
});
