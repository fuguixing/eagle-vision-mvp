import { render, screen, fireEvent } from '@testing-library/react'
import LoginPage from './page'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('LoginPage', () => {
  it('renders and submits', async () => {
    mockedAxios.post.mockResolvedValue({ status: 200 })
    render(<LoginPage />)
    const btn = screen.getByRole('button', { name: /login/i })
    fireEvent.click(btn)
    expect(btn).toBeDisabled()
  })
})
