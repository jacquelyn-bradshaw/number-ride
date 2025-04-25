import { render, screen } from "@testing-library/react";
import Button from "@/components/button/button";

describe("Button Component", () => {
  it("renders button with correct text", () => {
    render(<Button text="Click Me" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });

  it("renders button with correct class", () => {
    render(<Button text="Click Me" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button");
  });
});
