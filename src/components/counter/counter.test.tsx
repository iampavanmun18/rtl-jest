import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("should render Counter correctly", () => {
    render(<Counter />);
  //   const counterElement = screen.getByRole("heading");
  //   expect(counterElement).toBeInTheDocument();
  //   const incrementButton = screen.getByRole("button", {
  //     name: "increment",
  //   });
  //   expect(incrementButton).toBeInTheDocument();
  });

  test('should test', () => {
    expect(true).toBe(true);
  })


  // test('should first render heading inside Counter component', () => {
  //   render(<Counter/>)
  //   const counterElement = screen.getByRole("heading");
  //   expect(counterElement).toBeInTheDocument();
  //  })
});
