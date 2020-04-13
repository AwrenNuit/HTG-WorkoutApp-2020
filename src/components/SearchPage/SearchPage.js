import React, { Component } from 'react'; //Always need in JSX files
import './SearchPage.css';
import VideoList from '../video_list/video_list';
// import VideoDetail from '../video_details/video_details';
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
      }); //Same as this.setState({ videos : videos })
    });
  }

  render() {
    return (
      <div className="video-main-container">
        {/* <VideoDetail video={this.state.selectedVideo} /> */}
        <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
        />
      </div>
    );
  }
}

export default SearchBar;