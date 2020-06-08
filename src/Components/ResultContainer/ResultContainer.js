import React from 'react';
import './ResultContainer.css';
import NavBar from '../NavBar/NavBar';
import ResultCard from '../ResultCard/ResultCard';
import state from '../../state'
import PropTypes from 'prop-types'

const ResultContainer = (props) => {

  props.saveToStorage(state.score, 10)
  
  return (
    <div className='result-container'>
      <NavBar username={props.username}/>
      <section className="result-card-container">
        <ResultCard quizNum={props.quizNum} />
      </section>
    </div>
  )
}

ResultContainer.propTypes = {
  username: PropTypes.string,
  quizNum: PropTypes.number
}

export default ResultContainer