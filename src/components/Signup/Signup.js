import React, { useState } from 'react';
import '../Login/Login.css';
import { useHistory } from 'react-router-dom';
import Logo from '../Header/homebody5.png';

export default function Signup() {

  const history = useHistory();
  const [placeholder, setPlaceholder] = useState('');

  const signup = e => {
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
      />
      <h1 className="login-heading">Signup</h1>
      <form onSubmit={signup}>
      <div className="login-input">
          <label>Name: </label>
          <input type="text" placeholder="email" />
        </div>
        <div className="login-input">
          <label>Email: </label>
          <input type="text" placeholder="email" />
        </div>
        <div className="login-input">
          <label>Password: </label>
          <input type="password" placeholder="password" />
        </div>
        <div className="login-input">
          <select value={placeholder} onChange={e => setPlaceholder(e.target.value)}>
            <option value='' disabled>Age Group</option>
            <option value='kids'>Kids</option>
            <option value='teens'>Teens</option>
            <option value='adults'>Adults</option>
            <option value='seniors'>Seniors</option>
          </select>  
        </div>
        <div>
          <button className="login-btn" type="submit">All Done!</button>
        </div>
      </form>
      <hr />
      <div>
        <button className="login-signup-btn" onClick={() => history.push('/login')}>Back</button>
      </div>
    </div>
  );
}