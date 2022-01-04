import React from 'react';
import './DogDetailsCard.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function DogDetailsCard({ name, age, breed, image, bio }) {
  return (
    <div className="dog-details-card">
      <h1> Meet {name} ! </h1>
      <img src={`${image}`}></img>
      <p>
        {name} is a(n) {age} year old {breed}{' '}
      </p>
      <p>{bio}</p>
      <Link to="/">back to all the Doggos</Link>
    </div>
  );
}
