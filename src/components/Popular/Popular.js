import React from 'react';
import VideoDetail from '../video_details/video_details';
import './Popular.css';

export default function Popular() {

  return(
    <div className="popular-main-container">
      <h1>Popular Workouts</h1>

      <div className="popular-flex-container">
        <div>
          <div className="popular-video">
            <h3>Yoga</h3>
            <VideoDetail video={'b1H3xO3x_Js'} />
          </div>
        
          <div className="popular-video">
            <h3>Full Body</h3>
            <VideoDetail video={'E14TAbGiyws'} />
          </div>
        </div>

        <div>
          <div className="popular-video">
            <h3>Strength</h3>
            <VideoDetail video={'-5ztdzyQkSQ'} />
          </div>
          
          <div className="popular-video">
            <h3>Flexibility</h3>
            <VideoDetail video={'qULTwquOuT4'} />
          </div>
        </div>
      </div>
    </div>
  );
}