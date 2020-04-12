import _ from 'lodash';
import React, { Component } from 'react';
import './App.css';

import YTSearch from 'youtube-api-search';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchPage/SearchPage'
import { render } from '@testing-library/react';
import VideoDetail from '../video_details/video_details.jsx'
import VideoList from '../video_list/video_list.jsx'
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const API_KEY = 'AIzaSyAUUYCLuVeftvtrC10I9wysEFpnOybvzdU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Yoga With Adrianne');
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
  const videoSearch = _.debounce(term => {
    this.videoSearch(term);
  }, 300);
  
  return (
    <>
      <Header />
      <Login />
      <Signup />
      <Home />
      <br />
      <br />
      <br />

      <h5>Youtube Search:</h5><SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      
      <Footer />

    </>
  )};

  }
export default App
