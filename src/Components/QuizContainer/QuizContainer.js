import React from 'react';
import './QuizContainer.css';
import NavBar from '../NavBar/NavBar';
import QuizCard from '../QuizCard/QuizCard';
import { Link } from "react-router-dom";

const QuizContainer = (props) => {

  
  return (
    <div className='quiz-container'>
      <NavBar username={props.username}/>
      <QuizCard />
    </div>
  )
}

export default QuizContainer