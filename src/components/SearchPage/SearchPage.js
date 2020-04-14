import React, { Component } from 'react'; //Always need in JSX files
import './SearchPage.css';
import VideoList from '../video_list/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAUUYCLuVeftvtrC10I9wysEFpnOybvzdU';

class SearchBar extends Component {
  
  state = {
    videos: [],
    selectedVideo: null
  };
  
  componentDidMount() {
    const query = `${this.props.workout} ${this.props.duration} ${this.props.equipment}`;
    this.videoSearch(query);
  }

  videoSearch = term => {
    YTSearch({
      key: API_KEY,
      term: term
    }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos
      });
    });
  }

  render() {
    return (
      <div className="video-main-container">
        <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
        />
      </div>
    );
  }
}

export default SearchBar;