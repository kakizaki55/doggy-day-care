import React from 'react';
import { useState } from 'react/cjs/react.development';
import UpdateDogFrom from '../../components/UpdateDogFrom/UpdateDogForm';
import { addDogToDataBase } from '../../services/updateDog';

export default function AddDog() {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);

  const updateDog = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    await addDogToDataBase(dog);
  };

  return (
    <>
      <UpdateDogFrom dog={''} updateDog={updateDog} handelSubmit={handelSubmit} />
    </>
  );
}
