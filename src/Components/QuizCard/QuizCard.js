import React, { Component } from 'react';
import './QuizCard.css';
import { Link } from "react-router-dom";
import { fetchWords } from '../../apiCalls'
import { randomize} from '../../randomize'
import PropTypes from 'prop-types'
import state from '../../state'

const randomWords = require('random-words');



class QuizCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      wordsData: [],
      correct: false,
      currentSelected: ''
    }
  }

  checkAnswer = (e) => {
    const label = e.target.parentNode
    const match = this.state.wordsData.find(word => {
      return word.definitions[0].definition === label.innerText
    })
    if(state.words.includes(label.id)) {
      const index = state.words.indexOf(label.id)
      state.words.splice(index, 1)
    }
    state.words.push(label.id)
    if (state.score < this.props.quizNum && match.word === label.id) {
      state.score++
    }
  }

  getWords = async (test) => {
    const words = randomWords(4)
  
    const wordsData = await fetchWords(words)
    Promise.all(wordsData)
     .then(data => this.setState({
       wordsData: data,
       loaded: true,
    }))
  }

  componentDidMount = async () => {
    await this.getWords()
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.wordsData === this.state.wordsData) {
      this.setState({
        wordsData: [],
        loaded: true
      })
  }
  }

  handleClick = () => {
    this.getWords()
    this.props.updateScore()
  }

  handleLink = () => {
    const url = window.location.pathname
    if(url === '/quiz/10/question') {
      console.log('hi')
      return '/quiz/result'
    } else {
      return `/quiz/${Number(this.props.quizNum) + 1}/question`
    }
  }

  content() {
    if(this.state.wordsData.length === 0) {
      return <p>One Moment</p>
    }
    let nums = randomize()
    const guessedWord = this.state.wordsData[nums[0]].word
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
          <label id={guessedWord} for='definition-1' className='definition'>
            <input id='definition-1' onClick={this.checkAnswer} name='definition' type='radio' className='definition-radio'/> {word1.definitions[0].definition}
          </label>
          <label id={guessedWord} for='definition-2' className='definition'>
            <input id='definition-2' onClick={this.checkAnswer} name='definition' type='radio' className='definition-radio'/> {word2.definitions[0].definition}
          </label>
          <label id={guessedWord} for='definition-3' className='definition'>
            <input id='definition-3' onClick={this.checkAnswer} name='definition' type='radio' className='definition-radio'/> {word3.definitions[0].definition}
          </label>
          <label id={guessedWord} for='definition-4' className='definition'>
            <input id='definition-4' onClick={this.checkAnswer} name='definition' type='radio' className='definition-radio'/> {word4.definitions[0].definition}
          </label>
        </section>
        <div className='guess-btn-container'>
        <Link onClick={this.getWords} to={this.handleLink}   className='guess-btn'>
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

QuizCard.propTypes = {
  username: PropTypes.string,
  quizNum: PropTypes.number
}


export default QuizCard