import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Header from '../Header/Header';
import Account from '../Account/Account';

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
        <Header />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route exact path='/' component={Home} />
        <Route path='/account' component={Account} />      
      </Router>
      );
  };
}
export default App
