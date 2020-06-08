import React, { useState } from 'react';
import './ResultContainer.css';
import ReactDOM from 'react-dom'
import NavBar from '../NavBar/NavBar';
import ResultCard from '../ResultCard/ResultCard';
import { Link } from "react-router-dom";

const ResultContainer = (props) => {
  
  return (
    <div className='result-container'>
      <NavBar username={props.username}/>
      <section className="result-card-container">
        <ResultCard quizNum={props.quizNum} />
      </section>
    </div>
  )
}

export default ResultContainer