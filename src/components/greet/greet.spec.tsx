// watch usage -- read on this blog
import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  it("renders correctly", () => {
    // we can replace test with it
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Greet gracefully", () => {
  it("renders with correct name", () => {
    render(<Greet name="Pavan" />);
    const textElement = screen.getByText("Hello Pavan");
    expect(textElement).toBeInTheDocument();
  });
});
