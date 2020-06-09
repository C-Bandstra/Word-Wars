import React from 'react'
import ReactDOM from 'react-dom'
import ResultCard from './ResultCard'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'


describe('Result Card', () => {

  const quizNum = 3

  it('should render without crashing', () => {
    const { getByText } = render(<MemoryRouter><ResultCard quizNum={quizNum} /></MemoryRouter>)

    const header = getByText('Game Words')

    expect(header).toBeInTheDocument()
  })
})