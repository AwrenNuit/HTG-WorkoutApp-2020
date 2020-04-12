import React from 'react';
import './Header.css';
import { ReactComponent as Bars } from './bars-solid.svg';
import { ReactComponent as User } from './user-solid.svg';
import { ReactComponent as Chevron } from './chevron-down-solid.svg';

export default function Header() {

  return(
    <>
   	  <div class="grid-template">
        <header class="header">
          <nav class="grid nav-grid nav-box nav-color nav-type">
            <div class="grid-item">
              <h1><a href="index.html" class="logo">Logo</a></h1>
            </div>
            <div class="grid-item">
              <label for="nav-toggle" class="nav-menu">
                <span class="hidden-menu">Menu</span>
                <span class="fa fa-bars"><div style={{height:'10px',
      				width: '10px'}} className="bars">< Bars /></div></span>
              </label>
              <input type="checkbox" id="nav-toggle"/>
              <ul id="nav-links">
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#"><div class="account"><div style={{height:'10px',
      				width: '10px'}} className="user">< User /></div> My Account <div style={{height:'10px',
      				width: '10px'}} className="chevron">< Chevron /></div></div></a></li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}