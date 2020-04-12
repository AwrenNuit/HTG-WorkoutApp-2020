import React, { Component } from 'react'; //Always need in JSX files
import VideoList from '../video_list/video_list';
import VideoDetail from '../video_details/video_details';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAUUYCLuVeftvtrC10I9wysEFpnOybvzdU';

// Create the HTML to return for the input
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      term: ''
    };

    this.videoSearch('Yoga With Adrianne');
  }

  onInputChange(term) {
    this.setState({ term });
    this.videoSearch(term);
  }

  videoSearch = (term) => {
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
        <div className="search-bar" style={{margin: "20px", textAlign: "center", display:"none"}}>
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
            style = {{ width: "75%" }}
          />
        </div>
        
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