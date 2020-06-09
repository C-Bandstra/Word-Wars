import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { fetchWords } from "../../apiCalls";
import state from '../../state'

jest.mock('../../apiCalls')

describe('App', () => {

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


  it('renders without crashing', () => {
    const { getByText } = render(<MemoryRouter><App /></MemoryRouter>)
  
    const loginHeader = getByText('Word Wars')
  
    expect(loginHeader).toBeInTheDocument()
  });
  
  it('should be able to log in to account', async () => {
    await fetchWords.mockResolvedValueOnce(wordsData)
    const { getByPlaceholderText, getByText } = render(<MemoryRouter><App /></MemoryRouter>)
  
    const usernameInput = getByPlaceholderText('Username')
    const passwordInput = getByPlaceholderText('Password')
    const loginBtn = getByText('Login')
  
    fireEvent.change(usernameInput, {target: {value:'CBandstra'}})
    fireEvent.change(passwordInput, {target: {value:'wordwars1'}})
  
    fireEvent.click(loginBtn)
  
    const greeting= getByText('Hi, CBandstra')
  
    expect(greeting).toBeInTheDocument()
  })
  
  it('should be able to load homepage', async () => {
    await fetchWords.mockResolvedValueOnce(wordsData)
    const { getByPlaceholderText, getByText } = render(<MemoryRouter><App /></MemoryRouter>)
  
    const usernameInput = getByPlaceholderText('Username')
    const passwordInput = getByPlaceholderText('Password')
    const loginBtn = getByText('Login')
  
    fireEvent.change(usernameInput, {target: {value:'CBandstra'}})
    fireEvent.change(passwordInput, {target: {value:'wordwars1'}})
  
    fireEvent.click(loginBtn)
  
    const topPlayer = getByText('Username: MHuggins')
  
    expect(topPlayer).toBeInTheDocument()
  })
  
  it('should be able to view the players profile', async () => {
    await fetchWords.mockResolvedValueOnce(wordsData)
    const { getByPlaceholderText, getByText } = render(<MemoryRouter><App /></MemoryRouter>)
  
    const usernameInput = getByPlaceholderText('Username')
    const passwordInput = getByPlaceholderText('Password')
    const loginBtn = getByText('Login')
  
    fireEvent.change(usernameInput, {target: {value:'CBandstra'}})
    fireEvent.change(passwordInput, {target: {value:'wordwars1'}})
  
    fireEvent.click(loginBtn)
  
    const viewProfileBtn = getByText('View Profile')
  
    fireEvent.click(viewProfileBtn)

    const averageHeader = getByText('Average:')

    expect(averageHeader).toBeInTheDocument()
  
  })

  it('shoudl be able to start a word war', async () => {
    await fetchWords.mockResolvedValueOnce(wordsData)
    const { getByPlaceholderText, getByText } = render(<MemoryRouter><App /></MemoryRouter>)
  
    const usernameInput = getByPlaceholderText('Username')
    const passwordInput = getByPlaceholderText('Password')
    const loginBtn = getByText('Login')
  
    fireEvent.change(usernameInput, {target: {value:'CBandstra'}})
    fireEvent.change(passwordInput, {target: {value:'wordwars1'}})
  
    fireEvent.click(loginBtn)

    const startBtn = getByText('Start!')

    fireEvent.click(startBtn)

    const definition = await waitForElement(() => {
      return getByText('put random text here')
    })

    expect(definition).toBeInTheDocument()
  })

  // it('should be able to guess a definition', async () => {
  //   await fetchWords.mockResolvedValueOnce(wordsData)
  //   const { getByPlaceholderText, getByText } = render(<MemoryRouter><App /></MemoryRouter>)
  
  //   const usernameInput = getByPlaceholderText('Username')
  //   const passwordInput = getByPlaceholderText('Password')
  //   const loginBtn = getByText('Login')
  
  //   fireEvent.change(usernameInput, {target: {value:'CBandstra'}})
  //   fireEvent.change(passwordInput, {target: {value:'wordwars1'}})
  
  //   fireEvent.click(loginBtn)

  //   const startBtn = getByText('Start!')

  //   fireEvent.click(startBtn)

  //   const definition = await waitForElement(() => {
  //     return getByText('put random text here')
  //   })
  //   console.log(definition)

  //   fireEvent.click(definition)

  //   expect(state.words.length).toEqual(1)
  // })

})

