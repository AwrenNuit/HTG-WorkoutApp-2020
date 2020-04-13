import React from 'react';
import './Account.css';
import Header from '../Header/Header';
import Tracker from './tracker.png';
import Person from './fitness-person.png';

export default function Account() {

  return(
    <>
      <Header />
      <div class="profile-grid-template">
        <section id="profile-page" class="profile-grid">
          <div class="profile-grid-item profile-sidebar">
            <div class="profile-person">
              <ul>
                <li class="circular-image"><img src={Person} alt="User" className="user" /></li>
                <li>User's Name</li>
               </ul>
            </div>
            <div class="profile-links">
              <ul>
                <li>Profile</li>
                <li>Tracker</li>
                <li>Favorites</li>
              </ul>
            </div>
            <div class="profile-logout">
              <ul>
                <li>Logout</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
          <div class="profile-grid-item profile-content">
            <img src={Tracker} alt="User" className="user"/>
          </div>
        </section>
      </div>
    </>
  );
}