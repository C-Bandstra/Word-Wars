import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import { render, fireEvent} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('Login', () => {
// const username = 'CBandstra'

  it('should render Login', () => {
    const mockLogIn = jest.fn()
    
    const {getByText} = render(<MemoryRouter><Login /></MemoryRouter>)

    const loginHeader = getByText('Sign In')

    expect(loginHeader).toBeInTheDocument()
  })

  it('should be able to login', () => {
    const mockLogIn = jest.fn()

    const { getByPlaceholderText, getByText } = render(<MemoryRouter><Login logIn={mockLogIn}/></MemoryRouter>)

    const usernameInput = getByPlaceholderText('Username')

    const passwordInput = getByPlaceholderText('Password')

    const loginBtn = getByText('Login')

    fireEvent.change(usernameInput, {target: {value: 'CBandstra'}})
    fireEvent.change(passwordInput, {target: {value: 'wordwars1'}})

    fireEvent.click(loginBtn)

    expect(mockLogIn).toHaveBeenCalled()
  })

  it('should display alert when credentials are incorrect', () => {
    const mockLogIn = jest.fn()

    window.alert = jest.fn()

    const { getByPlaceholderText, getByText } = render(<MemoryRouter><Login logIn={mockLogIn}/></MemoryRouter>)

    const usernameInput = getByPlaceholderText('Username')

    const passwordInput = getByPlaceholderText('Password')

    const loginBtn = getByText('Login')

    fireEvent.change(usernameInput, {target: {value: 'CBandstra'}})
    fireEvent.change(passwordInput, {target: {value: 'word'}})

    fireEvent.click(loginBtn)

    expect(window.alert).toHaveBeenCalled()
  })

  it('should clear inputs when incorrect credentials are provided', () => {
    const mockLogIn = jest.fn()

    window.alert = jest.fn()

    const { getByPlaceholderText, getByText } = render(<MemoryRouter><Login logIn={mockLogIn}/></MemoryRouter>)

    const usernameInput = getByPlaceholderText('Username')

    const passwordInput = getByPlaceholderText('Password')

    const loginBtn = getByText('Login')

    fireEvent.change(usernameInput, {target: {value: 'CBandstra'}})
    fireEvent.change(passwordInput, {target: {value: 'word'}})

    fireEvent.click(loginBtn)

    expect(usernameInput.value).toEqual('')
  })
})