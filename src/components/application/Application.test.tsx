import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("should render Application correctly", () => {
    render(<Application />);
    const jobLocationElement = screen.getByRole("combobox");
    console.log("jobLocationElement", jobLocationElement);
    expect(jobLocationElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();

    const name2 = screen.getByLabelText("Name");
    expect(name2).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    // console.log("paragraphElement",paragraphElement);
    expect(paragraphElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const getDisplayName = screen.getByDisplayValue('Pavan')
    expect(getDisplayName).toBeInTheDocument();
  });

});