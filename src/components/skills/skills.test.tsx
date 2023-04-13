import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

//getAllByRole used to find multiple elements in the dom
describe("Skills", () => {
  const skills = ["html", "JS", "React"];

  test("should render Skills", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole("listitem");
    console.log("listItems", listItems);
    expect(listItems).toHaveLength(skills.length);
  });

  test("render Login Button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  //queryByRole is imp for asserting an element that is not present.Also returns the matching node for a query and return null if no elements matches.
  test("Start Learning button is not renderred", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    // expect(startLearningButton).not.toBeInTheDocument();
    expect(startLearningButton).toBeNull(); //Since queryByRole returns null where button does not found
  });

  test("Start Learning button is displayed eventually", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
