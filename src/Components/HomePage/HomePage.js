import React from 'react';
import './HomePage.css';
import NavBar from '../NavBar/NavBar';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const HomePage = (props) => {
  return (
    <div className='homepage'>
      <NavBar username={props.username}/>
      <section className='bottom-nav'>
      <section className='info-container-1'>
      <div className='info-1'>
        <p className='text'>Welcome to Word Wars!</p>
        <p className='text'>This is game to see who really knows their stuff. Fight against your classmates to reach the top!</p>
        <p className='text'>Compare profiles to find out who is the King</p>
      </div>
      <div className='info-2'>
      <p className='text'>Click start to play!</p>
      <p className='text'>You will be given a target word and 4 possible definitions</p>
      <p className='text'>After you have answered 10, you will see your result</p>
      <p className='text special'>Have Fun!</p>
        <Link className='start-btn' to='/quiz/10/question'>
          Start!
        </Link>
      </div>
      </section>
      <section className='info-container-2'>
        <section className='top-container'>
        <h1 className='top-header'>Top Players</h1>
        <section className='profile-card'>
          <p className='stat'>Username: KFunhouse</p>
          <p className='stat'>Average Score: 96%</p>
          <p className='stat'>Words Correct: 785</p>
        </section>
        <section className='profile-card'>
          <p className='stat'>Username: JCorbin</p>
          <p className='stat'>Average Score: 93%</p>
          <p className='stat'>Words Correct: 475</p>
        </section>
        <section className='profile-card'>
          <p className='stat'>Username: MHuggins</p>
          <p className='stat'>Average Score: 89%</p>
          <p className='stat'>Words Correct: 207</p>
        </section>
        </section>
      </section>
      </section>
    </div>
  )
}

HomePage.propTypes = {
  username: PropTypes.string
}

export default HomePage