import React, {Component} from 'react';
import './NavBar.css'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state ={
    }
  }

  getDate = () => {
    let today = new Date()
    let date = (today.getMonth() +1) +'/'+today.getDate()+'/'+today.getFullYear();
    return date
  }
 
render() {
  return (
    <div className='navbar'>
      <h1 className='nav-header'>Word Wars</h1>
      <h2 className='nav-username'>Hi, {this.props.username}</h2>
      <h3 className='current-date'>{this.getDate()}</h3>
      <Link to={`/${this.props.username}/profile`} className='profile-btn'>
      <img 
      className='profile-icon'
      alt='profile-icon'
      src='https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png'
       />
        View Profile
      </Link>
      <Link className='logout-btn' to='/'>
        LOGOUT
      </Link>
    </div>
  )
}
}

NavBar.propTypes = {
  username: PropTypes.string
}


export default NavBar