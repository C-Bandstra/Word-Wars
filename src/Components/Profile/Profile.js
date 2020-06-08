import React from 'react';
import './Profile.css';
const Profile = (props) => {

  return (
    <section className='profiles'>
      <section className='profile-1'>
        <div className='username-container'>
          <h1 className='profile-username'>{props.username}</h1>
        </div>
        <div className='average-container'>
          <h1 className='avg-header'>Average:</h1>
          <p className='profile-average'>{props.userStats.average}%</p>
        </div>
        <div className='word-count-container'>
        <h1 className='count-header'>Word Count</h1>
        <p className='count'>{props.userStats.wordCount}</p>
        </div>
      </section>
    </section>
  )
}

export default Profile 