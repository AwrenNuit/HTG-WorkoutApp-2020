import React, { useState } from 'react';
import '../Login/Login.css';

export default function Signup() {

  const [placeholder, setPlaceholder] = useState('');
  
  return(
    <div className="login-container">
      <h1 className="login-heading">Signup</h1>
      <form>
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
          <select value={placeholder}>
            <option value='' disabled>Age Group</option>
            <option>Kids</option>
            <option>Teens</option>
            <option>Adults</option>
            <option>Seniors</option>
          </select>  
        </div>
        <div className="login-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}