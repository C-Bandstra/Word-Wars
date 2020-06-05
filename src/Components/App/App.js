import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from '../Login/Login'
import HomePage from '../HomePage/HomePage'
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

  // componentDidMount = () => {
  //   for(var i = 0; i < 4; i++) {
  //     const word = randomWords(1)
  //     console.log(word)
  //     client.define(word).then(data => console.log(data))
  //   }
  // }

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
      </div>
    );
  }
 
}

export default App;
