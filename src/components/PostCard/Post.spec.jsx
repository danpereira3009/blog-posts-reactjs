import { render, screen } from "@testing-library/react"
import { PostCard } from '.'
import { postCardPropsMock } from './mock'

const props = postCardPropsMock

describe('<PostCard /', () => {
    it('should render postcard correctly', () => {
        render(<PostCard {...props} />)

        expect(screen.getByRole('img', {name: 'Titulo 1'})).toBeInTheDocument

       
    })
})