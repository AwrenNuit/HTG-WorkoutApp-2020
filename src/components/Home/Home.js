import React, { useState } from 'react';
import './Home.css';
import Popular from '../Popular/Popular';

export default function Home(props) {
 
  
  const [duration, setDuration] = useState('');
  const [workout, setWorkout] = useState('');
  const [equipment, setEquipment] = useState([]);

  function getThing(){
    props.functionThreeThousand(duration, workout, equipment)
  }

  return(
    <>
      <div className="checkbox-main-container">
        <h1>Let's Get Moving! &#9829;</h1>
        {JSON.stringify(workout)}
        {JSON.stringify(duration)}
        {JSON.stringify(equipment)}
     


        <section>
          <div className="checkbox-select-container">
            <span>I want to do a </span>
            <span>
              <select value={workout} onChange={e => setWorkout(e.target.value)}>
                <option value='' disabled>Workout Type</option>
                <option value="body weight">Body Weight</option>
                <option value="cardio" >Cardio</option>
                <option value="weight training">Weight Training</option>
                <option value="yoga">Yoga</option>
                <option value="HITT">HITT - High Intensity Interval Training</option>
                <option value="strength training">Strength Training</option>
                <option value="running">Running</option>
                <option value="recovery">Recovery</option>
                <option value="bootcamp">Bootcamp</option>
                <option value="zumba">Zumba</option>
                <option value="dance">Dance</option>
                <option value="biking">Biking</option>
                <option value="pilates">Pilates</option>
                <option value="barre">Barre</option>
                <option value="warmup">Warmup</option>
                <option value="cool down">Cool Down</option>
              </select>
            </span>
            <span> for </span>
            <span>
              <select value={duration} onChange={e => setDuration(e.target.value)}>
                <option value='' disabled>Duration</option>
                <option value="5 minutes">5 Minutes</option>
                <option value="10-15 minutes">10-15 Minutes</option>
                <option value="20-30 minutes">20-30 Minutes</option>
                <option value="30-45 minutes">30-45 Minutes</option>
                <option value="1 hour">1 Hour</option>
                <option value="1 hour +">Over 1 Hour</option>
              </select>
            </span>
          </div>
        </section>

        <section>
          <p className="checkbox-p">I have this equipment (check all that apply):</p>

          <div className="checkbox-flex-container">
            <div className="checkbox-div">
              <label onClick={e => e.target.checked ? setEquipment([...equipment, e.target.value]) : setEquipment(equipment.filter(item => item !== e.target.value))}>
                <input className="checkbox-input" type="checkbox" value="kettlebell"/>
                Kettlebell
              </label>
              <br />  
              <br />
              <label onClick={e => e.target.checked ? setEquipment([...equipment, e.target.value]) : setEquipment(equipment.filter(item => item !== e.target.value))}>
                <input className="checkbox-input" type="checkbox" value="yoga block"/>
                Yoga Block
              </label>
            </div>

            <div className="checkbox-div">
              <label onClick={e => e.target.checked ? setEquipment([...equipment, e.target.value]) : setEquipment(equipment.filter(item => item !== e.target.value))}>
                <input className="checkbox-input" type="checkbox" value="dumbbells" />
                Dumbbells 
              </label>
              <br />
              <br />
              <label onClick={e => e.target.checked ? setEquipment([...equipment, e.target.value]) : setEquipment(equipment.filter(item => item !== e.target.value))}>
                <input className="checkbox-input" type="checkbox" value="treadmill" />
                Treadmill
              </label>
            </div>

            <div className="checkbox-div">
              <label onClick={e => e.target.checked ? setEquipment([...equipment, e.target.value]) : setEquipment(equipment.filter(item => item !== e.target.value))}>
                <input className="checkbox-input" type="checkbox" value="resistance bands"/>
                Resistance Bands
              </label>
              <br />      
              <br />
              <label onClick={e => e.target.checked ? setEquipment([...equipment, e.target.value]) : setEquipment(equipment.filter(item => item !== e.target.value))}>
                <input className="checkbox-input" type="checkbox" value="TRX" />
                TRX Strap
              </label>
            </div>

            <div className="checkbox-div">
              <label onClick={e => e.target.checked ? setEquipment([...equipment, e.target.value]) : setEquipment(equipment.filter(item => item !== e.target.value))}>
                <input className="checkbox-input" type="checkbox" value="medicine ball"/>
                Medicine Ball
              </label>
              <br />      
              <br />
              <label onClick={e => e.target.checked ? setEquipment([...equipment, e.target.value]) : setEquipment(equipment.filter(item => item !== e.target.value))}>
                <input className="checkbox-input" type="checkbox" value="physio ball" />
                Physio Ball
              </label>
            </div>

            <div className="checkbox-div">
              <label onClick={e => e.target.checked ? setEquipment([...equipment, e.target.value]) : setEquipment(equipment.filter(item => item !== e.target.value))}>
                <input className="checkbox-input" type="checkbox" value="bosu ball"/>
                Bosu Ball
              </label>
              <br />      
              <br />
              <label onClick={e => e.target.checked ? setEquipment([...equipment, e.target.value]) : setEquipment(equipment.filter(item => item !== e.target.value))}>
                <input className="checkbox-input" type="checkbox" value="ab roller" />
                Ab Roller
              </label>
            </div>

            <div className="checkbox-div">
              <label onClick={e => e.target.checked ? setEquipment([...equipment, e.target.value]) : setEquipment(equipment.filter(item => item !== e.target.value))}>
                <input className="checkbox-input" type="checkbox" value="bicycle"/>
                Bicycle
              </label>
              <br />      
              <br />
              <label onClick={e => e.target.checked ? setEquipment([...equipment, e.target.value]) : setEquipment(equipment.filter(item => item !== e.target.value))}>
                <input className="checkbox-input" type="checkbox" value="jump rope" />
                Jump Rope
              </label>
            </div>
          </div>
        </section>

        <div>
          <button className="checkbox-btn" onClick={getThing}>Search</button>
        </div>
      </div>

      <Popular />
    </>
  );
}