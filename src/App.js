import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import './style/style.css';

const API_KEY = 'AIzaSyDtWBq5xqn0IK6sCTwq6RwcbECijaVAWlY';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectVideo: null
    }

    this.videoSearch('Foxawy');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos,
        selectVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div className="container">
        <SearchBar onSearchChange = {videoSearch} />
        <div className="row">
          <VideoDetail video={this.state.selectVideo}/>
          <VideoList
          onVideoSelect = {selectVideo => this.setState({selectVideo})}
          videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

export default App;
