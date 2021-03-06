import React from 'react';
import './HomeDogCard.css';

export default function HomeDogCard({ name, age, breed, image }) {
  return (
    <div className="dog-card">
      <h1> Meet {name} ! </h1>
      <img src={`${image}`}></img>
      <p>
        {name} is a(n) {age} year old {breed}{' '}
      </p>
    </div>
  );
}
