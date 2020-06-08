import React from 'react'
import ReactDOM from 'react-dom'
import QuizContainer from './QuizContainer'
import { render, fireEvent} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Quiz Container', () => {
  it('should render a navbar', () => {
    const { getByText } = render(<MemoryRouter><QuizContainer username='CBandstra'/></MemoryRouter>)

    const username = getByText('Hi, CBandstra')

    expect(username).toBeInTheDocument()
  })
})