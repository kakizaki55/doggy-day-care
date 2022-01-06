import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UpdateDogFrom from '../../components/UpdateDogFrom/UpdateDogForm';
import { addDogToDataBase } from '../../services/updateDog';

export default function AddDog() {
  const [dog, setDog] = useState({});
  const [message, setMessage] = useState('');

  const history = useHistory();

  const updateDog = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await addDogToDataBase(dog);
      setMessage('doggo added succesfully!');
      setTimeout(() => {
        history.push(`/dog/${data[0].id}`);
      }, 3000);
    } catch {
      setMessage('looks like somthing went wrong with adding a new dog');
    }
  };

  return (
    <>
      <span>{message}</span>
      <UpdateDogFrom
        isUpdating={false}
        dog={''}
        updateDog={updateDog}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
