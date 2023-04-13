import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe('Skills', () => {
    const skills = ['html', 'JS', 'React']

    test('should render Skills', () => {
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument();
     })

     test('render a list of skills', () => {
        render(<Skills skills={skills}/>)
        const listItems = screen.getAllByRole('listitem');
        console.log("listItems",listItems);
        expect(listItems).toHaveLength(3)
      })
})
