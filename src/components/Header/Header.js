import React from 'react';
import './Header.css';
import User from './user.png';
import Logo from './homebody3.png'
import LogoName from './homebody5.png'
import { Link } from 'react-router-dom';

export default function Header() {

  return(
    <div className="header-container">
   	  <div className="grid-template">
        <header className="header">
          <nav className="grid nav-grid nav-box nav-color nav-type">
            <div className="grid-item">
              <h1 className="header-heading"><Link to="/" className="logo"><img src={Logo} alt="Logo" style={{height:'50px',
      				width: '50px'}} className="logo-icon"/></Link></h1>
      				</div>
                  <div className="grid-item">
              <h1 className="header-heading"><Link to="/" className="logo"><img src={LogoName} alt="Logo" style={{height:'50px'}} className="logo-name"/></Link></h1>            </div>
            <div className="grid-item">
              <ul id="nav-links">
                <li><Link to="/account"><div className="account"><div className="user"><img src={User} alt="User" className="user"/></div><div className="my-account"> My Account </div></div></Link></li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}