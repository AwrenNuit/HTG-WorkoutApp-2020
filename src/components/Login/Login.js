import React from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';

export default function Login() {

  const history = useHistory();
  
  const login = e => {
    e.preventDefault();
    history.push('/');
  }

  return(
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form onSubmit={login}>
        <div className="login-input">
          <label>Email: </label>
          <input type="text" placeholder="email" />
        </div>
        <div className="login-input">
          <label>Password: </label>
          <input type="password" placeholder="password" />
        </div>
        <div>
          <button className="login-btn" type="submit">Log In</button>
        </div>
      </form>
      <hr />
      <div>
        <button className="login-signup-btn" onClick={() => history.push('/signup')}>Sign Up</button>
      </div>
    </div>
  );
}