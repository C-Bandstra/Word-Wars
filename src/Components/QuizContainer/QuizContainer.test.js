import React from 'react'
import ReactDOM from 'react-dom'
import QuizContainer from './QuizContainer'
import { render, fireEvent, waitForElement} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { fetchWords } from "../../apiCalls";

jest.mock('../../apiCalls')

describe('Quiz Container', () => {

  const wordsData = [
    {
      definitions: [{type: "adjective", definition: "having one's feelings"}],
      pronunciation: "kəmˈpōzd",
      word: "composed"
    },
    {
      definitions: [{type: "adjective", definition: "round object"}],
      pronunciation: "ədˈvʌɪs",
      word: "ball"
    },
    {
      definitions: [{type: "adjective", definition: "put random text here"}],
      pronunciation: "kəmˈpōzd",
      word: "advice"
    },
    {
      definitions: [{type: "adjective", definition: "test"}],
      pronunciation: "ədˈvʌɪs",
      word: "test"
    }
  ]

  it('should render a navbar', async () => {
    await fetchWords.mockResolvedValueOnce(wordsData)

    const { getByText } = render(<MemoryRouter><QuizContainer username='CBandstra'/></MemoryRouter>)

    const username = getByText('Hi, CBandstra')

    expect(username).toBeInTheDocument()
  })

  it('should render a quiz card', async () => {
    await fetchWords.mockResolvedValueOnce(wordsData)

    const { getByText } = render(<MemoryRouter><QuizContainer username='CBandstra'/></MemoryRouter>)

    const definition = await waitForElement(() => {
      return getByText('round object')
    })

    expect(definition).toBeInTheDocument()

    
  })
})