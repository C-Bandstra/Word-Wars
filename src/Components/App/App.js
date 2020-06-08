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
      username: 'CBandstra', 
      loggedIn: true,
      score: 0
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
            return <HomePage username={this.state.username}/>
          }}
        />
         <Route
          exact
          path='/quiz/result'
          render={() => {
            return <ResultContainer username={this.state.username} />
          }}
        />
        <Route
          path='/quiz/:num/question'
          exact
          render={({ match }) => {
            const { num } = match.params
            return <QuizContainer updateScore={this.updateScore} quizNum={num} username={this.state.username} />
          }}
        />
        <Route
          exact
          path='/:username/profile'
          render={() => {
            return <ProfileContainer username={this.state.username} />
          }}
        />
      </div>
    );
  }
 
}

export default App;
