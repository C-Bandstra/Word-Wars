import React, { Component } from 'react';
import './ResultCard.css';
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
import state from '../../state'
// import { fetchWords } from '../../apiCalls'
// import { randomize} from '../../randomize'

const randomWords = require('random-words');

class ResultCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  resetState = () => {
    state.score = 0;
    state.words = [];
  }

  displayGameWords = () => {
    return state.words.map(word => {
      return <p className='game-word'>{word}</p>
    })
  }

  render() {
    return (
      <section className='result-card'>
        <h2 className='percentage-header'>You scored {state.score} out of 10 correctly!</h2>
        <p>Game Words</p>
        <div className='game-words-container'>
          {this.displayGameWords()}
        </div>
        <Link className='play-again-btn' onClick={this.resetState} to='/quiz/10/question'>
        Play Again!
      </Link>
      </section>
    )
  }
}

export default ResultCard;