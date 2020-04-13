import React from 'react';

const VideoDetail = ({ video }) => {
    
    let url = '';
    let snippet = '';

    if (!video) {
        return <div>Loading...</div>;
    }

    else if(video.id === undefined){    
        url = `https://www.youtube.com/embed/${video}`;
    }
    else {
        const videoId = video.id.videoId;

        snippet = video.snippet.title;
    
        url = `https://www.youtube.com/embed/${videoId}`;
    }
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} title="video"></iframe>
            </div>
            <div className="details">
                <div>{snippet}</div>
            </div>
        </div>
    );
};

export default VideoDetail;