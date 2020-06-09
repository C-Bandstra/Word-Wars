import React from 'react';
import './QuizContainer.css';
import NavBar from '../NavBar/NavBar';
import QuizCard from '../QuizCard/QuizCard';
import PropTypes from 'prop-types'

const QuizContainer = (props) => {

  return (
    <div className='quiz-container'>
      <NavBar logout={props.logout} username={props.username}/>
      <QuizCard quizNum={props.quizNum} />
    </div>
  )
}

QuizContainer.propTypes = {
  username: PropTypes.string,
  quizNum: PropTypes.number
}

export default QuizContainer