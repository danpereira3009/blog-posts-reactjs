import { render, screen, fireEvent } from "@testing-library/react"
import Button from "."

describe('<Button />', () => {
    it('should have a text "Load more', () => {
        render(<Button text="Load more"/>)

        const button = screen.getByRole('button', {name: /load more/i })
        expect(button).toBeInTheDocument();
    }) 

    it('should have a class btn', () => {
        render(<Button text="Load more"/>)

        const button = screen.getByRole('button', {name: /load more/i })
        expect(button).toBeInTheDocument('btn')
    }) 

    it('should call a function on button click', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn} />)

        const button = screen.getByRole('button', {name: /load more/i});
        fireEvent.click(button)
        expect(fn).toHaveBeenCalledTimes(1);
    }) 

    it('should be disabled when disabled is true', () => {
        
        render(<Button text="Load more" disabled={false} />)

        const button = screen.getByRole('button', {name: /load more/i});

        expect(button).toBeEnabled();
    }) 

  })