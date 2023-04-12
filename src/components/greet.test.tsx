// watch usage -- read on this blog
import { render, screen } from "@testing-library/react";
import { Greet } from "./greet/greet";

describe("Greet", () => {
  test.skip("renders correctly", () => {
    //test.skip this test for running while other test cases should run.
    render(<Greet />); // render api will give us the copy of virtual Dom
    const textElement = screen.getByText(/hello/i); // it will ignore the case sensitiveness and will accept both lowercase & uppercase.
    expect(textElement).toBeInTheDocument(); // expect & test are provided by jest
  });

  test.only("renders with correct name", () => {
    // test.only will run only this current test
    render(<Greet name="Pavan" />);
    const textElement = screen.getByText("Hello Pavan");
    expect(textElement).toBeInTheDocument();
  });
});
//Grouping test

// describe() using describe we can group multiple test cases
//describe.skip() & describe.only() will behave same as test.skip() & test.only().

//One test file means one test suite unlike to multiple test suites.

// we can have multiple describe() block inside one test file i.e hierarchywise or one wole describe after another one.
