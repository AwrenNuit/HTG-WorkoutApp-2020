import React, { useState } from 'react';
import './Home.css';

export default function Home() {

  const [duration, setDuration] = useState('');
  const [workout, setWorkout] = useState('');

  return(
    <>
      <div className="checkbox-main-container">
        <h1>Let's Get Moving! &#9829;</h1>

        <section>
          <div className="checkbox-select-container">
            <span>I want to do a </span>
            <span>
              <select value={workout}>
                <option value='' disabled>Workout Type</option>
                <option>Cardio Workout</option>
                <option>Strength Workout</option>
                <option>Yoga Workout</option>
              </select>
            </span>
            <span> for </span>
            <span>
              <select value={duration}>
                <option value='' disabled>Duration</option>
                <option>10 Minutes</option>
                <option>20 Minutes</option>
                <option>30 Minutes</option>
                <option>40 Minutes</option>
                <option>50 Minutes</option>
                <option>60 Minutes</option>
              </select>
            </span>
          </div>
        </section>

        <section>
          <p className="checkbox-p">I have this equipment (check all that apply):</p>

          <div className="checkbox-flex-container">
            <div className="checkbox-div">
              <label>
                <input className="checkbox-input" type="checkbox" />
                Kettleballs
              </label>
              <br />
              <br />
              <label>
                <input className="checkbox-input" type="checkbox" />
                Yoga Blocks
              </label>
            </div>

            <div className="checkbox-div">
              <label>
                <input className="checkbox-input" type="checkbox" />
                Free Weights
              </label>
              <br />
              <br />
              <label>
                <input className="checkbox-input" type="checkbox" />
                Other Things
              </label>
            </div>

            <div className="checkbox-div">
              <label>
                <input className="checkbox-input" type="checkbox" />
                Elastic Bands
              </label>
              <br />
              <br />
              <label>
                <input className="checkbox-input" type="checkbox" />
                Jump Rope
              </label>
            </div>

            <div className="checkbox-div">
              <label>
                <input className="checkbox-input" type="checkbox" />
                Yoga Ball
              </label>
              <br />
              <br />
              <label>
                <input className="checkbox-input" type="checkbox" />
                Medicine Ball
              </label>
            </div>
          </div>
        </section>

        <div>
          <button className="checkbox-btn">Search</button>
        </div>
      </div>
    </>
  );
}