// watch usage -- read on this blog
import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("renders correctly", () => {
    //test.skip this test for running while other test cases should run.
    render(<Greet />); // render api will give us the copy of virtual Dom
    const textElement = screen.getByText(/hello/i); // it will ignore the case sensitiveness and will accept both lowercase & uppercase.
    expect(textElement).toBeInTheDocument(); // expect & test are provided by jest
  });

  test("renders with correct name", () => {
    // test.only will run only this current test
    render(<Greet name="Pavan" />);
    const textElement = screen.getByText("Hello Pavan");
    expect(textElement).toBeInTheDocument();
  });
});
