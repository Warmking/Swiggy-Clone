import Contact from "../Contact"
import {screen , render} from '@testing-library/react'
import '@testing-library/jest-dom'

test("contact page is render ",()=>{
    render(<Contact/>)
    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument();
})