import React from 'react';
import './Account.css';
import Header from '../Header/Header';
import Tracker from './tracker.png';
import Person from './fitness-person.png';
import User from './user.png';

export default function Account() {

  return(
    <>
      <Header />
      <div class="profile-grid-template">
        <section id="profile-page" class="profile-grid">
          <div class="profile-grid-item profile-sidebar">
            <div class="profile-person">
              <ul>
                <li class="circular-image"><img src={Person} alt="User" /></li>
                <li>User's Name</li>
               </ul>
            </div>
            <div class="profile-links">
              <ul>
                <li><a href="#"><div className="user"><img src={User} alt="User" className="user"/></div><div className="profile-side"> Profile</div></a></li>
                <li><a href="#"><span className="check-side">&#9745;</span> Tracker</a></li>
                <li><a href="#">&#9829; Favorites</a></li>
              </ul>
            </div>
            <div class="profile-logout">
              <ul>
                <li><a href="#">Logout</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
          </div>
          <div class="profile-grid-item profile-content">
          	<h2 className="content-title"><span className="check-title">&#9745;</span> Fitness Tracker</h2>
            <img src={Tracker} alt="User" />
          </div>
        </section>
      </div>
    </>
  );
}