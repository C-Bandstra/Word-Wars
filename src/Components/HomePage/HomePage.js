import React from 'react';
import './HomePage.css';
import NavBar from '../NavBar/NavBar';
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div className='homepage'>
      <NavBar username={props.username}/>
      <Link className='start-btn' to='/quiz'>
        Start!
      </Link>
    </div>
    
  )
}

export default HomePage