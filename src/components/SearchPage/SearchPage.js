import React, { Component } from 'react'; //Always need in JSX files
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import VideoDetail from '../video_details/video_details.jsx';
import VideoList from '../video_list/video_list.jsx';

const API_KEY = 'AIzaSyAUUYCLuVeftvtrC10I9wysEFpnOybvzdU';

// Create the HTML to return for the input
class SearchBar extends Component {
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
        {/* <h5>Youtube Search:</h5><SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
        /> */}
        <p>hi!</p>
      </>
    );
  }
}

export default SearchBar;