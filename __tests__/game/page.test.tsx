import { render, screen } from "@testing-library/react";
import { useSearchParams } from "next/navigation";
import Game from "@/app/game/page";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

describe("Game Page", () => {
  it("renders AdditionGame component when type is addition", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: (param: string) => {
        if (param === "type") return "addition";
        if (param === "amount") return "1";
        return null;
      },
    });

    render(<Game />);
    const subheading = screen.getByTestId("addition-heading");
    expect(subheading).toBeInTheDocument();
    expect(subheading).toHaveTextContent("Add 1");

    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.textContent).toContain("+ 1 =");
    expect(paragraph).toHaveClass("question");
  });

  it("renders SubtractionGame component when type is subtraction", () => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: (param: string) => {
        if (param === "type") return "subtraction";
        if (param === "amount") return "1";
        return null;
      },
    });

    render(<Game />);
    const subheading = screen.getByTestId("subtraction-heading");
    expect(subheading).toBeInTheDocument();
    expect(subheading).toHaveTextContent("Subtract 1");

    const paragraph = screen.getByRole("paragraph");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.textContent).toContain("- 1 =");
    expect(paragraph).toHaveClass("question");
  });
});
