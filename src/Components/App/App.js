import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from '../Login/Login'
import HomePage from '../HomePage/HomePage'
import QuizContainer from '../QuizContainer/QuizContainer'
import { Route, Redirect} from "react-router-dom";

var Owlbot = require('owlbot-js');
var randomWords = require('random-words');

const client = Owlbot("2c7169bd30a747ad94dcd30355c31578110dc7aa")

class App extends Component {
  constructor() {
    super();
    this.state ={
      username: 'CBandstra', 
      loggedIn: true
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
          exact path='/quiz'
          render={() => {
            return <QuizContainer username={this.state.username} />
          }}
        />
      </div>
    );
  }
 
}

export default App;
