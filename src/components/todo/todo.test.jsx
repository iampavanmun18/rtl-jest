import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Todo } from "./todo";

describe("test todo", () => {
  test("should render non-completed Todo", () => {
    const todo = { id: 1, title: "wash dishes", completed: false };
    render(<Todo todo={todo} />);
    // const textElement = screen.getByText("Hello from Todo!");
    const todoElement = screen.getByTestId("todo-1");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("wash dishes");
    expect(todoElement).not.toContainHTML("<strike>");
  });

  test("should render completed Todo", () => {
    const todo = { id: 2, title: "wash car", completed: true };
    render(<Todo todo={todo} />);
    // const textElement = screen.getByText("Hello from Todo!");
    const todoElement = screen.getByTestId("todo-2");
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("wash car");
  });
});

describe("should render snapshot using react-test-renderer create method", () => {
  test("matches snapshot", () => {
    const todo = { id: 1, title: "wash dishes", completed: false };
    const tree = renderer.create(<Todo todo={todo} />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
