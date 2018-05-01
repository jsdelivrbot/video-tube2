import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBZV5VQXy8upqACOT4tM2-l_dIzBZdaRLI';

class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('espn news');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});	
	}

	render(){
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);


		return (
			<div>
				<div className="titleContainer">
					<h1 className="title">VIDEO<span className="red">Tube</span></h1>
					<p className="subTitle">...okay it's basically YouTube. It's the YouTube API..... it's YouTube.</p>
				</div>
				<SearchBar onSearchTermChange={videoSearch} />
				<div className="videoContainer">
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList 
					className="videoList"
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));