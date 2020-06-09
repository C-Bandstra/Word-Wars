import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './HomePage'
import { render, fireEvent} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

jest.mock('../../apiCalls')

describe('Home Page', () => {

  const wordsData = [
    {
      definitions: [{type: "adjective", definition: "having one's feelings"}],
      pronunciation: "kəmˈpōzd",
      word: "advice"
    },
    {
      definitions: [{type: "adjective", definition: "round object"}],
      pronunciation: "ədˈvʌɪs",
      word: "ball"
    },
    {
      definitions: [{type: "adjective", definition: "put random text here"}],
      pronunciation: "kəmˈpōzd",
      word: "composed"
    },
    {
      definitions: [{type: "adjective", definition: "test"}],
      pronunciation: "ədˈvʌɪs",
      word: "test"
    }
  ]


  it('should render without crashing', () => {
    const { getByText } = render(<MemoryRouter><HomePage username='CBandstra' /></MemoryRouter>)

    const topPlayer = getByText('Username: MHuggins')
  
    expect(topPlayer).toBeInTheDocument()
  })

  it('should allow you to click start button', () => {
    const { getByText } = render(<MemoryRouter><HomePage username='CBandstra' /></MemoryRouter>)

    const startBtn = getByText('Start!')

    fireEvent.click(startBtn)

    const directions = getByText('Click start to play!')

    expect(directions).toBeInTheDocument()
  })
})