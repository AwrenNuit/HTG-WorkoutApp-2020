import React from 'react';
import './Header.css';
import { ReactComponent as Bars } from './bars-solid.svg';
import { ReactComponent as User } from './user-solid.svg';
import { ReactComponent as Chevron } from './chevron-down-solid.svg';
import Logo from './homebody3.png'
import LogoName from './homebody5.png'

export default function Header() {

  return(
    <div className="header-container">
   	  <div className="grid-template">
        <header className="header">
          <nav className="grid nav-grid nav-box nav-color nav-type">
            <div className="grid-item">
              <h1 className="header-heading"><a href="index.html" className="logo"><img src={Logo} alt="Logo" style={{height:'50px',
      				width: '50px'}} className="logo-icon"/></a></h1>
      				</div>
                  <div className="grid-item">
              <h1 className="header-heading"><a href="index.html" className="logo"><img src={LogoName} alt="Logo" style={{height:'50px'}} className="logo-name"/></a></h1>
            </div>
            <div className="grid-item">
              <ul id="nav-links">
                <li><a href="#"><div className="account"><div className="user">< User /></div><div className="my-account"> My Account </div><div style={{height:'10px',
      				width: '10px'}} className="chevron">< Chevron /></div></div></a></li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}