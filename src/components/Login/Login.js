import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';
import Logo from '../Header/homebody5.png';

export default function Login() {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const login = e => {
    e.preventDefault();
    history.push('/');
  }

  return(
    <div className="login-container">
      <img 
        className="login-logo" 
        src={Logo} 
        alt="homebody logo" 
        style={{width:"200px"}}
        onClick={() => {setEmail('something@gmail.com'); setPassword('something cool')}}
      />
      <h1 className="login-heading">Login</h1>
      <form onSubmit={login}>
        <div className="login-input">
          <label>Email: </label>
          <input type="text" value={email} placeholder="email" readOnly />
        </div>
        <div className="login-input">
          <label>Password: </label>
          <input type="password" value={password} placeholder="password" readOnly />
        </div>
        <div>
          <button className="login-btn" type="submit">Log In</button>
        </div>
      </form>
      <hr />
      <div>
        <br />
        <br />
        <p>
          Don't have a homebody account? 
          <br />
          Sign Up today. It's free!</p>
        <button className="login-signup-btn" onClick={() => history.push('/signup')}>Sign Up</button>
      </div>
    </div>
  );
}