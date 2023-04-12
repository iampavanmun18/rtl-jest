import { render, screen } from "@testing-library/react"
import { Greet } from "./greet/greet"

test('Greet renders correctly', () => {
    render(<Greet/>)  // render api will give us the copy of virtual Dom
    const textElement = screen.getByText(/greet/i) // it will ignore the case sensitiveness and will accept both lowercase & uppercase.
    expect(textElement).toBeInTheDocument() // expect & test are provided by jest
 });
