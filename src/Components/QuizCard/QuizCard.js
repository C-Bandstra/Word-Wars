import React, { Component } from 'react';
import './QuizCard.css';
import { Link } from "react-router-dom";
import { fetchWords } from '../../apiCalls'
import { randomize} from '../../randomize'

const randomWords = require('random-words');

class QuizCard extends Component {
  constructor() {
    super()
    this.state = {
      loaded: false,
      wordsData: [],
    }
  }

  componentDidMount = async () => {
    const words = randomWords(4)
  
    const wordsData = await fetchWords(words)
    Promise.all(wordsData)
     .then(data => this.setState({
       loaded: true,
       wordsData: data,
    }))
  }



  content() {
    let nums = randomize()
    const currentWord = this.state.wordsData[nums[0]].word.charAt(0).toUpperCase() + this.state.wordsData[nums[0]].word.slice(1)
    nums = nums.sort((a, b) => a - b)

    const word1 = this.state.wordsData[nums[0]]
    const word2 = this.state.wordsData[nums[1]]
    const word3 = this.state.wordsData[nums[2]]
    const word4 = this.state.wordsData[nums[3]]

    return(
      <div className='temp-quiz-card' >
        <h3 className='current-word'>{currentWord}</h3>
        <section className='definition-container'>
          <label for='definition-1' className='definition'>
            <input id='definition-1' name='definition' type='radio' className='definition-radio'/> {word1.definitions[0].definition}
          </label>
          <label for='definition-2' className='definition'>
            <input id='definition-1' name='definition' type='radio' className='definition-radio'/> {word2.definitions[0].definition}
          </label>
          <label for='definition-3' className='definition'>
            <input id='definition-3' name='definition' type='radio' className='definition-radio'/> {word3.definitions[0].definition}
          </label>
          <label for='definition-4' className='definition'>
            <input id='definition-4' name='definition' type='radio' className='definition-radio'/> {word4.definitions[0].definition}
          </label>
        </section>
        <div className='guess-btn-container'>
        <Link className='guess-btn'>
          Take Guess!
        </Link>
        </div>
      </div>
    )
  }

  render() {
    return (
      <section className='quiz-card'>
        {this.state.loaded ? this.content() : null}
      </section>
    )
  }
}

export default QuizCard