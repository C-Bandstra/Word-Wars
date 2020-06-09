import React from 'react'
import ReactDOM from 'react-dom'
import ResultContainer from './ResultContainer'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import state from '../../state'

describe('Result Container', () => {
  it('should render without crashing', () => {
    const mockSaveStorage = jest.fn()
    const { getByText } = render(<MemoryRouter><ResultContainer saveToStorage={mockSaveStorage} username="CBandstra" /></MemoryRouter>)

    const navbar = getByText('Word Wars')

    expect(navbar).toBeInTheDocument()
  })

  it('should immediately save results to storage', () => {
    const mockSaveStorage = jest.fn()
    render(<MemoryRouter><ResultContainer saveToStorage={mockSaveStorage} username="CBandstra" /></MemoryRouter>)

    expect(mockSaveStorage).toHaveBeenCalled()
    expect(mockSaveStorage).toHaveBeenCalledWith(0, 10)
  })
})