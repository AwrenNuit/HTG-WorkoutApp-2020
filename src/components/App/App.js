import _ from 'lodash';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import YTSearch from 'youtube-api-search';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Account from '../Account/Account';

const API_KEY = 'AIzaSyAUUYCLuVeftvtrC10I9wysEFpnOybvzdU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      duration: '',
      workout: '',
      equipment: []
    };

    this.videoSearch('Yoga With Adrianne');
  }

  sendSearchUp = (d, w, e) => {
    this.setState({
      duration: d,
      workout: w,
      equipment: e
    });
  }

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term: term
    }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); //Same as this.setState({ videos : videos })
    });
  }


  render(){
    return (
      <Router>
        <Header />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route exact path='/' component={() => <Home sendSearchUp={this.sendSearchUp} />} />
        <Route path='/account' component={Account} />      
      </Router>
      );
  };
}
export default App
