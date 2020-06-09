import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Nav Bar', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<MemoryRouter><NavBar /></MemoryRouter>)

    const gameHeader = getByText('Word Wars')

    expect(gameHeader).toBeInTheDocument()
  })

  it('should display correct username greeting', () => {
    const { getByText } = render(<MemoryRouter><NavBar username='CBandstra' /></MemoryRouter>)

    const greeting = getByText('Hi, CBandstra');

    expect(greeting).toBeInTheDocument();
  })

  it('should display profile image', () => {
    const { getByAltText } = render(<MemoryRouter><NavBar username='CBandstra' /></MemoryRouter>)

    const profileImage = getByAltText('profile-icon');

    expect(profileImage).toBeInTheDocument();
  })
})