import React from 'react';
import { useEffect, useState } from 'react';
import { fetchDogById } from '../../services/fetchDogs';
import UpdateDogFrom from '../../components/UpdateDogFrom/UpdateDogForm';
import { deleteDogById, updateDogInDataBase } from '../../services/updateDog';
import { useHistory } from 'react-router-dom';

export default function UpdateDog(props) {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const [message, setMessage] = useState();

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
    try {
      const data = await updateDogInDataBase(dog);
      history.push(`/dog/${data[0].id}`);
    } catch {
      setMessage('looks like somthing went wrong!');
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteDogById(dog);
      history.push(`/`);
    } catch {
      setDog('oops, looks like we couldnt checkout that dog');
    }
  };

  return (
    <>
      <span>{message}</span>
      <UpdateDogFrom
        dog={dog}
        updateDog={updateDog}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      />
    </>
  );
}
