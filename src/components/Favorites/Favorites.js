import React from 'react';
import './Favorites.css';
import Favs from './favs.png';

export default function Favorites() {

  return(
    <div className="fav-main-container">
      <div className="fav-header">
        <h1 className="fav-heading">&#9829; My Favorites</h1>
      </div>
      <div className="fav-img-container">
        <img src={Favs} alt="my favorites" />
      </div>
    </div>
  );
}