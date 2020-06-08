import React from 'react';
import './QuizContainer.css';
import NavBar from '../NavBar/NavBar';
import QuizCard from '../QuizCard/QuizCard';

const QuizContainer = (props) => {

  return (
    <div className='quiz-container'>
      <NavBar username={props.username}/>
      <QuizCard quizNum={props.quizNum} />
    </div>
  )
}

export default QuizContainer