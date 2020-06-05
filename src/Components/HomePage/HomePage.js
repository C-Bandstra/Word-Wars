import React from 'react';
import './HomePage.css';
import NavBar from '../NavBar/NavBar';

const HomePage = (props) => {
  return (
    <div className='homepage'>
      <NavBar username={props.username}/>
      <p>HomePage</p>
    </div>
    
  )
}

export default HomePage