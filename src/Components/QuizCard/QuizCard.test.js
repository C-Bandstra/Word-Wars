import React from 'react'
import ReactDOM from 'react-dom'
import QuizCard from './QuizCard'
import { render, fireEvent, waitForElement} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { fetchWords } from "../../apiCalls";

jest.mock('../../apiCalls')


describe('Quiz Card', () => {
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

  it('should render definition options', async () => {
    await fetchWords.mockResolvedValueOnce(wordsData)

    const { getByText } = render(<MemoryRouter><QuizCard username='CBandstra'/></MemoryRouter>)

    const definition = await waitForElement(() => {
      return getByText('test')
    })

    expect(definition).toBeInTheDocument()
  })
})