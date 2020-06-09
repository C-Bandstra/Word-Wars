import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from '../Login/Login'
import HomePage from '../HomePage/HomePage'
import QuizContainer from '../QuizContainer/QuizContainer'
import ResultContainer from '../ResultContainer/ResultContainer'
import ProfileContainer from '../ProfileContainer/ProfileContainer'
import { Route, Redirect} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state ={
      username: '', 
      loggedIn: false,
      score: 0
    }
  }

  logout = () => {
    this.setState({
      username: '',
      loggedIn: false,
    })
  }

  componentDidUpdate = () => {
    this.saveToStorage(0, 0)
  } 

  saveToStorage = (totalCorrect, totalWords) => {
    let savedUser = this.getFromStorage()
    let user = {
      username: this.state.username,
      totalCorrect: savedUser.totalCorrect + totalCorrect,
      totalWords: savedUser.totalWords + totalWords,
    }
    user = JSON.stringify(user)
    localStorage.setItem(`${this.state.username}`, user)
  }

  getFromStorage = () => {
    if(localStorage.getItem(`${this.state.username}`)) {
      return JSON.parse(localStorage.getItem(`${this.state.username}`))
    } else {
      return {
        username: this.state.username,
        totalCorrect: 0,
        totalWords: 0,
      }
    }
  }

  logIn = (result, username) => {
    this.setState({
      username: username,
      loggedIn: result
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ?
          <Redirect to="/homepage" /> :
          <Redirect to="/" />}
        <Route
          exact path='/'
          render={() => {
            return <Login logIn={this.logIn} />
          }}
        />
        <Route
          exact path='/homepage'
          render={() => {
            return <HomePage logout={this.logout} username={this.state.username}/>
          }}
        />
         <Route
          exact
          path='/quiz/result'
          render={() => {
            return <ResultContainer logout={this.logout} saveToStorage={this.saveToStorage} username={this.state.username} />
          }}
        />
        <Route
          path='/quiz/:num/question'
          exact
          render={({ match }) => {
            const { num } = match.params
            return <QuizContainer logout={this.logout} updateScore={this.updateScore} quizNum={Number(num)} username={this.state.username} />
          }}
        />
        <Route
          exact
          path='/:username/profile'
          render={() => {
            return <ProfileContainer logout={this.logout} username={this.state.username} />
          }}
        />
      </div>
    );
  }
 
}

export default App;
