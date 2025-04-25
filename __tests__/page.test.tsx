import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Homepage", () => {
  it("renders two subheadings", () => {
    render(<Home />);
    const subheadings = screen.getAllByRole("heading", { level: 2 });
    expect(subheadings).toHaveLength(2);
    expect(subheadings[0]).toHaveTextContent("Addition");
    expect(subheadings[1]).toHaveTextContent("Subtraction");
  });

  it("renders four game links", () => {
    render(<Home />);
    const gameLink = screen.getAllByRole("button");
    expect(gameLink).toHaveLength(4);
    expect(gameLink[0]).toHaveTextContent("+ 1");
    expect(gameLink[1]).toHaveTextContent("+ 2");
    expect(gameLink[2]).toHaveTextContent("- 1");
    expect(gameLink[3]).toHaveTextContent("- 2");
  });
});
