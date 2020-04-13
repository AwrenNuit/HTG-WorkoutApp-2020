import React, { Component } from 'react'; //Always need in JSX files
import VideoList from '../video_list/video_list';
import VideoDetail from '../video_details/video_details';
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
    console.log('term-------------', term);
    YTSearch({
      key: API_KEY,
      term: term
    }, videos => {
      console.log('term-------------', term);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); //Same as this.setState({ videos : videos })
    });
  }

  render() {
    return (
      <>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
        />
      </>
    );
  }
}

export default SearchBar;