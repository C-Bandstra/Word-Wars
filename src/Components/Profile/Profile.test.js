import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './Profile'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Profile', () => {

  const userStats = {
    average: 20,
    wordCount: 40
  }

  it('should render without crashing', () => {
    const { getByText } = render(<MemoryRouter><Profile userStats={userStats} username='CBandstra' /></MemoryRouter>);

    const username = getByText('CBandstra');

    expect(username).toBeInTheDocument();
  })

  it('should render user stats', () => {
    const { getByText } = render(<MemoryRouter><Profile userStats={userStats} username='CBandstra' /></MemoryRouter>);

    const average = getByText('20.00%');

    expect(average).toBeInTheDocument();
  })
})