import React from 'react';
import './UpdateDogForm.css';

export default function UpdateDogFrom({ dog, updateDog, handleSubmit, handleDelete }) {
  return (
    <>
      <h1>updating dog from</h1>
      <form className="update-form-container">
        <div className="update-form"></div>
        <label>
          name:
          <input
            placeholder="name"
            value={dog.name}
            onChange={(e) => {
              updateDog('name', e.target.value);
            }}
          ></input>
        </label>
        <label>
          age:
          <input
            placeholder="age"
            value={dog.age}
            onChange={(e) => {
              updateDog('age', e.target.value);
            }}
          ></input>
        </label>
        <label>
          Breed:
          <input
            placeholder="breed"
            value={dog.breed}
            onChange={(e) => {
              updateDog('breed', e.target.value);
            }}
          ></input>
        </label>
        <label>
          bio:
          <textarea
            placeholder="bio"
            value={dog.bio}
            onChange={(e) => {
              updateDog('bio', e.target.value);
            }}
          ></textarea>
        </label>
        <label>
          Image URL:
          <input
            placeholder="image url"
            value={dog.image}
            onChange={(e) => {
              updateDog('image', e.target.value);
            }}
          ></input>
        </label>
        <button onClick={handleSubmit}>Update info</button>
        <button onClick={handleDelete}>Delete</button>
      </form>
    </>
  );
}
