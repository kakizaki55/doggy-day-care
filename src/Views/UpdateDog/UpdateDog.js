import React from 'react';
import { useEffect, useState } from 'react';
import { fetchDogById } from '../../services/fetchDogs';
import UpdateDogFrom from '../../components/UpdateDogFrom/UpdateDogForm';
import { deleteDogById, updateDogInDataBase } from '../../services/updateDog';

export default function UpdateDog(props) {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const updateDog = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDogInDataBase(dog);
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteDogById(dog);
  };

  return (
    <>
      <UpdateDogFrom
        dog={dog}
        updateDog={updateDog}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      />
    </>
  );
}
