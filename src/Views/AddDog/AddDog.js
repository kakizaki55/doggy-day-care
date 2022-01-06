import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UpdateDogFrom from '../../components/UpdateDogFrom/UpdateDogForm';
import { addDogToDataBase } from '../../services/updateDog';

export default function AddDog() {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const updateDog = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await addDogToDataBase(dog);
    history.push(`/dog/${data[0].id}`);
  };

  return (
    <>
      <UpdateDogFrom dog={''} updateDog={updateDog} handleSubmit={handleSubmit} />
    </>
  );
}
