import React from 'react';

export default function UpdateDogFrom({ dog, updateDog }) {
  return (
    <>
      <h1>updating dog from</h1>
      <form>
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
      </form>
    </>
  );
}
