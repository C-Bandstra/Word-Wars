import React, { Component} from 'react';
import './ProfileContainer.css';
import NavBar from '../NavBar/NavBar';
import Profile from '../Profile/Profile';
import PropTypes from 'prop-types'

 class ProfileContainer extends Component {
   constructor() {
     super()
     this.state = {
       userStats: {
        average: 0,
        wordCount: 0,
       }
     }
   }

   componentDidMount = () => {
    const user = JSON.parse(localStorage.getItem(this.props.username))
    const decimal = user.totalWords / user.totalCorrect
    const average = 100 / decimal
    this.setState({
      userStats: {
        average: average || 0 ,
        wordCount: user.totalCorrect,
      }
    })
   }

  render() {
    return (
      <div className='profile-container'>
        <NavBar logout={this.props.logout} username={this.props.username}/>
        <section className='profile-page'>
        <Profile userStats={this.state.userStats} username={this.props.username} />
        </section>
      </div>
    )
  }
}

ProfileContainer.propTypes = {
  username: PropTypes.string,
}

export default ProfileContainer