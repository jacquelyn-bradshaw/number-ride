import { render, screen } from "@testing-library/react";
import AnswerButton from "@/components/answerButton/answerButton";

const props = {
  answer: 10,
  onSelect: jest.fn(),
  isSelected: false,
  isCorrect: false,
  isIncorrect: false,
  disabled: false,
};

describe("Button Component", () => {
  it("renders button with correct text", () => {
    render(<AnswerButton {...props} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button");
    expect(button).not.toHaveClass("correct");
    expect(button).not.toHaveClass("incorrect");
  });

  it("applies correct class when isSelected and isCorrect are true", () => {
    const newProps = {
      ...props,
      isSelected: true,
      isCorrect: true,
    };
    render(<AnswerButton {...newProps} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button correct");
  });

  it("applies incorrect class when isSelected and isIncorrect are true", () => {
    const newProps = {
      ...props,
      isSelected: true,
      isIncorrect: true,
    };
    render(<AnswerButton {...newProps} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button incorrect");
  });
});
