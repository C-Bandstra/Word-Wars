import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
 
}

export default App;
