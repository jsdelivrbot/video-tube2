import React from 'react';

const VideoDetail = ({video}) => {
	if(!video){
		return <div className="loadingContainer">
			LOADING
		</div>;
	}


	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}?showinfo=0`;

	return (
		<div className="video-detail col-lg-9">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div className="videoTitle">{video.snippet.title}</div>
				<div className="videoDes">{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;