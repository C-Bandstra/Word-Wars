import React from 'react';
import './HomePage.css';
import NavBar from '../NavBar/NavBar';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const HomePage = (props) => {
  return (
    <div className='homepage'>
      <NavBar username={props.username}/>
      <Link className='start-btn' to='/quiz/10/question'>
        Start!
      </Link>
    </div>
  )
}

HomePage.propTypes = {
  username: PropTypes.string
}

export default HomePage