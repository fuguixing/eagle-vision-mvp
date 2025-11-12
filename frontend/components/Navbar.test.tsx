import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

jest.mock('next/navigation', () => ({ usePathname: () => '/' }))

describe('Navbar', () => {
  it('renders app brand and links', () => {
    render(<Navbar />)
    expect(screen.getByText(/Eagle Vision/i)).toBeInTheDocument()
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()
    expect(screen.getByText(/New Post/i)).toBeInTheDocument()
  })
})
