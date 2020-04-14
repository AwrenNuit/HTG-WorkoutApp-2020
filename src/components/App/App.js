import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Account from '../Account/Account';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  render(){
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/account' component={Account} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Router>
      );
  };
}

export default App;