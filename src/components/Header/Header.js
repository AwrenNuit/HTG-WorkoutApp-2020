import React from 'react';
import './Header.css';
import { ReactComponent as Bars } from './bars-solid.svg';
import { ReactComponent as User } from './user-solid.svg';
import { ReactComponent as Chevron } from './chevron-down-solid.svg';

export default function Header() {

  return(
    <div className="header-container">
   	  <div className="grid-template">
        <header className="header">
          <nav className="grid nav-grid nav-box nav-color nav-type">
            <div className="grid-item">
              <h1 className="header-heading"><a href="index.html" className="logo">Logo</a></h1>
            </div>
            <div className="grid-item">
              <label for="nav-toggle" className="nav-menu">
                <span className="hidden-menu">Menu</span>
                <span className="fa fa-bars"><div style={{height:'10px',
      				width: '10px'}} className="bars">< Bars /></div></span>
              </label>
              <input type="checkbox" id="nav-toggle"/>
              <ul id="nav-links">
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#"><div className="account"><div style={{height:'10px',
      				width: '10px'}} className="user">< User /></div> My Account <div style={{height:'10px',
      				width: '10px'}} className="chevron">< Chevron /></div></div></a></li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}