import { render, screen } from "@testing-library/react";
import About from "@/app/about/page";

describe("About page", () => {
  it("renders heading", () => {
    render(<About />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("About");
  });

  it("renders image", () => {
    render(<About />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
});
