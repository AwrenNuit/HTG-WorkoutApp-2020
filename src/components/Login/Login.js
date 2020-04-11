import React from 'react';
import './Login.css';

export default function Login() {

  return(
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form>
        <div className="login-input">
          <label>Email: </label>
          <input type="text" placeholder="email" />
        </div>
        <div className="login-input">
          <label>Password: </label>
          <input type="password" placeholder="password" />
        </div>
        <div className="login-btn">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}