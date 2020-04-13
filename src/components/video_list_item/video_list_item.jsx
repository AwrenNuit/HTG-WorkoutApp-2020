import React from 'react';
import './video_list_item.css';

const VideoListItem = ({ video, onVideoSelect }) => {
    
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <iframe src={url} title={video.snippet.title}></iframe>
                </div>
                <br />
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                    <div className="media-desc">{video.snippet.description}</div>
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;
