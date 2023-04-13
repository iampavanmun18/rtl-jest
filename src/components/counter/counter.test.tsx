import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("should render Counter correctly", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", {
      name: "increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test('should first', () => {
    render(<Counter/>)
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();
   })
});
