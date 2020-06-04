import React, { Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from '../Login/Login'
var Owlbot = require('owlbot-js');
var randomWords = require('random-words');

const client = Owlbot("2c7169bd30a747ad94dcd30355c31578110dc7aa")

class App extends Component {
  constructor() {
    super();
    this.state ={

    }
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
        <Login />
      </div>
    );
  }
 
}

export default App;
