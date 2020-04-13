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
          <select value={placeholder} onChange={e => setPlaceholder(e.target.value)}>
            <option value='' disabled>Age Group</option>
            <option value='kids'>Kids</option>
            <option value='teens'>Teens</option>
            <option value='adults'>Adults</option>
            <option value='seniors'>Seniors</option>
          </select>  
        </div>
        <div className="login-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}